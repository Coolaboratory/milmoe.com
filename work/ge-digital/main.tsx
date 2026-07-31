import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// GE Digital one-pager content. Single-narrative page (no Lead/Supporting
// split) — the Visor Service Portal pivot from a two-engineer Berlin
// prototype to a $180M, 10-year service contract.
//
// Headline intentionally no longer matches the landing card's hook (see
// src/App.tsx) — the card and this page now have different jobs. The
// scene-setter renders inside the hero (sceneSetterPlacement: 'hero') rather
// than as its own row; Blue Origin and Ontrak keep the standalone-row
// pattern unchanged.
const content: OnePagerContent = {
  industry: 'ENERGY',
  client: 'GE Digital',
  role: 'Sr. Staff UX Product Designer',
  headline:
    'Customers were disabling the very system built to help them. Delivering what they actually needed won them back.',
  sceneSetter:
    "The GE Power Conversion Visor Service Portal was built as a pilot by two hardware engineers in Berlin, giving field engineers remote access to marine power systems. It hadn't cut warranty claims, driven service-contract sales, or reduced downtime, and every dropped connection put a customer's business at risk of losing up to $1M a day. This was GE's highest-profile shot at proving good software could turn Power Conversion around, and failure wasn't an option.",
  sceneSetterPlacement: 'hero',
  heroImage: `${import.meta.env.BASE_URL}workshop.png`,
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Visor Service Portal',
      body: [
        'Came in as UX lead as the team shifted from engineering-led to human-centered process.',
        "Thirty-five field interviews across France, Germany, and England kept surfacing the same insight: engineers didn't need a better connection to headquarters, they needed the diagnostic data itself, fast enough to act on before a customer lost more time.",
        'The original design leaned on a live remote-desktop connection over an unreliable satellite link. When it dropped, the only fallback was flying a colleague out by helicopter. The pivot: stop delivering the interface and start delivering the artifact, a failure notification, then a second notification when the diagnostic trip-report file was ready, so the engineer could diagnose from the file itself in minutes without needing the connection to hold.',
        'The old pilot was disliked enough that customers were "accidentally" unplugging it, costing the sales team business. The system that came out of the pivot became standard issue on every Power Conversion marine system, a deal closer for salespeople instead of a deal breaker.',
        "That trust opened a door the original project never had: an invitation to interview a drill ship's entire crew off the coast of Louisiana, electricians to the ship's captain, over three nights aboard, HUET-certified (helicopter water-escape training) to get there. What came back from it went on to shape Power Conversion's broader product and service roadmap for the whole Marine vertical, not just this one system.",
      ],
      proofPoints: [
        '$180M, 10-year service contract',
        'Time-to-data: 6-8 hours → 10-15 minutes',
        'Field engineers could self-diagnose ~80% of issues from the trip-report file alone',
        "Promoted onto GE's Asset Performance Management team",
      ],
      imageCount: 2,
      images: [`${import.meta.env.BASE_URL}visor-fleet.png`, `${import.meta.env.BASE_URL}sitestatus2.png`],
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
