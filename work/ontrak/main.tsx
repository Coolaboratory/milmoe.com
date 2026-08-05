import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// Ontrak Health one-pager content. Source facts: Team Inbox/
// Milmoe_WorkSample_Ontrak-Health.md. Consolidated to a single skim-to-contact
// section per the 2026-08-01 rework: Campaign Builder / List Manager as the
// lead hook point, the telehealth portal folded in as a third, supporting
// hook point rather than its own section. Full original two-section copy is
// archived in Andrew Outbox/WorkSample_Ontrak-Health_full-text.txt.
const content: OnePagerContent = {
  industry: 'HEALTHCARE',
  client: 'Ontrak Health',
  role: 'Principal UX Product Designer',
  headline:
    "Ontrak's Member Outreach team was stuck waiting on an overloaded AI/ML team for every customer query. I designed the MVP that fixed it, a tool the AI/ML team later adopted to run its own campaigns.",
  sceneSetter:
    "Ontrak's Member Outreach team was stuck waiting on an overloaded AI/ML team for every data query, and every delay cost conversions. Asked to work directly with the CTO to design a fix.",
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Campaign Builder / List Manager',
      body: [
        'Worked directly with the CTO and a two-person eng team, in spare time over about a year, to ship a lean MVP from existing components, ready for an upcoming client sales call.',
        'Stakeholder feedback reshaped it into "List Manager," trading a map view for system responsiveness once real usage patterns emerged.',
        'Separately, when I joined the company, we paused the design system to ship a HIPAA-compliant, white-labeled telehealth portal in 60 days, under investor pressure, as competitors were already live.',
      ],
      proofPoints: [
        'List Manager adopted by the AI/ML team itself to run its own campaigns',
        'Won PM and Visual Design resources to keep it going',
      ],
      imageCount: 2,
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
