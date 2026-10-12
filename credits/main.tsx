import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import { OnePager, type OnePagerContent } from '../src/components/OnePager'
import { Credit, ExternalLink as Ext, ToolCredit } from '../src/components/CreditsLinks'

// Credits page content. Copy source: Andrew Inbox/Milmoe_Credits_Copy_v1.md
// (Ruth), with Andrew's decisions applied 2026-10-12: story Version B (no
// agent names), "X (formerly Twitter)" instead of "Twitter", and links for
// the photographers and Claude Code. Never link or mention the portfolio
// PDF on this page.

const content: OnePagerContent = {
  industry: 'CREDITS',
  client: 'Site building resources',
  role: '',
  headline: 'I designed and built this site with a small team of AI agents I set up in Claude Code CLI.',
  sceneSetter: '',
  wideBody: true,
  sections: [
    {
      eyebrow: 'THE STORY',
      title: 'How it was made',
      body: [
        'A chief of staff coordinates the work and checks it before it reaches me. Specialists handle UX and strategy, front-end development, copywriting, and research, and an HR agent brings on a new specialist when the work calls for one. I set the direction and made the calls: the positioning, the layout, the typefaces, the timing of each animation. Every plan waited on my approval before the next step began, and when something looked a pixel off, I sent it back.',
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
            <Credit label="Site structure design inspiration">
              <span className="whitespace-nowrap">
                <Ext href="https://www.chackerman.com/">Chad Ackerman</Ext>
              </span>
            </Credit>,
          ],
        },
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
            <ToolCredit description="The library that builds the interface" href="https://react.dev" name="React" />,
            <ToolCredit description="The build tool and local preview server" href="https://vite.dev" name="Vite" />,
            <ToolCredit description="JavaScript with type checking to catch errors" href="https://www.typescriptlang.org" name="TypeScript" />,
            <ToolCredit description="The styling system for layout and design" href="https://tailwindcss.com" name="Tailwind CSS" />,
            <ToolCredit description="Anthropic's tool where my AI team works" href="https://claude.com/product/claude-code" name="Claude Code" />,
          ],
        },
        {
          heading: 'Hosted and deployed',
          items: [
            <ToolCredit description="Where the site is hosted" href="https://pages.github.com" name="GitHub Pages" />,
            <ToolCredit description="The automation that publishes each approved change" href="https://github.com/features/actions" name="GitHub Actions" />,
          ],
        },
        {
          heading: 'Video animation',
          items: [
            <ToolCredit description="The AI tool that animated the drillship photo" href="https://runway.com" name="Runway" />,
          ],
        },
        {
          heading: 'Fonts',
          items: [
            <ToolCredit description="Heading typeface from Google Fonts" href="https://fonts.google.com/specimen/Instrument+Sans" name="Instrument Sans" />,
            <ToolCredit description="Body typeface from Google Fonts" href="https://fonts.google.com/specimen/Public+Sans" name="Public Sans" />,
          ],
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
