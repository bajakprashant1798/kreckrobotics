<template>
  <div>
    <!-- BG Gradient -->
    <!-- <div
      class="fixed inset-0 -z-10 pointer-events-none"
      style="background:
        radial-gradient(ellipse 70% 50% at 55% 35%, #dc22230A 28vw, transparent 100%),
        radial-gradient(ellipse 70% 50% at 40% 80%, #56565607 25vw, transparent 100%);
        opacity: 1;"
      ref="movingBg"
    ></div> -->

    <!-- HERO -->
    <!-- <div ref="firstSection" class="min-h-5/12 md:min-h-screen flex flex-col md:justify-center items-center bg-white w-full px-2">
      <div class="md:flex-1 flex flex-col md:justify-center w-full">
        <h1 ref="kreck" class="block w-full kreck-font-size text-center font-extrabold font-open-sans leading-[1] tracking-tight">KRECK</h1>
      </div>
      <div class="md:flex-1 flex flex-col justify-start w-full">
        <h1 ref="robotics" class="block w-full robotics-font-size text-center font-extrabold uppercase font-open-sans text-[#565656] leading-[1] tracking-tight">ROBOTICS</h1>
      </div>
    </div> -->
    <section ref="firstSection" class="px-6 md:px-12 py-12 md:py-16 flex items-center bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- grid: stack on mobile, two columns on md+ -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- LEFT: text/content -->
          <div class="order-1 md:order-1">
            <div class="flex flex-wrap items-center gap-3 mb-6 text-sm font-semibold text-[#dc2223]">
              <span class="flex items-center gap-2">
                <CheckCircle class="h-4 w-4 flex-shrink-0" />
                <span class="hidden sm:inline">Smart Control</span>
                <span class="inline sm:hidden">Control</span>
              </span>

              <span class="flex items-center gap-2">
                <CheckCircle class="h-4 w-4 flex-shrink-0" />
                <span class="hidden sm:inline">Customization</span>
                <span class="inline sm:hidden">Custom</span>
              </span>

              <span class="flex items-center gap-2">
                <CheckCircle class="h-4 w-4 flex-shrink-0" />
                <span class="hidden sm:inline">Voice Activation</span>
                <span class="inline sm:hidden">Voice</span>
              </span>
            </div>

            <div class="mb-8">
              <h1 class="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 text-gray-900">
                Ultimate Home Intelligent<br class="hidden sm:block" />Automation Solution
              </h1>

              <p class="text-gray-600 text-sm sm:text-base max-w-2xl">
                Experience Effortless Living with Cutting-Edge Technology, Seamlessly integrating convenience,
                efficiency, and security into every aspect of your home life from Hommatic.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <EnergyCircle class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Energy Efficiency</p>
                  <p class="text-sm text-gray-600">Reduce energy consumption with intelligent automation</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <Lock class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Security Integration</p>
                  <p class="text-sm text-gray-600">Enhance security with smart surveillance and monitoring</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <IconsMobileApp class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Glitch-Proof App Ecosystem</p>
                  <p class="text-sm text-gray-600">Company’s Own Mobile App & Glitch Proof Cloud  System</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <IconsSavings class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">High Savings, Zero Risk</p>
                  <p class="text-sm text-gray-600">Provides  Savings upto 70% & Guaranteed 30%</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <IconsUpdate class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Free Updates, New Features</p>
                  <p class="text-sm text-gray-600">Regular software updates to enhance your experience</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex items-center justify-center rounded-full border-2 p-3 w-14 h-14 sm:w-16 sm:h-16"
                  aria-hidden="true"
                >
                  <IconsWarranty class="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900">9 Yrs. Of Warranty</p>
                  <p class="text-sm text-gray-600">Get worry-free performance backed by a 9-year warranty</p>
                </div>
              </div>
            </div>

            <PrimaryButton
              label="Get Started"
              href="contact"
            />
          </div>
          

          <!-- RIGHT: image -->
          <div class="order-2 md:order-2 flex items-center justify-center">
            <img
              src="/herosection.png"
              alt="Kreck Smart Home panel"
              class="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>



    <!-- PANEL SECTION -->
    <section ref="panelSection" class="relative secondSection bg-[#f8f4f4] py-12 px-8 lg:p-24 md:min-h-screen flex flex-col items-center justify-center">
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
        <!-- Features Section (Desktop – pinned image + text scroll) -->
    <section
      ref="featuresContainer"
      class="hidden md:block"
      :style="`height: ${(features.length * 100)}vh;`"
    >
      <div class="grid grid-cols-2 gap-2 max-w-screen-xl mx-auto">
        <!-- Text column -->
        <div>
          <div
            v-for="(feature, i) in features"
            :key="i"
            :ref="el => featureBlocks[i] = el"
            class="product-text-block"
          >
            <h2 class="text-6xl font-bold text-white">
              {{ feature.title }}
            </h2>
            <h2 class="text-6xl font-bold text-white mb-3">
              {{ feature.subTitle }}
            </h2>
            <p class="text-sm md:text-xl text-white max-w-full md:max-w-md leading-relaxed mb-3">
              {{ feature.text }}
            </p>

            <PrimaryButton
              label="know more"
              :href="feature.link"
            />
          </div>
        </div>

        <!-- Pinned image column -->
        <div class="image-pin-wrap">
          <div
            ref="imageWrapper"
            class="w-full flex items-center justify-center h-[100vh]"
            style="will-change: transform;"
          >
            <div class="crossfade-stage">
              <img
                v-for="(f, i) in features"
                :key="i"
                :src="f.image"
                :ref="el => { if (el) imageEls[i] = el }"
                class="crossfade-img rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section (Mobile – stacked cards, fade-up on scroll) -->
    <section
      ref="featuresMobileContainer"
      class="md:hidden bg-white py-12 px-6 space-y-10"
    >
      <div
        v-for="(feature, i) in features"
        :key="'m-' + i"
        :ref="el => mobileFeatureBlocks[i] = el"
        class="flex flex-col items-center text-center opacity-0 translate-y-8"
      >
        <div class="w-full max-w-md mb-4">
          <img
            :src="feature.image"
            :alt="feature.title"
            class="w-full rounded-2xl shadow-md"
            loading="lazy"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">
          {{ feature.title }}
        </h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          {{ feature.text }}
        </p>
      </div>
    </section>

    
  <!-- VERTICAL Section (Bridge) -->
  <!-- <section class="min-h-screen flex items-center justify-center bg-white">
    <h2 class="text-4xl font-bold">This is a vertical bridge section</h2>
  </section> -->

  <!-- HORIZONTAL SCROLL SECTION -->
  <!-- HORIZONTAL SCROLL SECTION -->
  <section ref="horizontalSection" class="horizontal-scroll-wrapper">
    <div ref="horizontalContent" class="horizontal-scroll-inner">
      <!-- Panels -->
      <div
        v-for="(p, i) in hPanels"
        :key="i"
        class="horizontal-panel px-12 py-52 lg:px-24 lg:py-24"
        :ref="el => panelEls[i] = el"
      >
        <div class="mx-auto w-full max-w-[1400px] h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6">
          <!-- Left: image -->
          <div class="flex items-center justify-center">
            <img :src="p.image" :alt="p.alt" class="max-h-[320px] md:max-h-[420px] lg:max-h-[520px] w-auto object-contain" />
          </div>

          <!-- Right: bullets -->
          <div class="space-y-6 flex flex-col justify-center items-center md:items-start" :ref="el => textGroupEls[i] = el">
            <div
              v-for="(b, j) in p.bullets"
              :key="j"
              class="flex items-start gap-4 opacity-0 translate-y-6"
            >
              <span class="mt-2 h-3 w-3 rounded-full bg-[#dc2223] shrink-0"></span>
              <div>
                <h3 class="text-lg font-bold text-[#dc2223] leading-tight">{{ b.title }}</h3>
                <p class="text-[15px] text-[#565656] leading-snug">{{ b.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Panels -->
    </div>
  </section>


  <!-- FINAL VERTICAL SECTION -->
  <!-- <section class="min-h-screen flex items-center justify-center bg-gray-100">
    <h2 class="text-4xl font-bold">Final Vertical Section</h2>
  </section> -->

  <!-- WHY CHOOSE (Tailwind-only) -->
  <section id="why" class="px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-white">
    <!-- Head -->
    <div class="max-w-5xl mx-auto text-center mb-12 md:mb-16">
      <p class="text-sm md:text-base uppercase tracking-widest text-[#dc2223] font-semibold">
        Why Choose KRECK Smart Homes?
      </p>
      <h2 class="mt-3 text-2xl md:text-4xl font-extrabold text-[#23272b] leading-tight">
        We turn homes into intelligent spaces that enhance comfort and simplify everyday life
      </h2>
    </div>

    <!-- Feature Cards -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      ref="whyGrid"
    >
      <div
        v-for="(item, i) in whyItems"
        :key="i"
        class="group flex items-start gap-4 rounded-2xl border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow bg-white"
      >
        <img
          :src="item.icon"
          :alt="item.alt"
          loading="lazy"
          class="h-12 w-12 shrink-0 object-contain"
        />
        <div>
          <h3 class="text-xl font-bold leading-snug text-[#23272b]">
            {{ item.titleTop }}
            <br />
            <span class="text-[#dc2223]">{{ item.titleAccent }}</span>
          </h3>
          <p class="mt-2 text-[15px] leading-snug text-[#565656]">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Separator -->
    <div class="max-w-6xl mx-auto my-12 md:my-16 border-t border-gray-200"></div>

    <!-- Head 2 -->
    <div class="max-w-4xl mx-auto text-center mb-8 md:mb-10">
      <h2 class="text-2xl md:text-4xl font-extrabold text-[#23272b]">Best in Class Smart Home Devices</h2>
      <p class="mt-2 text-sm md:text-base text-[#565656]">compatible with</p>
    </div>

    <!-- Brand rows -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
        <img
          v-for="(b, i) in brandRow1"
          :key="'b1-' + i"
          :src="b.src"
          :alt="b.alt"
          :title="b.title"
          loading="lazy"
          class="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center mt-8">
        <img
          v-for="(b, i) in brandRow2"
          :key="'b2-' + i"
          :src="b.src"
          :alt="b.alt"
          :title="b.title"
          loading="lazy"
          class="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12 md:mt-16 flex justify-center">
      <a href="#getInTouchFormNew">
        <button
          id="cta3"
          class="inline-flex items-center gap-2 rounded-full bg-[#dc2223] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold shadow-sm hover:shadow-md active:scale-[0.99] transition"
        >
          Talk to an Expert
          <img src="https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/rightroundarrow.svg" alt="" class="h-4 w-4 md:h-5 md:w-5" loading="lazy" />
        </button>
      </a>
    </div>
  </section>

  <TestimonialsSection />


  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { tr } from '@nuxt/ui/runtime/locale/index.js'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import CheckCircle from '~/components/icons/CheckCircle.vue'
import RightCircle from '~/components/icons/RightCircle.vue'
import Lock from '~/components/icons/Lock.vue'
import EnergyCircle from '~/components/icons/EnergyCircle.vue'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import { link } from '#build/ui'

gsap.registerPlugin(ScrollTrigger)


// WHY CHOOSE content
const whyItems = [
  {
    icon: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/easy-installation.png",
    alt: "Easy Installation",
    titleTop: "Easy",
    titleAccent: "Installation",
    text: "Switches and devices so effortless to install, they’re ready in no time!",
  },
  {
    icon: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/no-drilling.png",
    alt: "No Drilling No Wiring",
    titleTop: "No Drilling. No Wiring",
    titleAccent: "Needed",
    text: "Wireless setups with minimal effort—automation without the mess.",
  },
  {
    icon: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/completely-wireless.png",
    alt: "Completely Wireless",
    titleTop: "Completely",
    titleAccent: "Wireless",
    text: "Say goodbye to messy cables—hello beautiful, uncluttered interiors.",
  },
  {
    icon: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/voice-controlled.png",
    alt: "Voice Controlled",
    titleTop: "Voice",
    titleAccent: "Controlled",
    text: "Control your home with simple voice commands—hands-free comfort.",
  },
]

// Brand rows
const brandRow1 = [
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-apple-homekit.png", alt: "Compatible with Apple Homekit", title: "Apple Homekit" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-samsung-smartthings.png", alt: "Compatible with Samsung SmartThings", title: "Samsung SmartThings" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-sonos-wireless-audio.png", alt: "Compatible with Sonos", title: "Sonos" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-google-home.png", alt: "Compatible with Google Home", title: "Google Home" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-ifttt.png", alt: "Compatible with IFTTT", title: "IFTTT" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-amazon-alexa.png", alt: "Compatible with Amazon Alexa", title: "Amazon Alexa" },
]

const brandRow2 = [
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-zigbee-3.0.png", alt: "Compatible with Zigbee 3.0", title: "Zigbee 3.0" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-home-assistant.png", alt: "Compatible with Home Assistant", title: "Home Assistant" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-apple-airplay.png", alt: "Compatible with Apple Airplay", title: "Apple Airplay" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-matter.png", alt: "Compatible with Matter", title: "Matter" },
  { src: "https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/works-with-thread.png", alt: "Compatible with Thread", title: "Thread" },
]




const features = [
  {
    title: "King Series",
    subTitle: "Touch Panel",
    text: "The pinnacle of sophistication. Sleek touch panel switches that blends luxury with seamless home automation.",
    link: "contact",
    image: "/images/products/king_touch_panel/k_touch_panel.png",
  },
  {
    title: "Royal Series",
    subTitle: "Touch Panel",
    text: "Intelligent design meets effortless control. Touch and dimmer functionality for a smarter, more elegant living.",
    link: "contact",
    image: "/images/products/royal_touch_panel/r_touch_panel.png",
  },
  {
    title: "Smart Series",
    subTitle: "Retrofit Switch",
    text: "Classic made contemporary. Transform your existing switches into smart, automated elegance without compromise.",
    link: "contact",
    image: "/images/products/smart_retrofit/s_retrofit.png",
  },
  {
    title: "Sensor Hub",
    text: "Smart power saving mode, workflow support, and seamless integration with smart home systems.",
    link: "contact",
    image: "/images/products/sensor_hub/sensor_hub.png",
  },
  {
    title: "Digital Door Lock",
    text: "Classic made contemporary. Transform your existing switches into smart, automated elegance without compromise. (Made in China)",
    link: "contact",
    image: "/images/products/door_lock/door_lock.png",
  },
  {
    title: "Intruder Alert Sensor",
    text: "Classic made contemporary. Transform your existing switches into smart, automated elegance without compromise. (Made in China)",
    link: "contact",
    image: "/images/products/intruder_alert/intruder_alert.png",
  },
  {
    title: "Door Window &",
    subTitle: "Cuboart Sensor Alert",
    text: "Classic made contemporary. Transform your existing switches into smart, automated elegance without compromise.",
    link: "contact",
    image: "/images/products/panel1.png",
  },
  {
    title: "Automatic Curtain",
    text: "Classic made contemporary. Transform your existing switches into smart, automated elegance without compromise.",
    link: "contact",
    image: "/images/products/automatic_curtain/automatic_curtain.png",
  },
]

const featureBlocks = ref([])
const featuresContainer = ref(null)

const featuresMobileContainer = ref(null)
const mobileFeatureBlocks = ref([])

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

// Crossfade logic
const imageEls = ref(new Array(features.length).fill(null))  // properly initialized array
const activeIndex = ref(0)       // which image is currently visible
const reducedMotion = ref(false) // will be set in onMounted to avoid SSR issues



function preloadFeatureImages() {
  return Promise.all(features.map(f => {
    return new Promise(resolve => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve
      img.src = f.image
    })
  }))
}

function fadeTo(nextIndex) {
  if (nextIndex === activeIndex.value) return
  const prevEl = imageEls.value[activeIndex.value]
  const nextEl = imageEls.value[nextIndex]
  if (!nextEl) return

  const dur = reducedMotion.value ? 0.01 : 0.5

  // Make sure the next image is above
  gsap.set(nextEl, { opacity: 0 })
  gsap.to(nextEl, { opacity: 1, duration: dur, ease: 'power2.out' })
  if (prevEl) gsap.to(prevEl, { opacity: 0, duration: dur, ease: 'power2.out' })

  activeIndex.value = nextIndex
}

function setupScrollCrossfade() {
  if (!mm) return

  mm.add("(min-width: 768px)", () => {
    // Set initial state: show first image only
    imageEls.value.forEach((el, i) =>
      gsap.set(el, { opacity: i === 0 ? 1 : 0 })
    )

    features.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: featureBlocks.value[i],
        start: "top center",
        end: "bottom center",
        onEnter: () => fadeTo(i),
        onEnterBack: () => fadeTo(i),
      })
    })
  })
}




