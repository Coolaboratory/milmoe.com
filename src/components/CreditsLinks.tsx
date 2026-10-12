// Inline link helpers for the Credits page (credits/main.tsx). They live in
// src/ so Tailwind's content scan (./src/**) picks up their classes, such as
// sr-only; files under credits/ and work/ aren't scanned.

/** External link: opens in a new tab, with a visible arrow and a screen
 *  reader announcement so the new-tab behavior isn't a surprise. */
export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
    >
      {children}
      <span aria-hidden="true">&nbsp;↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

/** Bold run-in label followed by regular text. Site-wide rule (Andrew,
 *  2026-10-12): no visible colon after a bold run-in label; the weight change
 *  is the separator. A screen-reader-only colon keeps the spoken pause. Use
 *  this component (or the same sr-only colon) for any future run-in label. */
export function Credit({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-text-light">
        {label}
        <span className="sr-only">:</span>
      </strong>{' '}
      {children}
    </>
  )
}
