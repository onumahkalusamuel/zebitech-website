<template>

  <x-home-page-header/>

  <our-partners-section/>

  <about-us-section/>

  <our-stats/>

  <our-team/>

  <what-we-offer-basic/>

  <div class="bg-[url(assets/workplace-bg.png)] bg-no-repeat bg-cover bg-top py-32">
    <x-section class="flex flex-col items-center justify-center gap-5 text-center px-20">
      <div class="font-semibold text-5xl">A workplace focused on experience and enabling teams to work together better
      </div>
      <div class="text-lg max-w-[860px]">How we work is changing, and businesses must find new and better ways to
        communicate, collaborate, and
        automate to support businesses in a world transitioning to advancement.
      </div>
      <div class="mt-10">
        <x-button>Get started</x-button>
      </div>
    </x-section>
  </div>

  <x-section class="flex flex-col items-center py-10">
    <div class="text-3xl font-semibold mb-4">Why you should choose us?</div>
    <div class="max-w-[520px] text-center">With lots of unique blocks, you can easily build a page without coding. Build
      your next landing page.
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 items-center py-10">
      <div class="flex flex-col gap-5 md:order-1">
        <div v-for="(w,x) in whyUs" :key="x" class="flex gap-5">
          <div
              class="w-12 h-12 flex items-center justify-center rounded-full text-secondary bg-secondary bg-opacity-[10%]">
            {{ x + 1 }}
          </div>
          <div class="flex-1">
            <div class="font-semibold text-lg">{{ w.title }}</div>
            <p>{{ w.content }}</p>
          </div>
        </div>
      </div>
      <img :src="WhyUsImage" alt="Why you should choose us" class="md:order-0"/>
    </div>
  </x-section>

  <div class="bg-[url(assets/cta-bg.png)] bg-no-repeat bg-cover bg-top py-32">
    <x-section class="grid md:grid-cols-2 grid-cols-1 gap-16 items-center">
      <div class="text-white flex flex-col gap-5 md:px-16">
        <div class="w-20 h-20 rounded-full bg-white bg-opacity-[10%] flex items-center justify-center">
          <message-bubble-icon class="w-10 h-10"/>
        </div>
        <div class="font-semibold text-3xl">Get a free consultancy from our expert right now!</div>
        <div>With lots of unique blocks, you can easily build a page without coding. Build your next landing page so
          quickly with Zebitech.
        </div>

      </div>
      <div class="flex items-center justify-end">
        <div class="bg-white rounded-xl p-5 md:max-w-[380px] w-full">
          <div class="py-2">
            <label for="name" class="font-semibold">Name</label>
            <input id="name" class="mt-2 input w-full input-bordered focus:outline-none"
                   placeholder="John Doe"/>
          </div>

          <div class="py-2">
            <label for="email" class="font-semibold">Email</label>
            <input id="email" class="mt-2 input w-full input-bordered focus:outline-none"
                   placeholder="john@doe.com" type="email"/>
          </div>
          <div class="py-2">
            <label for="phone" class="font-semibold">Phone</label>
            <input id="phone" class="mt-2 input w-full input-bordered focus:outline-none"
                   placeholder="234-813-379-2006"/>
          </div>

          <div class="py-2">
            <label for="phone" class="font-semibold">Which service do you need?</label>
            <select class="select select-bordered focus:outline-none w-full mt-2">
              <option v-for="opt in services" :key="opt">{{ opt }}</option>
            </select>
          </div>

          <div class="py-4">
            <x-button class="w-full">Get free consultancy</x-button>
          </div>

        </div>
      </div>
    </x-section>
  </div>

</template>
<script setup lang="ts">
import XHomePageHeader from "@/components/XHomePageHeader.vue";
import AboutUsSection from "@/components/page-parts/AboutUsSection.vue";
import OurPartnersSection from "@/components/page-parts/OurPartnersSection.vue";
import WhatWeOfferBasic from "@/components/page-parts/WhatWeOfferBasic.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import OurStats from "@/components/page-parts/OurStats.vue";
import XSection from "@/components/XSection.vue";
import XButton from "@/components/XButton.vue";
import WhyUsImage from "@/assets/why-us.png";
import MessageBubbleIcon from "@/components/icons/MessageBubbleIcon.vue";

const whyUs = [
  {
    title: 'Report',
    content: 'Unlocking healthcare efficiency through meticulous document management, ensuring accuracy and compliance in every detail'
  },
  {
    title: 'Innovative Creativity',
    content: 'Cultivating a creative culture to revolutionize healthcare maintenance, ensuring innovative solutions'
  },
  {
    title: 'Visual Precision',
    content: 'Enhancing healthcare experiences with cutting-edge imaging technologies, providing a clear and comprehensive view for informed decision making'
  },
  {
    title: 'Fortified Security Protocols',
    content: 'Safeguarding your sensitive healthcare data with advanced measures, emphasizing confidentiality and data integrity'
  },
];

const services = ['Website & App Development', 'UI/UX Design', 'CCTV Installation', 'CBT Centre Setup', 'Consultation & Business Development', 'Tech Equipment Solution'];

</script>
