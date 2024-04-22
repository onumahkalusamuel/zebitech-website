<template>
  <w-header-navigation />
  <div class="bg-[url(assets/page-header-background.svg)] bg-no-repeat bg-cover bg-bottom outfit">
    <div class="flex items-center text-white">
      <w-section class="capitalize lg:text-6xl text-3xl font-semibold tracking-widest h-20 lg:h-44 flex justify-center items-center">
        {{ title }}
      </w-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import WSection from '@/components/WSection.vue'
import WHeaderNavigation from '@/components/WHeaderNavigation.vue'

defineProps<{ title: string }>()
</script>