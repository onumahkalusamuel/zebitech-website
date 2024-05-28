<template>
  <div class="bg-[url(assets/our-stats-bg.png)] bg-no-repeat bg-cover bg-center">
    <x-section class="text-white flex justify-between gap-10 flex-wrap md:py-28 py-16">
      <div>
        <div class="text-4xl font-semibold">50,000+ happy clients.</div>
        <p class="text-sm max-w-[480px]">The best asset a business can have is a happy customer. We are glad to serve
          you. Here is a showcase of our statistics.</p>
      </div>
      <div class="flex gap-3 justify-between flex-wrap">
        <div>
          <div class="text-5xl font-semibold">4.9</div>
          <div class="text-sm">223 average ratings</div>
        </div>
        <div>
          <div class="text-5xl font-semibold">A+</div>
          <div class="text-sm">179 client reviews</div>
        </div>
        <div>
          <div class="text-5xl font-semibold">4.8</div>
          <div class="text-sm">129 client reviews</div>
        </div>
      </div>
    </x-section>
  </div>
</template>
<script setup lang="ts">
import XSection from "@/components/XSection.vue";
</script>