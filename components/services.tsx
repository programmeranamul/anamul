import { Layout, Server, Layers, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site-data'

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  layers: Layers,
}

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">// services</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          What I can do for you
        </h2>
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon] ?? Layers
          return (
            <div
              key={service.title}
              className="group glass rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:glow-accent"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
