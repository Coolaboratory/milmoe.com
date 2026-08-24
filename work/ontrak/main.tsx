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
//
// Rewritten 2026-08-16 (Andrew, approved this session): value-stream-map
// framing replaces the prior "Align, Build, Scale" headline/body/
// proofPoints. AI/ML's List Manager adoption drops from a headline proof
// point to a body-copy mention — sidebar detail, not headline material.
const content: OnePagerContent = {
  industry: 'HEALTHCARE',
  client: 'Ontrak Health',
  role: 'Principal UX Product Designer',
  headline:
    "Mapping the Value Stream: How a 3-person side project supported 135% growth",
  sceneSetter:
    "Ontrak's growth was outpacing its ability to see itself. Claims-to-enrollment ran through Operations, AI/ML, and Clinical teams with no shared model of where members dropped off. Outreach was kept waiting by a research-oriented AI/ML team that routinely deprioritized their queries. The CTO asked me to look into it while maintaining progress on our Care Team Portal.",
  sceneSetterPlacement: 'section',
  heroImage: [
    `${import.meta.env.BASE_URL}ontrak-sketch.png`,
    `${import.meta.env.BASE_URL}ontrak-detail.png`,
  ],
  sections: [
    {
      eyebrow: 'THE WORK',
      title: 'Align, Build, Scale',
      body: [
        "Mapped the claims-to-enrollment value stream to build the shared attrition model that had been missing. That diagnosis traced why outreach stalled: Operations' segment requests were queuing behind a research-oriented AI/ML team's own priorities, with AI/ML acting as de facto gatekeeper of member data.",
        'Designed List Manager, a self-serve query tool that let Operations pull its own outreach segments directly, removing the dependency. AI/ML itself later adopted the tool too.',
        "Paired the value stream model with metrics from the CTO's new Operational Data & Analytics team to design an executive dashboard, giving leadership a shared way to forecast staffing and spot constraints.",
      ],
      proofPoints: [
        { label: 'REACH', value: "Value stream model rolled out org-wide at the CTO's direction" },
        { label: 'ADOPTION', value: "Executive dashboard became operations leadership's OKR instrument" },
        { label: 'OWNERSHIP', value: 'List Manager gave Operations self-serve access, ending its dependency on AI/ML' },
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
