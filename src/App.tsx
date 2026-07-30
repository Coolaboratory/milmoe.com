import { Fragment, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useReducedMotion } from './hooks/useReducedMotion'

// Headline-style proof points, one per work-sample card below, in the same
// order (GE Digital, Blue Origin, Ontrak Health) so each sits directly above
// and left-aligns with its corresponding card via the same 3-col grid.
const proofPoints = ['6-8hrs → 10-15min', 'Hrs cut/launch', '60 days: 0 → Launch']

const workSamples = [
  {
    industry: 'ENERGY',
    client: 'GE Digital',
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
    role: 'Principal UX Product Designer',
    hook: "Ontrak's Member Outreach team was stuck waiting on an overloaded AI/ML team for every customer query. I built the MVP that fixed it, a tool the AI/ML team later adopted to run its own campaigns.",
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
          className={`md:col-start-1 md:row-start-1 md:row-span-2 ${reducedMotion ? '' : 'grid-row-fade-in'}`}
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
  // Cards start their own i*320ms stagger only once the proof-points row
  // above them has visually finished its 450ms fade-in, not simultaneously.
  const CARDS_BASE_DELAY_MS = 450
  return (
    <section
      id="work"
      className={`px-8 md:px-16 lg:px-24 py-20 ${reducedMotion ? 'bg-[#e6eaee]' : 'work-samples-bg-reveal'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9">
          {proofPoints.map((point, i) => (
            <p
              key={i}
              // 33px = each card's own 1px border + 32px (p-8) padding, so this
              // lines up with the card's actual content start (verified via
              // computed styles), not the card's outer edge. Cards/proof-points
              // both use equal-width grid-cols-3 tracks, so the same fixed
              // inset applies uniformly to all three columns via padding, no
              // per-column calc needed (unlike the uneven Header/Hero/Grid split).
              // Sized as large as verified to fit cleanly at every tested
              // width (768-1440px): md tier is capped at 16px (17px already
              // overflows "60 days: 0 → Launch" by ~1.5px at 768px, the
              // tightest width in that range); lg tier has real headroom and
              // maxes out at 22px (23px overflows by ~0.5px at 1024px, lg's
              // own tightest width). Hero-headline size (26px/32px) overflows
              // badly below ~1280px, confirmed via measurement, not used.
              //
              // Opacity-only fade (no transform), gated on the same isRevealed
              // signal the cards below use. proof-points-fade-in is omitted
              // entirely under reduced motion, matching Hero/Grid's pattern —
              // the row just renders at its final opacity immediately.
              className={`font-display font-bold whitespace-nowrap min-w-0 text-lg md:text-base lg:text-[22px] text-text-light pl-[33px] ${
                isRevealed ? 'opacity-100' : 'opacity-0'
              } ${reducedMotion ? '' : 'proof-points-fade-in'}`}
            >
              {point}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workSamples.map((cs, i) => (
            <a
              key={cs.client}
              href={cs.href}
              className={`bg-[#F5F4F0] border border-text-light/10 rounded-md p-8 shadow-sm flex flex-col gap-3 transition-all duration-500 hover:-translate-y-[3px] hover:shadow-md ${
                isRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              }`}
              style={{
                transitionDelay:
                  isRevealed && !reducedMotion ? `${CARDS_BASE_DELAY_MS + i * 320}ms` : '0ms',
              }}
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

export default function App() {
  const [footerVisible, setFooterVisible] = useState(false)
  const [workSamplesInView, setWorkSamplesInView] = useState(false)
  const [loadSequenceDone, setLoadSequenceDone] = useState(false)
  // Work samples only reveal once BOTH are true — otherwise, on a tall enough
  // window, the section is already 50% visible at t=0 and would assemble
  // immediately, well before the rest of the load sequence (background
  // reveal, header, headline, grid rows) has even run.
  const workSamplesRevealed = workSamplesInView && loadSequenceDone

  useEffect(() => {
    // Matches the last grid row's fade-in finishing: 5600 + 2*250 delay + 450ms duration
    const timer = setTimeout(() => setLoadSequenceDone(true), 6600)
    return () => clearTimeout(timer)
  }, [])

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
