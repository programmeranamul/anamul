import { Reveal } from '@/components/reveal'
import { experience } from '@/lib/site-data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary">// experience</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          <ol className="relative border-l border-border pl-8">
            {experience.map((job) => (
              <li key={job.company} className="mb-10 last:mb-0">
                <Reveal>
                  <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-background bg-primary" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {job.role}{' '}
                      <span className="text-muted-foreground">
                        · {job.company}
                      </span>
                    </h3>
                    <span className="font-mono text-sm text-primary">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
