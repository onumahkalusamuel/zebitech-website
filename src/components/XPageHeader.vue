<template>
  <x-header-navigation />
  <div class="bg-[url(assets/page-header-background.svg)] bg-no-repeat bg-cover bg-bottom outfit">
    <div class="flex items-center text-white">
      <x-section class="capitalize lg:text-6xl text-3xl font-semibold tracking-widest h-20 lg:h-44 flex justify-center items-center">
        {{ title }}
      </x-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import XSection from '@/components/XSection.vue'
import XHeaderNavigation from '@/components/XHeaderNavigation.vue'

defineProps<{ title: string }>()
</script>