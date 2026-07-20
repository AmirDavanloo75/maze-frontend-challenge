<template>
  <div class="w-full py-6 bg-[#e9edf5] p-16">
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
