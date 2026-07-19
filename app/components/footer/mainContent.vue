<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-8 pb-8"
  >
    <!-- Working Hours -->
    <div class="order-1 flex items-end justify-center h-full">
      <p
        class="text-[#445A74] text-center lg:text-right font-[Yekan_Bakh] font-medium text-[13px] leading-[24px]"
      >
        هفت روز هفته از ۸ صبح تا ۲ شب پاسخگو هستیم
      </p>
    </div>

    <!-- Quick Access -->
    <div class="order-2">
      <h3 class="text-gray-800 font-bold text-lg mb-6">دسترسی سریع</h3>
      <ul class="space-y-4">
        <li v-for="link in quickLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-gray-600 hover:text-blue-600 transition-colors block"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Site Guide -->
    <div class="order-3">
      <h3 class="text-gray-800 font-bold text-lg mb-6">راهنمای سایت</h3>
      <ul class="space-y-4">
        <li v-for="link in guideLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-gray-600 hover:text-blue-600 transition-colors block"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Social Networks -->
    <div class="order-4">
      <h3 class="text-gray-800 font-bold text-lg mb-6">شبکه‌های اجتماعی</h3>
      <ul class="space-y-4">
        <li v-for="social in socialLinks" :key="social.name">
          <a
            :href="social.href"
            :class="`flex items-center gap-3 text-gray-100 ${social.hoverColor} transition-colors`"
            :aria-label="social.name"
          >
            <div
              class="w-8 h-8 rounded-full bg-[#6783a0] flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </div>
            <span class="text-gray-600">{{ social.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const quickLinks = [
  { title: "درباره ما", to: "/about" },
  { title: "بلاگ", to: "/blog" },
  { title: "تماس با ما", to: "/contact" },
  { title: "خدمات پس از فروش", to: "/after-sales" },
];

const guideLinks = [
  { title: "قوانین و مقررات", to: "/rules" },
  { title: "دریافت مشاوره", to: "/consultation" },
  { title: "انتقادات و پیشنهادات", to: "/feedback" },
];

const socialLinks = [
  {
    name: "تلگرام",
    icon: "mdi:telegram",
    href: "#",
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "اینستاگرام",
    icon: "mdi:instagram",
    href: "#",
    hoverColor: "hover:text-pink-600",
  },
  {
    name: "لینکدین",
    icon: "mdi:linkedin",
    href: "#",
    hoverColor: "hover:text-blue-700",
  },
];
</script>
