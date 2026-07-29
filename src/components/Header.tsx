import { getDisplayEmail } from '../lib/email'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Header({ hidden }: { hidden: boolean }) {
  const reducedMotion = useReducedMotion()
  return (
    <header
      // Bar background is intentionally kept at the site's original light tone
      // (#F5F4F0), same as WorkSamples/Footer — one shade lighter than Hero/Grid's
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
        <p className="font-display text-subhead font-semibold text-text-light shrink-0">Andrew G Milmoe</p>
        <p className="font-body text-[13px] text-text-light/60 hidden md:block">
          <span className="whitespace-nowrap">Chicago Area / Hybrid</span>{'     '}{getDisplayEmail()}
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
          {/* Root-relative + hash so this resolves correctly from the homepage
              (in-page scroll, same as a bare "#work") and from any one-pager
              subpage (full navigation back to the homepage's #work anchor). */}
          <a
            href={`${import.meta.env.BASE_URL}#work`}
            className="font-body text-[13px] text-text-light/70 hover:text-accent transition-colors"
          >
            Work
          </a>
        </nav>
      </div>
    </header>
  )
}
