export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div className="blob blob-three" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
    </div>
  );
}