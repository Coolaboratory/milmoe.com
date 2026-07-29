import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { WorkStub } from '../../src/components/WorkStub'

// Finalized headline (Andrew's pick, 2026-07-28), verbatim from
// Milmoe_WorkSample_Ontrak-Health.md. Layout still pending Andrew's choice
// among Grant's mockup variants — see WorkStub for the provisional body.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkStub headline="Built the MVP that freed Ontrak's Member Outreach team from an overloaded AI/ML team's query backlog, a tool the AI/ML team itself later adopted to run its own campaigns." />
  </StrictMode>
)
