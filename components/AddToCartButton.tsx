'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

interface AddToCartButtonProps {
  productId: string
  productName: string
  productPrice: number
  productDescription: string
}

export default function AddToCartButton({
  productId,
  productName,
  productPrice,
  productDescription,
}: AddToCartButtonProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // Dispatch the action to add the product to the cart
    dispatch(
      addToCart({
        id: productId,
        name: productName,
        price: productPrice,
        description: productDescription,
      })
    )
    console.log('Added product to cart:', {
      id: productId,
      name: productName,
      price: productPrice,
      description: productDescription,
    })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  )
}
