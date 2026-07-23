<template>
  <div class="rounded-3xl bg-white p-6 shadow-sm">
    <button
      @click="isOpen = !isOpen"
      class="flex w-full items-center justify-between cursor-pointer mb-4 text-right"
    >
      <h3 class="text-sm font-bold text-gray-700">دسته‌بندی</h3>
      <Icon
        name="mdi:chevron-up"
        class="w-8 h-8 text-gray-500 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-show="isOpen" class="space-y-3 overflow-hidden">
        <div v-if="loading" class="text-center py-4">
          <Icon
            name="line-md:loading-loop"
            class="w-6 h-6 text-pink-600 mx-auto animate-spin"
          />
        </div>

        <label
          v-else
          v-for="category in categories"
          :key="category.id"
          class="flex items-center justify-between cursor-pointer gap-4 group"
        >
          <input
            v-model="selectedCategories"
            :value="category.id"
            type="checkbox"
            class="w-5 h-5 accent-pink-600 rounded border-gray-300 focus:ring-pink-500 cursor-pointer"
          />

          <div class="flex items-center justify-between flex-1 gap-3">
            <span
              class="text-sm transition-all duration-300 text-right"
              :class="
                isSelected(category.id)
                  ? 'text-gray-800 font-bold'
                  : 'text-gray-600 font-normal'
              "
            >
              {{ category.label }}
            </span>

            <span
              class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-medium transition-colors duration-300"
              :class="isSelected(category.id) ? 'bg-pink-500' : 'bg-gray-800'"
            >
              {{ category.count }}
            </span>
          </div>
        </label>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useProductFilterStore } from "~/stores/productFilter";

const isOpen = ref(true);
const categories = ref([]);
const loading = ref(true);
const filterStore = useProductFilterStore();

const { data: catsData } = await useAsyncData("categories", () =>
  $fetch("https://fakestoreapi.com/products/categories")
);

const { data: allProducts } = await useAsyncData("products-all", () =>
  $fetch("https://fakestoreapi.com/products")
);

if (catsData.value && allProducts.value) {
  categories.value = catsData.value.map((cat) => ({
    id: cat,
    label: cat,
    count: allProducts.value.filter((p) => p.category === cat).length,
  }));
}

loading.value = false;

const selectedCategories = ref([]);
const isSelected = (id) => selectedCategories.value.includes(id);

watch(selectedCategories, (newVal) => {
  filterStore.setSelectedCategories(newVal);
});
</script>
