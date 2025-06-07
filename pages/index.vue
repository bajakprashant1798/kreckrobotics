<template>
  <div>
    <!-- BG Gradient -->
    <div
      class="fixed inset-0 -z-10 pointer-events-none"
      style="background:
        radial-gradient(ellipse 70% 50% at 55% 35%, #dc22230A 28vw, transparent 100%),
        radial-gradient(ellipse 70% 50% at 40% 80%, #56565607 25vw, transparent 100%);
        opacity: 1;"
      ref="movingBg"
    ></div>

    <div ref="firstSection" class="md:min-h-screen flex flex-col md:justify-center items-center bg-white w-full px-2">
      <div class="md:flex-1 flex flex-col md:justify-center w-full">
        <h1 ref="kreck" class="block w-full kreck-font-size text-center font-extrabold font-open-sans leading-[1] tracking-tight">KRECK</h1>
      </div>
      <div class="md:flex-1 flex flex-col justify-start w-full">
        <h1 ref="robotics" class="block w-full robotics-font-size text-center font-extrabold uppercase font-open-sans text-[#565656] leading-[1] tracking-tight">ROBOTICS</h1>
      </div>
    </div>

    <section ref="panelSection" class="secondSection relative min-h-screen flex flex-col items-center justify-center">
      <div ref="panelImageContainer" class="flex flex-col items-center justify-center" style="will-change: transform, opacity;">
        <img
          src="/panel.png"
          alt="Panel"
          class="max-w-xs md:max-w-lg xl:max-w-lg mx-auto drop-shadow-2xl"
          @load="panelImgLoaded = true"
          ref="panelImg"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoute } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

const firstSection = ref(null)
const panelSection = ref(null)
const panelImageContainer = ref(null)
const kreck = ref(null)
const robotics = ref(null)
const movingBg = ref(null)
const panelImgLoaded = ref(false)

const panelImg = ref(null)

let panelTween, kreckTween, roboticsTween

const isAtTop = ref(true)

function onWindowScroll() {
  if (window.scrollY < 10 && !isAtTop.value && panelImgLoaded.value) {
    isAtTop.value = true
    runGsapAnimations()
  } else if (window.scrollY >= 10) {
    isAtTop.value = false
  }
}

function runGsapAnimations() {
  // Clean up previous triggers/tweens
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelTween) panelTween.kill()
  if (kreckTween) kreckTween.kill()
  if (roboticsTween) roboticsTween.kill()

  // Panel animation
  panelTween = gsap.fromTo(
    panelImageContainer.value,
    { scale: 2.6, opacity: 0, y: -800 },
    {
      scale: 1,
      opacity: 1,
      y: 50,
      ease: 'sine.out',
      scrollTrigger: {
        trigger: firstSection.value,
        start: 'center 15%',
        endTrigger: panelSection.value,
        end: 'center center',
        scrub: true,
        markers: true,
      }
    }
  )
  // KRECK Animation
  kreckTween = gsap.to(kreck.value, {
    x: "-20vw",
    opacity: 0,
    scrollTrigger: {
      trigger: firstSection.value,
      start: "top 10%",
      end: "bottom 60%",
      scrub: 1,
    }
  })
  // ROBOTICS Animation
  roboticsTween = gsap.to(robotics.value, {
    x: "20vw",
    opacity: 0,
    scrollTrigger: {
      trigger: firstSection.value,
      start: "top 10%",
      end: "bottom 60%",
      scrub: 1,
    }
  })

  ScrollTrigger.refresh()
}

// --- Parallax events ---
function onPanelMouseMove(e) {
  if (!panelSection.value || !panelImageContainer.value) return
  const { clientX, clientY } = e
  const { width, height, left, top } = panelSection.value.getBoundingClientRect()
  const x = (clientX - left - width / 2) / width
  const y = (clientY - top - height / 2) / height
  gsap.to(panelImageContainer.value, {
    x: x * 24,
    y: y * 16,
    duration: 0.5,
    overwrite: true
  })
}
function onPanelMouseLeave() {
  if (!panelImageContainer.value) return
  gsap.to(panelImageContainer.value, {
    x: 0, y: 0, duration: 0.6, overwrite: true
  })
}

onMounted(() => {

  if (panelImg.value?.complete) {
    panelImgLoaded.value = true
    nextTick(runGsapAnimations)
  }
  
  // Parallax mousemove listeners
  if (panelSection.value) {
    panelSection.value.addEventListener('mousemove', onPanelMouseMove)
    panelSection.value.addEventListener('mouseleave', onPanelMouseLeave)
  }

  // If the image is already cached, fire animation now
  if (panelImageContainer.value?.querySelector('img')?.complete) {
    panelImgLoaded.value = true
    nextTick(runGsapAnimations)
  }

  window.addEventListener('scroll', onWindowScroll)
})

// Watch for when image is loaded, or on route changes (home), always rerun GSAP
watch(panelImgLoaded, (loaded) => { if (loaded) nextTick(runGsapAnimations) })

const route = useRoute()
watch(() => route.fullPath, (val) => {
  if (val === '/' || val === '/index') {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setTimeout(() => {
      if (panelImgLoaded.value) runGsapAnimations()
    }, 180)
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelSection.value) {
    panelSection.value.removeEventListener('mousemove', onPanelMouseMove)
    panelSection.value.removeEventListener('mouseleave', onPanelMouseLeave)
  }
  if (panelTween) panelTween.kill()
  if (kreckTween) kreckTween.kill()
  if (roboticsTween) roboticsTween.kill()

  window.removeEventListener('scroll', onWindowScroll)
})
</script>


<!-- Keep your styles as before -->


<style>

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.font-open-sans {
  font-family: 'Open Sans', Arial, sans-serif;
}

.kreck-font-size {
  /* font-size: 6vw; */
  line-height: .8;
  font-size: clamp(6rem,30vw,30rem);
  letter-spacing: 10px;

  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #dc2223;
  text-stroke-width: 5px;
  text-stroke-color: #dc2223;
}
.robotics-font-size {
  /* font-size: 6vw; */
  line-height: .5;
  font-size: clamp(4rem,22vw,18rem);
  letter-spacing: 5px;

  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #565656;
  text-stroke-width: 5px;
  text-stroke-color: #565656;
}
</style>
