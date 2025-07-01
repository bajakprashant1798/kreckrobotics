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

    <!-- HERO -->
    <div ref="firstSection" class="md:min-h-screen flex flex-col md:justify-center items-center bg-white w-full px-2">
      <div class="md:flex-1 flex flex-col md:justify-center w-full">
        <h1 ref="kreck" class="block w-full kreck-font-size text-center font-extrabold font-open-sans leading-[1] tracking-tight">KRECK</h1>
      </div>
      <div class="md:flex-1 flex flex-col justify-start w-full">
        <h1 ref="robotics" class="block w-full robotics-font-size text-center font-extrabold uppercase font-open-sans text-[#565656] leading-[1] tracking-tight">ROBOTICS</h1>
      </div>
    </div>

    <!-- PANEL SECTION -->
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

    <!-- FEATURES SECTION (Scroll animation) -->
    <!-- <section class="height-[300vh] w-full relative p-12 bg-amber-300">
      <div class="grid grid-cols-2 gap-4">
        <div class="">
          <div>
            <h2 class="text-4xl md:text-6xl font-bold  mb-8">Our Products 1</h2>
            <p class="text-xl md:text-2xl  mb-12">Explore our innovative solutions designed to enhance your life.</p>
          </div>
          <div>
            <h2 class="text-4xl md:text-6xl font-bold  mb-8">Our Products 2</h2>
            <p class="text-xl md:text-2xl  mb-12">Explore our innovative solutions designed to enhance your life.</p>
          </div>
          <div>
            <h2 class="text-4xl md:text-6xl font-bold  mb-8">Our Products 3</h2>
            <p class="text-xl md:text-2xl  mb-12">Explore our innovative solutions designed to enhance your life.</p>
          </div>
        </div>
        <div class="w-full flex items-center justify-center">
          <div class="w-1/2">
            <img src="/panel.png" alt="panel" class="w-[300px] md:w-[420px] rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section> -->
    <!-- Features Section (Pinned Image with Text Scroll) -->
    <section ref="featuresContainer" :style="`height: ${(features.length * 75)}vh;`">
    <div class="grid grid-cols-2 max-w-screen-xl mx-auto px-8">
      <!-- Text Blocks -->
      <div>
        <div
          v-for="(feature, i) in features"
          :key="i"
          :ref="el => featureBlocks[i] = el"
          class="product-text-block"
        >
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.text }}</p>
        </div>
      </div>
      <!-- Image Wipe Reveal -->
      <div ref="imageWrapper" class="w-full flex items-center justify-center h-[100vh]">
        <div class="relative w-[300px] h-[420px]">
          <img :src="prevImage" class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl z-0" />
          <!-- <img
            :src="nextImage"
            ref="wipeImage"
            class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl z-10"
            :style="{ clipPath: wipeClipPath }"
          /> -->
          <img
            :src="nextImage"
            ref="wipeImage"
            class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl z-10"
          />
        </div>
      </div>
    </div>
  </section>

    
  <!-- VERTICAL Section (Bridge) -->
  <!-- <section class="min-h-screen flex items-center justify-center bg-white">
    <h2 class="text-4xl font-bold">This is a vertical bridge section</h2>
  </section> -->

  <!-- HORIZONTAL SCROLL SECTION -->
  <section ref="horizontalSection" class="horizontal-scroll-wrapper">
    <div ref="horizontalContent" class="horizontal-scroll-inner">
      <div class="horizontal-panel">Slide 1</div>
      <div class="horizontal-panel">Slide 2</div>
      <div class="horizontal-panel">Slide 3</div>
    </div>
  </section>

  <!-- FINAL VERTICAL SECTION -->
  <section class="min-h-screen flex items-center justify-center bg-gray-100">
    <h2 class="text-4xl font-bold">Final Vertical Section</h2>
  </section>

  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { tr } from '@nuxt/ui/runtime/locale/index.js'
// import { useRoute } from 'vue-router'
// import { computed } from 'vue'

// const showPreviousImage = computed(() => previousImage.value && previousImage.value !== currentImage.value)

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Our Products 1",
    text: "Explore our innovative solutions designed to enhance your life.",
    image: "/panel.png",
  },
  {
    title: "Our Products 2",
    text: "Explore our innovative solutions designed to enhance your life.",
    image: "/panel1.png",
  },
  {
    title: "Our Products 3",
    text: "Explore our innovative solutions designed to enhance your life.",
    image: "/panel2.jpg",
  }
]

