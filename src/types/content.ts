import type { StaticImageData } from 'next/image';

export type TNavLink = { label: string; href: string };

export type TStat = {
  odometer: string[];
  suffix?: string;
  label: string;
  description: string;
  variant: 'one' | 'two' | 'three' | 'four';
};

export type TProject = {
  name: string;
  sector: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

export type TProcessStep = {
  step: string;
  title: string;
  description: string;
  img: StaticImageData;
  alt: string;
};

export type TService = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export type TTestimonial = {
  quote: string;
  name: string;
  rating: number;
};

export type TBlogPost = {
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

export type TFaq = {
  question: string;
  answer: string;
};
