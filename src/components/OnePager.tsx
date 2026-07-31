import { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { getMailtoHref } from '../lib/email'

// Systems Rail layout — the one Andrew picked from Grant's 5 comparison
// mockups (Team Inbox/OntrakOnePager_Mockups/variant-c-systems.html).
// Ported into real Tailwind/React rather than reinvented from a text
// description; see that file for the visual ground truth.
//
// Per Andrew's explicit, non-negotiable call (overriding the more cautious
// recommendation in Grant's scope doc §2): every label/content row on this
// page reuses the exact same grid formula as the landing page's Header,
// Hero, and Grid sections — grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr] —
// so the label and content columns land at the identical horizontal
// position as the homepage, not just a visually similar one.
const RAIL_GRID = 'md:grid-cols-[calc(100%/3_+_9px)_0.75fr_1.5fr]'

export type SectionContent = {
  /** Small caps label above the section title, e.g. "LEAD INITIATIVE". */
  eyebrow: string
  /** Muted eyebrow treatment for secondary/supporting sections. */
  eyebrowMuted?: boolean
  title: string
  /** Body copy, one paragraph per array entry. */
  body: string[]
  quote?: string
  /** A single confirmed hard number, e.g. Ontrak's "60 days". Optional —
   *  not every section has one (see Blue Origin, which has none). */
  metric?: { value: string; caption?: string }
  /** Short declarative proof statements — font-display bold, never mono,
   *  never a fabricated numeric metric. */
  proofPoints?: string[]
  /** Render one full-width visual above this section's rail row, before the
   *  narrower stacked images in the images column. Used for single-narrative
   *  pages (GE Digital, Blue Origin) to give the section a primary visual
   *  distinct from the 1-2 supporting images, mirroring how Ontrak's Lead
   *  section already differentiates its 2 images from body copy. */
  primaryImage?: boolean
  /** How many gray placeholder images stack in this section's images column
   *  (in addition to the optional primary image above). Ignored when
   *  `images` is provided. */
  imageCount: number
  /** Real image srcs to render in the images column, replacing the gray
   *  `imageCount` placeholders with actual `<img>` elements in the same
   *  stacked position/treatment. Leave unset to keep gray placeholders. */
  images?: string[]
}

export type OnePagerContent = {
  industry: string
  client: string
  role: string
  headline: string
  sceneSetter: string
  /** Where the sceneSetter text renders. 'row' (default) is a standalone
   *  full-width row below the hero — Blue Origin and Ontrak's existing
   *  pattern, unchanged. 'hero' embeds the sceneSetter inside the hero rail
   *  itself, alongside the headline and an optional heroImage — GE Digital's
   *  stakes paragraph earns a spot in the hero rather than its own row. */
  sceneSetterPlacement?: 'row' | 'hero'
  /** Secondary supporting image shown in the hero. Only rendered when
   *  sceneSetterPlacement is 'hero'. Sized deliberately small/secondary —
   *  the headline stays the hero's primary content. */
  heroImage?: string
  sections: SectionContent[]
}

/** Alternates light page-bg / tint-bg per row, systematically, matching the
 *  Systems Rail mockup — row weight (Lead vs. Supporting) reads through
 *  tint/spacing/size contrast, never a dark reversal. */
function railBg(index: number) {
  return index % 2 === 0 ? 'bg-[#f7f7f4]' : 'bg-[#e6eaee]'
}

function Rail({
  bg,
  className = '',
  children,
}: {
  bg: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={`px-8 md:px-16 lg:px-24 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

function ImageStack({ count, images }: { count: number; images?: string[] }) {
  if (images && images.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" className="w-full aspect-video object-cover rounded-sm" />
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-full aspect-video rounded-sm bg-gray-300" />
      ))}
    </div>
  )
}

export function OnePager({ content }: { content: OnePagerContent }) {
  const {
    industry,
    client,
    role,
    headline,
    sceneSetter,
    sceneSetterPlacement = 'row',
    heroImage,
    sections,
  } = content
  // Row order: hero(0), scene-setter(1) — only when it renders as its own
  // row — then one entry per section, then the CTA — alternation continues
  // straight through so weight reads consistently no matter how many rows a
  // given page actually has.
  let rowIndex = 0
  const heroBg = railBg(rowIndex++)
  const sceneBg = sceneSetterPlacement === 'row' ? railBg(rowIndex++) : undefined

  // Same hide-on-footer-approach behavior as the landing page's Header —
  // per Andrew's non-negotiable "identical Header/Footer" requirement, this
  // isn't just the same markup, it's the same interaction: the sticky
  // header slides away once the footer scrolls into view.
  const [footerVisible, setFooterVisible] = useState(false)
  useEffect(() => {
    const footerEl = document.getElementById('site-footer')
    if (!footerEl) return
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(footerEl)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Header hidden={footerVisible} />

      <Rail bg={heroBg} className="pt-10 pb-12 md:pb-16">
        <div className={`grid grid-cols-1 ${RAIL_GRID} gap-8`}>
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-body text-[11px] font-medium tracking-widest uppercase text-accent mb-2">
                {industry}
              </p>
              <h1 className="font-display font-bold text-[32px] md:text-[34px] text-text-light leading-tight mb-1">
                {client}
              </h1>
              <p className="font-body text-[15px] text-text-light/60">{role}</p>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}#work`}
              className="font-body text-[14px] font-medium text-accent hover:underline mt-6 md:mt-0"
            >
              ← Back
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="font-display font-semibold text-[22px] md:text-[24px] text-text-light/85 leading-snug max-w-tight">
              {headline}
            </p>
          </div>
        </div>

        {sceneSetterPlacement === 'hero' && (
          <div className={`grid grid-cols-1 ${RAIL_GRID} gap-8 items-start mt-8 md:mt-10`}>
            <p className="font-body text-[15px] text-text-light/60 leading-relaxed">{sceneSetter}</p>
            {heroImage && (
              <div className="md:col-span-2">
                <img
                  src={heroImage}
                  alt=""
                  className="w-full max-w-[240px] aspect-[16/10] object-cover rounded-sm"
                />
              </div>
            )}
          </div>
        )}
      </Rail>

      {sceneSetterPlacement === 'row' && (
        <Rail bg={sceneBg!} className="py-10 md:py-12">
          <div className={`grid grid-cols-1 ${RAIL_GRID} gap-8`}>
            <p className="font-body text-[15px] text-text-light/60 leading-relaxed">{sceneSetter}</p>
            <div className="hidden md:block md:col-span-2" />
          </div>
        </Rail>
      )}

      {sections.map((section, i) => {
        const bg = railBg(rowIndex++)
        return (
          <Rail key={section.title} bg={bg} className="py-12 md:py-16">
            {section.primaryImage && (
              <div className="w-full aspect-video rounded-sm bg-gray-300 mb-10 md:mb-14" />
            )}
            <div className={`grid grid-cols-1 ${RAIL_GRID} gap-8 items-start`}>
              <div>
                <p
                  className={`font-body text-[11px] font-medium tracking-widest uppercase mb-2 ${
                    section.eyebrowMuted ? 'text-text-light/45' : 'text-accent'
                  }`}
                >
                  {section.eyebrow}
                </p>
                <h2 className="font-display font-semibold text-text-light text-[22px] md:text-[26px] leading-snug">
                  {section.title}
                </h2>
              </div>

              <div>
                {section.metric && (
                  <>
                    <p className="font-display font-bold text-text-light text-[32px] md:text-[38px] leading-none mb-2">
                      {section.metric.value}
                    </p>
                    {section.metric.caption && (
                      <p className="font-body text-[15px] text-text-light/70 mb-5">
                        {section.metric.caption}
                      </p>
                    )}
                  </>
                )}

                {section.body.map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="font-body text-[16px] md:text-[17px] text-text-light/85 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.quote && (
                  <blockquote className="font-body italic text-[17px] md:text-[18px] text-text-light/85 leading-relaxed border-l-2 border-accent pl-5 my-6">
                    {section.quote}
                  </blockquote>
                )}

                {section.proofPoints && section.proofPoints.length > 0 && (
                  <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-dashed border-text-light/20">
                    {section.proofPoints.map((point, ppi) => (
                      <p key={ppi} className="font-display font-bold text-[16px] text-text-light">
                        {point}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <ImageStack count={section.imageCount} images={section.images} />
            </div>
          </Rail>
        )
      })}

      <Rail bg={railBg(rowIndex++)} className="py-16 md:py-20">
        <p className="font-display font-semibold text-text-light text-[24px] md:text-[26px] mb-5">
          Let's talk.
        </p>
        <a
          href={getMailtoHref(`Reaching out about ${client}`, 'Hi Andrew,\n\n')}
          className="font-body text-[16px] font-medium text-accent border-b border-accent pb-0.5 hover:opacity-80 transition-opacity"
        >
          Schedule a conversation →
        </a>
      </Rail>

      <Footer />
    </main>
  )
}
