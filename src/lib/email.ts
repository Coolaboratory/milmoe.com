// Andrew's email address, reconstructed at runtime from character codes so the
// literal string never appears as a contiguous, scrapeable substring in this
// source file or in the built JS bundle (this is a CSR SPA with no server-side
// obfuscation available — the shipped bundle is otherwise plain-text).
// Decodes to the display-cased email address (name + '@' + domain).
const DISPLAY_CODES = [65, 110, 100, 114, 101, 119, 64, 77, 105, 108, 109, 111, 101, 46, 99, 111, 109]

function decode(codes: number[]): string {
  return codes.map((c) => String.fromCharCode(c)).join('')
}

/** Display-cased email address, for visible text like the header contact line. */
export function getDisplayEmail(): string {
  return decode(DISPLAY_CODES)
}

/** Lowercase address suitable for mailto: hrefs. */
export function getEmailAddress(): string {
  return getDisplayEmail().toLowerCase()
}

/** Builds a full mailto: href with optional subject/body prefill. */
export function getMailtoHref(subject?: string, body?: string): string {
  const parts: string[] = []
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`)
  if (body) parts.push(`body=${encodeURIComponent(body)}`)
  const query = parts.join('&')
  return `mailto:${getEmailAddress()}${query ? `?${query}` : ''}`
}
