<template>
  <component
    :is="componentTag"
    :to="isNuxtLink ? href : undefined"
    :href="!isNuxtLink ? href : undefined"
    class="w-fit inline-flex items-center gap-3 rounded-full relative cursor-pointer
           px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold
           bg-[#dc2223] text-white overflow-hidden group transition-all duration-300
           hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#dc2223]/30"
    :aria-label="label"
  >
    <!-- sliding bg -->
    <span
      class="absolute inset-0 bg-[#b81b1c] -translate-x-full
             group-hover:translate-x-0 transition-transform duration-300"
      aria-hidden="true"
    />

    <span class="relative z-10 flex items-center gap-2">
      {{ label }}
      <RightCircle
        v-if="showIcon"
        class="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  </component>
</template>

<script setup>
import RightCircle from '~/components/icons/RightCircle.vue'
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, required: true },
  showIcon: { type: Boolean, default: true },
})

const isNuxtLink = computed(() => props.href.startsWith('/'))
const componentTag = computed(() =>
  isNuxtLink.value ? 'NuxtLink' : 'a'
)
</script>