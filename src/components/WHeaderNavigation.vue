<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar py-6 max-w-[1200px] mx-auto px-6" :class="light?'text-white':''">
        <div class="flex-1">
          <router-link to="/">
            <zebitech-logo-light v-if="light" />
            <zebitech-logo-dark v-else />
          </router-link>
        </div>

        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <li v-for="(a,b) in navConfig" :key="b">
              <router-link
                :to="`${a.href}`"
                class="px-4 hover:underline text-lg remove-bg"
                :active-class="route.path == a.href ? 'underline font-semibold':''">
                {{ a.label }}
              </router-link>
            </li>
          </ul>
          <w-button :light="light">Get a quote</w-button>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-lg gap-1">
        <!-- Sidebar content here -->
        <li v-for="(a,b) in navConfig" :key="b">
          <router-link
            :to="`${a.href}`"
            class="px-4 hover:bg-[#79C7C555]"
            :active-class="route.path == a.href?'bg-[#79C7C5]':''">
            {{ a.label }}
          </router-link>
        </li>
        <w-button :light="light">Get a quote</w-button>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { navConfig } from '@/configs/nav.config'
import { useRoute } from 'vue-router'
import ZebitechLogoLight from "@/components/logos/ZebitechLogoLight.vue";
import ZebitechLogoDark from "@/components/logos/ZebitechLogoDark.vue";
import WButton from "@/components/WButton.vue";

const route = useRoute()

defineProps<{ light?: boolean }>()
</script>
<style scoped>
.remove-bg:hover {
  background-color: unset!important;
}
</style>