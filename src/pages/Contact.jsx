export default function Contact() {
  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink">
      <section className="mx-auto grid w-full max-w-site grid-cols-1 gap-14 lg:grid-cols-2 px-6 md:px-10 lg:px-16">
        <div>
          <p className="mb-8 font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
            Contact
          </p>
          <div className="aspect-[4/3] overflow-hidden bg-subtle lg:aspect-auto lg:min-h-[560px]">
            <iframe
              title="Seoul National University Graduate School Research Building location"
              src="https://maps.google.com/maps?q=37.4546447,126.9517421(Seoul+National+University+Bldg+39)&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 font-inter text-xs text-ink-40">
            Seoul National University, Bldg. 39 (Graduate School Research Building) — Seoul, Korea
          </p>
        </div>

        <div className="flex flex-col justify-between gap-16">
          <div>
            <h1 className="font-inter text-5xl font-medium leading-[1.02] tracking-tight text-ink md:text-7xl">
              Let&apos;s work
              <br />
              together.
            </h1>
            <p className="mt-8 max-w-md font-inter text-base leading-7 text-ink-70">
              Whether it is a conversation about architecture, urban design, or
              a potential collaboration, feel free to reach out.
            </p>
          </div>

          <div className="divide-y divide-line">
            <ContactLink label="Email (Personal)" value="hyeongukjeon@gmail.com" href="mailto:hyeongukjeon@gmail.com" />
            <ContactLink label="Email (Academic)" value="jhw3124@snu.ac.kr" href="mailto:jhw3124@snu.ac.kr" />
            <ContactLink label="LinkedIn" value="Hyeonguk Jeon" href="https://kr.linkedin.com/in/hyeonguk-jeon-4251a12a5" />
            <ContactLink label="Instagram" value="@hyeonguk_jeon" href="https://www.instagram.com/hyeonguk_jeon" />
          </div>

          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
            Based in Seoul — Available for remote and on-site collaboration
          </p>
        </div>
      </section>
    </main>
  );
}

function ContactLink({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex items-center justify-between py-5 transition-colors duration-200 hover:text-ink-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
    >
      <span>
        <span className="mb-1 block font-inter text-[11px] font-medium uppercase tracking-[0.14em] text-ink-40">
          {label}
        </span>
        <span className="font-inter text-base text-ink transition-colors group-hover:text-accent">
          {value}
        </span>
      </span>
      <span aria-hidden="true" className="font-inter text-lg text-ink">
        &rarr;
      </span>
    </a>
  );
}