let panelTween, kreckTween, roboticsTween

function getColorForIndex(index) {
  const colors = [
    "#00071b", // warm soft cream
    "#0142ab", // cool soft blue
    "#022e67", // mint green
    "#001453", // soft purple
  ]
  return colors[index % colors.length]
}

let mm
// SECTION 1 & 2 ANIMATIONS
// panel animaiton
function runHeroPanelGsapAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill())
  if (panelTween) panelTween.kill()
  if (kreckTween) kreckTween.kill()
  if (roboticsTween) roboticsTween.kill()
  mm?.revert?.()
  mm = gsap.matchMedia()

  // Animate panel image: perspective tilt to flat
  mm.add("(max-width: 767px)", () => {
    panelTween = gsap.fromTo(
      panelImageContainer.value,
      {
        rotateY: -0,  // start tilted (could use rotateX for forward/back)
        scale: 2.6,
        opacity: 0,
        y: -200,
        force3D: true,
        transformPerspective: 1000,
      },
      {
        rotateY: 0,    // flat
        scale: 1,
        opacity: 1,
        y: 50,
        force3D: true,
        transformPerspective: 1000,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: firstSection.value,
          start: 'bottom center',
          endTrigger: panelSection.value,
          end: 'center center',
          scrub: true,
          //markers: true,
        }
      }
    )
  })

  mm.add("(min-width: 768px)", () => {
    panelTween = gsap.fromTo(
      panelImageContainer.value,
      {
        rotateY: -0,  // start tilted (could use rotateX for forward/back)
        scale: 2.6,
        opacity: 0,
        y: -800,
        force3D: true,
        transformPerspective: 1000,
      },
      {
        rotateY: 0,    // flat
        scale: 1,
        opacity: 1,
        y: 50,
        force3D: true,
        transformPerspective: 1000,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: firstSection.value,
          start: 'center 15%',
          endTrigger: panelSection.value,
          end: 'center center',
          scrub: true,
          // markers: true,
        }
      }
    )
  })

  // mm.add("(min-width: 768px)", () => {
  //   mm.add("(max-width: 767px)", () => {
  //   panelTween = gsap.fromTo(
  //     panelImageContainer.value,
  //     {
  //       rotateY: -0,  // start tilted (could use rotateX for forward/back)
  //       scale: 2.6,
  //       opacity: 0,
  //       y: -800,
  //       force3D: true,
  //       transformPerspective: 1000,
  //     },
  //     {
  //       rotateY: 0,    // flat
  //       scale: 1,
  //       opacity: 1,
  //       y: 50,
  //       force3D: true,
  //       transformPerspective: 1000,
  //       ease: 'sine.out',
  //       scrollTrigger: {
  //         trigger: firstSection.value,
  //         start: 'center 15%',
  //         endTrigger: panelSection.value,
  //         end: 'center center',
  //         scrub: true,
  //         markers: true,
  //       }
  //     }
  //   )
  // })

  kreckTween = gsap.to(kreck.value, {
    x: "-20vw",
    opacity: 0,
    scrollTrigger: {
      trigger: firstSection.value,
      start: "top 10%",
      end: "bottom 60%",
      scrub: 1,
      // markers: true,
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
      // markers: true,
    }
  })
}

