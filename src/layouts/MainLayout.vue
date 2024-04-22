<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import ZebitechLogoDark from "@/components/logos/ZebitechLogoDark.vue";
import { navConfig } from '@/configs/nav.config'

const route = useRoute()

</script>

<template>
  <main class="text-[#344563]">
    <RouterView />
  </main>
  <div class="flex flex-wrap flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center max-w-[1200px] mx-auto px-6 py-14">
    <div class="">
      <router-link to="/">
        <zebitech-logo-dark />
      </router-link>
    </div>
    <div class="flex flex-wrap justify-center">
      <router-link
        v-for="(a,b) in navConfig"
        :to="`${a.href}`"
        :key="b"
        class="px-2 lg:px-4 hover:text-[#506CDE]"
        :active-class="route.path == a.href? 'text-[#506CDE]': ''"
      >
        {{ a.label.split(' ').join('&nbsp;') }}
      </router-link>
    </div>
  </div>
</template>