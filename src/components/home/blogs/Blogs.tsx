import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { NewsletterForm } from '@/components/home/blogs/NewsletterForm';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from './BlogCard';
import { BLOG_POSTS, BLOG_NEWSLETTER } from '@/utils/data/blogs';

export const Blogs = () => {
  return (
    <section data-section="blogs" className="bg-thrird py-20 lg:py-25">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-10 px-5">

        <div className="flex flex-col gap-5">
          <Eyebrow>Nuestro Blog</Eyebrow>
          <SectionTitle lead="Lo que aprendimos" rotating="montando" />
        </div>

        {/* Carrusel por debajo de `sm`, rejilla desde ahí. Igual que Services. */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal
              key={post.href}
              delay={i * 0.1}
              className="w-75 shrink-0 snap-start sm:w-auto sm:shrink"
            >
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        {/* Cierre de sección: el bloque azul que engancha al boletín. */}
        <div className="bg-secondary flex flex-col gap-5 rounded-xl p-5 lg:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-primary text-2xl font-bold uppercase lg:text-3xl">
              {BLOG_NEWSLETTER.title}
            </h3>
            <p className="text-primary/75 max-w-xl text-base lg:text-lg">
              {BLOG_NEWSLETTER.description}
            </p>
          </div>

          <NewsletterForm className="w-full lg:max-w-125" />
        </div>
      </div>
    </section>
  );
}
