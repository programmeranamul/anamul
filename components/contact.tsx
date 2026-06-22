'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { profile } from '@/lib/site-data'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'in/aaravmehta', href: profile.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/aarav', href: profile.github },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="text-center">
        <p className="font-mono text-sm text-primary">// contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Have a project in mind or a role to fill? Send a message and
          I&apos;ll get back to you within 24 hours.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="flex flex-col gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <c.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  {c.label}
                </span>
                <span className="block font-medium group-hover:text-primary">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl border border-border p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-6 w-full rounded-full transition-shadow hover:glow-accent"
          >
            {sent ? (
              <>
                <Check className="size-4" /> Message Sent
              </>
            ) : (
              <>
                <Send className="size-4" /> Send Message
              </>
            )}
          </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
