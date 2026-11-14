'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"          /* Agrega la clase 'dark' al <html> */
      defaultTheme="system"      /* Por defecto sigue al PC del usuario */
      enableSystem               /* Permite escuchar cambios del SO */
      disableTransitionOnChange  /* Evita que los colores hagan transiciones al cambiar */
    >
      {children}
    </NextThemesProvider>
  )
}