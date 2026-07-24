import HomeAboutPreview from "../components/home/HomeAboutPreview";
import HomeHero from "../components/home/HomeHero";
import HomeSelectedWorks from "../components/home/HomeSelectedWorks";
import projects from "../data/projectsData";

const featuredProject = {
  label: "FEATURED PROJECT 01",
  title: projects[0].title,
  meta: `${projects[0].program} / ${projects[0].location} / ${projects[0].year}`,
  image: projects[0].thumbnail,
  slug: projects[0].slug,
};

const selectedWorks = [
  {
    number: "01",
    title: projects[0].title,
    meta: projects[0].program,
    image: projects[0].thumbnail,
    slug: projects[0].slug,
  },
  {
    number: "02",
    title: projects[1].title,
    meta: projects[1].program,
    image: projects[1].thumbnail,
    slug: projects[1].slug,
  },
  {
    number: "03",
    title: projects[3].title,
    meta: projects[3].program,
    image: projects[3].thumbnail,
    slug: projects[3].slug,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <HomeHero featuredProject={featuredProject} />
      <HomeSelectedWorks works={selectedWorks} />
      <HomeAboutPreview />
    </main>
  );
}
