import React from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'description' | 'small';

interface AppTextProps {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
}

const AppText = ({ variant = 'body', className, children, ...props }: AppTextProps) => {

    const variants = {
        h1: 'text-3xl font-bold text-sky-700',
        h2: 'text-2xl font-bold ',
        h3: 'text-xl text-gray-800 font-medium',
        body: 'text-base',
        description: 'text-sm text-gray-600',
        small: 'text-xs text-gray-500'

    }
    return (
        <div className={`${variants[variant]} ${className}`}
            {...props}
        >
            {children}

        </div>
    )
}

export default AppText