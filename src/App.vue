<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useHead} from '@vueuse/head'

useHead({
  title: 'Zebitech Global Services',
  meta: [
    {
      name: 'description',
      content: 'Zebitech  Is A Medical Imaging And Clinical Support Centre With A Vision Of Providing Safe, Reliable And Affordable Diagnostics And Medical Services.'
    },
    {
      name: 'og:title',
      content: 'Zebitech Global Services',
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
