<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
  })

  // Tell ScrollTrigger to use window for scroll position
  ScrollTrigger.scrollerProxy(window, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value, { immediate: true })
      }
      return lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    // pinType is needed for scrollerProxy when using a smooth scrolling library
    pinType: document.body.style.transform ? "transform" : "fixed"
  })

  lenis.on('scroll', ScrollTrigger.update)

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
  ScrollTrigger.refresh()
})
</script>
