<template>
  <div class="text-center pt-20">
    <x-section-title super-title="Our Team" title="Our Awesome Team"/>
    <p class="max-w-[580px] mx-auto px-6">
      Talent wins games, but teamwork and intelligence win championships. Our great
      successes at Zebitech is powered by our great team!
    </p>

    <div class="py-10 flex justify-center">
      <div class="carousel carousel-center p-4 space-x-4">
        <div class="carousel-item relative" v-for="expert in experts" :key="expert.name">
          <div class="w-full px-5 absolute left-[50%] bottom-5 transform translate-x-[-50%]">
            <div
                class="p-5 rounded-xl text-center bg-[url(assets/team-name-card-bg.svg)] bg-no-repeat bg-cover bg-center">
              <div class="text-dark text-lg font-semibold">{{ expert.name }}</div>
              <div class="text-sm">{{ expert.role }}</div>
            </div>
          </div>
          <img :src="expert.photo" :alt="expert.name" class="rounded-box"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import XSectionTitle from "@/components/XSectionTitle.vue";
import KaluOnumah from "@/assets/team/kalu-onumah.png";
import GodgiftAroh from "@/assets/team/godgift-aroh.png";
import EngerColman from "@/assets/team/enger-colman.png";
import MajiOlobo from "@/assets/team/maji-olobo.png";

const experts = [
  {
    photo: KaluOnumah,
    name: 'Onumah Kalu Samuel',
    role: 'Chief Executive Officer'
  },
  {
    photo: EngerColman,
    name: 'Enger Colman',
    role: 'Chief Technology Officer'
  },
  {
    photo: GodgiftAroh,
    name: 'Godgift Aroh',
    role: 'Director of Product'
  },
  {
    photo: MajiOlobo,
    name: 'Maji Olobo',
    role: 'Head Operations Officer'
  },
];

</script>