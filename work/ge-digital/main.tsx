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
    "GE Power Conversion's Visor Service Portal, a pilot built by two hardware engineers, was failing badly enough that customers were unplugging it. Selected as UX lead to find out why and turn it around, with the business's highest-profile software bet riding on it.",
  sceneSetterEmphasis: "GE Power Conversion's Visor Service Portal",
  sceneSetterPlacement: 'section',
  heroImage: `${import.meta.env.BASE_URL}workshop-wide.png`,
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Research, Pivot, Trust',
      body: [
        "35 field interviews across France, Germany, and England found engineers didn't want a live connection, they wanted the diagnostic data, fast.",
        'Pivoted the entire design: stop delivering an interface over a fragile satellite link, start delivering the artifact itself as a notification and file.',
        "That trust earned an invitation to interview an entire drill ship's crew off Louisiana, reshaping GE Power Conversion's product roadmap for the whole Marine vertical.",
      ],
      proofPoints: [
        { label: 'NEW REVENUE', value: '$180M, 10-year service contract' },
        { label: 'SPEED', value: 'Time-to-data: 6 hours → 15 minutes' },
        { label: 'CAREER GROWTH', value: "Promoted onto GE's Asset Performance Management team" },
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
