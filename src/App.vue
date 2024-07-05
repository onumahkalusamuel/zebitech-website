<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useHead} from '@vueuse/head'

useHead({
  title: 'Zebitech Global Services',
  meta: [
    {
      name: 'description',
      content: 'We\'re dedicated to harnessing the latest advancements in technology to drive innovation and empower businesses worldwide'
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
