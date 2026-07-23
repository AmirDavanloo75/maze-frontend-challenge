<template>
  <div
    v-if="hasActiveFilters"
    class="flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl mb-6"
  >
    <span class="text-gray-700 text-sm font-medium">فیلترهای اعمال شده</span>

    <div class="flex items-center gap-2 flex-wrap">
      <div
        v-if="filterStore.searchQuery"
        class="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEE2E8] rounded-full"
      >
        <Icon name="heroicons:magnifying-glass" class="w-4 h-4 text-gray-600" />
        <span class="text-gray-700 text-[12px] font-medium">
          {{ filterStore.searchQuery }}
        </span>
        <button
          @click="removeSearch"
          class="flex items-center justify-center w-5 h-5 -mr-1"
        >
          <Icon
            name="heroicons:x-mark"
            class="w-3.5 h-3.5 text-gray-500 hover:text-gray-700"
          />
        </button>
      </div>

      <div
        v-for="category in filterStore.selectedCategories"
        :key="category"
        class="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEE2E8] rounded-full"
      >
        <Icon name="heroicons:tag" class="w-4 h-4 text-gray-600" />
        <span class="text-gray-700 text-[12px] font-medium">
          {{ category }}
        </span>
        <button
          @click="removeCategory(category)"
          class="flex items-center justify-center w-5 h-5 -mr-1"
        >
          <Icon
            name="heroicons:x-mark"
            class="w-3.5 h-3.5 text-gray-500 hover:text-gray-700"
          />
        </button>
      </div>

      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEE2E8] rounded-full">
        <Icon name="tabler:sort-descending" class="w-4 h-4 text-gray-600 scale-x-[-1]" />
        <span class="text-gray-700 text-[12px] font-medium">
          {{ translateSort(filterStore.selectedSort) }}
        </span>
        <button
          @click="removeSort"
          class="flex items-center justify-center w-5 h-5 -mr-1"
        >
          <Icon
            name="heroicons:x-mark"
            class="w-3.5 h-3.5 text-gray-500 hover:text-gray-700"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductFilterStore } from "~/stores/productFilter";

const filterStore = useProductFilterStore();

const hasActiveFilters = computed(() => {
  return (
    filterStore.searchQuery ||
    filterStore.selectedCategories.length > 0 ||
    filterStore.selectedSort
  );
});

function translateSort(sort) {
  const translations = {
    numberSL: "تعداد: کم به زیاد",
    numberLS: "تعداد: زیاد به کم",
    rankSL: "رتبه: کم به زیاد",
    rankLS: "رتبه: زیاد به کم",
  };
  return translations[sort] || sort;
}

const removeSearch = () => {
  filterStore.setSearchQuery("");
};

const removeCategory = (category) => {
  const updated = filterStore.selectedCategories.filter((c) => c !== category);
  filterStore.setSelectedCategories(updated);
};

const removeSort = () => {
  filterStore.setSelectedSort("rankLS");
};
</script>
