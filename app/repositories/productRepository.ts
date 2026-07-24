import type { Product } from '~/types/product'

const apiClient = <T>(endpoint: string): Promise<T> => {
  const config = useRuntimeConfig()
  return $fetch<T>(`${config.public.apiBaseUrl}${endpoint}`)
}

export const productRepository = {
  getAll: () => apiClient<Product[]>('/products'),
  getById: (id: number) => apiClient<Product>(`/products/${id}`),
  getCategory: () => apiClient<Product[]>('/products/categories'),
}