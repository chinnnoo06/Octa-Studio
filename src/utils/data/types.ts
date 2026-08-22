/**
 * Tipos compartidos por los datos de la home.
 */

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
  name: string;
  year: string;
  href: string;
  image: string;
  alt: string;              // "" en las 4
};

export type ProcessStep = {
  step: string;             // "Step 01"
  title: string;            // ojo: step 05 empieza por espacio
  description: string;
  image: string;
  imageMobile?: string;     // solo step 03
  alt: string;              // "Official item"
  hasConnector: boolean;    // steps 1-3 en desktop
};

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: string;
  iconAlt: string;
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
  role: string;
  image: string;
  alt: string;
  rating: number;           // 5 en los 4
};

export type BlogPost = {
  title: string;
  date: string;
  href: string;
  image: string;
  alt: string;
  author: string;
  authorImage: string;
  authorAlt: string;
  /** fila 1 = 'image-left', fila 2 = 'image-right' */
  layout: 'image-left' | 'image-right';
};
