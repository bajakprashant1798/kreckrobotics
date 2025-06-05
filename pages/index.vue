<template>
  <div>
    <!-- Background Gradient -->
    <!-- Ultra Smooth Multi-layered Gradient BG -->
    <!-- <div
      class="fixed inset-0 -z-10 pointer-events-none transition-all duration-700"
      style="
        background:
          radial-gradient(ellipse at 25% 50%, #dc222320 28vw, transparent 80vw),
          radial-gradient(ellipse at 70% 40%, #56565622 25vw, transparent 80vw),
          radial-gradient(ellipse at 30% 40%, #dc22231a 28vw, transparent 90vw),
          linear-gradient(120deg, #fff0 0%, #f8f9fa 100%);
        opacity: 1;
        "
    /> -->

    <div
      class="fixed inset-0 -z-10 pointer-events-none"
      style="
        background:
          radial-gradient(ellipse 70% 50% at 55% 35%, #dc22230A 28vw, transparent 100%),
          radial-gradient(ellipse 70% 50% at 40% 80%, #56565607 25vw, transparent 100%);
        opacity: 1;
      "
    ></div>


    <div ref="firstSection" class="min-h-screen flex flex-col justify-center items-center bg-white w-full px-2">
      <div class="flex-1 flex flex-col justify-center w-full">
        <!-- KRECK -->
        <h1
          ref="kreck"
          class="block w-full kreck-font-size text-center font-extrabold font-open-sans leading-[1] tracking-tight"
        >
          KRECK
        </h1>

      </div>
      <div class="flex-1 flex flex-col justify-start w-full">
        <h1
          ref="robotics"
          class="block w-full robotics-font-size text-center font-extrabold uppercase font-open-sans text-[#565656] leading-[1] tracking-tight"
        >
          ROBOTICS
        </h1>
      </div>
    </div>

    <!-- Section 2: Animated Panel Product -->
    <section
      ref="panelSection"
      class="secondSection relative min-h-screen flex flex-col items-center justify-center"
    >
      <div
        ref="panelImageContainer"
        class="flex flex-col items-center justify-center"
        style="will-change: transform, opacity;"
      >
        <img
          src="/panel.png"
          alt="Panel"
          class="max-w-xs md:max-w-lg xl:max-w-lg mx-auto drop-shadow-2xl"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const movingBg = ref(null)
const showMovingBg = ref(false)
const firstSection = ref(null)
const panelSection = ref(null)
const panelImageContainer = ref(null)
const featureLinesVisible = ref(false)
const kreck = ref(null)
const robotics = ref(null)

useHead({
  title: 'Home Automation | Kreckrobotics',
  meta: [
    { name: 'description', content: 'Discover smart home and office automation products from Kreckrobotics.' },
  ]
})

onMounted(() => {
  // Show background only after first section is out of view
  window.addEventListener('scroll', () => {
    const firstRect = firstSection.value.getBoundingClientRect()
    showMovingBg.value = firstRect.bottom <= 0
    // Animate gradient position
    if (showMovingBg.value && movingBg.value) {
      const currScroll = window.scrollY
      const x = Math.sin(currScroll / 180) * 20
      const y = Math.cos(currScroll / 250) * 18
      movingBg.value.style.backgroundPosition = `${28 + x}% ${70 + y}%, ${70 - x / 2}% ${38 - y / 2}%`
    }
  })

  // Animate KRECK/ROBOTICS headline out on scroll
  gsap.to(kreck.value, {
    x: "-20vw",
    opacity: 0,
    scrollTrigger: {
      trigger: firstSection.value,
      start: "top 10%",
      end: "bottom 60%",
      scrub: 1,
      // markers: true 
    }
  })
  gsap.to(robotics.value, {
    x: "20vw",
    opacity: 0,
    scrollTrigger: {
      trigger: firstSection.value,
      start: "top 10%",
      end: "bottom 60%",
      scrub: 1,
      // markers: true 
    }
  })


  // Panel appears and animates as soon as first section is left
  gsap.fromTo(
    panelImageContainer.value,
    { scale: 2.6, opacity: 0, y: -800 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      ease: 'sine.out',
      scrollTrigger: {
        trigger: firstSection.value,
        start: 'bottom 85%',
        endTrigger: panelSection.value,
        end: 'center 45%',
        scrub: true,
        // markers: true,
        onEnter: () => featureLinesVisible.value = true,
        onLeaveBack: () => featureLinesVisible.value = false,
      }
    }


  )

  // Animate feature lines and text on scroll end (fully visible)
  gsap.fromTo('.animate-fade-in-up',
    { y: 40, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.15,
      scrollTrigger: {
        trigger: panelSection.value,
        start: "top center",
        toggleActions: "play none none reverse"
      }
    }
  )

  // Mouse move parallax for features and panel image
  panelSection.value.addEventListener('mousemove', e => {
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
    gsap.to('.animate-fade-in-up', {
      x: x * 12,
      y: y * 8,
      duration: 0.5,
      overwrite: true
    })
  })
  panelSection.value.addEventListener('mouseleave', () => {
    gsap.to([panelImageContainer.value, '.animate-fade-in-up'], {
      x: 0, y: 0, duration: 0.6, overwrite: true
    })
  })
})
</script>

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
