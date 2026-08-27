import Link from 'next/link';

const ALIGN = {
  start: 'lg:mr-auto lg:ml-0',
  center: 'lg:mx-auto',
  end: 'lg:ml-auto lg:mr-0',
} as const;

export const FooterLinkColumn = ({
  title,
  links,
  align = 'center',
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  align?: keyof typeof ALIGN;
}) => {
  return (
    <div className={`mx-auto flex w-fit max-w-full flex-col items-center gap-5 text-center ${ALIGN[align]}`}>
      <p className="text-primary text-lg font-medium uppercase lg:text-xl">{title}</p>

      <ul className="flex flex-col items-center gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-primary/75 hover:text-primary text-sm lg:text-base transition-colors duration-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
