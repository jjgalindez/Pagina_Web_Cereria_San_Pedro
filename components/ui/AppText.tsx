import { Tag } from 'lucide-react';
import React from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'description' | 'small';

interface AppTextProps {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
}

const AppText = ({ variant = 'body', className, children, ...props }: AppTextProps) => {

const TAG_MAP = { h1: 'h1', h2: 'h2', h3: 'h3', body: 'p', description: 'p', small: 'small' } as const;
const Tag = TAG_MAP[variant] || 'p';
return <Tag className={className} {...props}>
            {children}
        </Tag>;
}

export default AppText