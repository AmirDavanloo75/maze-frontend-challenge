<template>
  <div
    class="bg-[#F8F9FC] rounded-t-2xl shadow-[0px_2px_2px_0px_#00000014] -mx-4 px-4 pt-8 pb-6"
  >
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="hidden md:block w-32"></div>

      <!-- Copyright Text + Social Icons -->
      <div class="flex flex-col items-center gap-4">
        <div class="text-center">
          <p class="text-gray-600 text-sm leading-relaxed">
            تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر
            <br />
            گونه کپی برداری پیگرد قانونی دارد.
          </p>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in footerSocials"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-full bg-[#eb7fa9] flex items-center justify-center text-white hover:bg-[#E20054] transition-colors"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Logos -->
      <div class="flex items-center gap-4">
        <div
          v-for="badge in trustBadges"
          :key="badge.alt"
          class="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden"
        >
          <NuxtPicture
            :src="badge.src"
            :alt="badge.alt"
            :img-attrs="{ class: 'w-full h-full object-contain p-2' }"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string
  icon: string
  href: string
}

interface TrustBadge {
  src: string
  alt: string
}

const footerSocials: SocialLink[] = [
  { name: 'لینکدین', icon: 'mdi:linkedin', href: '#' },
  { name: 'یوتیوب', icon: 'mdi:youtube', href: '#' },
  { name: 'توییتر', icon: 'mdi:twitter', href: '#' },
  { name: 'اینستاگرام', icon: 'mdi:instagram', href: '#' },
  { name: 'تلگرام', icon: 'mdi:telegram', href: '#' },
]

const trustBadges: TrustBadge[] = [
  { src: '/images/neshaneMelli.png', alt: 'نشان ملی' },
  { src: '/images/enamad.png', alt: 'اینماد' },
]
</script>