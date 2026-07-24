<template>
  <div
    class="px-8 lg:px-0 grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr]
    gap-y-10 gap-x-6 mb-8 pb-8 mb:items-center xl:grid-cols-[2fr_1fr_1fr_1fr] 2xl:grid-cols-[2fr_1fr_1fr_1fr]
    "
  >
    <!-- Working Hours -->
    <div class="hidden lg:flex md:flex xl:flex 2xl:flex items-end justify-center h-full">
      <p
        class="text-[#445A74] text-center lg:text-right font-medium text-[13px] leading-6"
      >
        هفت روز هفته از ۸ صبح تا ۲ شب پاسخگو هستیم
      </p>
    </div>

    <!-- Quick Access -->
    <div>
      <h3 class="text-[#22354E] font-bold text-xl mb-5">دسترسی سریع</h3>

      <ul class="space-y-4">
        <li v-for="link in quickLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block text-sm text-[#445A74] hover:text-[#E20054] transition"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Site Guide -->
    <div>
      <h3 class="text-[#22354E] font-bold text-xl mb-5">راهنمای سایت</h3>

      <ul class="space-y-4">
        <li v-for="link in guideLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block text-sm text-[#445A74] hover:text-[#E20054] transition"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Social -->
    <div class="col-span-2 lg:col-span-1">
      <h3 class="text-[#22354E] font-bold text-xl mb-5">شبکه‌های اجتماعی</h3>

      <ul class="space-y-4">
        <li v-for="social in socialLinks" :key="social.name">
          <a
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-[#445A74] hover:text-[#E20054] transition"
          >
            <div
              class="w-8 h-8 rounded-full bg-[#6783A0] flex items-center justify-center"
            >
              <Icon :name="social.icon" class="w-5 h-5 text-white" />
            </div>

            <span class="text-sm">
              {{ social.name }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FooterLink {
  title: string
  to: string
}

interface SocialLink {
  name: string
  icon: string
  href: string
  hoverColor: string
}

const quickLinks: FooterLink[] = [
  { title: 'درباره ما', to: '/about' },
  { title: 'بلاگ', to: '/blog' },
  { title: 'تماس با ما', to: '/contact' },
  { title: 'خدمات پس از فروش', to: '/after-sales' },
]

const guideLinks: FooterLink[] = [
  { title: 'قوانین و مقررات', to: '/rules' },
  { title: 'دریافت مشاوره', to: '/consultation' },
  { title: 'انتقادات و پیشنهادات', to: '/feedback' },
]

const socialLinks: SocialLink[] = [
  {
    name: 'تلگرام',
    icon: 'mdi:telegram',
    href: '#',
    hoverColor: 'hover:text-blue-500',
  },
  {
    name: 'اینستاگرام',
    icon: 'mdi:instagram',
    href: '#',
    hoverColor: 'hover:text-pink-600',
  },
  {
    name: 'لینکدین',
    icon: 'mdi:linkedin',
    href: '#',
    hoverColor: 'hover:text-blue-700',
  },
]
</script>