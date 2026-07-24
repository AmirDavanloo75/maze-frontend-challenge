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

useSeoMeta({
  title: () => `${product.value?.title} | فروشگاه ماز`,
  description: () => product.value?.description || 'مشاهده جزئیات محصول',
  
  ogTitle: () => product.value?.title || 'محصول',
  ogDescription: () => product.value?.description || 'مشاهده جزئیات محصول',
  ogImage: () => product.value?.image || '',
  ogType: 'product',
  ogUrl: () => `https://maze.com/products/${productId}`,
  
  twitterCard: 'summary_large_image',
  twitterTitle: () => product.value?.title || 'محصول',
  twitterDescription: () => product.value?.description || 'مشاهده جزئیات محصول',
  twitterImage: () => product.value?.image || '',
  
  robots: 'index, follow',
})
</script>
