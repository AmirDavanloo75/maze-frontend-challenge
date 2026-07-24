<template>
  <nav class="flex items-center text-sm text-gray-600" dir="rtl">
    <ol class="flex items-center gap-2">
      
      <li>
        <NuxtLink to="/" class="hover:text-[#E20054] transition-colors flex items-center">
          <Icon name="hugeicons:home-05" class="w-5 h-5 text-gray-400" />
        </NuxtLink>
      </li>

      <li v-for="(item, index) in breadcrumbs" :key="index">
        <div class="flex items-center gap-2">
          <Icon name="ic:twotone-less-than" class="w-4 h-4 text-[#6783a0]" />

          <template v-if="item.to">
            <NuxtLink :to="item.to" class="hover:text-[#E20054] transition-colors">
              <span class="font-medium text-[#6783a0]">{{ item.label }}</span>
            </NuxtLink>
          </template>

          <template v-else>
            <span class="font-medium text-[#6783a0]">
              {{ isProductPage ? productTitle : item.label }}
            </span>
          </template>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const breadcrumbs = useBreadcrumbs()

const isProductPage = computed(() => route.name === 'products-id')
const productTitle = ref('در حال بارگذاری...')

if (isProductPage.value) {
  const { data: product } = await useAsyncData(`breadcrumb-product-${route.params.id}`, () =>
    $fetch(`https://fakestoreapi.com/products/${route.params.id}`)
  )
  
  if (product.value) {
    productTitle.value = product.value.title
  }
}
</script>