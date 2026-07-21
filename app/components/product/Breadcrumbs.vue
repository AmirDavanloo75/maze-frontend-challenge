<template>
  <nav class="flex items-center text-sm text-gray-600" dir="rtl">
    <Icon name="hugeicons:home-05" class="w-5 h-5 bg-gray-400" />
    <ol class="flex items-center gap-2">
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <div class="flex items-center gap-2">
          <template v-if="index > 0">
            <Icon name="ic:twotone-less-than" class="w-4 h-4 text-[#6783a0]"" />
          </template>

          <template v-if="item.to">
            <NuxtLink :to="item.to" class="hover:text-[#E20054] transition-colors">
              <span class="font-medium text-[#6783a0]">{{ item.label }}</span>
            </NuxtLink>
          </template>

          <template v-else>
            <span class="font-medium text-[#6783a0]">{{ item.label }}</span>
          </template>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const breadcrumbs = [
  { label: "", to: "/", icon: "heroicons:home" },
  { label: "لیست محصولات", to: "/products" },
  { label: "اتوماتیک بازویی", to: null },
];
</script>
