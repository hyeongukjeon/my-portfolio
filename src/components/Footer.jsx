export default function Footer() {
  return (
    <footer className="bg-paper text-ink-70">
      <div className="mx-auto flex w-full max-w-site flex-col gap-2 border-t border-line px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em]">
          &copy; 2026 Hyeonguk Jeon
        </p>
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          Architecture &middot; Urban Design &middot; Spatial Research
        </p>
      </div>
    </footer>
  );
}
