import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const photos = [
  { city: 'Barcelona', country: 'Spain', month: 'Dec', year: 2024, category: 'travel', src: '/images/Barcelona_Spain_Dec_2024.webp' },
  { city: 'Basel', country: 'Switzerland', month: 'Jun', year: 2025, category: 'travel', src: '/images/Basel_Switzerland_Jun_2025.webp' },
  { city: 'Brienz', country: 'Switzerland', month: 'Jul', year: 2025, category: 'nature', src: '/images/Brienz_Switzerland_Jul_2025.webp' },
  { city: 'Delft', country: 'Netherlands', month: 'Nov', year: 2025, category: 'architecture', src: '/images/Delft_Netherlands_Nov_2025.webp' },
  { city: 'Zermatt', country: 'Switzerland', month: 'Dec', year: 2025, category: 'nature', src: '/images/Zermatt_Switzerland_Dec_2025.webp' },
];

const tags = ['ALL', 'TRAVEL', 'ARCHITECTURE', 'NATURE'];

export default function Photos() {
  const [activeTag, setActiveTag] = useState('ALL');
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTag === 'ALL'
      ? photos
      : photos.filter((photo) => photo.category.toUpperCase() === activeTag);

  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink">
      <section className="mx-auto w-full max-w-site px-6 md:px-10 lg:px-16">
        <p className="mb-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          Places I have been to — moments I did not want to forget
        </p>
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <h1 className="font-inter text-4xl font-medium tracking-tight text-ink md:text-6xl">
            Photos
          </h1>
          <div className="flex flex-wrap gap-5">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`border-b pb-1 font-inter text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  activeTag === tag
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-40 hover:text-ink'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-10 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((photo) => (
            <button
              key={`${photo.city}-${photo.year}`}
              type="button"
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
              onClick={() => setSelected(photo)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-subtle">
                <img
                  src={photo.src}
                  alt={`${photo.city}, ${photo.country}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-3 truncate font-inter text-sm font-medium text-ink">
                {photo.city}, {photo.country}
              </p>
              <div className="mt-1 flex justify-between gap-3 font-inter text-[11px] font-medium uppercase tracking-[0.12em] text-ink-40">
                <span>{photo.month} {photo.year}</span>
                <span>{photo.category}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-paper p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 font-inter text-3xl text-ink-40 hover:text-ink"
              aria-label="Close photo preview"
            >
              &times;
            </button>
            <motion.img
              src={selected.src}
              alt={`${selected.city}, ${selected.country}`}
              className="max-h-[75vh] max-w-[88vw] object-contain"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            />
            <div className="text-center">
              <p className="font-inter text-sm font-medium text-ink">
                {selected.city}, {selected.country}
              </p>
              <p className="mt-1 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                {selected.month} {selected.year} — {selected.category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
