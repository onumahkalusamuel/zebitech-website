<template>
  <div class="bg-[url(assets/hero-background.svg)] bg-no-repeat bg-cover bg-bottom flex flex-col">
    <x-header-navigation light/>
    <div class="flex text-white flex-1">
      <x-section class="max-w-[920px] text-center h-full">
        <div class="text-4xl lg:text-5xl my-5 font-semibold">
          We’re Empowering Innovation Through Technology
        </div>
        <div class="max-w-[680px] mx-auto mb-6 lg:my-6 font-light text-lg">
          At Zebitech we’re dedicated to harnessing the latest advancements in technology to drive innovation and
          empower businesses worldwide.
        </div>
        <div>
          <x-button light>Get a proposal</x-button>
        </div>
        <img :src="HeroImage" alt="Zebitech Exams" class="mt-14"/>
      </x-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import XSection from '@/components/XSection.vue'
import XHeaderNavigation from '@/components/XHeaderNavigation.vue'
import XButton from "@/components/XButton.vue";
import HeroImage from "@/assets/hero-image.png";

</script>
