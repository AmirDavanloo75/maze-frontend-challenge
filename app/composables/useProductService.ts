import { productRepository } from '~/repositories/productRepository'

export const useProductService = () => {
  const fetchAllProducts = () => {
    return useAsyncData('products-all', () => productRepository.getAll(), {
      server: true,
    })
  }

  const fetchProductById = (id: number) => {
    return useAsyncData(`product-${id}`, () => productRepository.getById(id), {
      server: true,
    })
  }

  return {
    fetchAllProducts,
    fetchProductById
  }
}