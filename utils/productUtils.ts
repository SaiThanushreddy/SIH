interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
    description: 'This is product 1',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 29.99,
    description: 'This is product 2',
    image: 'https://via.placeholder.com/300',
  },
  // Add more products as needed
]

export function getProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

