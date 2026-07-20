import { useEffect, useState } from 'react'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

const caseStudies = [
  {
    industry: 'ENERGY',
    client: 'GE Digital',
    role: 'Lead UX Product Designer',
    hook: 'A prototype two engineers built became a product the sales team led with. $180M in service contracts; time to data access for field engineers dropped from 8 hours to 15 minutes.',
    href: '/work/ge-digital/',
  },
  {
    industry: 'AEROSPACE',
    client: 'Blue Origin',
    role: 'Lead UX Product Designer',
    hook: 'Rocket engineers were copying and pasting between siloed applications. I proposed and shipped a unified data insights pipeline.',
    href: '/work/blue-origin/',
  },
  {
    industry: 'HEALTHCARE',
    client: 'Ontrak',
    role: 'Lead UX Product Designer',
    hook: 'HIPAA-compliant telehealth portal, concept to launch in 60 days, built for frontline clinical staff.',
    href: '/work/ontrak/',
  },
]

function IntroOverlay() {
  const reducedMotion = useReducedMotion()
  const [done, setDone] = useState(false)

  if (reducedMotion || done) return null

  return (
    <div
      className="intro-cover fixed inset-0 z-50 bg-black pointer-events-none"
      onAnimationEnd={() => setDone(true)}
    />
  )
}

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-text-light/10 border border-text-light/10 rounded-sm flex items-center justify-center ${className}`}
    >
      <span className="font-body text-xs text-text-light/30">{label}</span>
    </div>
  )
}

function Header({ hidden }: { hidden: boolean }) {
  const reducedMotion = useReducedMotion()
  const [introDone, setIntroDone] = useState(false)
  return (
    <header
      onAnimationEnd={() => setIntroDone(true)}
      className={`sticky top-0 z-20 bg-light border-b border-text-light/10 px-8 md:px-16 lg:px-24 ${
        reducedMotion || introDone ? '' : 'header-drop'
      } ${hidden && !reducedMotion ? 'header-hidden' : ''}`}
    >
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between gap-6">
        <p className="font-body text-base font-medium text-text-light shrink-0">Andrew Milmoe</p>
        <p className="font-body text-[13px] text-text-light/60 hidden md:block">
          Chicago Area · Hybrid · andrew@milmoe.com
        </p>
        <nav className="flex items-center gap-5 shrink-0">
          <a href="#" className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors">
            Résumé
          </a>
          <a href="#case-studies" className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors">
            Case Studies
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-light px-8 md:px-16 lg:px-24 pb-16">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-10">
        <div className="w-full aspect-[3/1] max-h-[480px] overflow-hidden">
          {reducedMotion ? (
            <img
              src={`${import.meta.env.BASE_URL}drillship-poster.jpg`}
              alt="Offshore drill ship at sunrise — field research environment"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={`${import.meta.env.BASE_URL}drillship-poster.jpg`}
              className="w-full h-full object-cover"
              aria-label="Looping footage of an offshore drill ship at sunrise — field research environment"
            >
              <source src={`${import.meta.env.BASE_URL}drillship-loop.webm`} type="video/webm" />
              <source src={`${import.meta.env.BASE_URL}drillship-loop.mp4`} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.75fr_1.5fr] gap-8">
          <div />
          <h1 className="md:col-span-2 font-display font-bold text-3xl lg:text-4xl text-text-light leading-snug">
            I take early-stage enterprise software from proof of concept to commercial-grade
            global product, in regulated, high-stakes environments.
          </h1>
        </div>
      </div>
    </section>
  )
}

function Grid() {
  const reducedMotion = useReducedMotion()
  const rows = [
    {
      col1: <Placeholder label="Loom thumbnail (~4 min)" className="w-3/4 aspect-video" />,
      label: 'My approach',
      value: 'Systems level thinking',
      body: 'I work above the pixel level: field research, product roadmap influence, and rapid prototyping to reduce business risk through usability and user testing. I bring insights back from the field to drive product direction — not just execute briefs.',
    },
    {
      col1: null,
      label: 'Where I do it',
      value: 'Regulated, high-stakes environments',
      body: 'Healthcare (HIPAA), aerospace (ITAR), and industrial IoT. Frontline workers whose tools need to disappear — software that enables them to focus on the work that matters, not the system gathering their data.',
    },
    {
      col1: null,
      label: 'Current differentiator',
      value: 'AI fluency',
      body: 'Not aspirational. Already in practice: used BlueGPT at Blue Origin to automate RegEx queries and explore enterprise adoption. Built this site using Claude for strategy and design. Designing for AI-assisted workflows including systems where users must learn to trust the insights the system presents.',
    },
  ]

  return (
    <section
      className={`bg-light px-8 md:px-16 lg:px-24 pb-20 ${reducedMotion ? '' : 'section-fade-in'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 md:grid-cols-[1fr_0.75fr_1.5fr] gap-8">
            <div>{row.col1}</div>
            <h2 className="font-display text-lg leading-snug text-text-light">
              <span className="block font-normal">{row.label}</span>
              <span className="block font-semibold">{row.value}</span>
            </h2>
            <p className="font-body text-[15px] text-text-light/70 leading-relaxed">{row.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Divider() {
  return (
    <div className="px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto h-px bg-text-light/15" />
    </div>
  )
}

function CaseStudies({ revealed }: { revealed: boolean }) {
  const reducedMotion = useReducedMotion()
  const isRevealed = revealed || reducedMotion
  return (
    <section id="case-studies" className="bg-light px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.client}
              className={`border border-text-light/10 rounded-md p-8 shadow-sm flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                isRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: isRevealed && !reducedMotion ? `${i * 180}ms` : '0ms' }}
            >
              <Placeholder label="Screenshot" className="w-full aspect-video mb-2" />
              <p className="font-body text-[11px] font-medium tracking-widest uppercase text-accent">
                {cs.industry}
              </p>
              <h3 className="font-display text-2xl font-semibold text-text-light">{cs.client}</h3>
              <p className="font-body text-[13px] text-text-light/50">{cs.role}</p>
              <p className="font-body text-[15px] leading-relaxed flex-1 text-text-light/70">
                {cs.hook}
              </p>
              <a
                href={cs.href}
                className="font-body text-sm text-accent hover:text-accent/80 transition-colors"
              >
                View case study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="site-footer" className="bg-light border-t border-text-light/10 px-8 md:px-16 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="font-body text-sm text-text-light/60">Andrew Milmoe</p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-text-light/40 hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Résumé"
            className="text-text-light/40 hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:andrew@milmoe.com"
            aria-label="Email"
            className="text-text-light/40 hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 5h18v14H3z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [footerVisible, setFooterVisible] = useState(false)
  const [caseStudiesRevealed, setCaseStudiesRevealed] = useState(false)

  useEffect(() => {
    const footerEl = document.getElementById('site-footer')
    const caseStudiesEl = document.getElementById('case-studies')
    if (!footerEl || !caseStudiesEl) return

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    footerObserver.observe(footerEl)

    const caseStudiesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCaseStudiesRevealed(true)
          caseStudiesObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    caseStudiesObserver.observe(caseStudiesEl)

    return () => {
      footerObserver.disconnect()
      caseStudiesObserver.disconnect()
    }
  }, [])

  return (
    <main>
      <IntroOverlay />
      <Header hidden={footerVisible} />
      <Hero />
      <Grid />
      <Divider />
      <CaseStudies revealed={caseStudiesRevealed} />
      <Footer />
    </main>
  )
}
