import { NextResponse } from 'next/server'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const order = await prisma.order.create({
      data: {
        userId: 'hardcoded-user-id',
        totalAmount: 100.00,
        pickupPoint: 'hardcoded-pickup-point',
        status: 'PENDING',
        products: {
          create: 
            {
              productId: 'hardcoded-product-id',
              quantity: 1,
              price: 100.00
            }
          
        },
      },
    })

    await prisma.$disconnect()

    return NextResponse.json({ message: 'Order placed successfully!', orderId: order.id }, { status: 200 })
  } catch (error) {
    console.error('Error placing order:', error);
    await prisma.$disconnect();
    
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({ error: 'A unique constraint would be violated.' }, { status: 400 });
      }
      
    }
    console.log(error)
    return NextResponse.json({ error: 'Error placing order' }, { status: 500 });
  }
}

