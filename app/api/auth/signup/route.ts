import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  console.log('Request received:', { email, password, name });

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    console.log('Existing user check result:', existingUser);

    if (existingUser) {
      console.log('Email is already in use:', email);
      return NextResponse.json(
        { success: false, error: 'Email is already in use.' },
        { status: 400 }
      );
    }

    // Hash the password before saving it
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log('Hashed password:', hashedPassword);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    console.log('New user created:', newUser);

    return NextResponse.json({
      success: true,
      message: `User created successfully! Welcome, ${newUser.name}!`,
    });
  } catch (err) {
    console.error('Error during sign-up:', err);
    return NextResponse.json(
      { success: false, error: 'An error occurred during sign-up. Please try again.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
    console.log('Prisma client disconnected');
  }
}
