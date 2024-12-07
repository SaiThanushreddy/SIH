  'use client';

  import { useSelector, useDispatch } from 'react-redux';
  import  Link from 'next/link';
  import { removeFromCart, updateQuantity } from '../../store/cartSlice'; 
  import { FaTrashAlt } from 'react-icons/fa'; 
  export default function CartPage() {
    const cart = useSelector((state: any) => state.cart);
    console.log(cart)
    
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
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

    
        {cart.items.length === 0 ? (
          <p>Your cart is empty. <Link href="/" className="text-blue-500">Continue shopping</Link></p>
        ) : (
          <div className="bg-white p-4 rounded shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item: any) => (
                    <tr key={item.productId}>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">${item.price}</td>
                      <td className="px-4 py-2 flex items-center">
                        <button
                          className="px-2 py-1 bg-gray-300 rounded mr-2"
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-300 rounded ml-2"
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                        >
                          +
                        </button>
                      </td>
                      <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="px-4 py-2">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveFromCart(item.productId)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

        
            <div className="mt-4 text-right">
              <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            </div>

          
            <div className="mt-4 text-right">
              <Link href="/checkout">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

