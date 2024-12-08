'use client'
import { useEffect, useState } from 'react'
import { getProductById } from '../../../utils/productUtils'
import AddToCartButton from '../../../components/AddToCartButton'

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(params.id)
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [params.id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <AddToCartButton
          productId={product.id}
          productName={product.name}
          productPrice={product.price}
          productDescription={product.description}
        />
      </div>
    </div>
  )
}
