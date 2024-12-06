import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if the user exists and if the password is correct
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    // Successful sign-in
    return NextResponse.json({ message: `Welcome back, ${user.name}!` });

  } catch (err) {
    console.error('Error during sign-in:', err);
    return NextResponse.json({ error: 'An error occurred during sign-in. Please try again.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
