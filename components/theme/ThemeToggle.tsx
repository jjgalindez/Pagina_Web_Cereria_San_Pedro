'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Evita desajustes de hidratación esperando a que monte en cliente
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="size-9" /> /* Placeholder del mismo tamaño */
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Cambiar tema de color"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border-default text-text-primary hover:bg-surface-raised transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}