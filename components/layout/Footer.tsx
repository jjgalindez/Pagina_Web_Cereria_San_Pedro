'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {

  const [year, setYear] = useState(2026)
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className='py-6 px-4 bg-sky-700 text-white text-center'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Columna 1: Logo y Descripción */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Image
                src="/assets/logo.png"
                alt="Logo de Cerería San Pedro"
                width={70}
                height={70}
                priority={false}
              />
              <h3 className="text-2xl font-black tracking-tight">CERERÍA SAN PEDRO</h3>
            </div>
            <p className="text-blue-100 mb-6">Productos de insuperable calidad elaborados con dedicación para iluminar cada uno de tus momentos.</p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="font-medium text-left">
                  314 798 2292 <br /> 311 369 9929
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="font-medium truncate">velassanpedropopayan@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Ubicación</h4>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <span className="font-medium">Popayán, Cauca, Colombia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Derechos de autor */}
        <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {year} Cerería San Pedro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
