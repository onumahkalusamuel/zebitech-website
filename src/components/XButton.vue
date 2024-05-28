<template>
  <button
      class="text-lg btn px-10 border-none"
      :class="light
    ? 'text-[#130D3A] bg-white hover:bg-gray-200'
    : 'text-white bg-[url(assets/button-background.svg)] bg-no-repeat bg-cover bg-bottom'"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
defineProps<{ light?: boolean }>()
</script>