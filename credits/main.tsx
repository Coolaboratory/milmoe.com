import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import { OnePager, type OnePagerContent } from '../src/components/OnePager'
import { Credit, ExternalLink as Ext } from '../src/components/CreditsLinks'

// Credits page content. Copy source: Andrew Inbox/Milmoe_Credits_Copy_v1.md
// (Ruth), with Andrew's decisions applied 2026-10-12: story Version B (no
// agent names), "X (formerly Twitter)" instead of "Twitter", and links for
// the photographers and Claude Code. Never link or mention the portfolio
// PDF on this page.

const content: OnePagerContent = {
  industry: 'CREDITS',
  client: 'Site building resources',
  role: '',
  headline: 'How this site was made',
  sceneSetter: '',
  sections: [
    {
      eyebrow: 'THE STORY',
      title: 'How it was made',
      body: [
        'I designed and built this site with a small team of AI agents I set up in Claude Code. A chief of staff coordinates the work and checks it before it reaches me. Specialists handle UX and strategy, front-end development, copywriting, and research, and an HR agent brings on a new specialist when the work calls for one. I set the direction and made the calls: the positioning, the layout, the typefaces, the timing of each animation. Every plan waited on my approval before the next step began, and when something looked a pixel off, I sent it back.',
      ],
      imageCount: 0,
    },
    {
      eyebrow: 'THE STACK',
      title: 'Tools and fonts',
      body: [],
      lists: [
        {
          heading: 'Built with',
          items: [
            <Ext href="https://react.dev">React</Ext>,
            <Ext href="https://vite.dev">Vite</Ext>,
            <Ext href="https://www.typescriptlang.org">TypeScript</Ext>,
            <Ext href="https://tailwindcss.com">Tailwind CSS</Ext>,
            <>
              <Ext href="https://claude.com/product/claude-code">Claude Code</Ext> by Anthropic
            </>,
          ],
        },
        {
          heading: 'Hosted and deployed',
          items: [
            <Ext href="https://pages.github.com">GitHub Pages</Ext>,
            <Ext href="https://github.com/features/actions">GitHub Actions</Ext>,
          ],
        },
        {
          heading: 'Video animation',
          items: [<Ext href="https://runway.com">Runway</Ext>],
        },
        {
          heading: 'Fonts',
          items: [
            <>
              <Ext href="https://fonts.google.com/specimen/Instrument+Sans">Instrument Sans</Ext>, from Google Fonts
            </>,
            <>
              <Ext href="https://fonts.google.com/specimen/Public+Sans">Public Sans</Ext>, from Google Fonts
            </>,
          ],
        },
      ],
      imageCount: 0,
    },
    {
      eyebrow: 'THE IMAGES',
      title: 'Image and video credits',
      body: [],
      lists: [
        {
          items: [
            <Credit label="New Glenn liftoff, BE-3 engine test, and Blue Origin work image">
              courtesy of <Ext href="https://www.blueorigin.com/gallery">Blue Origin</Ext>.
            </Credit>,
            <Credit label="Blue Origin X (formerly Twitter) image">
              screenshot from a public Blue Origin video posted on X.
            </Credit>,
            <Credit label="Drillship video">photo by Andrew G Milmoe, animated with Runway.</Credit>,
            <Credit label="Interviewing photo of Andrew">
              photo by <Ext href="https://www.jxmendel.com/">Joanne Mendel</Ext>.
            </Credit>,
            <Credit label="Ontrak Health work photo and detail image">
              photo by{' '}
              <Ext href="https://www.snaplogic.com/company#:~:text=Jeremiah%20Stone">Jeremiah Stone</Ext>,
              retouched with ChatGPT.
            </Credit>,
            <Credit label="Logos">
              Blue Origin, GE Digital, and Ontrak Health logos are trademarks of their respective owners, used
              here to identify past work.
            </Credit>,
            <Credit label="Everything else">
              sketches, diagrams, screens, and other photos are my own work.
            </Credit>,
          ],
        },
      ],
      imageCount: 0,
    },
    {
      eyebrow: 'THE INSPIRATION',
      title: 'Design inspiration',
      body: [],
      lists: [
        {
          items: [<Ext href="https://www.chackerman.com/">Chad Ackerman</Ext>],
        },
      ],
      imageCount: 0,
    },
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnePager content={content} />
  </StrictMode>
)
