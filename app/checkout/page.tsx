'use client'

import { useState } from 'react'
import { getPickupPoints } from '../../utils/pickupUtils'

export default function Checkout() {
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('')
  const pickupPoints = getPickupPoints()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    console.log('Order submitted with pickup point:', selectedPickupPoint)
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Place Order (Cash on Delivery)
        </button>
      </form>
    </div>
  )
}

