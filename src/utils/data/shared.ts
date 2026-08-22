/**
 * Textos que se repiten en varias secciones (eyebrows, títulos de dos tonos).
 */

export const FOOTER = {
  email: 'hi@livinor.com ',
  form: {
    placeholder: 'Enter your mail',
    submit: 'Submit Now',
    waiting: 'Please wait...',
    success: 'Thank you! Your submission has been received!',
    error: 'Oops! Something went wrong',
  },
  taglineFirst: 'Designs that define ',
  taglineSpan: 'your space',
  quickLinksTitle: 'Quick links',
  copyright: 'Copyright © Livinor | Designed by',
  copyrightLink: { label: 'Theme Sleek', href: 'https://webflow.com/templates/designers/theme-sleek' },
  poweredBy: 'Powered by',
  poweredByLink: { label: 'Webflow', href: 'https://webflow.com/' },
} as const;

// ─────────────────────────────────────────────────────────────
// Eyebrows (los 8, en orden de aparición)
// ─────────────────────────────────────────────────────────────
export const EYEBROWS = [
  'About Us', 'Our Projects', 'Our Process', 'Our Services',
  'Advantages', 'Featured Products ', 'Testimonials', 'Our Blogs',
] as const;

// ─────────────────────────────────────────────────────────────
// Títulos de dos tonos (rotador vertical)
// ─────────────────────────────────────────────────────────────
export const TWO_TONE_HEADINGS = [
  { first: 'Our Featured', second: 'work' },
  { first: 'Why choose',   second: 'us' },
  { first: 'Explore Our',  second: 'Collection' },
  { first: 'Design',       second: 'Insights' },
] as const;
