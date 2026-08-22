import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import { PRODUCTS } from '@/lib/home-data';

export default function Products() {
  return (
    <section data-section="products" className="bg-paper py-bigsection">
      <div className="container-livinor">
        <div className="flex flex-col gap-layout">
          <div className="flex flex-col items-center gap-5 text-center">
            <Eyebrow align="center">Featured Products </Eyebrow>
            <SectionTitle
              align="center"
              lead="Explore Our"
              rotating="Collection"
              className="text-h2"
            />
          </div>

          <div className="flex flex-col gap-layout">
            <div className="grid grid-cols-3 gap-[30px] tab:grid-cols-2 land:gap-5 mob:grid-cols-1">
              {PRODUCTS.map((p) => (
                <Link key={p.href} href={p.href} className="group relative block">
                  <div className="rounded-card bg-page group-hover:bg-card flex min-h-[665px] items-center justify-center overflow-hidden transition-colors duration-500 tab:min-h-[400px] tab:bg-card mob:min-h-[320px]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={380}
                      height={400}
                      className="h-[400px] max-w-[380px] object-contain transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-105 tab:h-[200px] tab:max-w-[200px] mob:h-[150px]"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between gap-10 px-5 py-10 tab:py-[30px] land:gap-5 land:p-5">
                    <div>
                      <span className="bg-paper font-body text-body rounded-[5px] px-5 py-[7px] leading-none text-ink">
                        {p.category}
                      </span>
                    </div>

                    <div className="flex max-w-[465px] flex-wrap items-center justify-between gap-5 mob:items-end">
                      <div className="flex flex-col gap-1">
                        <p className="text-paragraph font-body text-body">{p.price}</p>
                        <p className="text-ink font-heading text-h6 uppercase">{p.name}</p>
                      </div>

                      <span className="bg-card rounded-pill font-body text-body group-hover:bg-ink group-hover:text-paper flex items-center gap-2.5 px-5 py-3 leading-none text-ink transition-colors duration-500">
                        Cart
                        <span className="relative size-5 shrink-0">
                          <Image
                            src="/images/shared/cart-black.png"
                            alt=""
                            width={20}
                            height={20}
                            className="absolute inset-0 size-5 transition-opacity duration-500 group-hover:opacity-0"
                          />
                          <Image
                            src="/images/shared/cart-white.png"
                            alt=""
                            width={20}
                            height={20}
                            className="absolute inset-0 size-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <PrimaryButton href="/shop">View More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
