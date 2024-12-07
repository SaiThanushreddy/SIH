import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || '127.0.0.1'; // Default to localhost for development
  const response = NextResponse.next();

  // Add the detected IP to headers
  response.headers.set('x-client-ip', ip);
  return response;
}
