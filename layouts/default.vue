<template>
  <div>
    <Header />

    <main class="pt-20">
      <slot />
    </main>
    <ScrollToTop />

    <Footer />
  </div>
</template>

<script setup>
import ScrollToTop from '~/components/ScrollToTop.vue'
import Footer from '~/components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { navigateTo } from '#app'   // <-- ADD THIS
import Header from '~/components/Header.vue'
</script>