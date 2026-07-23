<template>
  <section>
    <div v-if="pending" class="text-center py-10">
      <Icon
        name="line-md:loading-loop"
        class="w-12 h-12 text-pink-600 mx-auto animate-spin"
      />
    </div>

    <div v-else-if="filteredProducts.length === 0" class="text-center py-20">
      <Icon
        name="mdi:package-variant-closed"
        class="w-16 h-16 text-gray-300 mx-auto mb-4"
      />
      <p class="text-gray-500 text-lg">محصولی با این فیلترها یافت نشد.</p>
      <button
        @click="filterStore.clearFilters"
        class="mt-4 px-6 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition font-medium"
      ></button>
    </div>

    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProductListCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { fetchAllProducts } = useProductService();
const filterStore = useProductFilterStore();

const { data: products, pending, error } = await fetchAllProducts();

if (error.value) {
  console.error("Failed to fetch products:", error.value);
}

const filteredProducts = computed(() => {
  if (!products.value) return [];

  let result = products.value;

  if (filterStore.selectedCategories.length > 0) {
    result = result.filter((product) =>
      filterStore.selectedCategories.includes(product.category)
    );
  }

  result = filterStore.filterBySearch(result);

  result = filterStore.sortProducts(result);

  return result;
});
</script>
