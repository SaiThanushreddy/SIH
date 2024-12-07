'use client'

import { useSelector } from 'react-redux'
import Link from 'next/link'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar() {
  const user = useSelector((state: any) => state.user)
  const cart = useSelector((state: any) => state.cart)

  const cartItemCount = cart.items.reduce((acc: number, item: any) => acc + item.quantity, 0)

  console.log(user)
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
          ShopSmart
        </Link>

        <div className="flex items-center space-x-6">
          {user.isLoggedIn ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaUser className="text-gray-300" />
              <span className="text-sm font-medium text-gray-300">Welcome, {user.email}!</span>
            </motion.div>
          ) : (
            <>
              <Link href="/signin" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Sign In</Link>
              <Link href="/signup" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">Sign Up</Link>
            </>
          )}

          <Link href="/cart" className="relative group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
            >
              <FaShoppingCart className="text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.div>
          </Link>

          <Link href="/checkout" className="text-sm font-medium bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  )
}

