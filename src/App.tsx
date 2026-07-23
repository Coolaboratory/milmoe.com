import { Fragment, useEffect, useState } from 'react'

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
    role: 'Sr. Staff UX Product Designer',
    hook: 'A prototype two engineers built became a product the sales team led with. $180M in service contracts; time to data access for field engineers dropped from 8 hours to 15 minutes.',
    href: '/work/ge-digital/',
    logo: 'ge-digital-logo.png',
    logoAlt: 'GE Digital logo',
    image: 'ge-digital-work.jpg',
    imageAlt: 'GE Digital product screenshot',
  },
  {
    industry: 'AEROSPACE',
    client: 'Blue Origin',
    role: 'Lead User Experience Designer',
    hook: 'Rocket engineers were copying and pasting between siloed applications. I proposed and shipped a unified data insights pipeline.',
    href: '/work/blue-origin/',
    logo: 'blue-origin-logo.png',
    logoAlt: 'Blue Origin logo',
    image: 'blue-origin-work.jpg',
    imageAlt: 'Blue Origin product screenshot',
  },
  {
    industry: 'HEALTHCARE',
    client: 'Ontrak Health',
    role: 'Principal UX Product Designer',
    hook: 'HIPAA-compliant telehealth portal, concept to launch in 60 days, built for frontline clinical staff.',
    href: '/work/ontrak/',
    logo: 'ontrak-health-logo.png',
    logoAlt: 'Ontrak Health logo',
    image: 'ontrak-health-work.jpg',
    imageAlt: 'Ontrak Health product screenshot',
  },
]

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
  return (
    <header
      // Bar background is intentionally kept at the site's original light tone
      // (#F5F4F0), same as CaseStudies/Footer — one shade lighter than Hero/Grid's
      // bg-light (#EEECE6). It reveals on its own timing (see header-bg-reveal) so
      // it's already settled before the content below drops in — only the type
      // should appear to descend, not one background color replacing another.
      className={`sticky top-0 z-20 px-8 md:px-16 lg:px-24 ${
        reducedMotion ? 'bg-[#F5F4F0]' : 'header-bg-reveal'
      } ${hidden && !reducedMotion ? 'header-hidden' : ''}`}
    >
      <div
        className={`max-w-7xl mx-auto h-12 flex md:grid md:grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr] items-center justify-between gap-6 md:gap-8 ${
          reducedMotion ? '' : 'header-drop'
        }`}
      >
        <p className="font-body text-base font-medium text-text-light shrink-0">Andrew G Milmoe</p>
        <p className="font-body text-[13px] text-text-light/60 hidden md:block">
          <span className="whitespace-nowrap">Chicago Area / Hybrid</span>{'     '}Andrew@Milmoe.com
        </p>
        <nav className="flex items-center gap-5 shrink-0 md:justify-self-end">
          <a
            href="http://www.linkedin.com/in/agmilmoe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`${import.meta.env.BASE_URL}MilmoeResumeQ3_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors"
          >
            Resume
          </a>
          <a href="#case-studies" className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors">
            Work
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className={`px-8 md:px-16 lg:px-24 pb-16 ${reducedMotion ? 'bg-light' : 'bg-reveal'}`}
    >
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
              className="w-full h-full object-cover video-fade-in"
              aria-label="Looping footage of an offshore drill ship at sunrise — field research environment"
            >
              <source src={`${import.meta.env.BASE_URL}drillship-loop.webm`} type="video/webm" />
              <source src={`${import.meta.env.BASE_URL}drillship-loop.mp4`} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr] gap-8">
          <div />
          <h1
            className={`md:col-span-2 font-display font-bold text-[26px] lg:text-[32px] text-text-light leading-snug ${
              reducedMotion ? '' : 'headline-fly-in'
            }`}
          >
            I take enterprise software from proof of concept to commercial-grade global product,
            in regulated, high stakes environments.
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
      label: 'How',
      value: 'Systems level thinking',
      body: 'UI design is the last 5% of the job. It begins with on-site field research and rapid prototyping to test assumptions with frontline workers before we start coding. These insights shape the roadmap, reducing the risk of building features no one needs.',
      rowStart: 'md:row-start-1',
    },
    {
      label: 'Where',
      value: 'Regulated, high-stakes environments',
      body: 'Enterprise customers in industrial IoT, aerospace (ITAR), and healthcare (HIPAA) need fleet-wide visibility into the outcomes their frontline workers produce. As veteran specialists retire, their tools need to carry decades of expertise forward to the newly trained engineers and nurses stepping into their roles, so both can focus on the work, not the paperwork.',
      rowStart: 'md:row-start-2',
    },
    {
      label: 'What',
      value: 'AI fluency',
      body: 'A decade working alongside ML and data science teams, translating research-grade output into business outcomes. Currently training frontier models to generate UI designs on contract. Built this site end to end, strategy, design, and code, with Claude Code.',
      rowStart: 'md:row-start-3',
    },
  ]

  return (
    <section
      className={`px-8 md:px-16 lg:px-24 pb-20 ${reducedMotion ? 'bg-light' : 'bg-reveal'}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr] md:grid-rows-3 gap-8 md:gap-y-10">
        <div
          className={`md:row-span-3 ${reducedMotion ? '' : 'grid-row-fade-in'}`}
          style={reducedMotion ? undefined : { animationDelay: '5600ms' }}
        >
          <Placeholder
            label="Loom thumbnail (~4 min)"
            className="w-3/4 md:ml-[33px] md:w-[calc(100%_-_91px)] aspect-video"
          />
        </div>
        {rows.map((row, i) => (
          <Fragment key={row.label}>
            <h2
              className={`${row.rowStart} md:col-start-2 font-display text-subhead text-text-light ${
                reducedMotion ? '' : 'grid-row-fade-in'
              }`}
              style={reducedMotion ? undefined : { animationDelay: `${5600 + i * 250}ms` }}
            >
              <span className="block text-[11px] font-medium tracking-widest uppercase text-accent">
                {row.label}
              </span>
              <span className="block font-semibold mt-1">{row.value}</span>
            </h2>
            <p
              className={`${row.rowStart} md:col-start-3 font-body text-[15px] text-text-light/70 leading-relaxed ${
                reducedMotion ? '' : 'grid-row-fade-in'
              }`}
              style={reducedMotion ? undefined : { animationDelay: `${5600 + i * 250}ms` }}
            >
              {row.body}
            </p>
          </Fragment>
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
            <a
              key={cs.client}
              href={cs.href}
              className={`bg-[#F5F4F0] border border-text-light/10 rounded-md p-8 shadow-sm flex flex-col gap-3 transition-all duration-500 hover:-translate-y-[3px] hover:shadow-md ${
                isRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{ transitionDelay: isRevealed && !reducedMotion ? `${i * 320}ms` : '0ms' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${cs.image}`}
                alt={cs.imageAlt}
                className="w-full aspect-video object-cover rounded-sm mb-2"
              />
              <p className="font-body text-[11px] font-medium tracking-widest uppercase text-accent">
                {cs.industry}
              </p>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-subhead font-semibold text-text-light">{cs.client}</h3>
                <img
                  src={`${import.meta.env.BASE_URL}${cs.logo}`}
                  alt={cs.logoAlt}
                  className="h-6 w-auto object-contain shrink-0"
                />
              </div>
              <p className="font-body text-[13px] text-text-light/50">{cs.role}</p>
              <p className="font-body text-[15px] leading-relaxed flex-1 text-text-light/70">
                {cs.hook}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="site-footer" className="bg-[#F5F4F0] border-t border-text-light/10 px-8 md:px-16 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="font-body text-base font-medium text-text-light">Andrew G Milmoe</p>
        <div className="flex items-center gap-5">
          <a
            href="http://www.linkedin.com/in/agmilmoe"
            target="_blank"
            rel="noopener noreferrer"
            title="AGMilmoe LinkedIn"
            aria-label="AGMilmoe LinkedIn"
            className="text-text-light/40 hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}MilmoeResumeQ3_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            title="AGMilmoe Resume"
            aria-label="AGMilmoe Resume"
            className="text-text-light/40 hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={`mailto:andrew@milmoe.com?subject=${encodeURIComponent(
              'Reaching out to you from Milmoe.com'
            )}&body=${encodeURIComponent('Hi Andrew,\n\n')}`}
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
  const [caseStudiesInView, setCaseStudiesInView] = useState(false)
  const [loadSequenceDone, setLoadSequenceDone] = useState(false)
  // Case studies only reveal once BOTH are true — otherwise, on a tall enough
  // window, the section is already 50% visible at t=0 and would assemble
  // immediately, well before the rest of the load sequence (background
  // reveal, header, headline, grid rows) has even run.
  const caseStudiesRevealed = caseStudiesInView && loadSequenceDone

  useEffect(() => {
    // Matches the last grid row's fade-in finishing: 5600 + 2*250 delay + 450ms duration
    const timer = setTimeout(() => setLoadSequenceDone(true), 6600)
    return () => clearTimeout(timer)
  }, [])

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
          setCaseStudiesInView(true)
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
      <Header hidden={footerVisible} />
      <Hero />
      <Grid />
      <Divider />
      <CaseStudies revealed={caseStudiesRevealed} />
      <Footer />
    </main>
  )
}
