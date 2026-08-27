import { Marquee } from '@/components/ui/Marquee';

const BRAND = 'Building - Studio';

const REPEATS = 6;

const Row = ({ direction, duration }: { direction: 'left' | 'right'; duration: number }) => {
  return (
    <Marquee duration={duration} direction={direction} gap={40} pauseOnHover={false}>
      {Array.from({ length: REPEATS }, (_, i) => (
        <p
          key={i}
          className="text-secondary font-gentleman text-6xl font-normal normal-case lg:text-[7.5rem]"
        >
          {BRAND}
        </p>
      ))}
    </Marquee>
  );
}

export const BrandMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-20 lg:py-25">
      <Row direction="left" duration={24.1} />
      <Row direction="right" duration={29.9} />
    </div>
  );
}
