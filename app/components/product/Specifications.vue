<template>
  <div class="bg-white rounded-3xl p-7 shadow-sm">
    <h2 class="text-lg font-bold text-[#122a51] mb-3">مشخصات فنی</h2>

    <div class="space-y-4">
      <div
        v-for="spec in specifications"
        :key="spec.label"
        class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4"
      >
        <div
          class="p-4 bg-[#F8FAFC] rounded-tr-2xl rounded-br-2xl rounded-tl rounded-bl flex items-center"
        >
          <span class="text-gray-600 font-medium">{{ spec.label }}</span>
        </div>
        <div class="p-4 bg-[#F8FAFC] rounded-tl-2xl rounded-bl-2xl rounded-tr rounded-br">
          <span class="text-gray-800 font-medium">{{ spec.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const specifications = computed(() => [
  { label: "قیمت", value: formatPrice(props.product.price) },
  { label: "توضیحات", value: props.product.description || "-" },
  { label: "دسته‌بندی", value: props.product.category || "-" },
  {
    label: "رتبه",
    value: props.product.rating.rate,
    type: "rating",
  },
  {
    label: "تعداد نظرات",
    value: props.product.rating.count,
  },
]);
</script>