// For scroll/image logic
const wipeImage = ref(null)
const currentIndex = ref(0)
const prevImage = ref(features[0].image)
const nextImage = ref(features[0].image)

// const currentImage = ref(features[0].image)
// const oldImage = ref(null)
// const revealing = ref(false)
// const newImageEl = ref(null)
const wipeClipPath = ref('inset(100% 0 0 0)')
const lastDirection = ref(1) // 1 = down, -1 = up

const featureBlocks = ref([])
const featuresContainer = ref(null)
const imageWrapper = ref(null)

const firstSection = ref(null)
const panelSection = ref(null)
const panelImageContainer = ref(null)
const kreck = ref(null)
const robotics = ref(null)
const panelImg = ref(null)
const panelImgLoaded = ref(false)


function setupScrollWipe() {
  features.forEach((feature, i) => {
    ScrollTrigger.create({
      trigger: featureBlocks.value[i],
      start: "top center",
      end: "+=300",
      scrub: true,
      markers: {
        startColor: "green",
        endColor: "red",
        fontSize: "12px",
        indent: 20,
      },
      onUpdate: self => {
        // Save direction for use in enter/leave handlers
        lastDirection.value = self.direction

        console.log("DIR:", self.direction, "PROGRESS:", self.progress.toFixed(2), "INDEX:", i)

        if (self.direction === 1) { // DOWN
          prevImage.value = features[currentIndex.value].image;
          nextImage.value = features[i].image;
          //// wipeClipPath.value = `inset(${100 - self.progress * 100}% 0 0 0)`;
          // gsap.to(wipeClipPath, {
          //   duration: 0.4,
          //   value: `inset(${100 - self.progress * 100}% 0 0 0)`,
          //   // ease: "power2.out"
          // })
          gsap.to(wipeImage.value, {
            clipPath: `inset(${100 - self.progress * 100}% 0 0 0)`,
            duration: 0.5,
            ease: "power2.out"
          })

        } else { // UP
          prevImage.value = features[i].image;
          nextImage.value = features[currentIndex.value].image;
          //// wipeClipPath.value = `inset(0 0 ${100 - self.progress * 100}% 0)`;
          // gsap.to(wipeClipPath, {
          //   duration: 0.4,
          //   value: `inset(0 0 ${100 - self.progress * 100}% 0)`,
          //   // ease: "power2.out",
          // });
          gsap.to(wipeImage.value, {
            clipPath: `inset(0 0 ${100 - self.progress * 100}% 0)`,
            duration: 0.5,
            ease: "power2.out",
            markers: true,
          })

        }

        // Lock images at end of transition
        if (self.direction === 1 && self.progress > 0.99) {
          currentIndex.value = i;
          prevImage.value = features[i].image;
          nextImage.value = features[i].image;
          gsap.set(wipeImage.value, { clipPath: 'inset(0 0 0 0)' })
        }
        // On reverse at start, reset to previous
        if (self.direction === -1 && self.progress < 0.01) {
          currentIndex.value = i - 1 >= 0 ? i - 1 : 0;
          prevImage.value = features[currentIndex.value].image;
          nextImage.value = features[i].image;
          // gsap.set(wipeImage.value, { clipPath: 'inset(100% 0 0 0)' })
          gsap.set(wipeImage.value, { clipPath: 'inset(0 0 100% 0)' })
        }
      },
      onEnter: () => {
        // Always reset wipe for DOWN direction
        prevImage.value = features[currentIndex.value].image;
        nextImage.value = features[i].image;
        // wipeClipPath.value = "inset(100% 0 0 0)";
        gsap.set(wipeImage.value, { clipPath: "inset(100% 0 0 0)" });
      },
      // onEnterBack: () => {
      //   // Always reset wipe for UP direction
      //   prevImage.value = features[i].image;
      //   nextImage.value = features[currentIndex.value].image;
      //   // wipeClipPath.value = "inset(0 0 100% 0)";
      //   gsap.set(wipeImage.value, { clipPath: "inset(0 0 100% 0)" });

      //   // Immediately trigger a tiny wipe tween
      //   gsap.to(wipeImage.value, {
      //     clipPath: "inset(0 0 0% 0)",
      //     duration: 0.3,
      //     ease: "power2.out"
      //   });
      // },
      onEnterBack: (self) => {
        // Prepare bottom-to-top animation
        prevImage.value = features[i].image;
        nextImage.value = features[currentIndex.value].image;

        // Immediately set starting position for wipe
        gsap.set(wipeImage.value, { clipPath: "inset(0 0 100% 0)" });

        // Delay animation slightly to allow smoother transition
        gsap.to(wipeImage.value, {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
          ease: "power2.inOut",
          overwrite: true
        });
      },

      onLeaveBack: () => {
        currentIndex.value = i - 1 >= 0 ? i - 1 : 0;
        prevImage.value = features[currentIndex.value].image;
        nextImage.value = features[i].image;
        // wipeClipPath.value = "inset(100% 0 0 0)";
        gsap.set(wipeImage.value, { clipPath: "inset(100% 0 0 0)" });
      }
    })
  })
}



