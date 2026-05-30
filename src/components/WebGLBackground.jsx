import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext.jsx";

/* ─── Star field with mouse parallax ─── */
function StarField({ isDark }) {
  const ref   = useRef();
  const group = useRef();

  const count  = isDark ? 3600 : 1800;
  const spread = isDark ? 36 : 24;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3]     = THREE.MathUtils.randFloatSpread(spread);
      arr[i3 + 1] = THREE.MathUtils.randFloatSpread(spread * 0.65);
      arr[i3 + 2] = THREE.MathUtils.randFloatSpread(spread) - 10;
    }
    return arr;
  }, [count, spread]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y += delta * (isDark ? 0.009 : 0.005);
      ref.current.rotation.x = Math.sin(t * 0.07) * 0.035;
      ref.current.material.opacity = isDark
        ? 0.55 + Math.sin(t * 0.6) * 0.07
        : 0.18 + Math.sin(t * 0.4) * 0.03;
    }
    if (group.current) {
      const tx = state.pointer.y * (isDark ? 0.14 : 0.08);
      const ty = state.pointer.x * (isDark ? 0.16 : 0.10);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, tx, 0.03);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, ty, 0.03);
    }
  });

  return (
    <group ref={group}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={isDark ? "#dbeafe" : "#93c5fd"}
          size={isDark ? 0.032 : 0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={isDark ? 0.58 : 0.18}
        />
      </Points>
    </group>
  );
}

/* ─── Galaxy core — central sphere + two torus rings ─── */
function GalaxyCore({ isDark }) {
  const core  = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y += delta * 0.07;
      core.current.position.y = Math.sin(t * 0.3) * 0.18;
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.055;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.038;
    if (ring3.current) {
      ring3.current.rotation.x += delta * 0.025;
      ring3.current.rotation.z -= delta * 0.02;
    }
  });

  return (
    <group position={[0, 0, -6]}>
      {/* Core glow sphere */}
      <mesh ref={core}>
        <sphereGeometry args={[isDark ? 1.6 : 1.3, 40, 40]} />
        <meshBasicMaterial
          color={isDark ? "#38bdf8" : "#2563eb"}
          transparent
          opacity={isDark ? 0.22 : 0.1}
        />
      </mesh>

      {/* Ring 1 — cyan */}
      <mesh ref={ring1} rotation={[Math.PI / 2, 0.15, 0]}>
        <torusGeometry args={[isDark ? 4.0 : 3.4, 0.07, 20, 280]} />
        <meshBasicMaterial
          color={isDark ? "#22d3ee" : "#3b82f6"}
          transparent
          opacity={isDark ? 0.30 : 0.16}
        />
      </mesh>

      {/* Ring 2 — violet */}
      <mesh ref={ring2} rotation={[Math.PI / 2.4, -0.25, 0.4]}>
        <torusGeometry args={[isDark ? 6.0 : 5.0, 0.055, 20, 280]} />
        <meshBasicMaterial
          color={isDark ? "#a78bfa" : "#6366f1"}
          transparent
          opacity={isDark ? 0.22 : 0.12}
        />
      </mesh>

      {/* Ring 3 — pink accent */}
      <mesh ref={ring3} rotation={[Math.PI / 3, 0.5, -0.3]}>
        <torusGeometry args={[isDark ? 7.8 : 6.5, 0.04, 16, 260]} />
        <meshBasicMaterial
          color={isDark ? "#f472b6" : "#ec4899"}
          transparent
          opacity={isDark ? 0.14 : 0.07}
        />
      </mesh>
    </group>
  );
}

/* ─── Slow nebula clouds ─── */
function NebulaClouds({ isDark }) {
  const clouds = [
    { ref: useRef(), pos: [2.8,  1.2, -7], color: isDark ? "#7c3aed" : "#818cf8", r: 3.2 },
    { ref: useRef(), pos: [-3.6, -1.6, -8], color: isDark ? "#0891b2" : "#38bdf8", r: 3.8 },
    { ref: useRef(), pos: [0.3,  2.2, -9], color: isDark ? "#3b82f6" : "#60a5fa", r: 2.8 },
    { ref: useRef(), pos: [4.0, -2.0, -10], color: isDark ? "#a855f7" : "#c084fc", r: 3.0 },
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const speeds = [0.16, 0.13, 0.1, 0.11];
    clouds.forEach(({ ref }, i) => {
      if (ref.current) {
        ref.current.position.x = Math.sin(t * speeds[i]) * (2.5 + i * 0.4);
        ref.current.position.y = Math.cos(t * (speeds[i] + 0.03)) * (1.0 + i * 0.15);
      }
    });
  });

  return (
    <>
      {clouds.map(({ ref, pos, color, r }, i) => (
        <mesh key={i} ref={ref} position={pos}>
          <sphereGeometry args={[r, 26, 26]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={isDark ? 0.11 - i * 0.01 : 0.055 - i * 0.005}
          />
        </mesh>
      ))}
    </>
  );
}

/* ─── Light mode backdrop plane ─── */
function LightBackdrop({ isDark }) {
  if (isDark) return null;
  return (
    <mesh position={[0, 0, -14]}>
      <planeGeometry args={[100, 80]} />
      <meshBasicMaterial color="#f0f4ff" transparent opacity={0.92} />
    </mesh>
  );
}

export default function WebGLBackground() {
  const { theme } = useTheme();
  const isDark    = theme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ transition: "opacity 0.8s ease" }}
    >
      <Canvas
        camera={{ position: [0, 0.15, 11.5], fov: 50 }}
        dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
      >
        <ambientLight intensity={isDark ? 0.35 : 0.55} />
        <LightBackdrop isDark={isDark} />
        <NebulaClouds isDark={isDark} />
        <StarField isDark={isDark} />
        <GalaxyCore isDark={isDark} />
      </Canvas>
    </div>
  );
}