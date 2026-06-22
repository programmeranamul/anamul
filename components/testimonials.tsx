import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="scroll-mt-24 bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary">// testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What people say
          </h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="glass flex flex-col rounded-2xl border border-border p-6"
            >
              <Quote className="size-7 text-primary/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
