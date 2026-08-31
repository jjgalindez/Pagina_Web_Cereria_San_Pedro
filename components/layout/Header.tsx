// components/Header.tsx
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import AppText from '../ui/AppText';

const Header = () => {
    return (
        <header className='py-4 px-6 shadow'>

            <div className='flex w-full max-w-7xl mx-auto justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Link href="/" className='flex items-center gap-2'>
                        <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
                        <div>
                            <AppText variant='h1' className='font-title'>Cerería</AppText>
                            <AppText variant='h1' className='font-title'>San Pedro</AppText>
                        </div>
                    </Link>
                </div>

                <nav className='flex gap-4 ml-auto'>
                    <Link href="/" className='font-title text-2xl font-medium hover:text-amber-500'>Inicio</Link>
                    <Link href="/catalog" className='font-title text-2xl font-medium hover:text-amber-500'>Catálogo</Link>
                    <Link href="/contact" className='font-title text-2xl font-medium hover:text-amber-500'>Contacto</Link>
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