import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useReducedMotion } from './hooks/useReducedMotion'

// Session-scoped "have they already seen the homepage intro" flag. Read
// synchronously during App's first render (not in an effect) so the very
// first rendered output already reflects it — this is a CSR-only app with
// no hydration to mismatch, so there's no reason to defer the read.
const INTRO_SEEN_KEY = 'milmoe:intro-seen'

function hasSeenIntro(): boolean {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === '1'
  } catch {
    // Storage can throw in locked-down contexts (e.g. private browsing edge
    // cases) — fail open to "hasn't seen it", which just means the intro
    // plays every time, the pre-existing behavior.
    return false
  }
}

const workSamples = [
  {
    industry: 'ENERGY',
    client: 'GE Digital',
    stat: '6 hours → 15 minutes',
    role: 'Sr. Staff UX Product Designer',
    hook: "My research revealed field engineers didn't need a better connection, they needed the diagnostic data itself. That insight turned a failing pilot into the product the sales team led with, landing a $180M service contract, the first of several that followed.",
    href: `${import.meta.env.BASE_URL}work/ge-digital/`,
    logo: 'ge-digital-logo.png',
    logoAlt: 'GE Digital logo',
    image: 'ge-digital-work.jpg',
    imageAlt: 'GE Digital product screenshot',
  },
  {
    industry: 'AEROSPACE',
    client: 'Blue Origin',
    stat: 'Hours cut per launch',
    role: 'Lead User Experience Designer',
    hook: 'Rocket engineers were copying and pasting between siloed systems, so I proposed a unified data insights pipeline connecting test planning through flight outcomes.',
    href: `${import.meta.env.BASE_URL}work/blue-origin/`,
    logo: 'blue-origin-logo.png',
    logoAlt: 'Blue Origin logo',
    image: 'blue-origin-work.jpg',
    imageAlt: 'Blue Origin product screenshot',
  },
  {
    industry: 'HEALTHCARE',
    client: 'Ontrak Health',
    stat: 'Diagram → Dashboard',
    role: 'Principal UX Product Designer',
    hook: "Ontrak's Member Outreach team was stuck waiting on an overloaded AI/ML team for every member outreach query. I designed the MVP that fixed it, a tool the AI/ML team later adopted to run its own campaigns.",
    href: `${import.meta.env.BASE_URL}work/ontrak/`,
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
              alt="Offshore drill ship at sunrise, field research environment"
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
              aria-label="Looping footage of an offshore drill ship at sunrise, field research environment"
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
            className={`md:col-span-2 font-display font-bold text-[24px] lg:text-[30px] text-text-light leading-snug ${
              reducedMotion ? '' : 'headline-fly-in'
            }`}
          >
            I scale software from proof-of-concept to global,{' '}
            <span className="whitespace-nowrap">high-stakes</span> operations
            through user-centered design.
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
      value: 'Regulated Environments',
      body: 'Enterprise customers in industrial IoT, aerospace (ITAR), and healthcare (HIPAA) need fleet-wide visibility into the outcomes their frontline workers produce. As veteran specialists retire, their tools need to carry decades of expertise forward to the newly trained engineers and nurses stepping into their roles, so both can focus on the work, not the paperwork.',
      rowStart: 'md:row-start-2',
    },
    {
      label: 'What',
      value: 'AI fluency',
      body: 'A decade working alongside ML and data science teams, turning technically proven ideas to usable, reliable, scalable global enterprise products. Currently training frontier models to generate UI designs on contract. Built this site end to end with Claude Code CLI, using agents trained for management, research, strategy, design, and code.',
      rowStart: 'md:row-start-3',
    },
  ]

  return (
    <section
      className={`px-8 md:px-16 lg:px-24 pb-20 ${reducedMotion ? 'bg-light' : 'bg-reveal'}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr] gap-8 md:gap-y-10">
        <div
          className={`md:col-start-1 md:row-start-1 md:row-span-2 h-full ${reducedMotion ? '' : 'grid-row-fade-in'}`}
          style={reducedMotion ? undefined : { animationDelay: '5600ms' }}
        >
          <Placeholder
            label="Video: Sample work, coming soon"
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
        <div
          className={`md:col-start-1 md:row-start-3 ${reducedMotion ? '' : 'grid-row-fade-in'}`}
          style={reducedMotion ? undefined : { animationDelay: `${5600 + 2 * 250}ms` }}
        >
          <Placeholder
            label="Video: Using Claude to build this site, coming soon"
            className="w-3/4 md:ml-[33px] md:w-[calc(100%_-_91px)] aspect-video"
          />
        </div>
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

function WorkSamples({ revealed }: { revealed: boolean }) {
  const reducedMotion = useReducedMotion()
  const isRevealed = revealed || reducedMotion
  // Cards start their own i*320ms stagger 450ms after the section becomes
  // revealed, giving a beat before they animate in (previously timed to let
  // an above-grid proof-points row finish its own fade-in first; that row
  // has since been folded into each card, but the same pacing still reads
  // well for the cards alone).
  const CARDS_BASE_DELAY_MS = 450
  return (
    <section
      id="work"
      className={`px-8 md:px-16 lg:px-24 py-20 ${reducedMotion ? 'bg-[#e6eaee]' : 'work-samples-bg-reveal'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workSamples.map((cs, i) => (
            <a
              key={cs.client}
              href={cs.href}
              // Entrance-only transition (opacity/transform for the scroll-reveal
              // slide-and-scale-in). Kept on its own element and its own
              // transition-property list, at the original 500ms, so it can never
              // be affected by the hover-lift speed below — they used to share a
              // single `transition-all duration-500`, which meant any change to
              // one silently changed the other.
              className={`group block transition-[opacity,transform] duration-500 ${
                isRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{
                transitionDelay:
                  isRevealed && !reducedMotion ? `${CARDS_BASE_DELAY_MS + i * 320}ms` : '0ms',
              }}
            >
              {/* Card chrome + hover lift live here, independent of the entrance
                  transition above. 250ms is intentionally half of the entrance's
                  500ms — was previously the same 500ms, made twice as fast per
                  request. */}
              <div className="bg-[#F5F4F0] border border-text-light/10 rounded-md p-8 shadow-sm flex flex-col gap-3 h-full transition-[transform,box-shadow] duration-[250ms] group-hover:-translate-y-[3px] group-hover:shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}${cs.image}`}
                  alt={cs.imageAlt}
                  className="w-full aspect-video object-cover rounded-sm mb-2"
                />
                <p className="font-body text-[11px] font-medium tracking-widest uppercase text-accent">
                  {cs.industry}
                </p>
                <h3 className="font-display text-subhead font-semibold text-text-light">{cs.stat}</h3>
                <p className="font-body text-[15px] leading-relaxed flex-1 text-text-light/70">
                  {cs.hook}
                </p>
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="font-body text-[13px] text-text-light">{cs.client}</p>
                  <img
                    src={`${import.meta.env.BASE_URL}${cs.logo}`}
                    alt={cs.logoAlt}
                    className="h-5 w-auto object-contain shrink-0"
                  />
                </div>
                <p className="font-body text-[13px] text-text-light/50">{cs.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [skipIntro] = useState(hasSeenIntro)
  const [footerVisible, setFooterVisible] = useState(false)
  const [workSamplesInView, setWorkSamplesInView] = useState(false)
  const [loadSequenceDone, setLoadSequenceDone] = useState(false)
  // Work samples only reveal once BOTH are true — otherwise, on a tall enough
  // window, the section is already 50% visible at t=0 and would assemble
  // immediately, well before the rest of the load sequence (background
  // reveal, header, headline, grid rows) has even run. Skipped entirely on
  // a same-session revisit (skipIntro) — the section renders already
  // revealed, same as the rest of the settled page.
  const workSamplesRevealed = skipIntro || (workSamplesInView && loadSequenceDone)

  // Mark the intro as seen for the rest of this browser session, and apply
  // the CSS override class (see body.intro-skip in index.css) before the
  // browser's first paint, so a revisit never flashes the dark intro state.
  // useLayoutEffect (not useEffect) specifically so this runs synchronously
  // after DOM mutations but before paint.
  useLayoutEffect(() => {
    if (skipIntro) {
      document.body.classList.add('intro-skip')
    }
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1')
    } catch {
      // Ignore — worst case the intro replays on the next visit this session.
    }
  }, [skipIntro])

  useEffect(() => {
    if (skipIntro) return
    // Matches the last grid row's fade-in finishing: 5600 + 2*250 delay + 450ms duration
    const timer = setTimeout(() => setLoadSequenceDone(true), 6600)
    return () => clearTimeout(timer)
  }, [skipIntro])

  useEffect(() => {
    const footerEl = document.getElementById('site-footer')
    const workSamplesEl = document.getElementById('work')
    if (!footerEl || !workSamplesEl) return

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    footerObserver.observe(footerEl)

    const workSamplesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorkSamplesInView(true)
          workSamplesObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    workSamplesObserver.observe(workSamplesEl)

    return () => {
      footerObserver.disconnect()
      workSamplesObserver.disconnect()
    }
  }, [])

  return (
    <main>
      <Header hidden={footerVisible} />
      <Hero />
      <Grid />
      <Divider />
      <WorkSamples revealed={workSamplesRevealed} />
      <Footer />
    </main>
  )
}
