interface PickupPoint {
  id: string
  name: string
  address: string
}

const pickupPoints: PickupPoint[] = [
  {
    id: '1',
    name: 'Downtown Store',
    address: '123 Main St, City, Country',
  },
  {
    id: '2',
    name: 'Suburb Store',
    address: '456 Oak Ave, Suburb, Country',
  },
  // Add more pickup points as needed
]

export function getPickupPoints(): PickupPoint[] {
  return pickupPoints
}

