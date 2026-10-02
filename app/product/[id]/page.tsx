
import ProductSection from "@/components/sections/ProductSection";
import { PropsProduct } from "@/interfaces/Products";
import { supabase } from "@/lib/supabase";




export default async function ProductPage({ params }: PropsProduct) {
    return (
      <div><ProductSection params={params} /></div>
    )
}