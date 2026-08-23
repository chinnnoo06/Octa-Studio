import Image from 'next/image';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BLOG_POSTS, type BlogPost } from '@/lib/home-data';
import { cn } from '@/utils/cn';
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton';

const CalendarIcon = () => {
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

const BigBox = ({ post }: { post: BlogPost }) => {
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

const MiniBox = ({ post }: { post: BlogPost }) => {
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
        <SecondaryButton href={post.href}>
          Read More
        </SecondaryButton>
      </div>
    </div>
  );
}

export const Blogs = () => {
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
