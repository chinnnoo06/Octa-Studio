import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { CONTACT } from '@/utils/data/contact';
import { NAV_LINKS, LEGAL_LINKS } from '@/utils/data/navigation';
import { NewsletterForm } from '@/components/home/blogs/NewsletterForm';
import Logo from '@/assets/media/White-Logo.webp';


const ContactRow = ({ icon: Icon, label, value, href,
}: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}) => {
  return (
    <li>
      <a href={href} className="group flex items-center gap-4">
        <span
          aria-hidden="true"
          className="border-primary/30 text-primary group-hover:bg-primary group-hover:text-secondary group-hover:border-primary flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
        >
          <Icon className="size-4" />
        </span>

        <span className="flex min-w-0 flex-col">
          <span className="text-primary/60 text-xs uppercase">{label}</span>
          <span className="text-primary group-hover:text-primary/75 truncate text-base transition-colors duration-300">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer data-section="footer" className="bg-secondary py-10">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-15 px-5">

        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">

          {/* ── Marca y alta al boletín ──────────────────────────────── */}
          <div className="flex w-full flex-col gap-10 lg:max-w-150">
            <Image
              src={Logo}
              alt="Octa Building Studio"
              className="h-12 w-auto self-start object-contain lg:h-16"
            />

            <div className="flex flex-col gap-2.5">
              <p className="text-primary/75 text-base lg:text-lg">
                Déjanos tu correo y te avisamos de los montajes que vamos terminando.
              </p>

              <NewsletterForm />
            </div>
          </div>

          {/* ── Navegación ───────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <p className="text-primary text-lg font-medium uppercase lg:text-xl">Navegación</p>

            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary/75 hover:text-primary w-fit text-base transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <p className="text-primary text-lg font-medium uppercase lg:text-xl">Contacto</p>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <ContactRow
                icon={FaPhone}
                label="Teléfono"
                value={CONTACT.phone.display}
                href={CONTACT.phone.href}
              />
              <ContactRow
                icon={FaWhatsapp}
                label="WhatsApp"
                value={CONTACT.whatsapp.display}
                href={CONTACT.whatsapp.url}
              />
              {CONTACT.emails.map((m) => (
                <ContactRow
                  key={m.address}
                  icon={FaEnvelope}
                  label={m.label}
                  value={m.address}
                  href={m.href}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* ── Barra inferior ─────────────────────────────────────────── */}
        <div className="border-primary/20 flex flex-col items-center gap-2.5 border-t pt-10 sm:flex-row sm:justify-between">
          <p className="text-primary/60 text-sm">
            © {new Date().getFullYear()} Octa Building Studio
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-primary/60 hover:text-primary text-sm transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
