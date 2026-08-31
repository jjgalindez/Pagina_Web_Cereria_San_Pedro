'use client'

import React, { useState } from 'react'
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        supabase.auth.signInWithPassword({ email, password })
            .then((response) => {
                if (response.error) {
                    console.error("Error logging in:", response.error);
                } else {
                    router.push('/admin/dashboard');
                }
                setLoading(false);
            });
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </div>
    )
}

export default Login
