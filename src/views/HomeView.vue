<template>

  <x-home-page-header/>

  <our-partners-section/>

  <about-us-section/>

  <our-stats/>

  <our-team/>

  <what-we-offer-basic/>

</template>
<script setup lang="ts">
import XHomePageHeader from "@/components/XHomePageHeader.vue";
import AboutUsSection from "@/components/page-parts/AboutUsSection.vue";
import OurPartnersSection from "@/components/page-parts/OurPartnersSection.vue";
import WhatWeOfferBasic from "@/components/page-parts/WhatWeOfferBasic.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import OurStats from "@/components/page-parts/OurStats.vue";

</script>
