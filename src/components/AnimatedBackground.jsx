/**
 * AnimatedBackground — layered CSS-only animated background
 * Provides: slow-drifting aurora blobs, a subtle noise grain overlay,
 * a fine dot-grid, and a vignette — all pointer-events-none fixed behind content.
 *
 * Works in both light and dark mode via class selectors.
 * Replaces the previous static radial-gradient version.
 */
export default function AnimatedBackground() {
  return (
    <>
      <style>{`
        /* ── Grain overlay ── */
        @keyframes grain {
          0%,100% { transform: translate(0,0) }
          10%      { transform: translate(-2%,-3%) }
          20%      { transform: translate(-4%, 2%) }
          30%      { transform: translate( 2%,-4%) }
          40%      { transform: translate(-1%, 5%) }
          50%      { transform: translate(-3%, 1%) }
          60%      { transform: translate( 4%, 3%) }
          70%      { transform: translate( 2%,-2%) }
          80%      { transform: translate(-4%, 4%) }
          90%      { transform: translate( 3%,-1%) }
        }

        /* ── Aurora blobs ── */
        @keyframes float-a {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(60px,-40px) scale(1.08); }
          66%     { transform: translate(-40px,60px) scale(0.94); }
        }
        @keyframes float-b {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-80px,50px) scale(1.12); }
          66%     { transform: translate(50px,-30px) scale(0.92); }
        }
        @keyframes float-c {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(30px,70px) scale(1.06); }
          66%     { transform: translate(-60px,-50px) scale(0.97); }
        }
        @keyframes float-d {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-40px,-60px) scale(1.1); }
        }

        .ab-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        /* dark mode blob colors */
        .dark .ab-blob-1 {
          width: 620px; height: 620px;
          left: -180px; top: -120px;
          background: radial-gradient(circle, #0ea5e9 0%, #6366f1 60%, transparent 80%);
          opacity: 0.18;
          animation: float-a 18s ease-in-out infinite;
        }
        .dark .ab-blob-2 {
          width: 500px; height: 500px;
          right: -100px; top: 30%;
          background: radial-gradient(circle, #a855f7 0%, #ec4899 60%, transparent 80%);
          opacity: 0.14;
          animation: float-b 22s ease-in-out infinite;
        }
        .dark .ab-blob-3 {
          width: 680px; height: 680px;
          left: 30%; bottom: -200px;
          background: radial-gradient(circle, #14b8a6 0%, #0ea5e9 60%, transparent 80%);
          opacity: 0.13;
          animation: float-c 26s ease-in-out infinite;
        }
        .dark .ab-blob-4 {
          width: 340px; height: 340px;
          left: 60%; top: 10%;
          background: radial-gradient(circle, #f59e0b 0%, #ef4444 60%, transparent 80%);
          opacity: 0.08;
          animation: float-d 14s ease-in-out infinite;
        }

        /* light mode blob colors (softer) */
        :not(.dark) .ab-blob-1 {
          width: 560px; height: 560px;
          left: -160px; top: -100px;
          background: radial-gradient(circle, #bae6fd 0%, #c7d2fe 60%, transparent 80%);
          opacity: 0.55;
          animation: float-a 20s ease-in-out infinite;
        }
        :not(.dark) .ab-blob-2 {
          width: 440px; height: 440px;
          right: -80px; top: 25%;
          background: radial-gradient(circle, #e9d5ff 0%, #fbcfe8 60%, transparent 80%);
          opacity: 0.45;
          animation: float-b 24s ease-in-out infinite;
        }
        :not(.dark) .ab-blob-3 {
          width: 600px; height: 600px;
          left: 25%; bottom: -180px;
          background: radial-gradient(circle, #a7f3d0 0%, #bae6fd 60%, transparent 80%);
          opacity: 0.42;
          animation: float-c 28s ease-in-out infinite;
        }
        :not(.dark) .ab-blob-4 {
          width: 300px; height: 300px;
          left: 65%; top: 8%;
          background: radial-gradient(circle, #fde68a 0%, #fca5a5 60%, transparent 80%);
          opacity: 0.3;
          animation: float-d 16s ease-in-out infinite;
        }

        /* Grain canvas */
        .ab-grain {
          position: fixed;
          inset: -50%;
          width: 200%; height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.028;
          animation: grain 8s steps(2) infinite;
          pointer-events: none;
        }
        .dark .ab-grain { opacity: 0.04; }
      `}</style>

      {/* Fixed layer behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

        {/* Base gradient foundation */}
        <div className="absolute inset-0 dark:bg-[#020617] bg-[#f8f9ff]" />

        {/* Aurora blobs */}
        <div className="ab-blob ab-blob-1" />
        <div className="ab-blob ab-blob-2" />
        <div className="ab-blob ab-blob-3" />
        <div className="ab-blob ab-blob-4" />

        {/* Fine dot grid */}
        <div className="absolute inset-0
          bg-[radial-gradient(circle,rgba(148,163,184,0.18)_1px,transparent_1px)]
          dark:bg-[radial-gradient(circle,rgba(148,163,184,0.09)_1px,transparent_1px)]
          [background-size:28px_28px]"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.0)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.55)_100%)]" />
      </div>

      {/* Grain overlay — separate fixed layer */}
      <div className="ab-grain -z-10 pointer-events-none fixed" />
    </>
  );
}