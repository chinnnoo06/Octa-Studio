'use client';

import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ThridButton = ({ href, children, className }: PrimaryButtonProps) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`rounded-full font-text text-sm lg:text-base bg-primary text-secondary lg:text-primary hover:text-secondary md:bg-secondary md:hover:bg-paper inline-flex gap-2.5 items-center justify-center px-6 py-2.5 transition-colors duration-300 ${className}`}
    >
        {children}
        <HiArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-1" />
    </Link>
  );
};
