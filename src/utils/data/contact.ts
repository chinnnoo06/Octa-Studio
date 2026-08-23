/**
 * Datos de contacto de Octa Building Studio.
 *
 * OJO: el número es un marcador de posición, cámbialo por el real.
 * Formato para wa.me: código de país + número, sin `+`, espacios ni guiones.
 */
export const WHATSAPP_NUMBER = '5215512345678';

export const WHATSAPP_MESSAGE =
  'Hola, me interesa cotizar un proyecto con Octa Building Studio.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
