// components/Header.tsx
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='py-4 px-6 bg-white shadow'>

            <div className='flex w-full max-w-7xl mx-auto justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src="/assets/logo.jpg" alt="Logo" width={50} height={50} />
                    <div>
                        <h2 className='text-xl font-bold'>Cerería</h2>
                        <h2 className='text-xl font-bold'>San Pedro</h2>
                    </div>
                </div>
                
                <nav className='flex gap-4 ml-auto'>
                    <Link href="/" className='hover:text-amber-500'>Inicio</Link>
                    <Link href="/catalog" className='hover:text-amber-500'>Catálogo</Link>
                    <Link href="/contact" className='hover:text-amber-500'>Contacto</Link>
                </nav>

                <div className='flex gap-4 ml-auto'>
                    <button className='relative hover:text-blue-600'>
                        <IoCartOutline size={24} />
                    </button>
                </div>

            </div>

        </header>
    )
}

export default Header