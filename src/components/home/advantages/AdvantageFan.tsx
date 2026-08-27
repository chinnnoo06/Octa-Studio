'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ADVANTAGES_CORNER_IMAGES } from '@/utils/data/advantages';
import { fanKeyframes, fanTransition } from '@/utils/motion/fan';

const FAN = [
  { rotate: -6, className: '' },
  { rotate: 3, className: '-ml-6 z-10' },
  { rotate: -3, className: '-ml-6' },
];

export const AdvantageFan = () => {
  return (
    <div className="flex shrink-0 items-center">
      {ADVANTAGES_CORNER_IMAGES.map((img, i) => (
        <motion.div
          key={img.alt}
          className={`shrink-0 ${FAN[i].className}`}
          style={{ rotate: FAN[i].rotate }}
          animate={fanKeyframes}
          transition={fanTransition(i, FAN.length)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            className="border-primary size-20 rounded-xl border-4 object-cover lg:size-24"
          />
        </motion.div>
      ))}
    </div>
  );
};
