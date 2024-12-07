'use client'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}

