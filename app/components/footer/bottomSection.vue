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
            class="w-8 h-8 rounded-full bg-[#eb7fa9] flex items-center justify-center text-white hover:bg-red-700 transition-colors"
          >
            <Icon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Logos -->
      <div class="flex items-center gap-4">
        <div
          v-for="badge in trustBadges"
          :key="badge.alt"
          class="w-[72px] h-[72px] bg-gray-50 rounded-lg flex items-center justify-center"
        >
          <img
            :src="badge.src"
            :alt="badge.alt"
            class="w-[72px] h-[72px] object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const footerSocials = [
  { name: "لینکدین", icon: "mdi:linkedin", href: "#" },
  { name: "یوتیوب", icon: "mdi:youtube", href: "#" },
  { name: "توییتر", icon: "mdi:twitter", href: "#" },
  { name: "اینستاگرام", icon: "mdi:instagram", href: "#" },
  { name: "تلگرام", icon: "mdi:telegram", href: "#" },
];

const trustBadges = [
  { src: "/images/neshaneMelli.png", alt: "نشان ملی" },
  { src: "/images/enamad.png", alt: "اینماد" },
];
</script>
