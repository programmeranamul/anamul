import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/social-icons'
import { projects } from '@/lib/site-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">// projects</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Featured projects
        </h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
          A selection of full-stack applications I&apos;ve designed and built
          end to end.
        </p>
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group glass flex flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:glow-accent"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-primary">{project.subtitle}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <Button
              nativeButton={false}
                size="sm"
                variant="outline"
                className="flex-1 rounded-full border-border bg-transparent"
                render={
                  <a href={project.github} target="_blank" rel="noreferrer" />
                }
              >
                <GithubIcon className="size-4" /> Code
              </Button>
              <Button
              nativeButton={false}
                size="sm"
                className="flex-1 rounded-full"
                render={
                  <a href={project.demo} target="_blank" rel="noreferrer" />
                }
              >
                <ExternalLink className="size-4" /> Live Demo
              </Button>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}
