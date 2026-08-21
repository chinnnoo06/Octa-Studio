import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import { BLOG_POSTS, type BlogPost } from '@/lib/home-data';
import { cn } from '@/lib/utils';

/**
 * Blogs (`section.blogs`, y 12066–13613).
 *
 * Dos filas en espejo separadas por el gap de layout (80px): la primera lleva
 * el post grande a la izquierda y la ficha de autor a la derecha; la segunda
 * las intercambia (el dato trae su propio `layout`).
 *
 * El post grande es `flex: 1` (888px = 1320 − 30 − 402) con el título y la
 * fecha en un bloque **absoluto** a `inset: auto 40px 40px`. Sus dos imágenes
 * son las únicas de la página que llevan el gradiente
 * `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))`.
 *
 * En ≤767 el original oculta las fichas de autor.
 */
function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="1" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1 7h16M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BigBox({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className="group rounded-card relative flex-1 overflow-hidden">
      <Image
        src={post.image}
        alt={post.alt}
        width={888}
        height={500}
        className="h-[500px] w-full object-cover transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-105 land:h-[300px]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8))]"
      />
      <div className="absolute inset-[auto_40px_40px] z-[1] flex flex-col gap-5 land:inset-[auto_20px_20px]">
        <h3 className="text-paper font-heading text-h5 uppercase">{post.title}</h3>
        <p className="text-paper font-body text-body flex items-center gap-2.5">
          <CalendarIcon />
          {post.date}
        </p>
      </div>
    </Link>
  );
}

function MiniBox({ post }: { post: BlogPost }) {
  return (
    <div className="bg-card rounded-card min-w-[402px] p-10 tab:min-w-[280px] tab:p-6 land:hidden">
      <div className="flex h-full max-w-[205px] flex-col justify-between gap-10">
        <p className="text-ink font-heading text-h6 uppercase">About Author</p>
        <div className="flex flex-col gap-4">
          <Image
            src={post.authorImage}
            alt={post.authorAlt}
            width={100}
            height={100}
            className="rounded-tile size-[100px] object-cover"
          />
          <p className="text-paragraph font-body text-body">{post.author}</p>
        </div>
        <Button href={post.href} variant="black">
          Read More
        </Button>
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <section data-section="blogs" className="pt-bigsection pb-section">
      <div className="container-livinor">
        <div className="flex flex-col gap-layout">
          <div className="flex items-center justify-between gap-10">
            <div className="flex max-w-[830px] flex-col gap-5">
              <Eyebrow>Our Blogs</Eyebrow>
              <SectionTitle lead="Design" rotating="Insights" className="text-h2" />
            </div>
          </div>

          {BLOG_POSTS.map((post) => (
            <div
              key={post.href}
              className={cn(
                'flex gap-[30px] land:flex-col',
                post.layout === 'image-right' && 'flex-row-reverse',
              )}
            >
              <BigBox post={post} />
              <MiniBox post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
