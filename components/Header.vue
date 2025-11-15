<template>
    <header
      ref="navbar"
      class="header fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
      :class="{
        '': showBg,
        'translate-y-0': showNav,
        '-translate-y-full': !showNav,
      }"
    >
      <div class="flex items-center justify-between mx-5 my-3 px-8 md:px-8 py-4 bg-[#f8f4f4] rounded-2xl shadow-md">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center" @click.prevent="goHome">
            <img src="/KRACK-ROBOTICS-LOGO.png" alt="Krackrobotics logo"
            class="h-10 w-auto mr-4 select-none logo" draggable="false" />
          </NuxtLink>
        </div>
        <nav class="hidden md:flex items-center space-x-6 text-lg font-semibold">
          <NuxtLink to="/" @click.prevent="goHome" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-[#dc2223] transition-colors">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
        </nav>
        <button @click="showMobileMenu = !showMobileMenu"
          class="md:hidden ml-auto z-50 p-2 focus:outline-none cursor-pointer">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path :d="showMobileMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div
          v-if="showMobileMenu"
          class="mobile-menu  inset-0 bg-[#f8f4f4] rounded-2xl shadow-md mx-5 pb-5 flex flex-col z-40 md:hidden"
          @click.self="showMobileMenu = false"
        >
          <!-- <button
            class="absolute top-6 right-6 text-3xl text-gray-500"
            @click="showMobileMenu = false"
            aria-label="Close menu"
          >
            &times;
          </button> -->
          <nav class="flex flex-col items-center w-full space-y-8 mt-0 pt-5">
            <NuxtLink
              to="/"
              @click.prevent="goHome(); showMobileMenu = false"
              class="hover:text-[#dc2223] text-2xl font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/products"
              @click="showMobileMenu = false"
              class="hover:text-[#dc2223] text-2xl font-semibold"
            >
              Products
            </NuxtLink>
            <NuxtLink
              to="/about"
              @click="showMobileMenu = false"
              class="hover:text-[#dc2223] text-2xl font-semibold"
            >
              About Us
            </NuxtLink>
            <NuxtLink
              to="/contact"
              @click="showMobileMenu = false"
              class="hover:text-[#dc2223] text-2xl font-semibold"
            >
              Contact Us
            </NuxtLink>
          </nav>
        </div>
      </transition>

    </header>
</template>

<script setup>
import ScrollToTop from '~/components/ScrollToTop.vue'
import Footer from '~/components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { navigateTo } from '#app'   // <-- ADD THIS

const showBg = ref(false)
const showNav = ref(true)
const showMobileMenu = ref(false)
const lastScroll = ref(0)

function onScroll() {
  const curr = window.scrollY
  showBg.value = curr > 40
  showNav.value = curr < 20 || curr < lastScroll.value
  lastScroll.value = curr
}

// ADD THIS FUNCTION:
function goHome() {
  navigateTo('/').then(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  })
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
/* .mobile-menu {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: 100vh;
  overflow-y: auto;
} */
.header {
  z-index: 1000;
}
.logo {
  z-index: 1000;
}
</style>