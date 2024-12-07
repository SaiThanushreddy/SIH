// app/api/ip/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req:any) {
  try {
    // Get the IP address
    const ip = req.headers.get('x-client-ip') || req.headers.get('x-forwarded-for') || 'Unknown IP';

   
    
    await prisma.visitorIP.create({
      data: { ip },
    });

    return NextResponse.json({ ip });
  } catch (error) {
    console.error('Error saving IP to database:', error);
    return NextResponse.json({ error: 'Failed to save IP' }, { status: 500 });
  }
}
