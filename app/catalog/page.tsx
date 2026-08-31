
import AppText from '@/components/ui/AppText';
import React from 'react'
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const Catalog = async () => {

  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    console.error('Error fetching products:', error);
  } else {
    console.log('Fetched products:', data);
    console.log("Cantidad de productos:", data?.length);
  }



  // const products = [
  //   {
  //     id: 1,
  //     name: "Vela 1",
  //     description: "paquete x5",
  //     price: 10.99,
  //     image: "/assets/product1.png"
  //   },
  //   {
  //     id: 2,
  //     name: "Vela 2",
  //     description: "paquete x4",
  //     price: 15.99,
  //     image: "/assets/product2.png"
  //   },
  //   {
  //     id: 3,
  //     name: "Vela 3",
  //     description: "Paquete x6",
  //     price: 12.99,
  //     image: "/assets/product3.png"
  //   },
  //   {
  //     id: 4,
  //     name: "Vela 4",
  //     description: "paquete x7",
  //     price: 14.99,
  //     image: "/assets/product4.png"
  //   },
  //   {
  //     id: 5,
  //     name: "Vela 5",
  //     description: "paquete x10",
  //     price: 14.99,
  //     image: "/assets/product5.png"
  //   },
  //   {
  //     id: 6,
  //     name: "Vela 6",
  //     description: "paquete x8",
  //     price: 16.99,
  //     image: "/assets/product6.png"
  //   }
  // ];

  return (
    <section>
      <div className='flex justify-center items-center py-16 '>
        <AppText variant='h2' className=''>Nuestro Catalogo</AppText>
      </div>
      <div className='w-full px-6'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {data?.map((product) => (
            <div key={product.id} className='h-full flex flex-col shadow-md rounded-xl hover:-translate-1 transition'>
              <div className='bg-gray-100 '>
                <Image src={product.imagen_url} alt={product.nombre} width={400} height={400} className='w-full aspect-square object-cover rounded-t-xl' />
              </div>
              <div className='flex flex-1 flex-col justify-between rounded-b-xl p-4 bg-white'>
                <AppText variant='h3' className=''>{product.nombre}</AppText>
                <p className='text-gray-600'>Referencia: {product.descripcion}</p>
                <p className='text-gray-800'>Unidad de paquete: {product.unidad_paquete}</p>
                <p className='text-gray-800 font-semibold'>Precio: ${product.precio.toFixed(0)}</p>
                <button className='w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-4xl hover:bg-blue-600'>Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog