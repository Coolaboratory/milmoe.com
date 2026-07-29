import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { WorkStub } from '../../src/components/WorkStub'

// Placeholder copy: Blue Origin's one-pager hasn't been drafted yet, so this
// reuses the existing landing-card hook text from workSamples in App.tsx
// verbatim. Swap for finalized one-pager copy once it exists.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkStub headline="Rocket engineers were copying and pasting between siloed applications. I proposed and shipped a unified data insights pipeline." />
  </StrictMode>
)
