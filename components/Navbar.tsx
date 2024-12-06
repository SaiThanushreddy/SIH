'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Optional, if you want a cart icon

export default function Navbar() {
  // Access the user and cart state from Redux store
  const user = useSelector((state: any) => state.user);
  const cart = useSelector((state: any) => state.cart); // Assuming the cart is in the Redux store

  // Get the total number of items in the cart
  const cartItemCount = cart.items.reduce((acc: number, item: any) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Store Name */}
        <Link href="/" className="text-xl font-bold text-white hover:text-gray-300">
          E-commerce Store
        </Link>

        <div className="flex items-center space-x-4">
          {/* Conditional Rendering: If user is logged in */}
          {user.isLoggedIn ? (
            <span className="mr-4 text-sm text-gray-300">Welcome, {user.name}!</span>
          ) : (
            <>
              <Link href="/signin" className="text-sm text-gray-300 hover:text-white">Sign In</Link>
              <Link href="/signup" className="text-sm text-gray-300 hover:text-white">Sign Up</Link>
            </>
          )}

          {/* Cart Link with item count */}
          <Link href="/cart" className="flex items-center text-sm text-gray-300 hover:text-white">
            <FaShoppingCart className="mr-2" />
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Checkout Link */}
          <Link href="/checkout" className="text-sm text-gray-300 hover:text-white">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}
