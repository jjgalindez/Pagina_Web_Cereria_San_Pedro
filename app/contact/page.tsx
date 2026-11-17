import React from 'react';
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import ContactForm from '@/components/contact/ContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Compass, 
  Target, 
  Flame 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto y Sobre Nosotros',
  description:
    'Comunícate con Cerería San Pedro en Popayán. Conoce nuestra misión, visión y solicita información para pedidos personalizados y cotizaciones.',
};

export default function ContactPage() {
  return (
    <div className="bg-surface-base min-h-screen py-12 md:py-20">
      <div className="container-shell space-y-16 md:space-y-24">
        
        {/* Encabezado Principal */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-flame-500 uppercase">
            <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
            Atención cercana
          </p>
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-primary text-balance">
            Hablemos de tu próximo <span className="italic text-brand">momento de luz.</span>
          </h1>
          <p className="text-secondary text-base md:text-lg text-pretty">
            Estamos en Popayán para acompañarte en tus celebraciones, eventos de fe o
            detalles para el hogar. Escríbenos o visítanos.
          </p>
        </div>

        {/* Sección Misión y Visión */}
        <section aria-labelledby="mision-vision-heading">
          <h2 id="mision-vision-heading" className="sr-only">
            Nuestra Misión y Visión
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Tarjeta Misión */}
            <article className="p-6 sm:p-8 rounded-2xl bg-surface-raised border border-default shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-brand/10 text-brand">
                  <Compass size={24} aria-hidden="true" />
                </div>
                <h3 className="font-title text-2xl sm:text-3xl font-semibold text-primary">
                  Nuestra Misión
                </h3>
                <p className="text-secondary text-sm sm:text-base leading-relaxed text-pretty">
                  Elaborar velas artesanales que transformen cualquier ambiente en un
                  espacio de paz, calidez y devoción. Conectamos la rica tradición de
                  Popayán con materias primas seleccionadas y procesos cuidados, creando
                  una luz cercana que acompaña la fe, el hogar y los momentos más
                  especiales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-default flex items-center gap-2 text-xs font-medium text-flame-500 uppercase tracking-wider">
                <Flame size={16} aria-hidden="true" />
                Dedicación en cada llama
              </div>
            </article>

            {/* Tarjeta Visión */}
            <article className="p-6 sm:p-8 rounded-2xl bg-surface-raised border border-default shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-brand/10 text-brand">
                  <Target size={24} aria-hidden="true" />
                </div>
                <h3 className="font-title text-2xl sm:text-3xl font-semibold text-primary">
                  Nuestra Visión
                </h3>
                <p className="text-secondary text-sm sm:text-base leading-relaxed text-pretty">
                  Consolidarnos como la cerería artesanal referente de Popayán y de Colombia,
                  reconocida por salvaguardar la tradición y la calidad en cada pieza.
                  Buscamos llevar la calidez de nuestro oficio a más rincones del país,
                  garantizando un servicio personal, honesto y puntual.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-default flex items-center gap-2 text-xs font-medium text-flame-500 uppercase tracking-wider">
                <Flame size={16} aria-hidden="true" />
                Proyección y tradición
              </div>
            </article>

          </div>
        </section>

        {/* Sección de Canales de Contacto + Formulario */}
        <section aria-labelledby="contact-section-heading">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Columna Izquierda: Información Directa */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 id="contact-section-heading" className="font-title text-3xl font-semibold text-primary">
                  Canales directos
                </h2>
                <p className="text-secondary text-sm mt-2">
                  Si prefieres una respuesta inmediata, puedes escribirnos por WhatsApp
                  o llamarnos a cualquiera de nuestras líneas.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp Directo */}
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20sus%20velas`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-surface-raised border border-default hover:border-flame transition-all flex items-center gap-4 group"
                >
                  <div className="size-11 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                      Chat directo
                    </p>
                    <p className="font-semibold text-primary text-sm group-hover:text-brand transition-colors">
                      WhatsApp: {SITE.phoneLabel}
                    </p>
                  </div>
                </a>

                {/* Teléfonos */}
                <div className="p-4 rounded-xl bg-surface-raised border border-default flex items-center gap-4">
                  <div className="size-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                      Líneas telefónicas
                    </p>
                    <p className="font-semibold text-primary text-sm">
                      <a href={`tel:${SITE.phone}`} className="hover:underline">
                        {SITE.phoneLabel}
                      </a>{' '}
                      ·{' '}
                      <a href={`tel:${SITE.secondPhone}`} className="hover:underline">
                        {SITE.secondPhoneLabel}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div className="p-4 rounded-xl bg-surface-raised border border-default flex items-center gap-4">
                  <div className="size-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                      Correo de atención
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-primary text-sm hover:underline break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="p-4 rounded-xl bg-surface-raised border border-default flex items-center gap-4">
                  <div className="size-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                      Taller y despacho
                    </p>
                    <p className="font-semibold text-primary text-sm">
                      {SITE.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nota de Seguridad / Envío (extraída del footer) */}
              <div className="p-4 rounded-xl bg-surface-overlay/50 border border-default text-xs text-secondary leading-relaxed flex items-start gap-3">
                <Clock className="size-4 shrink-0 mt-0.5 text-brand" />
                <p>
                  Despachamos pedidos a toda Colombia coordinando empaque seguro.
                  Recuerda siempre mantener las velas encendidas lejos de materiales inflamables,
                  niños y mascotas.
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario de Contacto */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}