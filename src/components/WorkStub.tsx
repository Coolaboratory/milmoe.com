import { Header } from './Header'
import { Footer } from './Footer'

// Minimal, obviously-provisional stub for a case-study one-pager. Andrew
// hasn't picked a final layout from Grant's mockup variants yet, so this
// only proves the URL resolves to a real, distinct page — real Header/Footer,
// the finalized (or placeholder) headline, and a note that the layout is
// still coming. Replace the body of this component once a layout is chosen;
// the routing/build wiring in vite.config.ts and the per-page main.tsx
// entries won't need to change.
export function WorkStub({ headline }: { headline: string }) {
  return (
    <main>
      <Header hidden={false} />
      <section className="bg-light px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-prose mx-auto">
          <h1 className="font-display font-bold text-[26px] lg:text-[32px] text-text-light leading-snug mb-4">
            {headline}
          </h1>
          <p className="font-body text-[15px] text-text-light/50 italic">
            Layout in progress — full case study coming soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
