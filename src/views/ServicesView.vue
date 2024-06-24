<script setup lang="ts">
import WPageHeader from "@/components/XPageHeader.vue";
import WhatWeOfferBasic from "@/components/page-parts/WhatWeOfferBasic.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Services - Zebitech Global Services',
  meta: [
    {
      name: 'og:title',
      content: 'Services - Zebitech Global Services',
    }
  ]
})
</script>

<template>
  <w-page-header title="Services" />

  <what-we-offer-basic />

  <our-stats/>

</template>
