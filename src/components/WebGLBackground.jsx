import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext.jsx";

function StarField({ isDark }) {
  const ref = useRef();
  const group = useRef();

  const count = isDark ? 3200 : 2200;
  const spread = isDark ? 34 : 26;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = THREE.MathUtils.randFloatSpread(spread);
      arr[i3 + 1] = THREE.MathUtils.randFloatSpread(spread * 0.7);
      arr[i3 + 2] = THREE.MathUtils.randFloatSpread(spread) - 8;
    }
    return arr;
  }, [count, spread]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (ref.current) {
      ref.current.rotation.y += delta * (isDark ? 0.01 : 0.006);
      ref.current.rotation.x = Math.sin(t * 0.08) * 0.04;
      ref.current.material.opacity = isDark
        ? 0.58 + Math.sin(t * 0.7) * 0.08
        : 0.24 + Math.sin(t * 0.5) * 0.03;
    }

    if (group.current) {
      const tx = state.pointer.y * (isDark ? 0.12 : 0.08);
      const ty = state.pointer.x * (isDark ? 0.14 : 0.09);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, tx, 0.035);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, ty, 0.035);
    }
  });

  return (
    <group ref={group}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={isDark ? "#dbeafe" : "#60a5fa"}
          size={isDark ? 0.03 : 0.024}
          sizeAttenuation
          depthWrite={false}
          opacity={isDark ? 0.6 : 0.24}
        />
      </Points>
    </group>
  );
}

function GalaxyCore({ isDark }) {
  const core = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (core.current) {
      core.current.rotation.y += delta * 0.08;
      core.current.position.y = Math.sin(t * 0.35) * 0.15;
    }

    if (ring1.current) ring1.current.rotation.z += delta * 0.06;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.04;
  });

  return (
    <group position={[0, 0, -5]}>
      <mesh ref={core}>
        <sphereGeometry args={[isDark ? 1.55 : 1.35, 40, 40]} />
        <meshBasicMaterial
          color={isDark ? "#60a5fa" : "#2563eb"}
          transparent
          opacity={isDark ? 0.2 : 0.12}
        />
      </mesh>

      <mesh ref={ring1} rotation={[Math.PI / 2, 0.2, 0]}>
        <torusGeometry args={[isDark ? 3.8 : 3.2, 0.075, 20, 260]} />
        <meshBasicMaterial
          color={isDark ? "#22d3ee" : "#3b82f6"}
          transparent
          opacity={isDark ? 0.32 : 0.18}
        />
      </mesh>

      <mesh ref={ring2} rotation={[Math.PI / 2.6, -0.3, 0.5]}>
        <torusGeometry args={[isDark ? 5.6 : 4.5, 0.06, 20, 260]} />
        <meshBasicMaterial
          color={isDark ? "#a78bfa" : "#6366f1"}
          transparent
          opacity={isDark ? 0.24 : 0.14}
        />
      </mesh>
    </group>
  );
}

function NebulaClouds({ isDark }) {
  const n1 = useRef();
  const n2 = useRef();
  const n3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (n1.current) {
      n1.current.position.x = Math.sin(t * 0.16) * 2.6;
      n1.current.position.y = Math.cos(t * 0.11) * 1.1;
    }

    if (n2.current) {
      n2.current.position.x = Math.cos(t * 0.13) * -3.1;
      n2.current.position.y = Math.sin(t * 0.12) * -1.3;
    }

    if (n3.current) {
      n3.current.position.x = Math.sin(t * 0.1) * 1.9;
      n3.current.position.y = Math.sin(t * 0.14) * 1.4;
    }
  });

  return (
    <>
      <mesh ref={n1} position={[2.6, 1.1, -7]}>
        <sphereGeometry args={[3.2, 26, 26]} />
        <meshBasicMaterial
          color={isDark ? "#7c3aed" : "#818cf8"}
          transparent
          opacity={isDark ? 0.14 : 0.08}
        />
      </mesh>

      <mesh ref={n2} position={[-3.5, -1.5, -8]}>
        <sphereGeometry args={[3.8, 26, 26]} />
        <meshBasicMaterial
          color={isDark ? "#06b6d4" : "#38bdf8"}
          transparent
          opacity={isDark ? 0.12 : 0.06}
        />
      </mesh>

      <mesh ref={n3} position={[0.2, 2.1, -9]}>
        <sphereGeometry args={[2.8, 26, 26]} />
        <meshBasicMaterial
          color={isDark ? "#3b82f6" : "#60a5fa"}
          transparent
          opacity={isDark ? 0.1 : 0.05}
        />
      </mesh>
    </>
  );
}

function LightModeGradientPlane({ isDark }) {
  if (isDark) return null;

  return (
    <mesh position={[0, 0, -12]}>
      <planeGeometry args={[80, 60]} />
      <meshBasicMaterial color="#f8fbff" transparent opacity={0.9} />
    </mesh>
  );
}

export default function WebGLBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700">
      <Canvas
        camera={{ position: [0, 0.2, 11], fov: 52 }}
        dpr={[1, 1.4]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={isDark ? 0.38 : 0.55} />
        <LightModeGradientPlane isDark={isDark} />
        <NebulaClouds isDark={isDark} />
        <StarField isDark={isDark} />
        <GalaxyCore isDark={isDark} />
      </Canvas>
    </div>
  );
}