import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import type { Service } from '@/utils/data/types';

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link
      href={service.href}
      className="group border-fourth/30 bg-secondary/15 hover:bg-secondary flex h-full flex-col gap-10 rounded-xl border p-5 transition-colors duration-300 lg:p-10"
    >
      <div className="flex items-center justify-between gap-5">
        <span className="text-secondary group-hover:text-primary font-gentleman text-3xl lg:text-4xl leading-[0.6] font-normal tracking-[0.04em] normal-case transition-colors duration-300">
          {service.number}
        </span>

        <span
          aria-hidden="true"
          className="border-secondary text-secondary group-hover:border-primary group-hover:text-primary flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 lg:size-12"
        >
          <HiArrowUpRight aria-hidden="true" className="size-4 stroke-1 lg:size-5" />
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
          <h3 className="text-secondary group-hover:text-primary min-h-14 lg:min-h-16 font-semibold text-xl lg:text-2xl uppercase transition-colors duration-300 ">
            {service.title}
          </h3>

          <p className="text-fourth/75 group-hover:text-primary/75 text-sm lg:text-base transition-colors duration-300">
            {service.description}
          </p>

      </div>
    </Link>
  );
};
