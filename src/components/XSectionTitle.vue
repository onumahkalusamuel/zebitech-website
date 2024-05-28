<template>
  <div class="text-primary font-semibold">{{superTitle}}</div>
  <div class="text-4xl font-semibold py-3">{{title}}</div>
</template>

<script setup lang="ts">
defineProps<{
  superTitle?: string;
  title: string;
}>()
</script>