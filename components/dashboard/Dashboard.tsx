'use client'

import UploadImages from '@/components/UploadImages'
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
    const supabase = createClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/')
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleLogout}
                    className='bg-surface-raised border border-default text-primary py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition font-medium'
                >
                    Cerrar Sesion
                </button>
            </div>
            <UploadImages />
        </div>
    )
}

export default Dashboard
