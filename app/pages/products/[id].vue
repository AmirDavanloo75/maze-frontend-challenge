<template>
  <div class="min-h-screen bg-[#e9edf5] px-4 py-6 pb-20 md:px-16 w-[#1112px]" dir="rtl">
    <div class="max-w-6xl mx-auto space-y-6">
      <!-- Product Breadcrumbs -->
      <ProductBreadcrumbs />

      <!-- Product Image with Title -->
      <ProductBoxImage :image="product.image" :title="product.title" />

      <!-- Specifications -->
      <ProductSpecifications :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const productId = Number(route.params.id);

const { fetchProductById } = useProductService();
const { data: product, pending, error } = await fetchProductById(productId);

if (error.value || !product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "محصول مورد نظر یافت نشد",
  });
}

definePageMeta({
  breadcrumb: {
    label: "محصول",
  },
});
</script>
