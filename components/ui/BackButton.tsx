'use client';

import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    nombre?: string;
}

const BackButton = ({nombre}: Props) => {
    const router = useRouter();
  return (
    <button onClick={() => router.back()} className='bg-cta-bg text-cta-text px-4 py-2 rounded-md cursor-pointer hover:bg-cta-hover transition-colors'>
      {nombre || "Volver"}
    </button>
  )
}

export default BackButton