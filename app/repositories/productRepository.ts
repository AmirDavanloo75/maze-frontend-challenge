import type { Product } from '~/types/product'

const BASE_URL = 'https://fakestoreapi.com'

export const productRepository = {
  // Get product list
  getAll: () => {
    return $fetch<Product[]>(`${BASE_URL}/products`)
  },

  // Receive a single product
  getById: (id: number) => {
    return $fetch<Product>(`${BASE_URL}/products/${id}`)
  },

  // Get categories
  getCategories: () => {
    return $fetch<string[]>(`${BASE_URL}/products/categories`)
  },

  // Get products by category
  getByCategory: (category: string) => {
    return $fetch<Product[]>(`${BASE_URL}/products/category/${category}`)
  }
}