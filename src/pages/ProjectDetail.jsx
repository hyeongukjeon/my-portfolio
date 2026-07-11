import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projectsData';

const sectionFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function useInView(ref) {
  const observer = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true';
          entry.target.dispatchEvent(new Event('in-view'));
          observer.current?.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.current.observe(ref.current);
    return () => observer.current?.disconnect();
  }, [ref]);
}

function FadeInSection({ children, className = '' }) {
  const ref = useRef(null);
  useInView(ref);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      variants={sectionFade}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section renderers ─── */

function ImageSection({ src, alt, size = 'full', caption }) {
  const sizeClasses = {
    full: 'w-full',
    medium: 'max-w-[1000px] mx-auto w-full',
    small: 'max-w-[700px] mx-auto w-full',
  };

  return (
    <FadeInSection className="w-full">
      <div className={sizeClasses[size] || 'w-full'}>
        <figure>
          <img
            src={src}
            alt={alt}
            className="w-full object-cover"
            loading="lazy"
          />
          {caption && (
            <figcaption className="mt-3 font-inter text-[13px] leading-5 text-ink-70">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </FadeInSection>
  );
}

function ImagePairSection({ left, right }) {
  return (
    <FadeInSection className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      <figure>
        <img
          src={left.src}
          alt={left.alt}
          className="w-full object-cover"
          loading="lazy"
        />
        {left.caption && (
          <figcaption className="mt-3 font-inter text-[13px] leading-5 text-ink-70">
            {left.caption}
          </figcaption>
        )}
      </figure>
      <figure>
        <img
          src={right.src}
          alt={right.alt}
          className="w-full object-cover"
          loading="lazy"
        />
        {right.caption && (
          <figcaption className="mt-3 font-inter text-[13px] leading-5 text-ink-70">
            {right.caption}
          </figcaption>
        )}
      </figure>
    </FadeInSection>
  );
}

function TextSection({ heading, body }) {
  return (
    <FadeInSection className="grid w-full grid-cols-1 gap-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8">
      {heading ? (
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40 md:pt-1">
          {heading}
        </p>
      ) : (
        <div />
      )}
      <div className="max-w-[640px]">
        {body.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="font-inter text-[15px] leading-7 text-ink-70 [&:not(:first-child)]:mt-4"
          >
            {para}
          </p>
        ))}
      </div>
    </FadeInSection>
  );
}

function ImageTextSideSection({ type, image, heading, body }) {
  const isImageLeft = type === 'image-left-text-right';

  const imageMarkup = (
    <figure className="w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full object-cover"
        loading="lazy"
      />
      {image.caption && (
        <figcaption className="mt-3 font-inter text-[13px] leading-5 text-ink-70">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );

  const textMarkup = (
    <div className="flex flex-col gap-4">
      {heading && (
        <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          {heading}
        </p>
      )}
      <div className="max-w-[500px]">
        {body.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="font-inter text-[15px] leading-7 text-ink-70 [&:not(:first-child)]:mt-4"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <FadeInSection className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16 items-center">
        {isImageLeft ? (
          <>
            {imageMarkup}
            {textMarkup}
          </>
        ) : (
          <>
            {/* Mobile ordering: text top, image bottom */}
            <div className="order-1 md:order-1">{textMarkup}</div>
            <div className="order-2 md:order-2">{imageMarkup}</div>
          </>
        )}
      </div>
    </FadeInSection>
  );
}

function ImageRowSection({ images, aspect }) {
  const numImages = images.length;
  // Dynamic columns to fill container width
  let gridClass = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6';
  if (numImages === 4) {
    gridClass = 'grid-cols-2 md:grid-cols-4';
  } else if (numImages === 3) {
    gridClass = 'grid-cols-1 sm:grid-cols-3';
  } else if (numImages === 2) {
    gridClass = 'grid-cols-1 md:grid-cols-2';
  }

  const isOriginal = aspect === 'original';

  return (
    <FadeInSection className="w-full">
      <div className={`grid ${gridClass} gap-4`}>
        {images.map((img, i) => (
          <figure key={i} className="text-center w-full">
            <div className={`overflow-hidden bg-subtle w-full ${isOriginal ? '' : 'aspect-square'}`}>
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full ${isOriginal ? 'h-auto object-contain' : 'h-full object-cover'}`}
                loading="lazy"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-2 font-inter text-[11px] font-medium uppercase tracking-wider text-ink-70">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </FadeInSection>
  );
}

function QuoteSection({ body, attribution }) {
  return (
    <FadeInSection className="w-full border-l-2 border-ink py-2 pl-6 md:pl-10">
      <blockquote className="max-w-[640px] font-inter text-[18px] font-medium leading-8 tracking-tight text-ink md:text-[22px] md:leading-9">
        "{body}"
      </blockquote>
      {attribution && (
        <p className="mt-4 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          {attribution}
        </p>
      )}
    </FadeInSection>
  );
}

/* ─── Main Page ─── */

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-ink">
        <div className="text-center">
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
            Project not found
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-block border border-ink px-6 py-3 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const isResearch = project.category === 'Research';
  const filteredList = projects.filter((p) =>
    isResearch ? p.category === 'Research' : p.category !== 'Research'
  );
  const currentIndex = filteredList.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? filteredList[currentIndex - 1] : null;
  const nextProject =
    currentIndex < filteredList.length - 1 ? filteredList[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-paper pb-24 pt-28 text-ink md:pt-32">
      {/* ── Header ── */}
      <section className="mx-auto w-full max-w-site px-6 md:px-10 lg:px-16">
        <button
          type="button"
          onClick={() => navigate(isResearch ? '/research' : '/projects')}
          className="mb-8 inline-flex items-center gap-2 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40 transition-colors hover:text-ink"
        >
          <span>&larr;</span>
          <span>{isResearch ? 'Back to Research' : 'All Projects'}</span>
        </button>

        <div className="grid grid-cols-1 gap-6 border-b border-line pb-8 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8">
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-accent md:pt-2">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(filteredList.length).padStart(2, '0')}
          </p>
          <div>
            <h1 className="font-inter text-4xl font-medium tracking-tight text-ink md:text-6xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
              <div>
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                  Year
                </p>
                <p className="mt-1 font-inter text-sm text-ink">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                  Program
                </p>
                <p className="mt-1 font-inter text-sm text-ink">
                  {project.program}
                </p>
              </div>
              <div>
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                  Location
                </p>
                <p className="mt-1 font-inter text-sm text-ink">
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="mx-auto mt-12 flex w-full max-w-site flex-col gap-20 px-6 md:mt-16 md:gap-28 md:px-10 lg:px-16">
        {project.sections.map((section, i) => {
          switch (section.type) {
            case 'image':
              return (
                <ImageSection
                  key={i}
                  src={section.src}
                  alt={section.alt}
                  size={section.size}
                  caption={section.caption}
                />
              );
            case 'image-pair':
              return (
                <ImagePairSection
                  key={i}
                  left={section.left}
                  right={section.right}
                />
              );
            case 'image-row':
              return (
                <ImageRowSection
                  key={i}
                  images={section.images}
                  aspect={section.aspect}
                />
              );
            case 'text':
              return (
                <TextSection
                  key={i}
                  heading={section.heading}
                  body={section.body}
                />
              );
            case 'image-left-text-right':
            case 'text-left-image-right':
              return (
                <ImageTextSideSection
                  key={i}
                  type={section.type}
                  image={section.image}
                  heading={section.heading}
                  body={section.body}
                />
              );
            case 'quote':
              return (
                <QuoteSection
                  key={i}
                  body={section.body}
                  attribution={section.attribution}
                />
              );
            default:
              return null;
          }
        })}
      </section>

      {/* ── Prev / Next Navigation ── */}
      <nav className="mx-auto mt-24 w-full max-w-site border-t border-line px-6 pt-8 md:px-10 lg:px-16">
        <div className="flex items-start justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group text-left"
            >
              <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                &larr; Previous
              </p>
              <p className="mt-2 font-inter text-sm font-medium text-ink transition-colors group-hover:text-accent">
                {prevProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group text-right"
            >
              <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
                Next &rarr;
              </p>
              <p className="mt-2 font-inter text-sm font-medium text-ink transition-colors group-hover:text-accent">
                {nextProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </main>
  );
}
