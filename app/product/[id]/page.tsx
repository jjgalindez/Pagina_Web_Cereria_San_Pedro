
import ProductSection from "@/components/sections/ProductSection";
import { PropsProduct } from "@/interfaces/Products";




export default async function ProductPage({ params }: PropsProduct) {
  return (
    <div><ProductSection params={params} /></div>
  )
}