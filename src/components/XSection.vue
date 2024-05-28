<template>
  <section class="max-w-[1200px] mx-auto px-6 my-10 lg:my-20">
    <div v-if="preTitle" class="text-[#79C7C5] py-4">{{ preTitle }}</div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ preTitle?: string }>()
</script>