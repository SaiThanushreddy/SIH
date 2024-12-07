import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all orders and IPs from the database
    const orders = await prisma.order.findMany();
    const ips = await prisma.visitorIP.findMany();

    return NextResponse.json({ orders, ips }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
