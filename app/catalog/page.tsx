import React from 'react'

const Catalog = () => {

  const products = [
    {
      id: 1,
      name: "Velao 1",
      description: "Aroma maracuya y canela",
      price: 10.99,
      image: "/assets/product1.png"
    },
    {
      id: 2,
      name: "Vela 2",
      description: "Aroma lavanda y vainilla",
      price: 15.99,
      image: "/assets/product2.png"
    }
  ];

  return (
    <div>
      <div className='flex justify-center items-center py-16 '>
        <h1 className='text-2xl font-bold text-blue-700'>Nuestro Catalogo</h1>
      </div>
      
      {/* Desarrollar tarjetas para colocar imagenes con descripcion de productos y un boton para agregar al carrito, tambien colocar cada cuadro pequeño de 3 por cada fila */}
      
        {products.map(product => (
          <div key={product.id} className='border p-4 rounded shadow'>
            <img src={product.image} alt={product.name} className='w-48 h-48 object-cover mb-4' />
            <h2 className='text-lg font-bold'>{product.name}</h2>
            <p className='text-gray-600'>{product.description}</p>
            <p className='text-gray-800 font-semibold'>${product.price.toFixed(2)}</p>
            <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Agregar al carrito</button>
          </div>
        ))}
      </div>
  )
}

export default Catalog