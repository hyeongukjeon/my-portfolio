import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';

const categories = ['ALL', 'Architecture', 'Urban Design', 'Professional Work'];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Exclude Research category from design projects
  const designProjects = projects.filter((project) => project.category !== 'Research');

  const filtered =
    activeCategory === 'ALL'
      ? designProjects
      : designProjects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-paper px-6 pb-24 pt-32 text-ink md:px-10 lg:px-16">
      <section className="mx-auto w-full max-w-site">
        <p className="mb-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          Selected works — Architecture &amp; Urban Design
        </p>
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <h1 className="font-inter text-4xl font-medium tracking-tight text-ink md:text-6xl">
            Projects
          </h1>
          <div className="flex flex-wrap gap-5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border-b pb-1 font-inter text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  activeCategory === category
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-40 hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[16/10] overflow-hidden bg-subtle">
                {project.thumbnail ? (
                  <motion.img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover"
                    animate={{ scale: hoveredId === project.id ? 1.02 : 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />
                ) : (
                  <div className="flex h-full w-full items-end justify-between border border-line p-5">
                    <span className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                      Image pending
                    </span>
                    <span className="font-inter text-lg text-ink-40">-&gt;</span>
                  </div>
                )}
              </div>
              <div className="mt-4 grid grid-cols-[34px_minmax(0,1fr)_24px] gap-3">
                <span className="font-inter text-sm text-ink-40">
                  {String(designProjects.indexOf(project) + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-inter text-base font-medium text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-2 font-inter text-sm text-ink-70">
                    {project.program} / {project.location}
                  </p>
                </div>
                <span className="justify-self-end font-inter text-lg text-ink transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
