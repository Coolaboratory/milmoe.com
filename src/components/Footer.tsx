import { getMailtoHref } from '../lib/email'

export function Footer() {
  return (
    <footer id="site-footer" className="hidden md:block bg-[#F5F4F0] border-t border-text-light/10 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto h-12 flex items-center justify-between">
        <p className="font-display text-subhead font-semibold text-text-light">Andrew G Milmoe</p>
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
            href={getMailtoHref('Reaching out to you from Milmoe.com', 'Hi Andrew,\n\n')}
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
