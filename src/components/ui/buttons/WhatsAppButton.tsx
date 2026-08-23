import { FaWhatsapp } from 'react-icons/fa6';
import { WHATSAPP_URL } from '@/utils/data/contact';

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group font-text bg-secondary text-primary hover:bg-primary hover:text-secondary group-hover:bg-primary hover:border hover:border-secondary fixed right-5 bottom-5 z-90 inline-flex items-center rounded-full p-3.5 shadow-lg shadow-black/20 transition duration-300 hover:scale-105 "
    >
      <FaWhatsapp className="w-6 h-6 lg:w-7 lg:h-7 stroke-1 shrink-0 " />
      <span className="hidden max-w-0 overflow-hidden text-sm leading-none whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-50 group-hover:opacity-100 lg:inline-block">
        Escríbenos
      </span>
    </a>
  );
};
