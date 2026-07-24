<template>
  <header
    class="w-full h-[80px] lg:h-[120px] rounded-b-2xl bg-white/80 backdrop-blur-[20px] shadow-sm mx-auto"
  >
    <div class="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 lg:px-8">
      <div class="w-[100px] hidden lg:block"></div>

      <nav class="hidden lg:flex flex-1 items-center justify-center">
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group flex flex-col items-center gap-1 font-medium text-[13px] leading-6 text-[#122a51] transition-colors hover:text-[#E20054]"
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

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 text-[#122a51] hover:text-[#E20054] transition-colors"
        aria-label="منوی اصلی"
        @click="toggleMobileMenu"
      >
        <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>

      <!-- Action Button -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/contact"
          class="flex items-center justify-center gap-2 bg-[#E20054] h-10 rounded-2xl px-4 text-white transition-opacity hover:opacity-90"
          aria-label="تماس با ما"
        >
          <span class="font-bold text-sm">تماس</span>
          <Icon name="solar:phone-calling-rounded-outline" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-[80px] left-0 right-0 bg-white shadow-lg border-t"
      >
        <nav class="flex flex-col p-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 py-3 px-4 rounded-lg text-[#122a51] hover:bg-gray-100 transition-colors"
            :class="{ 'text-[#E20054] bg-pink-50': isActive(item.path) }"
            :aria-current="isActive(item.path) ? 'page' : undefined"
            @click="closeMobileMenu"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
            <span class="font-medium">{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
interface NavItem {
  name: string
  path: string
  icon: string
}

const route = useRoute()

const isMobileMenuOpen = ref(false)

const navItems: NavItem[] = [
  { name: 'لیست محصولات', path: '/products', icon: 'heroicons-outline:squares-2x2' },
  { name: 'دریافت مشاوره', path: '/consultation', icon: 'cuida:open-book-outline' },
  {
    name: 'سوالات متداول',
    path: '/faq',
    icon: 'streamline-plump:chat-bubble-square-question-remix',
  },
  { name: 'تماس با ما', path: '/contact', icon: 'heroicons-outline:phone' },
]

const isActive = (path: string): boolean => {
  return route.path === path || route.path.startsWith(`${path}/`)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(() => route.path, closeMobileMenu)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>