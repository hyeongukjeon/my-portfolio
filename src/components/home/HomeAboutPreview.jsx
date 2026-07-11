import { Link } from "react-router-dom";

export default function HomeAboutPreview() {
  return (
    <section className="mx-auto grid w-full max-w-site grid-cols-1 gap-8 px-6 pb-16 pt-10 md:grid-cols-[160px_minmax(0,620px)_1fr] md:px-10 lg:px-16">
      <h2 className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
        About
      </h2>
      <p className="font-inter text-base leading-7 text-ink">
        I am an architecture and urban design student interested in how systems
        shape our cities and landscapes. My work explores the intersection of
        infrastructure, ecology, and everyday life through research-driven
        design.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center gap-4 self-start justify-self-start font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-70 transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:justify-self-end"
      >
        <span>Read More</span>
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}
