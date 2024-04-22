<template>
  <div class="bg-[url(assets/hero-background.svg)] bg-no-repeat bg-cover bg-bottom flex flex-col">
    <w-header-navigation light/>
    <div class="flex text-white flex-1">
      <w-section class="max-w-[920px] text-center h-full">
        <div class="text-4xl lg:text-5xl my-5 font-semibold">
          We’re Empowering Innovation Through Technology
        </div>
        <div class="max-w-[680px] mx-auto mb-6 lg:my-6 font-light text-lg">
          At Zebitech we’re dedicated to harnessing the latest advancements in technology to drive innovation and
          empower businesses worldwide.
        </div>
        <div>
          <w-button light>Get a proposal</w-button>
        </div>
        <img :src="HeroImage" alt="Zebitech Exams" class="mt-14"/>
      </w-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import WSection from '@/components/WSection.vue'
import WHeaderNavigation from '@/components/WHeaderNavigation.vue'
import WButton from "@/components/WButton.vue";
import HeroImage from "@/assets/hero-image.png";

</script>
