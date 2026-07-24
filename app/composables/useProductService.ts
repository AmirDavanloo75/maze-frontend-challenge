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

  const fetchBreadcrumb = (id: number) => {
    return useAsyncData(`breadcrumb-product-${id}`, () => productRepository.getById(id), {
      server: true,
    })
  }

  const fetchCategory = () => {
    return useAsyncData('categories', () => productRepository.getCategory(), {
      server: true,
    })
  }

  return {
    fetchAllProducts,
    fetchProductById,
    fetchBreadcrumb,
    fetchCategory
  }
}