import Hero from "./ui/hero"
import ProjectCard from "./ui/components/projectCard"

const projects = [
  {
    imageUrl: '/dnd_cafe.png',
    title: 'DnD Cafe',
    description: 'A design piece for an imaginary DnD cafe offering board games, retro games and coffee.',
    link: 'https://www.cafe.tommymapp.dev',
    category: 'Design'
  }
]

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="flex flex-col" id="projects">
        <h2 className="font-semibold">Projects</h2>
        <p className="">Notable personal projects</p>
        <div className="border-b-1 my-l"></div>
        {projects.map((p) => 
          <ProjectCard key={p.title} imageUrl={p.imageUrl} title={p.title} description={p.description} link={p.link} category={p.category} />
        )}
      </section>
      
    </>
    
  )
}
