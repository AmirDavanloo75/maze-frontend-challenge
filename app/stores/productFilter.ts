import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '~/types/product'

export const useProductFilterStore = defineStore('productFilter', () => {
    const selectedCategories = ref<string[]>([])
    const selectedSort = ref<string>('rankLS')
    const searchQuery = ref<string>('')

    const setSelectedCategories = (categories: string[]) => {
        selectedCategories.value = categories
    }

    const setSelectedSort = (sort: string) => {
        selectedSort.value = sort
    }

    const setSearchQuery = (query: string) => {
        searchQuery.value = query
    }

    const clearFilters = () => {
        selectedCategories.value = []
        selectedSort.value = 'rankLS'
        searchQuery.value = ''
    }

    const sortProducts = (products: Product[]) => {
        const sorted = [...products]

        switch (selectedSort.value) {
            case 'numberSL':
                return sorted.sort((a, b) => a.rating.count - b.rating.count)
            case 'numberLS':
                return sorted.sort((a, b) => b.rating.count - a.rating.count)
            case 'rankSL':
                return sorted.sort((a, b) => a.rating.rate - b.rating.rate)
            case 'rankLS':
                return sorted.sort((a, b) => b.rating.rate - a.rating.rate)
            default:
                return sorted
        }
    }

    const filterBySearch = (products: Product[]) => {
        if (!searchQuery.value.trim()) {
            return products
        }

        const query = searchQuery.value.toLowerCase().trim()

        return products.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        )
    }

    return {
        selectedCategories,
        selectedSort,
        searchQuery,
        setSelectedCategories,
        setSelectedSort,
        setSearchQuery,
        clearFilters,
        sortProducts,
        filterBySearch,
    }
})