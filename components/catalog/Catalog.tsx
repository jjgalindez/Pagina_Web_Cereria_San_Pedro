
import AppText from '@/components/ui/AppText';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

const Catalog = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    console.error('Error fetching products:', error);
  } 

  return (
    <section className='bg-surface-base'>
      <div className='flex justify-center items-center py-16 '>
        <AppText variant='h2' className=''>Nuestro Catálogo</AppText>
      </div>
      <div className='w-full px-6'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {data?.map((product) => (
            <div key={product.id} className='h-full flex flex-col shadow-md rounded-xl hover:-translate-1 transition'>
              <div className='bg-surface-overlay '>
                <Image src={product.imagen_url} alt={product.nombre} width={400} height={400} className='w-full aspect-square object-cover rounded-t-xl' />
              </div>
              <div className='flex flex-1 flex-col justify-between rounded-b-xl p-4 bg-surface-raised'>
                <AppText variant='h3' className=''>{product.nombre}</AppText>
                <p className='text-secondary'>Referencia: {product.descripcion}</p>
                <p className='text-primary'>Presentación: {product.presentacion}</p>
                <p className='text-primary'>Unidad de paquete: {product.unidad_paquete}</p>
                {/* <p className='text-gray-800 font-semibold'>Precio: ${product.precio.toFixed(0)}</p> */}
                <Link href={`/product/${product.id}`} className='w-full mt-4 px-4 py-2 bg-blue-500 text-white text-center rounded-4xl hover:bg-blue-600'>Ver Detalles</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog