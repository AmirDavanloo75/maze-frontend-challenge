<template>
  <div class="rounded-3xl bg-white p-6 shadow-sm">
    <h3 class="mb-4 text-sm font-bold text-gray-700">فیلتر و جستجو</h3>

    <form @submit.prevent="handleSearch" class="space-y-4">
      <!-- Search Input -->
      <div
        class="relative flex h-11 w-full items-center rounded-2xl border-2 border-pink-500 bg-gray-50 px-4 overflow-hidden"
      >
        <Icon name="mdi:magnify" class="w-6 h-6 text-pink-500 flex-shrink-0" />

        <div class="mx-3 h-6 w-[2px] bg-gray-300 flex-shrink-0"></div>

        <input
          id="search-input"
          v-model="searchQuery"
          type="text"
          placeholder="جستجو..."
          class="w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          dir="rtl"
          aria-label="جستجو در محصولات"
        />

        <button
          v-if="searchQuery"
          type="button"
          @click="clearSearch"
          class="flex items-center justify-center text-gray-400 transition-colors hover:text-gray-600 flex-shrink-0"
          aria-label="پاک کردن جستجو"
        >
          <Icon name="mdi:close" class="w-5 h-5" />
        </button>
      </div>

      <!-- Search Button -->
      <button
        type="submit"
        class="h-11 w-full rounded-2xl bg-[#E20054] font-bold text-white transition-opacity hover:opacity-90"
      >
        جستجو
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const handleSearch = () => {
  console.log("Searching for:", searchQuery.value);
};

const clearSearch = () => {
  searchQuery.value = "";
};
</script>
