import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa6';
import type { BlogPost } from '@/utils/data/types';

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={post.href}
      className="group border-fourth/30 bg-primary flex h-full flex-col gap-5 overflow-hidden rounded-xl border p-2.5 transition-colors duration-300 hover:border-secondary"
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={post.image}
          alt={post.alt}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="ease-brand h-50 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-60"
        />
        <span className="bg-primary text-secondary absolute top-2.5 left-2.5 rounded-lg px-2.5 py-1 text-xs font-medium uppercase">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-2.5 pt-0">
        <p className="text-fourth/75 flex items-center gap-2.5 text-xs uppercase">
          {post.date}
          <span aria-hidden="true" className="bg-fourth/30 size-1 rounded-full" />
          <span className="flex items-center gap-1.5">
            <FaRegClock aria-hidden="true" className="size-3" />
            {post.readingTime}
          </span>
        </p>

        <h3 className="text-secondary text-lg font-semibold uppercase lg:text-xl">{post.title}</h3>

        <p className="text-fourth/75 text-sm lg:text-base">{post.excerpt}</p>
      </div>
    </Link>
  );
};
