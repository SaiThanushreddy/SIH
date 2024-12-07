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
    name: 'Cocaine',
    price: 19.99,
    description: '100g',
    image: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41407-022-0889-8/MediaObjects/41407_2022_889_Fig1_HTML.jpg',
  },
  {
    id: '2',
    name: 'LSD',
    price: 29.99,
    description: '100g',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ON-oCixRCAgwBR6obnIgqOM59AuvMMe3hg&s',
  },
 {
  id: '3',
    name: 'Weed',
    price: 29.99,
    description: '100g',
    image: 'https://static.scientificamerican.com/sciam/cache/file/3198624E-C54D-458C-BB35B9DECED8F27D_source.jpg?crop=4%3A3%2Csmart&w=1200',
 }
]

export function getProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

