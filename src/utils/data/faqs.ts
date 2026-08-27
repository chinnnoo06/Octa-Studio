/**
 * Preguntas frecuentes.
 *
 * Salen del brief, no de la imaginación: el cliente dijo que su comprador tipo
 * «llega sin idea de qué stand quiere» y que la objeción principal es
 * «desconfianza por su dinero». Cada pregunta responde a una de las dos.
 *
 * Lo único pendiente de confirmar con ellos son los plazos de la última.
 */

import type { Faq } from './types';

export const FAQS: Faq[] = [
  {
    question: 'No sé qué stand necesito. ¿Pueden ayudarme?',
    answer:
      'Es lo más habitual. Partimos de lo que vas a exhibir —productos, maquinaria, material gráfico—, del espacio que has contratado y de tu presupuesto, y desde ahí te proponemos el diseño. No necesitas llegar con una idea hecha.',
  },
  {
    question: '¿Veo el stand antes de que lo fabriquen?',
    answer:
      'Sí. Antes de tocar un solo material te entregamos el render en tres dimensiones, y se ajusta las veces que haga falta hasta que lo apruebes. La fabricación no arranca hasta ese momento.',
  },
  {
    question: '¿Cobran viáticos por desplazarse?',
    answer:
      'Dentro de México no. Traslados, hospedaje y dietas del equipo de montaje van incluidos, sea cual sea la ciudad. Para proyectos fuera del país se cotiza aparte y lo verás desglosado.',
  },
  {
    question: '¿En qué ciudades trabajan?',
    answer:
      'En todo México, con más presencia en Guadalajara, Monterrey y Ciudad de México. También montamos en parte de Estados Unidos, y hemos trabajado para marcas de Brasil, Colombia y China.',
  },
  {
    question: '¿Se encargan también del desmontaje?',
    answer:
      'Sí, y del transporte y el almacenaje. Cuando cierra el evento nuestro equipo retira todo del recinto dentro del plazo que marque la organización. Tú no tienes que coordinar nada.',
  },
  {
    question: '¿Cuánto cuesta un stand?',
    answer:
      'Depende de los metros cuadrados, la altura permitida, los materiales y si lleva producción audiovisual. Por eso no publicamos tarifas: después de la primera reunión te pasamos una cotización cerrada, con el desglose de qué incluye cada partida.',
  },
];

export const FAQS_INTRO = {
  title: 'Lo que más nos',
  titleHighlight: 'preguntan',
  description:
    'Las dudas que salen en casi todas las primeras reuniones, respondidas antes de que tengas que escribirnos.',
  ctaLabel: '¿Tienes otra pregunta?',
} as const;
