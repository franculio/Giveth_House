# Giveth House Style Guide

Version 1.0 (draft), November 2026. Owner: Franco Ruiz.

This guide defines how giveth.house looks and sounds. It is based on the
[Giveth Style Guide 2.0](https://github.com/Giveth/giveth-design-assets/blob/master/01-style-guide/Giveth%20Style%20Guide%202.0.pdf)
so the site feels like part of the same family, but Giveth House is a separate project with its own logo and
identity. Where this guide and Giveth's differ, this guide wins for anything on giveth.house.

A visual version of the palette, type and components is in [`style-guide.html`](style-guide.html) (open it in a browser) and as a printable PDF, [`giveth-house-style-guide.pdf`](giveth-house-style-guide.pdf).

## 1. Principles

1. **Family, not copy.** We share Giveth's typography family, text and action colors, neutrals and yellow. We keep our own
   logo and the stacked-frame shape.
2. **Warm, open, intentional.** The house is a home for builders, not a hotel or a startup office. Design should feel
   welcoming and clear, never corporate or loud.
3. **Color has a job.** Indigo carries text, grape carries actions, yellow carries warmth. Do not use every color on
   one screen (Giveth's own rule too).
4. **Readable first.** Every text and background pair in section 4 meets WCAG AA (4.5:1) unless marked "large text only".
5. **Real over stock.** Use real photos of the house and its people.

## 2. Our relationship to Giveth

- Giveth House is the physical home of the Giveth Galaxy. We were born from Giveth and say so, but we are an independent
  project.
- **Never use Giveth's logo as ours**, and never imply Giveth endorses something it has not. Our own logo is the
  stacked-frame lockup in section 3.
- When we show Giveth (or any partner) as a partner, we use the logo they publish, unmodified, in its own colors, with
  clear space around it. This follows Giveth's own rules: no stretching, rotating, recoloring, outlines or effects.
- Partner logos sit in one row at similar visual height. One exception: Hubs Network publishes only a white logo for dark
  backgrounds, so we show it in dark gray (`#111827`) on light backgrounds. If Hubs Network provides a dark version, use
  that instead.

## 3. Logo

### Files

| File | Use |
|---|---|
| `src/assets/brand/giveth-house-logo.svg` | Full logo with the line "WEB 3 SPACE FOR GOOD". Use when the logo is large (hero, social image, print, guest guide). |
| `src/assets/brand/giveth-house-logo-compact.svg` | "Giveth house" frames only, no line. Use in the header, footer and anywhere small. |

Both SVGs have no fixed color: they take the CSS text color of the element they sit in (`color` or `text-*`). Set the
color, not the file. Only black and white are allowed.

Both files start at 0,0 and carry no internal ids, so the site inlines them with `astro-icon` (folder set in
`astro.config.mjs`). The logo was vectorized from the original 900 px artwork: frames are exact geometry, letters follow the original shapes.
If the original vector file or typeface turns up, replace these SVGs with it.

### Colors

| Logo color | On | Notes |
|---|---|---|
| Black `#000000` | White, Bone, Athens Gray, Dandelion | Default. 21:1 on white, 15:1 on Dandelion. |
| White `#ffffff` | Black, Indigo, Grape | For dark or saturated backgrounds. 21:1 on black, 16:1 on indigo, 7.35:1 on grape. |

### Clear space

Keep an empty margin on every side equal to **x = the height of the capital "G"** in "Giveth" (about 17% of the logo's
width). Nothing else (text, edges, other logos) enters that margin.

### Minimum size

| Version | Minimum width |
|---|---|
| Full logo (with line) | 240 px on screen, 60 mm in print |
| Compact logo | 80 px on screen, 20 mm in print |

Below that, the frame stroke and the line become hard to read. Use the compact version or just the page title.

### Do not

- Stretch, skew or rotate it.
- Rearrange the two frames or move the line.
- Put it in a box, add outlines, shadows, glows or gradients.
- Change its colors: it is black or white, nothing else.
- Place it on busy photos or low-contrast backgrounds.
- Retype it in another font.

## 4. Color

### Tokens

Hex values come from the colored swatches in the Giveth guide. **The hex labels printed in that PDF contain errors**
(for example, Blue Violet is printed as `#A258A7` but is `#3C14C4`), so do not copy values from its text.

**Warm accent and logo black**

| Token | Hex | Use |
|---|---|---|
| `dandelion` | `#fed670` | The one warm accent: section background, highlighted words, badges, hover surfaces. Shared with Giveth. Text on it: indigo (11.6:1) or black (15:1). |
| Black | `#000000` | Logo only. For text use indigo. |

**Giveth family colors (shared)**

| Token | Hex | Use |
|---|---|---|
| `ink` (Giveth Indigo) | `#1b1657` | All text and headings on light backgrounds; dark section backgrounds. 16.2:1 on white. |
| `grape` | `#5326ec` | Buttons and other actions, links, focus rings. 7.35:1 on white. White text on it: 7.35:1. |
| `grape-dark` (Giveth Blue Violet) | `#3c14c4` | Hover and pressed state of grape. |
| `lavender` | `#8668fc` | Soft accents, illustrations, tinted backgrounds. Not for text. |
| `lavender-300` (ours) | `#b9a9ff` | Links and focus rings on indigo backgrounds. 7.8:1 on indigo. A lighter tint of Giveth's Lavender; not in Giveth's guide. |

**Accent colors (use sparingly)**

| Token | Hex | Use |
|---|---|---|
| `aquamarine` | `#2fc8e0` | Illustrations, charts, status. Never as text on white (2.0:1). |
| `tulip` | `#e1458d` | Illustrations, charts. Never as small text on white (3.9:1). |
| `ocean` | `#165ffa` | Illustrations, charts, informational status (5.2:1 on white, so usable for text). |

**Neutrals**

| Token | Hex | Use |
|---|---|---|
| `shark` | `#1d1e1f` | Near-black for rare cases (dark UI chrome, code). |
| `ink-muted` (ours) | `#5d6283` | Secondary text and captions on light backgrounds. 5.9:1 on white, 5.5:1 on Bone. |
| `botticelli` | `#d7ddea` | Dividers, disabled states; muted text on indigo (11.9:1). |
| `athens` (Athens Gray) | `#ebecf2` | Borders, chips, subtle surfaces. |
| `bone` | `#f7f7f9` | Alternate section background, card background on white. |
| White | `#ffffff` | Default page background. |

Giveth prints `#7b809f` for its small captions. That is only 3.9:1 on white, so we use `ink-muted` instead.

### Proportions

Over one page, roughly: neutrals and white 60%, indigo and grape 30%, dandelion 10%. Giveth caps its
secondary colors at 50% of a design; we stay well under that.

### Approved pairs

| Text | Background | Ratio | Use |
|---|---|---|---|
| Ink | White | 16.2:1 | Default |
| Ink | Bone / Athens Gray | 15.1:1 / 13.7:1 | Alternate sections |
| Ink | Dandelion | 11.6:1 | Warm sections |
| Ink-muted | White / Bone | 5.9:1 / 5.5:1 | Secondary text |
| White | Grape | 7.35:1 | Buttons |
| White | Ink | 16.2:1 | Dark sections |
| Dandelion | Ink | 11.6:1 | Highlights on dark |
| Lavender-300 | Ink | 7.8:1 | Links on dark |
| Grape | White / Bone | 7.35:1 / 6.9:1 | Links |
| Aquamarine / Tulip | White | 2.0:1 / 3.9:1 | Never as text |

## 5. Typography

Two families from the same Red Hat family, both free (SIL OFL):

- **Red Hat Display**, bold to black weights, for headlines. (Giveth uses TeX Gyre Adventor for headlines; Red Hat
  Display is our own choice and sits closer to the weight of our logo.)
- **Red Hat Text**, regular to bold, for everything else. This is the same body font Giveth uses.

Self-host both from npm so visits do not depend on Google:
`@fontsource-variable/red-hat-display` and `@fontsource-variable/red-hat-text`.

### Scale

Headlines are sentence case, never all caps (the only all-caps text is the small overline label and the line in the logo).

| Role | Family and weight | Mobile / desktop size | Line height | Tracking |
|---|---|---|---|---|
| H1 | Display 800 | 40 / 60 px | 1.05 | -0.02em |
| H2 | Display 700 | 30 / 40 px | 1.15 | -0.01em |
| H3 | Display 700 | 20 / 24 px | 1.3 | 0 |
| Lead | Text 400 | 18 / 20 px | 1.6 | 0 |
| Body | Text 400 | 16 px | 1.6 | 0 |
| Small | Text 400 | 14 px | 1.5 | 0 |
| Overline | Text 600, uppercase | 12 px | 1.4 | 0.12em |
| Button | Text 600 | 14-16 px | 1 | 0 |

Rules: body text never below 16 px (14 px only for captions and metadata); keep lines to 65-75 characters; one H1 per
page; do not skip heading levels.

## 6. Layout and spacing

- Spacing unit is 4 px. Prefer 8, 16, 24, 32, 48, 64, 96.
- Page container: max width 72rem (`max-w-6xl`), 16 px side padding on mobile. Reading text: max 48rem.
- Section rhythm: 64 px top and bottom on mobile, 96 px on desktop. Related items 16-24 px apart.
- Section backgrounds alternate: white, bone, occasionally dandelion (warm moment) or ink (one dark band per page at most).
- Corner radius: 8 px for buttons and inputs, 16 px for cards and photos, full pill for chips.
- Borders are 1 px `athens`. Shadows are rare: `shadow-sm` on cards, nothing heavier.
- Mobile first. Everything must work at 375 px wide with no horizontal scroll.

### The frame motif

The logo is two outlined boxes stacked and offset. We can echo it once per page, no more: a thick (3-4 px) outline box in
`ink` around a key phrase or a card, optionally with a second offset outline behind it. Use it for one highlight, for
example the donation callout. It should feel like a signature, not wallpaper.

## 7. Components

The site builds these with three shared components in `src/components`: `Button.astro`, `Card.astro` and `Chip.astro`. Use them instead of writing the classes by hand.

**Buttons**
- Primary: `grape` background, white text, 8 px radius, 44 px tall minimum, 24 px horizontal padding. Hover `grape-dark`.
  One primary button per section.
- Secondary: white background, 2 px `ink` border, `ink` text. Hover fills with `ink` and turns the text white.
- On dark (`ink`) sections: primary becomes white with `ink` text; secondary is a 2 px white outline with white text.
- Disabled: `botticelli` background, `ink-muted` text.
- Focus (all): 2 px ring in `grape` with 2 px offset (`lavender-300` on dark). Never remove the focus ring.

**Links**: `grape`, underlined, hover `grape-dark`. On dark sections `lavender-300`. External links open in a new tab and
say so to screen readers.

**Cards**: white or bone, 1 px `athens` border, 16 px radius, 24 px padding, `shadow-sm` at most.

**Chips** (events, partner names): pill, `athens` background, `ink` text, 14 px, 12 px by 6 px padding.

**Header**: white, 1 px `athens` bottom border, black compact logo 48 px tall (about 84 px wide) on the left, links in `ink`, one primary button
("Write to us"). Sticky.

**Footer**: `ink` background, white text, `lavender-300` links, compact logo in white.

**Forms**: there are none today. If added: 44 px inputs, 1 px `botticelli` border, `grape` focus ring, labels always visible.

**Icons**: Tabler outline icons, 1.5 px stroke, `ink` or `grape`; 20-24 px.

## 8. Imagery

- Real photos of the house, people and events. Warm, natural light, people at ease. No stock photos, no staged handshakes.
- Photos are 16 px rounded, optimized by Astro (`<Image>`, WebP). Never upload originals larger than needed.
- Every photo has meaningful alt text describing what is in it. Decorative images get empty alt.
- Do not show the exact street address, house number or door in any photo or caption.
- Do not publish photos with identifiable guests without their OK.

## 9. Voice and content rules

Voice: warm, casual, community-first, open but intentional. Values without preaching. Short sentences, plain words.

Always:
- It is a **gift economy**: "contribute what feels right". No prices, no tiers, no fees, no invoices.
- It is a **home and community space**, never a hotel, hostel, Airbnb or coworking-for-rent.
- Contact starts with a message to [@Giveth_House](https://t.me/Giveth_House) on Telegram.
- Donations point to the `/donate` page, which links to Giveth.

Never:
- Publish the house address (only confirmed guests get it, by message).
- Show prices or tiers, including for Community Supporter.
- Name or quote a guest without their OK. Testimonials need explicit permission.
- Use stats beyond those approved ("500+ visitors", "since 2017", 7,500+ guest-nights).

Spelling: use one English variety across the site. Today it is mixed (British "neighbourhood", "organiser", "centre" and
American "neighborhood", "organize" both appear). Decide once, then fix the odd ones (see section 12).

## 10. Accessibility

- Text contrast: 4.5:1 for normal text, 3:1 for text at 24 px or 18.66 px bold and larger, and for icons and UI outlines.
- Everything works with the keyboard; focus is always visible.
- Touch targets at least 44 by 44 px.
- Respect `prefers-reduced-motion`: scroll animations must be disabled or reduced for those users.
- Heading order is logical; the skip link stays.
- Link text says where it goes ("How to donate"), not "click here".

## 11. Implementation (next step)

### Tailwind v4 tokens

Add to `src/styles/global.css` after the imports:

```css
@theme {
  --font-display: "Red Hat Display Variable", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Red Hat Text Variable", ui-sans-serif, system-ui, sans-serif;

  --color-ink: #1b1657;
  --color-ink-muted: #5d6283;
  --color-grape: #5326ec;
  --color-grape-dark: #3c14c4;
  --color-lavender: #8668fc;
  --color-lavender-300: #b9a9ff;
  --color-dandelion: #fed670;
  --color-aquamarine: #2fc8e0;
  --color-tulip: #e1458d;
  --color-ocean: #165ffa;
  --color-shark: #1d1e1f;
  --color-botticelli: #d7ddea;
  --color-athens: #ebecf2;
  --color-bone: #f7f7f9;
}
```

Then `bg-grape`, `text-ink`, `border-athens`, `font-display` and so on work everywhere.

### Migration map

The site currently uses Tailwind's default grays and system fonts. Replace as follows:

| Today | Becomes |
|---|---|
| `text-gray-900` (109 uses) | `text-ink` |
| `text-gray-600`, `text-gray-700`, `text-gray-500` | `text-ink-muted` |
| `text-gray-300`, `text-gray-400` on dark | `text-botticelli` |
| `bg-black` buttons and `hover:bg-gray-800` | `bg-grape` and `hover:bg-grape-dark` |
| `bg-gray-900` dark band | `bg-ink` |
| `bg-gray-50` | `bg-bone` |
| `bg-gray-100` | `bg-athens` |
| `border-gray-100/200/300` | `border-athens` |
| `ring-black` | `ring-grape` |
| Headings (`h1`-`h3`) | add `font-display` |
| Text "Giveth House" in header | compact logo SVG |

### Suggested order of work

Status on 2026-11-06: steps 1 to 5 are applied on the site; only step 6 (the social-sharing image) is open.

1. Fonts and tokens in `global.css`, with `font-sans` on the body.
2. Replace colors with the migration map above, page by page.
3. Header and footer with the logo.
4. Button, card and chip styles, as shared patterns.
5. Add `prefers-reduced-motion` handling to the scroll animations.
6. Social-sharing image (`og-image.png`) built from the full logo on dandelion or ink.

## 12. Open decisions and known gaps

- **Dark mode** is not defined. The site is light only for now.
- **Pattern and illustration language.** Giveth uses letter patterns. Ours could grow from the frame motif; not designed yet.
- **Logo source.** The SVG is a faithful trace, not the original vector. Replace if the original appears.
- **Giveth's PDF has wrong hex labels** (see section 4). If Giveth publishes a corrected version, re-check our shared colors.
- **Lavender-300 and ink-muted** are our own additions, chosen to pass contrast where Giveth's values do not.
- **English spelling variety** is mixed (British and American). Pick one and align the copy.
- **Spanish version** is paused; when it returns, check that headlines still fit at 40 px on mobile (Spanish runs longer).
- **Social-sharing image** is still missing.