const whyGrid = ref(null)

function setupWhyReveal() {
  if (!whyGrid?.value) return
  const cards = whyGrid.value.children
  gsap.set(cards, { opacity: 0, y: 16 })
  ScrollTrigger.batch(cards, {
    start: "top 85%",
    onEnter: (els) => gsap.to(els, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out"
    }),
  })
}

function animateBgColor(color) {
  if (!featuresContainer.value) return

  gsap.to(featuresContainer.value, {
    backgroundColor: color,
    duration: 0.8,
    ease: "power2.out",
    overwrite: "auto"
  })
}

// GSAP scroll logic
function setupFeatureAnimations() {
  if (!mm) return

  // DESKTOP: pin image + background color + vertical scroll of text
  mm.add("(min-width: 768px)", () => {
    if (!featuresContainer.value || !imageWrapper.value) return

    // Pin the image column
    ScrollTrigger.create({
      trigger: featuresContainer.value,
      start: "top top",
      end: () => `+=${(features.length * 0.88) * window.innerHeight}`,
      pin: imageWrapper.value,
      pinSpacing: true,
      // markers: true,
    })

    // Scroll text blocks up/down + change background
    featureBlocks.value.forEach((el, index) => {
      if (!el) return

      gsap.fromTo(
        el,
        { y: 150 },
        {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          }
        }
      )

      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        // onEnter: () => {
        //   featuresContainer.value.style.backgroundColor = getColorForIndex(index)
        // },
        // onEnterBack: () => {
        //   featuresContainer.value.style.backgroundColor = getColorForIndex(index)
        // }
        onEnter: () => animateBgColor(getColorForIndex(index)),
        onEnterBack: () => animateBgColor(getColorForIndex(index)),
      })
    })
  })

  // MOBILE: stacked cards, fade-up on scroll
  mm.add("(max-width: 767px)", () => {
    if (!mobileFeatureBlocks.value.length) return

    // initial state already set in template (opacity-0, translate-y-8),
    // but we re-assert here in case of resize.
    gsap.set(mobileFeatureBlocks.value, { opacity: 0, y: 32 })

    ScrollTrigger.batch(mobileFeatureBlocks.value, {
      start: "top 85%",
      onEnter: (els) => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        })
      },
      onLeaveBack: (els) => {
        gsap.to(els, {
          opacity: 0,
          y: 32,
          duration: 0.4,
          stagger: 0.05,
          ease: "power1.out",
        })
      },
      // markers: true,
    })
  })
}

