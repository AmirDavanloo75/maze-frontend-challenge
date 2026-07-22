<template>
  <NuxtLayout>
    <div class="min-h-[70vh] flex items-center justify-center bg-[#e9edf5]">
      <div class="text-center px-4">
        <div
          class="w-24 h-24 mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center"
        >
          <Icon
            v-if="error?.statusCode === 404"
            name="mdi:file-search"
            class="w-12 h-12 text-pink-600"
          />
          <Icon v-else name="mdi:alert-circle" class="w-12 h-12 text-red-600" />
        </div>

        <h1 class="text-6xl font-black text-pink-600 mb-2">
          {{ error?.statusCode }}
        </h1>

        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {{
            error?.statusCode === 404 ? "صفحه مورد نظر یافت نشد" : "خطای غیرمنتظره سرور"
          }}
        </h2>

        <p
          class="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed"
        >
          {{
            error?.statusCode === 404
              ? "متأسفیم، محصول یا صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است."
              : "مشکلی در پردازش درخواست شما پیش آمده است. لطفاً دوباره تلاش کنید."
          }}
        </p>

        <button
          @click="handleError"
          class="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-all hover:shadow-lg font-medium"
        >
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
