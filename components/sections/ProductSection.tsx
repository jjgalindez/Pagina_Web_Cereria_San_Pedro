
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import AppText from "../ui/AppText";
import { PropsProduct } from "@/interfaces/Products";
import BackButton from "../ui/BackButton";
import { Metadata } from "next";

const getPoduct = async (id: number) => {
    const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching product:', error);
        return null;
    }
    
    return data;
}


export async function generateMetadata({ params }: PropsProduct): Promise<Metadata>{
  const { id } = await params;
  const product = await getPoduct(parseInt(id));
    return {
        title: `${product?.nombre} - Cerería San Pedro`,
        description: `Detalles del producto ${product?.nombre} de Cerería San Pedro`,
    }
}

const ProductSection = async ({ params }: PropsProduct) => {
    const { id } = await params;
    const product = await getPoduct(parseInt(id));

    console.log("Se cargo:", product?.nombre, "con id:", product?.id);
  return (
    <div>
      <div>
        {product ? (
          <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-md">
            <AppText variant="h2">{product.nombre}</AppText>
            <Image src={product.imagen_url} alt={product.nombre} width={400} height={400} className='aspect-square object-cover rounded-t-xl' />
            
            <AppText variant="h3">Referencia: {product.descripcion}</AppText>
            <AppText variant="h3">Presentación: {product.presentacion}</AppText>
            <AppText variant="h3">Precio: ${product.precio}</AppText>
            <BackButton nombre="Volver al catálogo"/>

            <AppText variant="description" className="text-center px-40">
              Deja que la luz de una vela transforme el ambiente convirtiendolo en un 
              momento especial, un pequeño detalle puede aportar calidez, tranquilidad y armonía 
              a tu espacio, creando ese ambiente perfecto para relajarte, compartir o simplemente 
              disfrutar de unos minutos para ti.
            </AppText>
          </div>
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
    </div>
  );
}

export default ProductSection