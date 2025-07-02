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
    <section ref="panelSection" class="secondSection container-p relative min-h-screen flex flex-col items-center justify-center">
      <!-- <div class="flex flex-col items-center justify-center"> -->
        <h2 ref="fancyHeading" class="text-4xl font-bold font-[#565656] fancy-heading">Touch Panel</h2>
        <div ref="panelImageContainer" class="flex flex-col items-center justify-center" style="will-change: transform, opacity;">
          <img
            src="/panel.png"
            alt="Panel"
            class="max-w-xs md:max-w-3xl mx-auto drop-shadow-2xl"
            @load="panelImgLoaded = true"
            ref="panelImg"
          />
        </div>
        <p ref="fancyPara" class="mt-24 fancy-para">Manufacturer of Touch Switch & Home Automation</p>
      <!-- </div> -->
    </section>

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
          <img
            :src="baseImage"
            class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl z-0"
          />
          <img
            :src="wipeImageSrc"
            ref="wipeImage"
            class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl z-10"
            :style="{ clipPath: wipeClipPath }"
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
// const currentIndex = ref(0)
const prevImage = ref(features[0].image)
const nextImage = ref(features[0].image)

// const currentImage = ref(features[0].image)
// const oldImage = ref(null)
// const revealing = ref(false)
// const newImageEl = ref(null)
// const wipeClipPath = ref('inset(100% 0 0 0)')
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
const fancyHeading = ref(null)
const fancyPara = ref(null)




const currentIndex = ref(0)
const direction = ref(1)
const baseImage = ref(features[0].image)
const wipeImageSrc = ref(features[0].image)
const wipeClipPath = ref('inset(100% 0 0 0)')

