<template>
  <div class="text-center pt-20">
    <x-section-title super-title="Our Team" title="Our Awesome Team"/>
    <p class="max-w-[580px] mx-auto px-6">
      Talent wins games, but teamwork and intelligence win championships. Our great
      successes at Zebitech is powered by our great team!
    </p>

    <div class="py-10 flex justify-center">
      <div class="carousel carousel-center p-4 space-x-4">
        <div class="carousel-item relative h-[300px] w-[260px] md:h-[340px] md:w-[280px] rounded-box overflow-hidden" v-for="expert in experts" :key="expert.name">
          <div class="w-full px-2 absolute left-[50%] bottom-2 transform translate-x-[-50%]">
            <div
                class="p-2 md:py-5 rounded-xl text-center bg-[url(assets/team-name-card-bg.svg)] bg-no-repeat bg-cover bg-center">
              <div class="text-dark text-lg font-semibold">{{ expert.name }}</div>
              <div class="text-sm">{{ expert.role }}</div>
            </div>
          </div>
          <img :src="expert.photo" :alt="expert.name" class="object-cover w-full h-full"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import XSectionTitle from "@/components/XSectionTitle.vue";
import KaluOnumah from "@/assets/team/onumah-kalu.jpg";
import EngerColman from "@/assets/team/enger-colman.png";
import JohnEblabor from "@/assets/team/john-eblabor.jpg";
import IkemeOkechukwu from "@/assets/team/ikeme-okey.jpg";

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
    photo: IkemeOkechukwu,
    name: 'Ikeme Okechukwu',
    role: 'Director of Business Development'
  },
  {
    photo: JohnEblabor,
    name: 'Eblabor John',
    role: 'Director of Operations'
  },
];

</script>