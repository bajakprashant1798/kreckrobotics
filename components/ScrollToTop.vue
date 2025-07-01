<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="fixed bottom-8 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-md bg-[#dc2223] shadow-lg hover:bg-[#b41b1b] transition-all opacity-90"
    aria-label="Go to top"
  >
    <Icon name="material-symbols:keyboard-arrow-up-rounded" size="32" class="text-white cursor-pointer" color="white" />
    <!-- You can try other icon names too -->
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 320
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
