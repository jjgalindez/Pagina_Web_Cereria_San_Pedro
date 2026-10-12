'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AppText from '../ui/AppText';

const Login = () => {

    const router = useRouter();
    const supabase = createClient();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            console.log('error en el login: ', error)
            setError('Correo o contraseña incorrectos');
            setLoading(false);
            return;
        }

        router.push('/admin/dashboard');

    };


    return (
        <div className='min-h-screen flex items-center justify-center px-4'>
            <form
                onSubmit={handleLogin}
                className='w-full max-w-sm rounded-xl shadow-md border p-6 space-y-4'
            >
                <div className='text-center space-y-1'>
                    <AppText variant='h3'>Iniciar Sesión</AppText>
                    <AppText variant='body'>Panel de Administración</AppText>
                </div>

                {error && (
                    <p className='text-sm text-center text-red-600 bg-red-50 border border-red-200 rounded-md py-2 px-3'>
                        {error}

                    </p>
                )}

                <div className='space-y-1'>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700'>
                        Correo Electrónico:
                    </label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full  border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    />

                </div>

                <div className='space-y-1'>
                    <label htmlFor="password" className='text-sm font-medium text-gray-700'>
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full  border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    />

                </div>


                <button
                    type="submit"
                    onClick={handleLogin}
                    disabled={loading}
                    className='w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition font-medium'
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login
