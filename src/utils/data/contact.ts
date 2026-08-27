/**
 * Datos de contacto de Octa Building Studio.
 *
 * Fuente única: todo lo que sea «cómo se llega a Octa» —header, footer, botón
 * flotante, página de contacto— sale de aquí. Si cambia un número se cambia en
 * este archivo y no hay que ir buscándolo por los componentes.
 */

/** El mismo número atiende llamadas y WhatsApp. */
const PHONE_DISPLAY = '33 3405 0215';

/** E.164 sin separadores: es lo que necesita el marcador del móvil. */
const PHONE_E164 = '+523334050215';

/** Para `wa.me`: código de país + número, sin `+`, espacios ni guiones. */
const WHATSAPP_NUMBER = '523334050215';

const WHATSAPP_MESSAGE = 'Hola, me interesa cotizar un proyecto con Octa Building Studio.';

const mail = (label: string, address: string) => ({
  label,
  address,
  href: `mailto:${address}`,
});

export const CONTACT = {
  phone: {
    display: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
  },

  whatsapp: {
    display: PHONE_DISPLAY,
    number: WHATSAPP_NUMBER,
    message: WHATSAPP_MESSAGE,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    label: 'Escríbenos por WhatsApp',
  },

  /** Dos buzones: uno para cotizar y otro para dirección. */
  emails: [
    mail('Proyectos', 'proyectosocta@octabuilding-studio.com'),
    mail('Dirección', 'ceocompany@octabuilding-studio.com'),
  ],

  /** Dónde opera, según el brief: todo México y parte de Estados Unidos. */
  coverage: {
    summary: 'Todo México y parte de Estados Unidos',
    cities: ['Guadalajara', 'Monterrey', 'Ciudad de México'],
  },
} as const;
