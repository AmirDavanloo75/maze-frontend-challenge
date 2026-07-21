<template>
  <div class="bg-white rounded-3xl p-6 shadow-sm">
    <h1 class="text-xl font-bold text-gray-800 text-right mb-4 pt-4">
      {{ props.title }}
    </h1>

    <div class="relative w-full h-[300px] rounded-2xl overflow-hidden">
      <img
        :src="props.image"
        :alt="props.title"
        class="w-full h-full object-cover absolute inset-0"
      />
      <button
        type="button"
        class="h-10 w-10 absolute top-3 right-3 bg-black/40 p-1.5 rounded-xl hover:bg-gray-800 transition-colors"
        aria-label="بزرگنمایی تصویر"
      >
        <Icon name="solar:rounded-magnifer-zoom-in-linear" class="w-7 h-7 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  title: string;
}

const props = defineProps<Props>();
console.log(props);
</script>
