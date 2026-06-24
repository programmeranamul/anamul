import Image from 'next/image'
import { MapPin, Briefcase, Globe } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/site-data'

const stats = [
  { icon: Briefcase, label: '2 Years', sub: 'Experience' },
  { icon: Globe, label: 'Remote', sub: 'Worldwide' },
  { icon: MapPin, label: 'MERN', sub: 'Specialist' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">// about</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          A bit about me
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
        <Reveal className="glass mx-auto w-full max-w-xs rounded-2xl border border-border p-5 lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/anamul.png"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Full Stack MERN Developer with{' '}
              <span className="text-foreground">2 years of experience</span>{' '}
              building production web applications for remote teams. I love
              turning complex problems into clean, scalable products — owning
              everything from intuitive React interfaces to well-architected
              Node.js APIs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My focus is on performance, maintainable code, and a great
              developer and user experience. I&apos;m comfortable across the
              entire stack and thrive in collaborative, remote-first
              environments.
            </p>
          </Reveal>

          <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl border border-border p-5"
              >
                <s.icon className="size-5 text-primary" />
                <p className="mt-3 text-xl font-bold">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
