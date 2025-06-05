// composables/useGsapInit.js
import { watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapInit(initFn) {
  const route = useRoute()
  let cleanupFn = null

  // GSAP/ScrollTrigger init and cleanup on route change
  const setup = async () => {
    // Wait until DOM is fully ready
    await nextTick()
    // Kill all previous triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    if (cleanupFn) cleanupFn()
    // Call user-provided GSAP setup function, return cleanup if any
    cleanupFn = initFn()
    // Refresh to recalc trigger positions
    ScrollTrigger.refresh()
  }

  onMounted(setup)
  watch(() => route.fullPath, setup)

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    if (cleanupFn) cleanupFn()
  })
}
