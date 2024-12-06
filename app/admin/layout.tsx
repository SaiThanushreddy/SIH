'use client'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64 min-h-screen bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link href="/admin" className="block py-2">Dashboard</Link></li>
            <li><Link href="/admin/products" className="block py-2">Products</Link></li>
            <li><Link href="/admin/orders" className="block py-2">Orders</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}

