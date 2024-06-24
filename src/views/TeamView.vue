<script setup lang="ts">
import WPageHeader from "@/components/XPageHeader.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Team - Zebitech Global Services',
  meta: [
    {
      name: 'og:title',
      content: 'Team - Zebitech Global Services',
    }
  ]
})
</script>

<template>
  <w-page-header title="Team"/>

  <our-team/>

  <our-stats/>

</template>
