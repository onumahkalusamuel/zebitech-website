<template>
  <x-section>
    <div class="flex flex-col md:flex-row items-center">
      <div class="">
        <img :src="AboutUsSectionImage" alt="about us"/>
      </div>
      <div class="py-10 md:px-20 max-w-[620px]">

        <x-section-title super-title="About us" title="Innovate your way to success only with zebitech"/>

        <p>At Zebitech Global Services, we’re more than just a technology company, we’re innovators, problem solvers and
          partners in your journey towards success.</p>

        <p>With a relentless commitment to excellence and a passion for pushing the boundaries of what’s possible, we’re
          here to revolutionize the tech industry and empower...</p>

        <x-button class="mt-5">Learn more</x-button>
      </div>
    </div>
  </x-section>
</template>
<script setup lang="ts">
import XSection from "@/components/XSection.vue";
import XButton from "@/components/XButton.vue";
import AboutUsSectionImage from "@/assets/about-us-section.png";
import XSectionTitle from "@/components/XSectionTitle.vue";

</script>