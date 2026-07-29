import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { WorkStub } from '../../src/components/WorkStub'

// Placeholder copy: GE Digital's one-pager hasn't been drafted yet, so this
// reuses the existing landing-card hook text from workSamples in App.tsx
// verbatim. Swap for finalized one-pager copy once it exists.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkStub headline="A prototype two engineers built became a product the sales team led with. $180M in service contracts; time to data access for field engineers dropped from 8 hours to 15 minutes." />
  </StrictMode>
)
