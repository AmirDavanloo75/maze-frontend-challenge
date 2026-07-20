<template>
  <div class="flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl mb-6">
    <span class="text-gray-700 text-sm font-medium"> فیلترهای اعمال شده </span>

    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEE2E8] rounded-full">
        <Icon
          name="heroicons:magnifying-glass"
          class="w-4 h-4 text-gray-600 flex-shrink-0"
        />
        <span
          class="text-gray-700 whitespace-nowrap font-yekan-bakh text-[12px] leading-[16px] font-medium text-right align-middle"
          >دولنگه</span
        >
        <button class="flex-shrink-0 self-center">
          <Icon
            name="heroicons:x-mark"
            class="w-3.5 h-3.5 text-gray-500 hover:text-gray-700 align-middle"
          />
        </button>
      </div>

      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEE2E8] rounded-full">
        <Icon
          name="tabler:sort-descending"
          class="w-4 h-4 text-gray-600 flex-shrink-0 scale-x-[-1]"
        />
        <span
          class="text-gray-700 whitespace-nowrap font-yekan-bakh text-[12px] leading-[16px] font-medium text-right align-middle"
          >تعداد</span
        >
        <button class="flex-shrink-0 self-center">
          <Icon
            name="heroicons:x-mark"
            class="w-3.5 h-3.5 text-gray-500 hover:text-gray-700 align-middle"
          />
        </button>
      </div>
    </div>
  </div>
</template>
