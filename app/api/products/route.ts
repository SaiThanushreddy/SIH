import { NextResponse } from 'next/server'
import { getProducts } from '../../../utils/productUtils'

export async function GET() {
  const products = getProducts()
  return NextResponse.json(products)
}

