<template>
  <w-section class="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    <div
      class="bg-[#FAFAFA] border border-[#595566] p-5 rounded-xl text-[#284B63] hover:text-white hover:bg-[#284B63] box"
      v-for="(wwd, i) in items" :key="i">
      <div
        class="h-14 w-14 rounded-full flex items-center justify-center bg-[#284B63] text-white icon">
        <component :is="wwd.icon" />
      </div>
      <div class="text-xl font-semibold mb-3 mt-4">{{ wwd.title }}</div>
      <div class="">{{ wwd.content }}</div>
    </div>
  </w-section>
</template>
<script setup lang="ts">
import WSection from '@/components/WSection.vue'

interface IWSlab {
  icon: any;
  title: string;
  content: string;
}

defineProps<{ items: IWSlab[] }>()
</script>
<style scoped>

.box:hover .icon {
  color: #284B63;
  background-color: white;
}

</style>