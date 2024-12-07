'use client'

import { useState, useEffect } from 'react'
import { getPickupPoints } from '../../utils/pickupUtils'

export default function Checkout() {
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pickupPoints, setPickupPoints] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([
    { productId: 'prod123', quantity: 1 }, 
  ])

  useEffect(() => {
    const fetchPickupPoints = async () => {
      const points = await getPickupPoints()
      setPickupPoints(points)
    }
    fetchPickupPoints()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedPickupPoint) {
      alert('Please select a pickup point')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupPoint: "Delhi",
          userId: "user123", 
          products: products,
          totalAmount: 100,
        }),
      })

      const data = await response.json();

      if (response.ok) {
        alert('Order placed successfully!');
        console.log(data);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An unexpected error occurred.')
    } finally {
      setIsLoading(false)
    }
  }

  const calculateTotalAmount = (products: any[]) => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="pickupPoint" className="block mb-2">Select Pickup Point</label>
          <select
            id="pickupPoint"
            value={selectedPickupPoint}
            onChange={(e) => setSelectedPickupPoint(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a pickup point</option>
            {pickupPoints.map((point) => (
              <option key={point.id} value={point.id}>{point.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={isLoading}>
          {isLoading ? 'Placing Order...' : 'Place Order (Cash on Delivery)'}
        </button>
      </form>
    </div>
  )
}

