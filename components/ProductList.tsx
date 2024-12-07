'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={`/products/${product.id}`}
            className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

