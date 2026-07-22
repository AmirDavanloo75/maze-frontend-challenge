<template>
  <section>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProductListCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { fetchAllProducts } = useProductService();

const { data: products, pending, error } = await fetchAllProducts();

if (error.value) {
  console.error("Failed to fetch products:", error.value);
}
</script>
