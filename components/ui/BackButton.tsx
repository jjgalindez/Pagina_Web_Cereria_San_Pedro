'use client';

import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    nombre?: string;
}

const BackButton = ({nombre}: Props) => {
    const router = useRouter();
  return (
    <button onClick={() => router.back()} className='bg-sky-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-sky-800 transition-colors'>
      {nombre || "Volver"}
    </button>
  )
}

export default BackButton