function setupScrollWipe() {
  features.forEach((feature, i) => {
    ScrollTrigger.create({
      trigger: featureBlocks.value[i],
      start: "top center",
      end: "+=500",
      scrub: true,
      onEnter: () => {
        direction.value = 1
        baseImage.value = features[currentIndex.value].image
        wipeImageSrc.value = features[i].image
        wipeClipPath.value = 'inset(100% 0 0 0)'
      },
      onLeave: () => {
        currentIndex.value = i
        baseImage.value = features[i].image
        wipeImageSrc.value = features[i].image
        wipeClipPath.value = 'inset(0 0 0 0)'
      },
      onEnterBack: () => {
        direction.value = -1
        baseImage.value = features[i].image
        wipeImageSrc.value = features[i - 1 >= 0 ? i - 1 : 0].image
        wipeClipPath.value = 'inset(0 0 100% 0)'
      },
      onLeaveBack: () => {
        currentIndex.value = i - 1 >= 0 ? i - 1 : 0
        baseImage.value = features[currentIndex.value].image
        wipeImageSrc.value = features[i].image
        wipeClipPath.value = 'inset(100% 0 0 0)'
      },
      onUpdate: self => {
        const progress = self.progress
        if (direction.value === 1) {
          wipeClipPath.value = `inset(${100 - progress * 100}% 0 0 0)`
        } else {
          wipeClipPath.value = `inset(0 0 ${100 - progress * 100}% 0)`
        }
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
// panel animaiton
function runHeroPanelGsapAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelTween) panelTween.kill()
  if (kreckTween) kreckTween.kill()
  if (roboticsTween) roboticsTween.kill()

  // Animate panel image: perspective tilt to flat
  panelTween = gsap.fromTo(
    panelImageContainer.value,
    {
      rotateY: -30,  // start tilted (could use rotateX for forward/back)
      scale: 2.6,
      opacity: 0,
      y: -800,
    },
    {
      rotateY: 0,    // flat
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
  if (disablePanelParallax) return
  const { width, height, left, top } = panelSection.value.getBoundingClientRect()
  const x = (e.clientX - left - width / 2) / width
  const y = (e.clientY - top - height / 2) / height
  mouseX = x * 24
  mouseY = y * 16
  panelXSetter(mouseX)
  panelYSetter(mouseY)
}
function onPanelMouseLeave() {
  if (disablePanelParallax) return
  mouseX = 0
  mouseY = 0
  panelXSetter(mouseX)
  panelYSetter(mouseY)
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
    // markers: {
    //   startColor: "blue",
    //   endColor: "purple",
    //   fontSize: "12px",
    //   indent: 20,
    // },
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

        // markers: {
        //   startColor: "orange",
        //   endColor: "pink",
        //   fontSize: "12px",
        //   indent: 20,
        // },
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



let mouseX = 0, mouseY = 0
let panelXSetter, panelYSetter, panelRotateYSetter


// 1. Split Heading into Spans, Animate Vertically Per Letter
function setupFancyHeadingAnimation() {
  const headingEl = fancyHeading.value;
  if (!headingEl) return;
  const text = headingEl.textContent.trim();

  // Split each character into a span, but don't add <br>!
  headingEl.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const span = document.createElement('span');
    span.className = 'fancy-heading-letter';
    // Preserve spaces
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    headingEl.appendChild(span);
  }

  // Animate each letter up and fade in, staggered
  const letters = headingEl.querySelectorAll('.fancy-heading-letter');
  gsap.set(letters, { opacity: 0, y: 32 });
  gsap.to(letters, {
    opacity: 1,
    y: 0,
    stagger: 0.09,
    ease: 'power3.out',
    duration: 0.55,
    scrollTrigger: {
      trigger: headingEl,
      start: "top 85%",
      once: true,
    }
  });
}



// 2. Animate Paragraph (Word, Line, or Sentence Reveal)
function setupFancyParaAnimation() {
  const paraEl = fancyPara.value;
  if (!paraEl) return;

  // Split para by space to each word (or by sentence/line if you want)
  paraEl.innerHTML = paraEl.textContent
    .split(' ')
    .map(word => `<span class="fancy-para-word">${word}</span>`)
    .join(' ');

  const words = paraEl.querySelectorAll('.fancy-para-word');
  gsap.set(words, { opacity: 0, y: 24 });
  gsap.to(words, {
    opacity: 1,
    y: 0,
    stagger: 0.04,
    ease: "power2.out",
    duration: 0.45,
    scrollTrigger: {
      trigger: paraEl,
      start: "top 90%",
      once: true,
    }
  });
}


onMounted(() => {
  // if (panelImg.value?.complete) {
  //   panelImgLoaded.value = true
  //   runHeroPanelGsapAnimations()
  // }
  // if (panelSection.value) {
  //   panelSection.value.addEventListener('mousemove', onPanelMouseMove)
  //   panelSection.value.addEventListener('mouseleave', onPanelMouseLeave)
  // }
  // if (panelImageContainer.value?.querySelector('img')?.complete) {
  //   panelImgLoaded.value = true
  //   runHeroPanelGsapAnimations()
  // }
  // ScrollTrigger.defaults({ markers: true, scroller: window })
  ScrollTrigger.refresh()

  nextTick(() => {
    runHeroPanelGsapAnimations()
    setupFeatureAnimations()
    setupScrollWipe()
    setupHorizontalScroll()
    setupFancyHeadingAnimation()
    setupFancyParaAnimation()
    ScrollTrigger.refresh()
  })

  // Set up quick setters for only X and Y
  panelXSetter = gsap.quickSetter(panelImageContainer.value, 'x', 'px')
  panelYSetter = gsap.quickSetter(panelImageContainer.value, 'y', 'px')

  panelSection.value.addEventListener('mousemove', onPanelMouseMove)
  panelSection.value.addEventListener('mouseleave', onPanelMouseLeave)
})

onUnmounted(() => {
  if (panelTween) panelTween.kill()
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelSection.value) {
    panelSection.value?.removeEventListener('mousemove', onPanelMouseMove)
    panelSection.value?.removeEventListener('mouseleave', onPanelMouseLeave)
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

/* heading and para panel section animaiton */
.fancy-heading {
  text-align: center;
}
.fancy-heading-letter {
  display: inline-block;
  font-size: inherit;
  line-height: 1.1;
  /* optional: margin-right: 0.02em; */
}

.fancy-para-word {
  display: inline-block;
  margin-right: 0.22em;
}


</style>
