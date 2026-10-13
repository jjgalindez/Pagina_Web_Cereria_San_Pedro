import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const HERO_CONTENT = {
    eyebrow: "Cerería San Pedro · Popayán, Cauca",
    title: "Una pequeña llama.",
    titleAccent: "Un momento especial.",
    description:
        "Deja que la luz de una vela transforme el ambiente, convirtiéndolo en un momento especial.",
    supportingText:
        "Velas artesanales para acompañar tu hogar, tus celebraciones y tus momentos de fe.",
    catalogLabel: "Explorar las velas",
    contactLabel: "Conversar por WhatsApp",
    contactHref:
        "https://wa.me/573147982292?text=Hola%2C%20quiero%20conocer%20las%20velas%20de%20Cerer%C3%ADa%20San%20Pedro",
    caption: "La calidez empieza con una llama.",
} as const;

const HERO_DETAILS = [
    "Elaboración artesanal",
    "Hechas en Popayán",
    "Atención por WhatsApp",
] as const;

const HeroSection = () => {
    return (
        <section className='relative isolate overflow-clip flex min-h-dvh md:min-h-[85vh] text-white'>

            <Image
                src="/assets/FondoLimpio.png"
                fill
                priority
                sizes="100vw"
                alt=""
                className='object-cover object-[65%_center] md:object-[70%_center] -z-20'
            />

            <div
                aria-hidden="true"
                className={`
                    absolute inset-0 -z-10
                    bg-linear-to-b text-brand-800 to-[rgba(7,40,60,0.50)]
                    md:bg-linear-to-r md:from-[rgba(7,40,60,0.72)] md:via-[rgba(7,40,60,0.35)] md:to-transparent
                `}
            />

            {/* Contenido */}

            <div className='container-shell flex flex-col justify-center flex-1  pb-8 md:pt-[clamp(5rem,10vw,8rem)]'>
                <div className='max-w-152'>
                    <p className="flex items-center gap-2.5 mb-5 md:mb-7 text-flame-500 text-xs font-semibold leading-relaxed tracking-[0.12em] uppercase">
                        <span
                            className="size-1.75 shrink-0 rounded-full bg-current"
                            aria-hidden="true"
                        />
                        {HERO_CONTENT.eyebrow}
                    </p>

                    {/* Titulo */}

                    <h1
                        id="home-hero-title"
                        className="max-w-[13ch] md:max-w-[14ch] m-0 font-title text-[clamp(3rem,10.5vw,4.75rem)] md:text-[clamp(3.25rem,5.65vw,5.875rem)] font-medium leading-[0.99] tracking-[0.045em] text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.15)]"
                    >
                        <span className="block">{HERO_CONTENT.title}</span>
                        <span className="block mt-[0.12em] text-flame-500 italic">
                            {HERO_CONTENT.titleAccent}
                        </span>
                    </h1>

                    {/* Desceipcion */}

                    <p className="max-w-[43ch] mt-6 md:mt-7 text-[clamp(1.0625rem,1.35vw,1.1875rem)] leading-[1.75] text-pretty [text-shadow:0_1px_8px_rgba(0,0,0,0.12)]">
                        {HERO_CONTENT.description}
                    </p>

                    <p className="max-w-[47ch] mt-3.5 text-white/80 text-[0.9375rem] leading-[1.8] text-pretty">
                        {HERO_CONTENT.supportingText}
                    </p>

                    {/* Acciones */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6 md:mt-8 lg:flex-row max-lg:flex-col max-lg:items-start max-lg:gap-2 max-md:flex-row max-md:items-center max-md:gap-x-4">
                        <Link
                            href="/catalog"
                            className="inline-flex items-center justify-center gap-2.5 min-h-13 px-5 py-3.5 rounded-lg bg-brand-800 text-sand-50 text-[0.9375rem] font-semibold no-underline transition-[background-color,transform] duration-150 hover:bg-brand-900 hover:-translate-y-px focus-visible:outline-3 focus-visible:outline-flame-500 focus-visible:outline-offset-[5px] max-[375px]:w-full"
                        >
                            {HERO_CONTENT.catalogLabel}
                            <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
                        </Link>

                        <a
                            href={HERO_CONTENT.contactHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 min-h-11 px-1 py-3 text-white text-sm font-semibold underline underline-offset-[0.3em] decoration-1 transition-colors duration-150 hover:text-flame-500 focus-visible:outline-3 focus-visible:outline-flame-500 focus-visible:outline-offset-[5px] max-[375px]:w-full"
                        >
                            {HERO_CONTENT.contactLabel}
                            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
                        </a>

                        {/* Detalles */}
                        <ul
                            className="flex flex-wrap gap-2.5 gap-x-4 md:gap-3 md:gap-x-4.5 mt-6 md:mt-8 pt-5 border-t border-white/25 list-none"
                            aria-label="Sobre nuestras velas y atención"
                        >
                            {HERO_DETAILS.map((detail) => (
                                <li
                                    key={detail}
                                    className="inline-flex items-center gap-1.75 text-white/80 text-xs leading-relaxed"
                                >
                                    <span
                                        className="size-1.25 shrink-0 rounded-full bg-flame-500"
                                        aria-hidden="true"
                                    />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

            </div>


        </section>
    )
}

export default HeroSection