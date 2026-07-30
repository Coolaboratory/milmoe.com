import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// Blue Origin one-pager content. Single-narrative page. This is the
// weakest of the three proof-wise — only "proposed" is confirmed, no
// hard outcome number and no BlueGPT/RegEx-automation claim (both
// unconfirmed per Team Inbox/Milmoe_WorkSample_Blue-Origin.md and the
// project_milmoe_blue_origin_facts memory). Don't paper over that here.
const content: OnePagerContent = {
  industry: 'AEROSPACE',
  client: 'Blue Origin',
  role: 'Lead User Experience Designer',
  headline:
    'Rocket engineers were copying and pasting between siloed systems, so I proposed a unified data insights pipeline connecting test planning through flight outcomes.',
  sceneSetter:
    'Engineering-led team in academic-to-commercial transition. Rocket engines generate massive telemetry across test and flight phases; engineers had to interpret it fast between launches, under ITAR compliance constraints.',
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Data Insights Pipeline',
      body: [
        'Embedded directly with the engineering team: a technical product manager, five software engineers, and Andrew. Found engineers manually constructing complex queries every time, switching between siloed testing, scripting, analysis, and visualization tools, and cross-referencing real-time data against historical data under real launch-rate pressure, with no visibility into data readiness or test schedules.',
        'Identified query construction as the primary cognitive bottleneck and proposed an end-to-end pipeline connecting test planning through flight outcomes, embedded inside the existing query workflow rather than a separate standalone tool.',
      ],
      proofPoints: [
        'Proposed an end-to-end data insights pipeline',
        'Adopted the BlueKit enterprise design system',
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
