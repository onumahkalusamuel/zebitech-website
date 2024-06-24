<script setup lang="ts">
import WPageHeader from "@/components/XPageHeader.vue";
import AboutUsSection from "@/components/page-parts/AboutUsSection.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import OurPartnersSection from "@/components/page-parts/OurPartnersSection.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Blog - Zebitech Global Services',
  meta: [
    {
      name: 'og:title',
      content: 'Blog - Zebitech Global Services',
    }
  ]
})
</script>

<template>
  <w-page-header title="About"/>

  <about-us-section/>

  <our-partners-section/>

  <our-team/>

  <our-stats/>

</template>
