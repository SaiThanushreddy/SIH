'use client'; 
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch('/api/admin/orders');
        const data = await res.json();
        setOrders(data.orders);
        setOrderCount(data.count);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4">Welcome to the admin dashboard. Use the sidebar to navigate.</p>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <p className="text-lg mb-4">Total Orders: {orderCount}</p>

        <ul className="list-disc pl-6">
         
          {orders.map((order) => (
            <li key={order.id} className="mb-2">
              <span className="font-medium">Order ID:</span> {order.id} - 
              <span className="font-medium"> Pickup Point:</span> {order.pickupPoint} - 
              <span className="font-medium"> Status:</span> {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
