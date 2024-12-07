'use client';

import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart({ productId }));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) return;
    dispatch(updateQuantity({ productId, quantity }));
  };

  const totalPrice = cart.items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      <AnimatePresence>
        {cart.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-8 rounded-lg shadow-md text-center"
          >
            <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
            <Link href="/">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item: any) => (
                    <motion.tr
                      key={item.productId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b"
                    >
                      <td className="px-4 py-4">{item.name}</td>
                      <td className="px-4 py-4">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                            onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                            onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="px-4 py-4">
                        <button
                          className="text-red-500 hover:text-red-700 transition-colors"
                          onClick={() => handleRemoveFromCart(item.productId)}
                        >
                          <FaTrashAlt size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-right">
              <p className="text-2xl font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</p>
            </div>

            <div className="mt-6 text-right">
              <Link href="/checkout">
                <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

