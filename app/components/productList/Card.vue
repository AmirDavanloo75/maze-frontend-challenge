<template>
  <div class="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-md">
    <img
      :src="product.image"
      :alt="product.title"
      class="h-60 w-full object-cover p-2 rounded-3xl"
    />

    <div class="p-4">
      <h3
        class="block text-base font-bold text-slate-800 mb-4 truncate"
        :title="product.title"
      >
        {{ product.title }}
      </h3>

      <NuxtLink
        :to="`/products/${product.id}`"
        class="flex items-center justify-center gap-2 rounded-full border border-gray-300 py-2 text-sm font-bold text-pink-600 transition hover:bg-pink-600 hover:text-white"
      >
        مشاهده جزئیات
        <Icon name="solar:arrow-left-linear" size="18" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number;
    title: string;
    image: string;
  };
}>();
</script>
