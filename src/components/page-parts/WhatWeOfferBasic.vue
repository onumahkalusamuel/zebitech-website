<template>
  <x-section class="text-center">
    <x-section-title super-title="Our Services" title="What We Offer"/>

    <p class="max-w-[580px] mx-auto">
      Discover a range of tailored services designed to elevate your operations and drive growth from consulting to
      development, we’re here to help you thrive in the digital era.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <div class="shadow text-left p-8 cursor-pointer rounded-xl hover:shadow-md" v-for="(service,x) in services"
           :key="x">
        <div><img :src="service.icon" :alt="service.title" class="w-16"/></div>
        <div class="text-2xl mt-5 mb-2 font-semibold" v-html="service.title"></div>
        <div>{{ service.content }}</div>
      </div>
    </div>
  </x-section>

</template>
<script setup lang="ts">
import XSection from "@/components/XSection.vue";
import XSectionTitle from "@/components/XSectionTitle.vue";
import CctvInstallation from "@/assets/services/cctv-installation.png";
import ConsultationBusinessDev from "@/assets/services/consultation-business-development.png";
import TechEquipment from "@/assets/services/tech-equipment-solution.png";
import UiUxDesign from "@/assets/services/ui-ux-design.png";
import CbtCentreSetup from "@/assets/services/cbt-centre-setup.png";
import WebAppDevelopment from "@/assets/services/web-app-development.png";

const services = [
  {
    icon: WebAppDevelopment,
    title: 'Website & App Development',
    content: 'Craft, Bespoke Digital Experience Tailored to your needs.'
  },
  {
    icon: UiUxDesign,
    title: 'UI/UX<br/> Design',
    content: 'Elevate User Engagement with stunning UI/UX Designs.'
  },
  {
    icon: CctvInstallation,
    title: 'CCTV<br/> Installation',
    content: 'Enhancing Security with State-of-the-Art Surveillance Solutions.'
  },
  {
    icon: CbtCentreSetup,
    title: 'CBT Centre<br/> Setup',
    content: 'Craft, Bespoke Digital Experience Tailored to your needs.'
  },
  {
    icon: ConsultationBusinessDev,
    title: 'Consultation &<br/> Business Development',
    content: 'Driving Business Growth through Strategic Consultations.'
  },
  {
    icon: TechEquipment,
    title: 'Tech Equipment<br/> Solution',
    content: 'Providing Reliable Tech Equipment Solutions for your Business.'
  },
];

</script>