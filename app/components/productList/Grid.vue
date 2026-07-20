<template>
  <section>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProductListCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "درب اتوماتیک ریلی مدل Face SW2",
  image: "/images/productImage.png",
}));
</script>
