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
    'Can an astronautics company scale if its engineers are stuck moving files?',
  heroImage: `${import.meta.env.BASE_URL}be3-test-wide.png`,
  sceneSetter:
    'Rocket flight and component testing generated enormous volumes of sensor data. Although roughly 2,000 Responsible Engineers across Blue Origin could search and retrieve that data through a shared data lake, many still relied on spreadsheets, complex directory searches, and manual file transfers that took up to eight hours. The product team prioritized backend performance while overlooking the user experience problems created by siloed software and inconsistent, bespoke workflows.',
  sceneSetterPlacement: 'section',
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Research, Reframe, Velocity',
      body: [
        'I interviewed 30+ flight, propulsion, and test engineers on-site to understand where the platform succeeded or failed. Over half had abandoned it as too slow, reverting to manual workarounds that consumed engineering time and five figures in monthly storage costs.',
        'The findings shifted my strategy from optimizing query performance to redesigning the workflows engineers struggled with. I designed the test and flight data insights pipeline, connecting siloed applications across the rocket component lifecycle, from design and testing through flight and maintenance.',
        'I also designed and delivered a near-real-time launch data visualization tool in weeks, enabling subject matter experts to compare live and historical data. It operated one degree from the Mission Control Network, close enough to support pre-launch and in-flight decisions without risk of disrupting critical systems.',
      ],
      proofPoints: [
        { label: 'ADOPTION', value: 'UX Research built trust, advocacy, and broader adoption' },
        { label: 'PIPELINE', value: 'Designed a data insights pipeline spanning the component lifecycle' },
        { label: 'TRUST', value: 'Extended access to near-real time data without compromising Mission Control reliability' },
      ],
      imageCount: 2,
      images: [
        `${import.meta.env.BASE_URL}ng2-liftoff.jpg`,
        `${import.meta.env.BASE_URL}twitter-post.png`,
      ],
      imagesUncropped: true,
      imageCredit: { label: 'Blue Origin Images', href: 'https://www.blueorigin.com/gallery' },
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