const horizontalSection = ref(null)
const horizontalContent = ref(null)

// Timeline refs
const timelineLine = ref(null)
const dot1 = ref(null)
const dot2 = ref(null)
const dot3 = ref(null)
const dot4 = ref(null)
const dot5 = ref(null)
const text1 = ref(null)
const text2 = ref(null)
const text3 = ref(null)
const text4 = ref(null)
const text5 = ref(null)

// Horizontal panels content
const hPanels = ref([
  {
    image: "/mockup1.png",
    alt: "Kreck app mockup",
    bullets: [
      { title: "Seamless User Experience", text: "Intuitive interface design for effortless navigation" },
      { title: "Smart Automation",         text: "AI-powered automation for enhanced productivity" },
      { title: "Real-time Control",        text: "Instant device control and monitoring" },
      { title: "Secure Connection",        text: "End-to-end encryption for data protection" },
      { title: "Cloud Integration",        text: "Sync across devices via the cloud" },
    ],
  },
  {
    image: "/mockup2.png",
    alt: "Kreck app mockup 2",
    bullets: [
      { title: "Scenes & Routines",  text: "Create powerful multi-device scenes" },
      { title: "Energy Insights",    text: "Track usage and optimize savings" },
      { title: "Voice Assistants",   text: "Works with popular voice platforms" },
      { title: "OTA Updates",        text: "New features delivered automatically" },
      { title: "Local Fallback",     text: "Keeps working even if internet drops" },
    ],
  },
  // Add more panels if you want
])

