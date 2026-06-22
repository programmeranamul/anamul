'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger children directly instead of animating the wrapper */
  stagger?: boolean
  delay?: number
  y?: number
  id?: string
}

export function Reveal({
  children,
  as: Tag = 'div',
  className,
  stagger = false,
  delay = 0,
  y = 40,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const targets = stagger ? Array.from(el.children) : el

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  )
}
