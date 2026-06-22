'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { skills } from '@/lib/site-data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function Skills() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-skill]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      })

      gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: bar.dataset.level + '%',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 90%' },
          },
        )
      })
    },
    { scope: root },
  )

  return (
    <section id="skills" className="scroll-mt-24 bg-secondary/20 py-24">
      <div ref={root} className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-primary">// skills</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
          The core of my MERN toolkit, refined across two years of shipping
          full-stack products.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} data-skill>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  data-bar
                  data-level={skill.level}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
