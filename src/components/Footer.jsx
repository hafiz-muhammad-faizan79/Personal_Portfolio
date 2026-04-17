export default function Footer() {
  return (
    <footer className="border-t border-slate-200/40 py-6 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-slate-600 md:flex-row dark:text-slate-400">
        <p>© {new Date().getFullYear()} Hafiz Muhammad Faizan. All rights reserved.</p>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}