<!-- components/ComingSoon.vue -->
<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-[#e9edf5]">
    <div class="text-center px-4">
      <div
        class="w-24 h-24 mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center"
      >
        <Icon name="mdi:hammer-wrench" class="w-12 h-12 text-pink-600" />
      </div>

      <h1 class="text-2xl md:text-3xl font-bold text-gray-700 mb-3">
        این صفحه به زودی ساخته می‌شود
      </h1>
      <p class="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
        ما در حال کار روی این صفحه هستیم. <br />
        به زودی با محتوای کامل در دسترس خواهد بود.
      </p>

      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors font-medium"
      >
        <Icon name="mdi:arrow-right" class="w-5 h-5" />
        بازگشت به صفحه اصلی
      </NuxtLink>
    </div>
  </div>
</template>
