import { Link } from "react-router-dom";

export default function HomeHero({ featuredProject }) {
  return (
    <section className="mx-auto grid w-full max-w-site grid-cols-1 gap-10 px-6 pb-12 pt-28 md:px-10 md:pt-32 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-16 lg:px-16 xl:gap-20">
      <div className="flex flex-col justify-center lg:min-h-[620px]">
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          Hyeonguk Jeon
        </p>
        <p className="mt-6 font-inter text-sm text-ink-70">
          Architecture &middot; Urban Design &middot; Spatial Research
        </p>
        <h1 className="mt-8 max-w-[430px] font-inter text-4xl font-medium leading-[0.98] tracking-tight text-ink md:text-5xl">
          Urban systems through architecture, landscape, and spatial research.
        </h1>

        <div className="mt-9 h-px w-16 bg-ink" />

        <div className="mt-9">
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
            {featuredProject.label}
          </p>
          <h2 className="mt-3 font-inter text-base font-medium text-ink">
            {featuredProject.title}
          </h2>
          <p className="mt-2 font-inter text-sm text-ink-70">
            {featuredProject.meta}
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex min-h-12 w-full max-w-[230px] items-center justify-between border border-ink px-6 font-inter text-sm text-ink transition-colors duration-200 hover:bg-ink hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span>View Project</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center lg:min-h-[620px]">
        <img
          src={featuredProject.image}
          alt="Isometric architectural render of Paju Logistics Superform surrounded by forest and teal infrastructure"
          className="h-auto max-h-[700px] w-full object-contain"
        />
      </div>
    </section>
  );
}
