import type { StaticImageData } from 'next/image';

export type NavLink = { label: string; href: string };
export type MegaMenuColumn = { title: string; links: NavLink[]; noWrap?: boolean };

export type Stat = {
  /** valores del odómetro, de arriba (final) a abajo (inicio de la animación) */
  odometer: string[];
  suffix?: string;          // "+" repetido 5 veces en el DOM
  label: string;
  description: string;
  /** modificador de fondo/bordes: one=blanco, two/three=transparente, four=#fae9ce */
  variant: 'one' | 'two' | 'three' | 'four';
};

export type Project = {
  /** Marca del expositor, leida del propio stand. */
  name: string;
  /** Sector del expositor. Ocupa el sitio del año, que el cliente no nos dio. */
  sector: string;
  href: string;
  image: StaticImageData;
  alt: string;
};
export type ProcessStep = {
  step: string;         
  title: string;          
  description: string;
  img: StaticImageData;
  alt: string;          
};

export type Service = {
  /** ordinal que se pinta en la tarjeta: '01', '02'… */
  number: string;
  title: string;
  description: string;
  href: string;
};

export type BentoTile = {
  id: string;
  title?: string;
  bg?: string;
  images?: { src: string; alt: string }[];
};

export type Product = {
  name: string;             // minúscula en el dato; uppercase por CSS
  price: string;            // "$ 499.00 USD"
  category: string;
  href: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  /** De 0 a 5; se pinta con estrellas. */
  rating: number;
};

export type BlogPost = {
  title: string;
  /** Ya formateada para leer; el orden lo da la posicion en el array. */
  date: string;
  /** Tema. Se pinta como etiqueta sobre la foto. */
  category: string;
  /** Sustituye al autor: al lector le sirve mas saber cuanto le va a costar. */
  readingTime: string;
  excerpt: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

export type Faq = {
  question: string;
  answer: string;
};
