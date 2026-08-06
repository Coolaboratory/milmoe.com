import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// Ontrak Health one-pager content. Source facts: Team Inbox/
// Milmoe_WorkSample_Ontrak-Health.md. Rebuilt 2026-08-06 to match GE
// Digital's information architecture: hero headline distinct from the
// landing card hook, scene-setter sharing the first section's background
// (sceneSetterPlacement: 'section') rather than its own row, one "THE WORK"
// section, three labeled proofPoints. The HIPAA telehealth portal beat is
// dropped from this page per Andrew's call — it stays fully documented in
// the working doc for later reuse, just not part of this narrative anymore.
//
// Public-facing name is "List Manager" only (2026-08-06, Andrew) — the tool's
// original pre-rename name, Campaign Builder, stays in the working doc as
// history but should never appear on the live site.
//
// The Care Team Portal is named in the scene-setter (2026-08-06, Andrew) as
// the reason he was actually brought on — List Manager grew alongside it as
// a side project. This reopens the earlier 2026-07-30 call to hold Care
// Team Portal out of this page entirely; it's still just a passing mention
// here, not a developed section — the working doc has the full initiative.
const content: OnePagerContent = {
  industry: 'HEALTHCARE',
  client: 'Ontrak Health',
  role: 'Principal UX Product Designer',
  headline:
    "Ontrak's growth was hampered by opaque, manual processes splintered across siloed teams. Called in to diagram it, sparking the tool that ended up running the business.",
  sceneSetter:
    "List Manager didn't exist yet, just manual spreadsheets bridging claims data to outreach campaigns, with no shared way for AI/ML, Outreach, and Clinical to see the process end to end. Brought in to align stakeholders on the Care Team Portal, and List Manager grew alongside it as a side project to close that gap.",
  sceneSetterEmphasis: 'List Manager',
  sceneSetterPlacement: 'section',
  heroImage: [
    `${import.meta.env.BASE_URL}ontrak-sketch.png`,
    `${import.meta.env.BASE_URL}ontrak-detail.png`,
  ],
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Align, Build, Trust',
      body: [
        'Served as liaison between the AI/ML and Clinical teams, sketching the claims-to-campaign process on a whiteboard and turning it into a shared diagram the CTO liked enough to ask him to share with the entire organization.',
        'Over about a year of spare time, on a team of one designer and two engineers, that same clarity became List Manager, a lean MVP built from existing components and shipped in time for a client sales call.',
        "The CTO's new Operational Data & Analytics team produced data too complex for stakeholders to use. Combined it with the original diagram to build an executive dashboard, giving leadership a shared way to forecast staffing and spot bottlenecks.",
      ],
      proofPoints: [
        { label: 'ADOPTION', value: 'List Manager adopted by the AI/ML team itself to run its own campaigns' },
        { label: 'REACH', value: "The diagram behind it was shared company-wide at the CTO's request" },
        { label: 'INVESTMENT', value: 'Won dedicated PM and Visual Design resources to keep it going' },
      ],
      imageCount: 3,
      images: [
        `${import.meta.env.BASE_URL}value-stream-map.png`,
        `${import.meta.env.BASE_URL}lm-portfolio.png`,
        `${import.meta.env.BASE_URL}lm-manager.png`,
      ],
      imagesUncropped: true,
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
