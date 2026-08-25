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
        className={`max-w-7xl mx-auto h-24 md:h-12 flex md:grid md:grid-cols-[minmax(110px,calc(100%/3_+_9px))_minmax(220px,0.75fr)_1.5fr] items-center justify-between gap-6 md:gap-8 ${
          reducedMotion ? '' : 'header-drop'
        }`}
      >
        {/* display: contents at md+ so this wrapper doesn't become an extra
            grid cell — "Andrew G Milmoe" needs to land directly in the
            grid's first column, same as before this wrapper existed. Below
            md it's a real flex column: name on row 1, tagline flush left
            underneath on row 2, using the 96px bar's extra height. */}
        <div className="flex flex-col justify-center md:contents">
          <p className="font-display text-subhead font-semibold text-text-light shrink-0">Andrew G Milmoe</p>
          <p className="font-body text-[13px] text-text-light/60 mt-1 md:hidden whitespace-nowrap">
            <span>Chicago Area / Hybrid</span>{'     '}{getDisplayEmail()}
          </p>
        </div>
        {/* Desktop-only inline tagline — the stacked copy above covers below
            md. whitespace-nowrap on the whole line, not just the inner span: the
            gap below is plain ASCII spaces (a valid line-break point), and
            this middle grid column (sized by the shared RAIL_GRID formula
            for cross-page alignment, not by this line's own content) is
            narrower than the full line's natural width at every viewport up
            to the site's max-w-7xl cap — confirmed via computed DOM
            measurement (needs ~266px, column tops out ~260px). Without this,
            the browser wraps at that gap and drops the email to its own
            line. Forcing nowrap lets the line overflow rightward instead,
            which is safe: the nav column sits 32-374px further right across
            900-1536px viewports, confirmed via measurement, so the overflow
            never reaches it. */}
        <p className="font-body text-[13px] text-text-light/60 hidden md:block whitespace-nowrap">
          <span>Chicago Area / Hybrid</span>{'     '}{getDisplayEmail()}
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
