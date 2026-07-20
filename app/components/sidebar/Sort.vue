<template>
  <div class="rounded-3xl bg-white p-6 shadow-sm">
    <!-- Header -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="flex w-full items-center justify-between cursor-pointer mb-4 text-right"
      :aria-expanded="isOpen"
      aria-controls="sort-options"
    >
      <h3 class="text-sm font-bold text-gray-700">مرتب‌سازی</h3>
      <Icon
        name="mdi:chevron-up"
        class="w-8 h-8 text-gray-500 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        aria-hidden="true"
      />
    </button>

    <!-- Sort Options -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0 -translate-y-2"
      enter-to-class="opacity-100 max-h-96 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96 translate-y-0"
      leave-to-class="opacity-0 max-h-0 -translate-y-2"
    >
      <div v-show="isOpen" id="sort-options" class="space-y-3 overflow-hidden">
        <label
          v-for="option in sortOptions"
          :key="option.value"
          class="flex items-center gap-2 cursor-pointer"
          :class="isSelected(option.value) ? 'font-bold' : 'font-normal'"
        >
          <input
            type="radio"
            name="sort"
            :value="option.value"
            v-model="selectedSort"
            class="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 accent-pink-600 cursor-pointer"
          />
          <span class="text-sm text-gray-600">{{ option.label }}</span>
        </label>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(true);
const selectedSort = ref("numberSL");

const sortOptions = [
  { value: "numberSL", label: "تعداد: کم به زیاد" },
  { value: "numberLS", label: "تعداد: زیاد به کم" },
  { value: "rankSL", label: "رتبه: کم به زیاد" },
  { value: "rankLS", label: "رتبه: زیاد به کم" },
];

const isSelected = (value: string) => selectedSort.value === value;
</script>