let panelTween, kreckTween, roboticsTween

function getColorForIndex(index) {
  const colors = [
    "#fff6f6",  // For block 0
    "#f0f8ff",  // For block 1
    "#e6ffe6",  // For block 2
  ]
  return colors[index] || "#ffffff"  // fallback
}


// SECTION 1 & 2 ANIMATIONS
function runHeroPanelGsapAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelTween) panelTween.kill()
  if (kreckTween) kreckTween.kill()
  if (roboticsTween) roboticsTween.kill()

  // Panel image animation
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
      }
    }
  )
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
}

// PANEL PARALLAX
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

// GSAP scroll logic
function setupFeatureAnimations() {
  // Pin the image column
  ScrollTrigger.create({
    trigger: featuresContainer.value,
    start: "top top",
    // end: () => `+=${(features.length - 0.1) * window.innerHeight}`,
    end: () => `+=${(features.length * 0.45) * window.innerHeight}`,
    pin: imageWrapper.value,
    pinSpacing: true,
    scrub: false,
    // markers: true,
    markers: {
      startColor: "blue",
      endColor: "purple",
      fontSize: "12px",
      indent: 20,
    },
  })

  featureBlocks.value.forEach((el, index) => {
    // Animate title scroll
    gsap.fromTo(el, { y: 150 }, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,

        markers: {
          startColor: "orange",
          endColor: "pink",
          fontSize: "12px",
          indent: 20,
        },
      }
    })

    // Image swap (reveal) on center
    // ScrollTrigger.create({
    //   trigger: el,
    //   start: "top center",
    //   end: "bottom center",
    //   onEnter: () => revealNewImage(index),
    //   onEnterBack: () => revealNewImage(index),
    // })

    // Optionally: change background
    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        featuresContainer.value.style.backgroundColor = getColorForIndex(index)
      },
      onEnterBack: () => {
        featuresContainer.value.style.backgroundColor = getColorForIndex(index)
      }
    })
  })
}

const horizontalSection = ref(null)
const horizontalContent = ref(null)

function setupHorizontalScroll() {
  const panels = horizontalContent.value
  const totalPanels = panels.children.length

  gsap.to(panels, {
    xPercent: -100 * (totalPanels - 1),
    ease: "none",
    scrollTrigger: {
      trigger: horizontalSection.value,
      start: "top top",
      end: () => "+=" + panels.offsetWidth,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  })
}



onMounted(() => {
  if (panelImg.value?.complete) {
    panelImgLoaded.value = true
    runHeroPanelGsapAnimations()
  }
  if (panelSection.value) {
    panelSection.value.addEventListener('mousemove', onPanelMouseMove)
    panelSection.value.addEventListener('mouseleave', onPanelMouseLeave)
  }
  if (panelImageContainer.value?.querySelector('img')?.complete) {
    panelImgLoaded.value = true
    runHeroPanelGsapAnimations()
  }
  // ScrollTrigger.defaults({ markers: true, scroller: window })
  ScrollTrigger.refresh()

  nextTick(() => {
    runHeroPanelGsapAnimations()
    setupFeatureAnimations()
    setupScrollWipe()
    setupHorizontalScroll()
    ScrollTrigger.refresh()
  })
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

<style>
.font-open-sans {
  font-family: 'Open Sans', Arial, sans-serif;
}
.kreck-font-size {
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
  line-height: .5;
  font-size: clamp(4rem,22vw,18rem);
  letter-spacing: 5px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #565656;
  text-stroke-width: 5px;
  text-stroke-color: #565656;
}

.product-text-block {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hidden-image {
  clip-path: inset(0 0 0 0); 
  z-index: 1;
}

@keyframes revealClip {
  to {
    clip-path: inset(0 0 0 0); /* Reveal fully from bottom */
  }
}


/* horizontal scroll css starts */
.horizontal-scroll-wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.horizontal-scroll-inner {
  display: flex;
  height: 100%;
}
.horizontal-panel {
  flex: 0 0 100vw;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
}

/* horizontal scroll css ends */
</style>
