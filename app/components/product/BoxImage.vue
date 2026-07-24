<template>
  <div class="bg-white rounded-3xl p-6 shadow-sm">
    <h1 class="text-xl font-bold text-[#0A2A51] mb-4 pt-4 text-left" dir="ltr">
      {{ props.title }}
    </h1>

    <div class="relative w-full h-[300px] rounded-2xl overflow-hidden">
      <NuxtPicture
        :src="props.image"
        :alt="props.title"
        :img-attrs="{ class: 'w-full h-full object-contain p-4' }"
        format="webp"
        quality="80"
      />
      <button
        type="button"
        @click="isOpen = true"
        class="h-10 w-10 absolute top-3 right-3 bg-black/40 p-1.5 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
        aria-label="بزرگنمایی تصویر"
      >
        <Icon name="solar:rounded-magnifer-zoom-in-linear" class="w-7 h-7 text-white" />
      </button>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          @click="isOpen = false"
          @keydown.escape="isOpen = false"
        >
          <button
            type="button"
            @click.stop="isOpen = false"
            class="absolute top-4 right-4 h-10 w-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="بستن"
          >
            <Icon name="mdi:close" class="w-6 h-6 text-white" />
          </button>

          <div
            class="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            @click.stop
          >
            <img
              :src="props.image"
              :alt="props.title"
              class="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  image: string;
  title: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);

watch(isOpen, (value) => {
  if (value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>