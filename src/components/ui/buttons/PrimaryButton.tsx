'use client';

import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { cn } from '@/utils/cn';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton = ({ href, children, className }: PrimaryButtonProps) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="rounded-full font-medium text-sm lg:text-base bg-secondary text-primary group-hover:text-secondary group-hover:bg-primary group-hover:border group-hover:border-secondary inline-flex items-center justify-center px-6 py-2.5 transition-colors duration-300">
        {children}
      </span>

      <span aria-hidden="true"
        className="bg-secondary text-primary group-hover:bg-primary group-hover:text-secondary md:bg-primary md:text-secondary group-hover:border group-hover:border-secondary ease-brand inline-flex p-3.5 shrink-0 items-center justify-center rounded-full opacity-100 transition-all duration-300 md:ml-[-105%] md:scale-75 md:opacity-0 md:group-hover:ml-0 md:group-hover:scale-100 md:group-hover:opacity-100"
      >
        <HiArrowUpRight className="w-4 h-4 lg:w-4.5 lg:h-4.5 stroke-1" />
      </span>
    </Link>
  );
};
