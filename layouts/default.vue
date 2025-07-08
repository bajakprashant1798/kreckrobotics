<template>
  <div>
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

    <main class="pt-20">
      <slot />
    </main>
    <ScrollToTop />

    <footer class="text-gray-600 bg-[#f2f2f2] py-3 px-3 md:px-5">
      <div class="bg-[#f8f4f4] px-3 py-5 md:px-14 md:py-10 rounded-2xl shadow-md">
        <div class="md:grid md:grid-cols-6 md:gap-4 md:pb-32 mb-5 border-b-1 border-gray-300">
          <div class="col-span-3 mb-10">
            <div class="flex justify-center md:justify-start mb-4">
              <img src="/KRACK-ROBOTICS-LOGO.png" alt="KRACK ROBOTICS" class="h-28 w-auto mr-4 select-none logo">
            </div>
            <p class="py-10 md:max-w-xl text-center md:text-left">
              Krack Robotics is a leading provider of innovative robotic solutions, dedicated to enhancing efficiency and productivity across various industries. Our cutting-edge technology and expert team are committed to delivering exceptional results for our clients.
            </p>
            <ul class="flex justify-center md:justify-start space-x-4 mt-2">
              <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                  <Icon name="uil:instagram" class="text-2xl text-white block" />
                </NuxtLink>
              </li>
              <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                  <Icon name="uil:facebook" class="text-2xl text-white block" />
                </NuxtLink>
              </li>
              <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                  <Icon name="uil:youtube" class="text-2xl text-white block" />
                </NuxtLink>
              </li> 

              <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                  <Icon name="uil:linkedin" class="text-2xl text-white block" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products" class="hover:text-[#dc2223] transition-colors">Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Products</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products" class="hover:text-[#dc2223] transition-colors">Products</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2">
              <li class="mb-2">
                <div class=" flex items-center"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2"><Icon name="mdi:email" class="text-xl text-white block" /></spam> <p class="text-gray-600"><NuxtLink to="mailto:info@kreckrobotics.com" class="hover:text-[#dc2223] transition-colors">info@kreckrobotics.com</NuxtLink></p></div>
              </li>
              <li class="mb-2">
                <div class=" flex items-center"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2"><Icon name="mdi:phone" class="text-xl text-white block" /></spam> <p class="text-gray-600"><NuxtLink to="tel:75187 57518" class="hover:text-[#dc2223] transition-colors">+91 75187 57518</NuxtLink></p></div>
              </li>
              <li class="mb-2">
                <div class=" flex items-center"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2 inline-block"><Icon name="mdi:map-marker" class="text-xl text-white block" /></spam> <p class="text-gray-600">1234 Street Name, City, State, 12345</p></div>
              </li>
            </ul>
          </div>
        </div>

        <div class="md:grid md:grid-cols-2 md:gap-4 text-sm pt-5">
          <div class="">
            <p class="text-center md:text-left">&copy; 2023 – {{ new Date().getFullYear() }} KRECK ROBOTICS. ALL RIGHTS RESERVED.</p>
          </div>
          <div class="">
            <ul class="flex justify-center md:justify-end space-x-4">
              <li class="text-gray-600 hover:text-[#dc2223] transition-colors">
                <NuxtLink to="/privacy-policy" class="text-center md:text-right  underline underline-offset-1">Privacy Policy</NuxtLink>
              </li>
              <li class="text-gray-600 hover:text-[#dc2223] transition-colors">
                <NuxtLink to="/terms-of-service" class="text-center md:text-right underline underline-offset-1">Terms of Service</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/cookie-policy">Cookie Policy</a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ScrollToTop from '~/components/ScrollToTop.vue'
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
