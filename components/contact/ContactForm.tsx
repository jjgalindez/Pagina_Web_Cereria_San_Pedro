'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE } from '@/lib/config';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  nombre: string;
  telefono: string;
  correo: string;
  motivo: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    correo: '',
    motivo: 'personalizado',
    mensaje: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulación de envío o conexión con API / Supabase
      // Si prefieres enviar directo por WhatsApp, puedes desglosarlo con encodeURI
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Ejemplo: Redirigir a WhatsApp con el mensaje estructurado (opcional)
      const textoWhatsApp = encodeURIComponent(
        `*Nuevo mensaje de contacto*\n` +
        `*Nombre:* ${formData.nombre}\n` +
        `*Teléfono:* ${formData.telefono}\n` +
        `*Correo:* ${formData.correo}\n` +
        `*Motivo:* ${formData.motivo}\n` +
        `*Mensaje:* ${formData.mensaje}`
      );
      
      window.open(`https://wa.me/${SITE.whatsapp}?text=${textoWhatsApp}`, '_blank');

      setStatus('success');
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        motivo: 'personalizado',
        mensaje: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-surface-raised border border-default shadow-card space-y-5"
    >
      <div className="border-b border-default pb-4">
        <h3 className="font-title text-2xl font-semibold text-primary">
          Envíanos un mensaje
        </h3>
        <p className="text-secondary text-sm mt-1">
          Déjanos tus datos y nos pondremos en contacto contigo lo más pronto posible.
        </p>
      </div>

      {status === 'success' && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-sm">
          <CheckCircle2 className="size-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
          <p>
            ¡Gracias por escribirnos! Hemos recibido tu mensaje y nos comunicaremos contigo pronto.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-800 dark:text-red-300 text-sm">
          <AlertCircle className="size-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wider text-secondary">
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 rounded-lg border border-default bg-surface-base text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="telefono" className="block text-xs font-semibold uppercase tracking-wider text-secondary">
            Teléfono o WhatsApp *
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej: 314 123 4567"
            className="w-full px-4 py-2.5 rounded-lg border border-default bg-surface-base text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="correo" className="block text-xs font-semibold uppercase tracking-wider text-secondary">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className="w-full px-4 py-2.5 rounded-lg border border-default bg-surface-base text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="motivo" className="block text-xs font-semibold uppercase tracking-wider text-secondary">
            Motivo de consulta *
          </label>
          <select
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-default bg-surface-base text-primary focus:outline-none focus:ring-2 focus:ring-brand transition-colors text-sm"
          >
            <option value="personalizado">Pedido personalizado</option>
            <option value="religiosas">Velas Religiosas / Cirios</option>
            <option value="decorativas">Velas Decorativas</option>
            <option value="esotericas">Velas Esotéricas</option>
            <option value="distribucion">Ventas al por mayor</option>
            <option value="otro">Otra consulta</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="mensaje" className="block text-xs font-semibold uppercase tracking-wider text-secondary">
          Mensaje o detalles del pedido *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos qué necesitas (cantidades, tamaños, fechas de entrega)..."
          className="w-full px-4 py-2.5 rounded-lg border border-default bg-surface-base text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors text-sm resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cta-bg text-cta-text font-semibold hover:bg-cta-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <Send size={18} aria-hidden="true" />
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}