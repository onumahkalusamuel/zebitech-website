<template>
  <div class="border">
    <div class="flex md:flex-row flex-wrap gap-8 items-center justify-center px-6 my-10 lg:my-20">
      <img
          class="hover:scale-100 scale-95 filter grayscale hover:filter-none transition-all ease-in-out duration-200 h-[60px]"
          :src="partner.logo" :alt="partner.name" v-for="(partner, i) in partners" :key="i" :title="partner.name"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import ConstellationGlobal from "@/assets/partners/constellation-global.png";
import Clinirad from "@/assets/partners/clinirad.png";
import OjaNow from "@/assets/partners/ojanow-logo.png";
import EaseCoreLogo from "@/assets/partners/easecore-logo.png"
import SsaLogo from "@/assets/partners/ssa-logo.png";
import CnsMaid from "@/assets/partners/college-of-nursing.jpeg";
import VitaMediq from "@/assets/partners/vitamidiq.png";
import AwsLogo from "@/assets/partners/aws-logo.png";
import GoogleLogo from "@/assets/partners/google-logo.png"

const partners = [
  {
    name: 'Constellation Global',
    logo: ConstellationGlobal,
  },
  {
    name: 'College of Nursing, Maiduguri',
    logo: CnsMaid,
  },
  {
    name: 'Amazon Web Services',
    logo: AwsLogo
  },
  {
    name: 'Clinirad Consults',
    logo: Clinirad,
  },
  {
    name: 'OjaNow',
    logo: OjaNow
  },
  {
    name: 'Easecore Limited',
    logo: EaseCoreLogo,
  },
  {
    name: 'Smart School Africa',
    logo: SsaLogo,
  },
  {
    name: 'Vitamediq Diet Clinic',
    logo: VitaMediq
  },
  {
    name: 'Google Cloud Platform',
    logo: GoogleLogo,
  }
]
</script>
