/**
 * Los 5 pasos de la sección Process.
 */

import type { ProcessStep } from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Step 01',
    title: 'Discovery',
    description: 'We start by understanding your style, needs, and vision for the space.',
    image: '/images/pages/home/step-01-discovery.webp',
    alt: 'Official item',
    hasConnector: true,
  },
  {
    step: 'Step 02',
    title: 'Concept Design',
    description: 'Our team creates mood boards and design ideas that capture your aesthetic.',
    image: '/images/pages/home/step-02-concept.webp',
    alt: 'Official item',
    hasConnector: true,
  },
  {
    step: 'Step 03',
    title: 'Planning',
    description: 'Every detail is refined — from layout to materials — for perfect balance and function',
    image: '/images/pages/home/step-03-desktop.webp',
    imageMobile: '/images/pages/home/step-03-mobile.webp',
    alt: 'Official item',
    hasConnector: true,
  },
  {
    step: 'Step 04',
    title: 'Execution',
    description: 'We bring the design to life with precision, care, and expert craftsmanship.',
    image: '/images/pages/home/step-04-execution.webp',
    alt: 'Official item',
    hasConnector: false,
  },
  {
    step: 'Step 05',
    title: ' Final Touch', // ← espacio inicial intencionado
    description: 'A complete review and styling ensure your space feels truly finished and personal.',
    image: '/images/pages/home/step-05-final-touch.webp',
    alt: 'Official item',
    hasConnector: false,
  },
];
