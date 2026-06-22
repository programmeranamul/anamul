'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'
import { hero, profile } from '@/lib/site-data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const codeLines = [
  { t: 'const developer = {', c: 'text-muted-foreground' },
  { t: "  name: 'Anamul Hoque',", c: 'text-foreground' },
  { t: "  role: 'Full Stack MERN Dev',", c: 'text-foreground' },
  { t: "  stack: ['React','Node','Mongo'],", c: 'text-primary' },
  { t: '  available: true,', c: 'text-foreground' },
  { t: '}', c: 'text-muted-foreground' },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero-item]', {
        y: 32,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
      }).from(
        '[data-hero-card]',
        { y: 48, autoAlpha: 0, duration: 0.9 },
        '-=0.5',
      )

      // Parallax background blobs
      gsap.to('[data-parallax]', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="home"
      className="relative overflow-hidden grid-bg pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* parallax accents */}
      <div
        data-parallax
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[28rem] rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        data-parallax
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 size-[26rem] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span
            data-hero-item
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-primary" />
            </span>
            {
              hero.subTitle
            }
            
          </span>

          <h1
            data-hero-item
            className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name}
          </h1>

          <p
            data-hero-item
            className="mt-3 text-xl font-semibold text-gradient sm:text-2xl"
          >
            {profile.role}
          </p>

          <p
            data-hero-item
            className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap gap-3">
            <Button
            nativeButton={false}
              size="lg"
              className="rounded-full px-6 transition-shadow hover:glow-accent"
              render={<a href="#projects" />}
            >
              View Projects <ArrowRight className="size-4" />
            </Button>
            <Button
            nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent px-6"
              render={<a href="#contact" />}
            >
              <Mail className="size-4" /> Contact Me
            </Button>
          </div>

          <div data-hero-item className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div data-hero-card className="relative">
          <div className="glass glow-accent rounded-2xl border border-border p-1.5">
            <div className="rounded-xl bg-card/80">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-chart-5/80" />
                <span className="size-3 rounded-full bg-primary/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  developer.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="select-none text-muted-foreground/40">
                      {i + 1}
                    </span>
                    <code className={line.c}>{line.t}</code>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
