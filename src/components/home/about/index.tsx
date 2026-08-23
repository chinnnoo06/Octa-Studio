import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ABOUT, STATS } from '@/lib/home-data';
import { Odometer } from './Odometer';
import { WipeHeading } from '../../ui/WipeHeading';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';

const BOX_VARIANT = {
  one:   'bg-primary max-lg:rounded-xl max-lg:border lg:rounded-tl-xl lg:border-b lg:border-r border-fourth/50',
  two:   'bg-transparent rounded-xl border lg:border-none border-fourth/50',
  three: 'bg-transparent rounded-xl border lg:border-none border-fourth/50',
  four:  'bg-secondary/15 max-lg:rounded-xl max-lg:border lg:rounded-br-xl lg:border-t lg:border-l border-fourth/50',
} as const;

export const About = () => {
  return (
    <section data-section="about" className="py-20 lg:py-25 bg-thrird">
        <div className="mx-auto max-w-[1700px] px-5 flex flex-col lg:flex-row gap-20">
          <div className="flex w-full lg:w-1/2 flex-col justify-between gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <Eyebrow>Sobre Octa Studio</Eyebrow>
                <WipeHeading
                  text="Más de 20 años convirtiendo marcas en experiencias"
                  className="text-secondary font-text text-3xl lg:text-4xl"
                />
              </div>

              <div className='flex flex-col gap-5'>
                <p className="text-fourth/75 font-text text-base lg:text-lg ">
                  Somos una empresa dedicada al diseño y montaje de stands, shows, eventos masivos, congresos y convenciones
                  a nivel nacional e internacional. Acompañamos cada proyecto desde la primera idea hasta el desmontaje.
                </p>
                <PrimaryButton href='/nosotros'>Conocer Más</PrimaryButton>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                width={630}
                height={425}
                className="h-110 w-full object-cover"
              />
            </div>
          </div>

          <div className=" w-full lg:w-1/2 grid grid-cols-2 gap-5 lg:gap-0">
            {STATS.map((s) => (
              <div key={s.label} className={`flex flex-col items-end justify-end p-10 hrink-0 ${BOX_VARIANT[s.variant]}`}  >
                <div className="flex flex-col items-end justify-between gap-5">
                  <Odometer values={s.odometer} suffix={s.suffix} />
                  <div className="flex flex-col items-end gap-2.5 text-right lg:items-end lg:text-right">
                    <p className="text-secondary font-text text-xl lg:text-2xl uppercase">{s.label}</p>
                    <p className="text-fourth/75 font-text text-sm lg:text-base hidden sm:block">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
