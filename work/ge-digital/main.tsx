import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// GE Digital one-pager content. Single-narrative page (no Lead/Supporting
// split) — the Visor Service Portal pivot from a two-engineer Berlin
// prototype to a $180M, 10-year service contract.
const content: OnePagerContent = {
  industry: 'ENERGY',
  client: 'GE Digital',
  role: 'Sr. Staff UX Product Designer',
  headline:
    "My research revealed field engineers didn't need a better connection, they needed the diagnostic data itself. That insight turned a failing pilot into the product the sales team led with, landing a $180M service contract, the first of several that followed.",
  sceneSetter:
    'The GE Power Conversion Visor Service Portal began as a pilot two hardware engineers built in Berlin for remote access to marine power systems. It worked occasionally but hadn\'t met the business\'s real goals (reducing warranty claims, driving service-contract sales, cutting customer downtime), and every dropped connection risked up to $1M/day for a customer.',
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Visor Service Portal',
      body: [
        'Came in as UX lead as the team shifted from engineering-led to human-centered process. Ran 35 field interviews across France, Germany, and England, plus a site visit to a drill ship off Louisiana.',
        'The original design leaned on a live remote-desktop connection over an unreliable satellite link. When it dropped, the only fallback was flying a colleague out by helicopter. The pivot: stop delivering the interface and start delivering the artifact, a failure notification, then a second notification when the diagnostic trip-report file was ready, so the engineer could diagnose from the file itself in minutes without needing the connection to hold.',
        'The old pilot was disliked enough that customers were "accidentally" unplugging it, costing the sales team business. The system that came out of the pivot became standard issue on every Power Conversion marine system, a deal closer for salespeople instead of a deal breaker.',
      ],
      proofPoints: [
        '$180M, 10-year service contract',
        'Time-to-data: 6-8 hours → 10-15 minutes',
        'Field engineers could self-diagnose ~80% of issues from the trip-report file alone',
        "Promoted onto GE's Asset Performance Management team",
      ],
      primaryImage: true,
      imageCount: 2,
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
