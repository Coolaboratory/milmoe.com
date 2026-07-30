import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// Ontrak Health one-pager content. Locked, source of truth:
// Team Inbox/Milmoe_WorkSample_Ontrak-Health.md. Two sequential
// initiatives — Campaign Builder / List Manager leads (per Andrew, "the
// most relevant experience to today"); the telehealth portal is the
// shorter, supporting beat.
const content: OnePagerContent = {
  industry: 'HEALTHCARE',
  client: 'Ontrak Health',
  role: 'Principal UX Product Designer',
  headline:
    "Ontrak's Member Outreach team was stuck waiting on an overloaded AI/ML team for every customer query. I designed the MVP that fixed it, a tool the AI/ML team later adopted to run its own campaigns.",
  sceneSetter:
    "Ontrak was a fast-growing startup whose AI/ML team was heads-down on infrastructure, leaving the Member Outreach team stuck waiting on custom data queries — and every delay cost conversions.",
  sections: [
    {
      eyebrow: 'LEAD INITIATIVE',
      title: 'Campaign Builder / List Manager',
      body: [
        'Working directly with the CTO — stakeholder management, concept design, rapid prototyping — a small team (the CTO, one engineer, one UI engineer, and Andrew) spent spare time over about a year turning sketches into a lean, single-page MVP built from existing components, ready in time for an upcoming client sales call: choose a health plan, see members on a map for scale and geography, and a table of existing queries. Stakeholder feedback renamed it List Manager and reworked the flow around how Outreach actually worked — trading the map view for more responsive system performance.',
      ],
      quote:
        'My contribution was taking the time to understand the urgency and priority of all the work I was doing, and then pulling forward the tasks that would have the greatest impact on the business at that specific time… so the moment it was completed, we could pivot to the next task.',
      proofPoints: [
        'Adopted by the AI/ML team itself to run its own campaigns.',
        'Won PM and Visual Design resources to keep going.',
      ],
      imageCount: 2,
    },
    {
      eyebrow: 'ALSO AT ONTRAK',
      eyebrowMuted: true,
      title: 'HIPAA-Compliant Telehealth Portal',
      metric: {
        value: '60 days',
        caption: 'Concept to launch, under investor pressure, with a competitor already live.',
      },
      body: [
        "Paused the design system to reskin the site around a white-label portal's constraints — a seamless Member/portal login experience as a result, not just an assertion of moving fast.",
      ],
      quote:
        'It demonstrates my ability to be flexible and business outcome focused. A strict by-the-book UX designer would have floundered.',
      imageCount: 1,
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
