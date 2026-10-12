// Shared in-site navigation for the header "Work" link and the name/home link.
//
// Why this exists: the homepage is client-rendered, so on a cross-page
// arrival at /#work the #work element doesn't exist yet when the browser
// tries its native fragment scroll, and the page stayed at the top. Clicks
// on the homepage itself are intercepted so they always smooth-scroll (even
// when the URL already ends in #work), honour reduced motion, and wait for
// the mobile menu to close first.

const BASE = import.meta.env.BASE_URL
export const WORK_ID = 'work'
/** Fired when Work is requested, so the homepage can reveal the cards
 *  immediately instead of waiting out the intro sequence. */
export const WORK_REQUEST_EVENT = 'milmoe:work-request'

export function isHomePage() {
  return window.location.pathname === BASE || window.location.pathname === `${BASE}index.html`
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Runs `fn` after the next two frames, so a just-closed menu (and its body
 *  scroll lock) has been torn down before we scroll. */
function afterPaint(fn: () => void) {
  requestAnimationFrame(() => requestAnimationFrame(fn))
}

export function scrollToWork() {
  window.dispatchEvent(new Event(WORK_REQUEST_EVENT))
  afterPaint(() => {
    const el = document.getElementById(WORK_ID)
    if (!el) return
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
    if (window.location.hash !== `#${WORK_ID}`) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${WORK_ID}`)
    }
  })
}

export function scrollToTop() {
  afterPaint(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
  })
}

/** Click handler for any "Work" link (href `${BASE}#work`). On the homepage
 *  it scrolls in place; elsewhere it lets the normal navigation happen and
 *  the homepage aligns itself on load (see alignToWorkOnArrival). */
export function handleWorkClick(e: React.MouseEvent<HTMLAnchorElement>, beforeScroll?: () => void) {
  beforeScroll?.()
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (!isHomePage()) return
  e.preventDefault()
  scrollToWork()
}

/** Click handler for the name/home link (href `${BASE}`). */
export function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>, beforeScroll?: () => void) {
  beforeScroll?.()
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (!isHomePage()) return
  e.preventDefault()
  scrollToTop()
}

/** On a homepage load with #work in the URL, jump to the section once React
 *  has rendered it, then re-align after fonts and images settle (each of
 *  which can shift layout), unless the visitor has started scrolling. */
export function alignToWorkOnArrival(): () => void {
  if (window.location.hash !== `#${WORK_ID}`) return () => {}
  const align = () => document.getElementById(WORK_ID)?.scrollIntoView({ behavior: 'auto', block: 'start' })
  let cancelled = false
  const cancel = () => {
    cancelled = true
  }
  const realign = () => {
    if (!cancelled) align()
  }
  const opts = { passive: true, once: true } as const
  window.addEventListener('wheel', cancel, opts)
  window.addEventListener('touchstart', cancel, opts)
  window.addEventListener('keydown', cancel, { once: true })
  align()
  document.fonts?.ready.then(realign)
  if (document.readyState !== 'complete') window.addEventListener('load', realign, { once: true })
  const timers = [setTimeout(realign, 300), setTimeout(realign, 1200)]
  return () => {
    cancelled = true
    timers.forEach(clearTimeout)
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
    window.removeEventListener('keydown', cancel)
    window.removeEventListener('load', realign)
  }
}
