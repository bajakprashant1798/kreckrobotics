<template>
  <div>
    <header
      ref="navbar"
      class="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-300 bg-transparent shadow-lg"
      :class="{
        'bg-white/95 shadow-lg': showBg,
        'translate-y-0': showNav,
        '-translate-y-full': !showNav,
      }"
    >
      <div class="flex items-center">
      <img src="/KRACK-ROBOTICS-LOGO.png" alt="Krackrobotics logo"
          class="h-10 w-auto mr-4 select-none" draggable="false" />
      </div>
      <nav class="hidden md:flex items-center space-x-6 text-lg font-semibold">
        <NuxtLink to="/" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
      </nav>
      <button @click="showMobileMenu = !showMobileMenu"
        class="md:hidden ml-auto z-50 p-2 focus:outline-none">
        <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path :d="showMobileMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="showMobileMenu"
          class="fixed inset-0 bg-white/95 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold z-40 md:hidden"
          @click="showMobileMenu = false">
          <NuxtLink to="/" class="hover:text-[#dc2223]">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-[#dc2223]">About Us</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-[#dc2223]">Contact Us</NuxtLink>
        </div>
      </transition>
    </header>
    <main class="pt-20">
      <slot />
    </main>
    <footer class="bg-gray-100 text-gray-600 py-4 px-8 text-center">
      &copy; {{ new Date().getFullYear() }} Krackrobotics. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showBg = ref(false)
const showNav = ref(true)
const showMobileMenu = ref(false)
const lastScroll = ref(0)
const onScroll = () => {
  const curr = window.scrollY
  showBg.value = curr > 40
  showNav.value = curr < 20 || curr < lastScroll.value
  lastScroll.value = curr
}
onMounted(() => {
  lastScroll.value = window.scrollY
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
