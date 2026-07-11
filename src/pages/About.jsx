import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const educationData = [
  {
    year: '2024.02 - Present',
    title: "Master of Engineering, Interdisciplinary Program in Urban Design",
    org: 'Seoul National University, Seoul',
  },
  {
    year: '2017.03 - 2024.02',
    title: "Bachelor of Architecture (B.Arch)",
    org: 'Hanyang University ERICA, Seoul (GPA: 4.02 / 4.5)',
  },
  {
    year: '2022.09 - 2023.02',
    title: 'Exchange Student, Architecture',
    org: 'University of Genova, Genoa, Italy (GPA: 30 / 30)',
  },
];

const experienceData = [
  {
    year: '2025.06 - 2025.11',
    title: 'Architecture Trainee',
    org: 'Herzog & de Meuron, Basel, Switzerland',
  },
  {
    year: '2025.01 - 2025.02',
    title: 'Urban Design Intern + Researcher',
    org: 'GRUNDOT, Seoul',
  },
  {
    year: '2024.07 - 2024.08',
    title: 'Smart City Team Intern',
    org: 'SAMOO Architects & Engineers, Seoul',
  },
  {
    year: '2022.03 - 2024.02',
    title: 'Lab Member & Researcher',
    org: 'Architecture+ Lab, Hanyang University',
  },
  {
    year: '2020.12',
    title: 'Design Intern',
    org: 'Studio OASE, Seoul (Uam Public Library Competition)',
  },
];

const awardsData = [
  {
    year: '2025.03',
    title: 'Young Architects Competitions (YAC)',
    org: 'Honorable Mention',
  },
  {
    year: '2024.10',
    title: 'Graduate School Urban Design Competition',
    org: 'Grand Prize (Seoul National University)',
  },
  {
    year: '2024.09',
    title: 'Mobility Hub Idea Competition',
    org: 'Nominated',
  },
  {
    year: '2024.07',
    title: 'SNU Urban Design Studio 1 (Form Follows Life)',
    org: 'Honorable Mention',
  },
  {
    year: '2023.09',
    title: 'Proceeding of the Design Conference of AIK (Paper Publication)',
    org: 'A study on a Sustainable Apartment Prototype Integrating Waste Management',
  },
  {
    year: '2021.12',
    title: 'Hanyang Engineering Department Academic Competition',
    org: 'Grand Prize',
  },
];

const exhibitionData = [
  {
    year: '2023.07',
    title: 'UIA 2023 Copenhagen Global Student Summit',
    org: 'Workshop & Exhibition (Sustainable Futures: Leave No One Behind), Copenhagen',
  },
  {
    year: '2020.08 - 2022.08',
    title: 'UAUS Pavilion Exhibition',
    org: 'Union of Architecture University Students, Seoul',
  },
  {
    year: '2021.10 - 2021.11',
    title: 'Korean Pavilion at Venice Biennale 2023',
    org: 'Workshop & Exhibition (Future School _ Beyond the Inevitable, Seoul and Genoa)',
  },
];

const tabs = [
  { id: 'experience', label: 'Experience', data: experienceData },
  { id: 'education', label: 'Education', data: educationData },
  { id: 'awards', label: 'Awards & Papers', data: awardsData },
  { id: 'exhibition', label: 'Exhibitions', data: exhibitionData },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');
  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <main className="min-h-screen bg-paper pb-24 pt-32 text-ink">
      <section className="mx-auto w-full max-w-site px-6 md:px-10 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-[1120px] font-inter text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl"
        >
          I believe architecture is not merely about building structures. It is
          about shaping the way people experience the world.
          <span className="text-ink-40">
            {' '}
            My work explores the boundaries between architecture and urban
            design, seeking spaces that respond to human needs and the
            complexities of the city.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="mt-20 flex justify-end border-b border-line pb-20"
        >
          <p className="w-full font-inter text-base leading-7 text-ink-70 md:w-[55%]">
            I am Hyeonguk Jeon, an architect and urban designer from Seoul, South Korea.
            My work explores the threshold between architecture and urban design, focusing on
            creating spaces that respond to human experience, ecological performance, and the
            complexities of the contemporary city. Through my Traineeship at Herzog &amp; de Meuron
            in Basel and my master's studies in Urban Design at Seoul National University, I integrate
            computational design, advanced modeling, and research-driven planning to shape sustainable urban futures.
          </p>
        </motion.div>

        <div id="cv" className="pt-12">
          <div className="mb-12 flex flex-wrap gap-8 md:gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative border-b pb-3 font-inter text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-40 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {activeData.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="grid grid-cols-[120px_minmax(0,1fr)] gap-5 border-b border-line py-6 md:grid-cols-[200px_minmax(0,1fr)]"
                >
                  <span className="font-inter text-sm text-ink-40">
                    {item.year}
                  </span>
                  <div>
                    <h2 className="font-inter text-base font-medium text-ink md:text-lg">
                      {item.title}
                    </h2>
                    <p className="mt-1 font-inter text-sm text-ink-70">
                      {item.org}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
