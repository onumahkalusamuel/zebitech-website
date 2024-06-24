<script setup lang="ts">
import WPageHeader from "@/components/XPageHeader.vue";
import OurPartnersSection from "@/components/page-parts/OurPartnersSection.vue";
import WhatWeOfferBasic from "@/components/page-parts/WhatWeOfferBasic.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Products - Zebitech Global Services',
  meta: [
    {
      name: 'og:title',
      content: 'Products - Zebitech Global Services',
    }
  ]
})
</script>

<template>
  <w-page-header title="Products"/>

  <our-partners-section/>

  <what-we-offer-basic/>

  <our-stats/>

</template>
