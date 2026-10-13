
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from './MobileMenu';
import { NAVIGATION } from '@/lib/config';
import { UserRound } from 'lucide-react';

const Header = () => {
    return (
        <header className='sticky top-0 z-40 border-b backdrop-blur-md border-sand-200 bg-sand-50/70'>

            <div className='container-shell flex min-h-22 items-center justify-between gap-3'>

                <Link href="/" className="flex min-h-11 items-center gap-3">
                    <Image
                        src="/assets/logo1.png"
                        alt=""
                        width={72}
                        height={72}
                        sizes="(max-width: 639px) 48px, 64px"
                        className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                    />
                    <span className="font-title text-xl font-semibold leading-5 sm:text-2xl">
                        Cerería
                        <span className="block text-brand-800">San Pedro</span>
                    </span>
                </Link>


                <nav aria-label="Navegación principal" className='hidden gap-2 md:flex'>
                    {NAVIGATION.map((item) => (
                        <Link key={item.href} href={item.href} className='inline-flex items-center min-h-11 px-3 py-2 text-sand-950 hover:text-brand-800 hover:underline hover:underline-offset-4 transition-colors'>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className='flex items-center gap-1'>
                    <button className='relative hover:text-blue-600'>
                        <IoCartOutline size={24} />
                    </button>
                    <Link
                        href="/admin/login"
                        className="nav-link hidden sm:inline-flex"
                        aria-label="Acceso a administración"
                    >
                        <UserRound size={20} aria-hidden="true" />
                    </Link>
                    <MobileMenu />
                </div>

            </div>

        </header>
    )
}

export default Header