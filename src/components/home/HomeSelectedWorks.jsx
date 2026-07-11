import { Link } from "react-router-dom";

export default function HomeSelectedWorks({ works }) {
  return (
    <section className="mx-auto w-full max-w-site px-6 pb-12 md:px-10 lg:px-16">
      <div className="mb-6 flex items-center justify-between gap-6 border-t border-line pt-6">
        <h2 className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
          Selected Works
        </h2>
        <Link
          to="/projects"
          className="hidden items-center gap-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-70 transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:inline-flex"
        >
          <span>View All Works</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-7 border-b border-line pb-10 md:grid-cols-3 md:gap-6">
        {works.map((work) => (
          <Link
            key={work.number}
            to={work.slug ? `/projects/${work.slug}` : "/projects"}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
          >
            <div className="aspect-[16/5] overflow-hidden bg-subtle md:aspect-[16/4.2]">
              <img
                src={work.image}
                alt={`${work.title} project preview`}
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className="mt-4 grid grid-cols-[34px_minmax(0,1fr)_24px] items-start gap-3">
              <span className="font-inter text-sm text-ink-40">
                {work.number}
              </span>
              <div>
                <h3 className="font-inter text-sm font-medium text-ink">
                  {work.title}
                </h3>
                <p className="mt-2 font-inter text-sm text-ink-70">
                  {work.meta}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="justify-self-end font-inter text-lg text-ink transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-6 inline-flex items-center gap-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-70 transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:hidden"
      >
        <span>View All Works</span>
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}
