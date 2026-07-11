import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';

export default function Research() {
  const [hoveredId, setHoveredId] = useState(null);

  // Filter projects to only show Research category
  const researchProjects = projects.filter((project) => project.category === 'Research');
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink">
      <section className="mx-auto w-full max-w-site px-6 md:px-10 lg:px-16">
        <p className="mb-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          Academic Research &amp; Analytical Studies
        </p>
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <h1 className="font-inter text-4xl font-medium tracking-tight text-ink md:text-6xl">
            Research
          </h1>
        </div>

        {researchProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project) => (
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
                    {String(researchProjects.indexOf(project) + 1).padStart(2, '0')}
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
        ) : (
          <div className="py-24 text-center">
            <p className="font-inter text-sm text-ink-40">No research projects added yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
