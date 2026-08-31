import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className=''>

            <div className='w-full h-full'>
                <div className='relative min-h-screen'>
                    <Image fill src="/assets/FondoHeroF.png" alt="Velas artesanales" />
                </div>


                <div>
                    <h1>Velas artesanales</h1>
                    <p>Creando momentos especiales con luz y aroma</p>
                    <Link href="/catalogo">Ver catálogo</Link>
                </div>

            </div>
        </section>
    )
}

export default HeroSection