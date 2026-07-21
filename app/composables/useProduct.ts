import type { Product } from '~/types/product'

export const useProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'ماشین لباسشویی',
      price: 24500000,
      image:'/images/1.png',
      description: ''
    },
    {
      id: 2,
      title: 'یخچال',
      price: 32000000,
      description: ''
    },
    {
      id: 3,
      title: 'تلویزیون',
      price: 18500000,
      description: ''
    },
  ]

  return {
    products,
  }
}