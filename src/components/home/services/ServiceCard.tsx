import Link from 'next/link';
import type { Service } from '@/utils/data/types';

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link
      href={service.href}
      className="group border-fourth/30 bg-secondary/15 hover:bg-secondary flex h-full flex-col justify-between gap-10 rounded-xl border p-5 transition-colors duration-300 lg:p-10"
    >
      <div className="flex items-center justify-between gap-5">
        <span className="text-secondary group-hover:text-primary text-sm font-medium transition-colors duration-300 lg:text-base">
          {service.number}
        </span>

        <span
          aria-hidden="true"
          className="border-secondary text-secondary group-hover:border-primary group-hover:text-primary flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 lg:size-12"
        >
          <svg viewBox="0 0 21 21" fill="currentColor" className="size-4 lg:size-5">
            <path d="M1.72674 0C7.83942 0 13.9521 0 20.25 0C20.25 6.08677 20.25 12.1735 20.25 18.4448C19.1103 18.4448 17.9707 18.4448 16.7965 18.4448C16.7706 14.3265 16.7447 10.2082 16.718 5.96512C12.0299 10.6532 7.3418 15.3413 2.51163 20.1715C2.26064 20.046 2.14552 19.9819 1.96029 19.795C1.91632 19.751 1.87234 19.707 1.82703 19.6617C1.78058 19.6144 1.73413 19.5672 1.68627 19.5185C1.63794 19.4699 1.5896 19.4213 1.5398 19.3713C1.3859 19.2165 1.23255 19.0612 1.07922 18.9059C0.974805 18.8007 0.870358 18.6955 0.765875 18.5904C0.510166 18.333 0.254955 18.075 0 17.8169C0.104085 17.5862 0.216992 17.4233 0.395707 17.2449C0.44496 17.1953 0.494212 17.1457 0.544957 17.0947C0.599165 17.0409 0.653373 16.9872 0.709224 16.9318C0.76673 16.8741 0.824235 16.8165 0.883484 16.7571C1.07678 16.5636 1.27064 16.3706 1.46449 16.1776C1.60296 16.0391 1.7414 15.9007 1.87981 15.7622C2.17813 15.4638 2.47669 15.1657 2.77547 14.8678C3.20745 14.4371 3.639 14.006 4.07045 13.5747C4.77045 12.8751 5.47081 12.1757 6.17138 11.4767C6.85192 10.7976 7.5323 10.1183 8.21246 9.4388C8.27599 9.37534 8.27599 9.37534 8.3408 9.31059C8.67202 8.9797 9.00323 8.64879 9.33443 8.31789C10.9579 6.6959 12.5822 5.07475 14.2064 3.45349C10.0881 3.42759 5.96983 3.40169 1.72674 3.375C1.72674 2.26125 1.72674 1.1475 1.72674 0Z" />
          </svg>
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-secondary group-hover:text-primary text-lg lg:text-xl font-medium uppercase transition-colors duration-300 ">
          {service.title}
        </h3>
        <p className="text-fourth/75 group-hover:text-primary/75 text-sm lg:text-base transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </Link>
  );
};
