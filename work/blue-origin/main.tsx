import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { OnePager, type OnePagerContent } from '../../src/components/OnePager'

// Blue Origin one-pager content. Updated 2026-08-23: the pipeline is
// operational (not just proposed), the near-real-time visualization tool
// is real and personally witnessed by Andrew in use, and the Mission
// Control Network-adjacent work is accurate — previously flagged as
// unconfirmed, since resolved per Andrew's direct confirmation (see
// project_milmoe_blue_origin_facts memory).
const content: OnePagerContent = {
  industry: 'AEROSPACE',
  client: 'Blue Origin',
  role: 'Lead User Experience Designer',
  headline:
    'Can an aerospace company scale if its engineers are stuck moving files?',
  sceneSetter:
    'Rocket engines generate enormous volumes of test and flight telemetry, and roughly 2,000 engineers across Blue Origin depended on a shared platform, BDMS, to search and retrieve it. In practice, engineers were falling back on spreadsheets, directory diving, and manual file transfers that could run up to 8 hours, workarounds nobody upstream had visibility into. I joined to find out why.',
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Data Insights Pipeline',
      body: [
        "I interviewed close to 30 flight and propulsion engineers on site to find out where the platform was breaking down. A few didn't know it existed. Over half had tried it a year earlier, found it too slow to be worth the trouble, and never went back, defaulting to the manual workarounds that ate their time instead. That scale of abandonment was invisible to the product team; nobody had measured it because nobody had asked.",
        'The findings shifted my strategy from optimizing query performance to redesigning the workflows engineers actually needed: preparation, test, analysis, and decision-making, with the abandoned-user segment as the priority. I designed the test and flight data operations insights pipeline that came out of that reframe, connecting previously siloed applications across the full rocket component lifecycle, from design and testing through flight and maintenance.',
        "I also designed and delivered a near-real-time launch data visualization tool in a matter of weeks, giving subject matter experts a way to compare live and historical data without disrupting the systems they were watching. It ran one degree of separation from the Mission Control Network, close enough to support pre-launch and in-flight decisions without introducing new risk to systems that couldn't afford one.",
      ],
      proofPoints: [
        { label: 'ADOPTION', value: 'Research participants returned as users and brought their teams with them, spreading uptake across roughly 2,000 engineers' },
        { label: 'PIPELINE', value: 'Delivered a data insights pipeline spanning the full rocket component lifecycle, from design and testing through flight and maintenance' },
        { label: 'TRUST', value: 'Built a launch data visualization tool operating one degree from Mission Control, without introducing risk to mission-critical systems' },
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
