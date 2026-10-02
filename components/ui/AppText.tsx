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
        h2: 'text-2xl font-bold text-black/90',
        h3: 'text-xl text-black/85 font-bold',
        body: 'text-base',
        description: 'text-lg font-medium text-black/95',
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