'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [ips, setIps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/admin/orders');
        const data = await res.json();
        setOrders(data.orders);
        setOrderCount(data.orders.length);
        setIps(data.ips);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4">Welcome to the admin dashboard. Use the sidebar to navigate.</p>

      <div className="bg-gray-100 p-4 rounded shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <p className="text-lg mb-4">Total Orders: {orderCount}</p>
        <ul className="list-disc pl-6">
          {orders && orders.map((order) => (
            <li key={order.id} className="mb-2">
              <span className="font-medium">Order ID:</span> {order.id} - 
              <span className="font-medium"> Pickup Point:</span> {order.pickupPoint} - 
              <span className="font-medium"> Status:</span> {order.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Visitor IPs</h2>
        <ul className="list-disc pl-6">
          {ips.map((ip, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">IP:</span> {ip.ip} - 
              <span className="font-medium"> Recorded At:</span> {new Date(ip.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