// Refs for the horizontal panels & their bullet groups
const panelEls = ref([])
const textGroupEls = ref([])

let horizontalTL // timeline handle for the horizontal scroller


function setupHorizontalScroll() {
  const panels = horizontalContent.value
  const totalPanels = panels.children.length

  horizontalTL = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalSection.value,
      start: "top top",
      end: () => "+=" + panels.offsetWidth, // scroll length equals total width
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  horizontalTL.to(panels, {
    xPercent: -100 * (totalPanels - 1),
    ease: "none",
  })

  return horizontalTL
}

function setupPanelFadeIns() {
  if (!horizontalTL) return
  // Create a trigger for each panel that animates its bullets
  panelEls.value.forEach((panelEl, i) => {
    const group = textGroupEls.value[i]
    if (!panelEl || !group) return

    // start hidden (in case SSR hydration timing)
    gsap.set(group.children, { opacity: 0, y: 24 })

    ScrollTrigger.create({
      trigger: panelEl,
      containerAnimation: horizontalTL,
      start: "left center",
      end: "right center",
      onEnter: () => gsap.to(group.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }),
      onEnterBack: () => gsap.to(group.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }),
      onLeave: () => gsap.to(group.children, { opacity: 0.1, y: 6, duration: 0.3, stagger: 0.02, ease: "power1.out" }),
      onLeaveBack: () => gsap.to(group.children, { opacity: 0.1, y: 6, duration: 0.3, stagger: 0.02, ease: "power1.out" }),
      // markers: true,
    })
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
// function setupFancyParaAnimation() {
//   const paraEl = fancyPara.value;
//   if (!paraEl) return;

//   // Split para by space to each word (or by sentence/line if you want)
//   paraEl.innerHTML = paraEl.textContent
//     .split(' ')
//     .map(word => `<span class="fancy-para-word">${word}</span>`)
//     .join(' ');

//   const words = paraEl.querySelectorAll('.fancy-para-word');
//   gsap.set(words, { opacity: 0, y: 24 });
//   gsap.to(words, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.04,
//     ease: "power2.out",
//     duration: 0.45,
//     scrollTrigger: {
//       trigger: paraEl,
//       start: "top 90%",
//       once: true,
//     }
//   });
// }


onMounted(async () => {
  // Set reducedMotion after mounting to avoid SSR issues
  reducedMotion.value = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  
  // ScrollTrigger.defaults({ markers: true, scroller: window })
  // ScrollTrigger.refresh()

  nextTick(async () => {
    runHeroPanelGsapAnimations()
    setupFeatureAnimations()
    await preloadFeatureImages()
    setupScrollCrossfade()

    setupHorizontalScroll()
    setupPanelFadeIns()
    setupWhyReveal()

    // setupTimelineAnimations()
    setupFancyHeadingAnimation()
    setupFancyParaAnimation()
    ScrollTrigger.refresh()
  })

  // Set up quick setters for only X and Y
  if (panelImageContainer.value) {
    panelXSetter = gsap.quickSetter(panelImageContainer.value, 'x', 'px')
    panelYSetter = gsap.quickSetter(panelImageContainer.value, 'y', 'px')
  }
})

onUnmounted(() => {
  if (panelTween) panelTween.kill()
  mm?.revert?.()
  ScrollTrigger.getAll().forEach(t => t.kill())
  
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
}
.robotics-font-size {
  line-height: .5;
  font-size: clamp(4rem,22vw,18rem);
  letter-spacing: 5px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #565656;
}

.product-text-block {
  min-height: 100vh;
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
  /* padding: 2rem; */
}

/* Timeline styles */
.timeline-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  gap: 4rem;
}

.mockup-container {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 500px;
}

.mockup-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

/* .timeline-content {
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline-wrapper {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 0.5rem;
} */

/* .timeline-svg {
  width: 100%;
  height: 100%;
}

.timeline-line {
  stroke-linecap: round;
} */

/* .timeline-dot {
  transition: all 0.3s ease;
  transform-origin: center;
} */

/* .timeline-texts {
  position: relative;
  width: 100%;
  height: 200px;
} */

/* .timeline-text-item {
  position: absolute;
  top: 0;
  width: 200px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease;
}

.timeline-text-item h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #dc2223;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.timeline-text-item p {
  font-size: 0.95rem;
  color: #565656;
  line-height: 1.4;
  margin: 0;
} */

.panel-title {
  font-size: 3rem;
  font-weight: bold;
  color: #dc2223;
  margin-bottom: 1rem;
  text-align: center;
}

.panel-description {
  font-size: 1.25rem;
  color: #565656;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .timeline-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .mockup-container {
    width: 300px;
    height: 400px;
  }
  
  /* .timeline-wrapper {
    height: 80px;
  }
  
  .timeline-text-item {
    width: 150px;
  }
  
  .timeline-text-item h3 {
    font-size: 1rem;
  }
  
  .timeline-text-item p {
    font-size: 0.85rem;
  } */
}

@media (max-width: 768px) {
  .horizontal-panel {
    padding: 1rem;
  }
  
  .mockup-container {
    width: 250px;
    height: 350px;
  }
  
  /* .timeline-texts {
    height: 150px;
  }
  
  .timeline-text-item {
    width: 120px;
  } */
  
  .panel-title {
    font-size: 2rem;
  }
  
  .panel-description {
    font-size: 1rem;
  }
}

/* horizontal scroll css ends */

/* heading and para panel section animaiton */
/* .fancy-heading {
  text-align: center;
  white-space: nowrap; 
}
.fancy-heading-letter {
  display: inline-block;
  font-size: inherit;
  line-height: 1.1;
  vertical-align: baseline;
  transform: translateZ(0); 
  backface-visibility: hidden;
} */

/* .fancy-para-word {
  display: inline-block;
  margin-right: 0.22em;
} */

.image-pin-wrap {
  /* This div is not flex or grid! */
  position: relative;
  height: 100vh;
}

.crossfade-stage {
  position: relative;
  width: 600px;
  height: 420px;
}

.crossfade-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* or contain, your choice */
  opacity: 0;        /* GSAP will control */
  will-change: opacity, transform;
}

</style>
