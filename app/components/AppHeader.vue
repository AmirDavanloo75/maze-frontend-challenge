<template>
  <header
    class="w-full max-w-[1440px] h-[120px] rounded-b-2xl bg-white/80 backdrop-blur-[20px] shadow-sm mx-auto"
  >
    <div class="mx-auto flex h-full max-w-[1280px] items-center px-8">
      <div class="w-[100px] hidden lg:block"></div>

      <!-- Navigation -->
      <nav class="hidden flex-1 items-center justify-center lg:flex">
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group flex flex-col items-center gap-1 font-['Yekan_Bakh'] font-medium text-[13px] leading-6 text-[#122a51] transition-colors hover:text-[#E20054]"
            :class="{ 'text-[#E20054]': isActive(item.path) }"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <div class="flex items-center gap-2">
              <Icon :name="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </div>
            <!-- Dot Indicator -->
            <span
              class="w-1.5 h-1.5 rounded-full bg-[#E20054] transition-opacity opacity-0 group-hover:opacity-50"
              :class="{ 'opacity-100': isActive(item.path) }"
            ></span>
          </NuxtLink>
        </div>
      </nav>

      <!-- Action Button -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/contact"
          class="flex items-center justify-center gap-2 bg-[#E20054] w-[107px] h-10 rounded-2xl px-4 py-3 text-white transition-opacity hover:opacity-90"
          aria-label="تماس با ما"
        >
          <span class="font-['Yekan_Bakh'] font-bold text-sm leading-4"> تماس </span>
          <Icon name="solar:phone-calling-rounded-outline" class="w-5 h-5 text-white" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();

const navItems = [
  { name: "لیست محصولات", path: "/products", icon: "heroicons-outline:squares-2x2" },
  { name: "دریافت مشاوره", path: "/consultation", icon: "cuida:open-book-outline" },
  {
    name: "سوالات متداول",
    path: "/faq",
    icon: "streamline-plump:chat-bubble-square-question-remix",
  },
  { name: "تماس با ما", path: "/contact", icon: "heroicons-outline:phone" },
];

const isActive = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`);
};
</script>
