<template>
  <div class="w-full py-6 bg-[#E9EDF5] p-16">
    <div class="flex items-start gap-6">
      <!-- Products -->
      <main class="flex-1 order-2">
        <!-- Toolbar -->
        <ProductListToolbar />

        <!-- Grid -->
        <ProductListGrid />
      </main>

      <!-- Sidebar -->
      <ProductListSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "محصولات | فروشگاه ماز",
  description:
    "مشاهده، مقایسه و خرید بهترین محصولات با بالاترین کیفیت و گارانتی معتبر. ارسال سریع به سراسر کشور با قیمت مناسب.",
  keywords:
    "محصولات, خرید آنلاین, فروشگاه اینترنتی, محصولات با کیفیت, ماز, مقایسه محصولات",
  author: "فروشگاه ماز",
  robots: "index, follow",

  ogTitle: "محصولات | فروشگاه ماز",
  ogDescription:
    "مشاهده، مقایسه و خرید بهترین محصولات با بالاترین کیفیت و گارانتی معتبر. ارسال سریع به سراسر کشور.",
  ogImage: "/images/productListPage.png",
  ogUrl: "https://maze.com",
  ogType: "website",
  ogSiteName: "فروشگاه ماز",
  ogLocale: "fa_IR",

  themeColor: "#E20054",
});
</script>
