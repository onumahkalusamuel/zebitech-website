<script setup lang="ts">
import WPageHeader from "@/components/XPageHeader.vue";
import WSection from "@/components/XSection.vue";
import AboutUsSection from "@/components/page-parts/AboutUsSection.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import OurPartnersSection from "@/components/page-parts/OurPartnersSection.vue";
</script>

<template>
  <w-page-header title="About"/>

  <about-us-section/>

  <our-partners-section/>

  <our-team/>

  <our-stats/>

</template>
