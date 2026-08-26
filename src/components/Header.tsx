import { useEffect, useState } from 'react'
import { getDisplayEmail, getMailtoHref } from '../lib/email'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Header({ hidden }: { hidden: boolean }) {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  // Escape-to-close + body scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

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
        className={`max-w-7xl mx-auto h-12 flex md:grid md:grid-cols-[minmax(110px,calc(100%/3_+_9px))_minmax(220px,0.75fr)_1.5fr] items-center justify-between gap-4 md:gap-8 ${
          reducedMotion ? '' : 'header-drop'
        }`}
      >
        <p className="font-display text-subhead font-semibold text-text-light shrink-0">Andrew G Milmoe</p>
        {/* Inline at every breakpoint now — mobile collapsed to a single row,
            so the name/tagline no longer stack. whitespace-nowrap on the whole
            line, not just the inner span: the gap below is plain ASCII spaces
            (a valid line-break point), and this middle grid column (sized by
            the shared RAIL_GRID formula for cross-page alignment, not by this
            line's own content) is narrower than the full line's natural width
            at every viewport up to the site's max-w-7xl cap — confirmed via
            computed DOM measurement (needs ~266px, column tops out ~260px).
            Without this, the browser wraps at that gap and drops the email to
            its own line. Forcing nowrap lets the line overflow rightward
            instead, which is safe at md+: the nav column sits 32-374px
            further right across 900-1536px viewports, confirmed via
            measurement, so the overflow never reaches it. Below md the row is
            a plain flex layout (no fixed column), confirmed via device-width
            measurement (375-430px) to fit alongside the name and hamburger
            without wrapping. */}
        <p className="hidden min-[431px]:block font-body text-[13px] text-text-light/60 whitespace-nowrap">
          <span>Chicago Area / Hybrid</span>
          <span className="hidden min-[640px]:inline ml-5">{getDisplayEmail()}</span>
        </p>
        <nav className="hidden md:flex items-center gap-5 shrink-0 md:justify-self-end">
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
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden shrink-0 inline-flex items-center justify-center text-text-light/70 hover:text-accent transition-colors"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile slide-in menu. Backdrop + panel are always in the DOM (not
          conditionally mounted) so the transform/opacity transitions actually
          have something to animate from/to. When closed, aria-hidden +
          pointer-events-none + tabIndex="-1" on every focusable child keep it
          out of the accessibility tree, out of tab order, and unclickable. */}
      <div
        aria-hidden={!menuOpen}
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 z-30 bg-text-light/40 ${
          reducedMotion ? '' : 'transition-opacity duration-300'
        } ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 right-0 z-40 h-full w-72 max-w-[80vw] bg-[#FFFFFF] shadow-xl transform ${
          reducedMotion ? '' : 'transition-transform duration-300 ease-out'
        } ${menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
      >
        {/* Location strip: only exists below the 431px "narrowest phone" tier,
            where the header row hides its own tagline entirely. Sits on the
            site's bg-light strip so the panel reads as a proper header at
            this width; disappears completely (not just visually hidden) at
            431px+ since the nav already starts at the top there. */}
        <p className="block min-[431px]:hidden bg-light font-body text-[13px] text-text-light/60 px-8 pt-12 pb-4">
          Chicago Area / Hybrid
        </p>
        <nav className="flex flex-col pt-6 min-[431px]:pt-12 px-8">
          <a
            href={`${import.meta.env.BASE_URL}#work`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="font-body text-[15px] text-text-light/70 hover:text-accent transition-colors py-4"
          >
            Work
          </a>
          <a
            href={`${import.meta.env.BASE_URL}MilmoeResumeQ3_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="font-body text-[15px] text-text-light/70 hover:text-accent transition-colors py-4"
          >
            Resume
          </a>
          <a
            href="http://www.linkedin.com/in/agmilmoe"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="font-body text-[15px] text-text-light/70 hover:text-accent transition-colors py-4"
          >
            LinkedIn
          </a>
          <div className="border-t border-text-light/10 my-2" />
          <a
            href={getMailtoHref('Reaching out to you from Milmoe.com', 'Hi Andrew,\n\n')}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="font-body text-[15px] text-text-light/70 hover:text-accent transition-colors py-4"
          >
            Email Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
