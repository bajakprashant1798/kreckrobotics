<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'About — Your Company Name',
  meta: [
    { name: 'description', content: 'Learn about Your Company Name — our mission, values, team and how we build smart home automation solutions.' },
    { property: 'og:title', content: 'About — Your Company Name' },
    { property: 'og:description', content: 'Learn about Your Company Name — our mission, values, team and how we build smart home automation solutions.' },
  ],
})

const team = [
  { name: 'Amit Kumar', role: 'Founder & CEO', img: '/team/amit.jpg', bio: 'Product & business lead. 12+ years in IoT & home automation.' },
  { name: 'Neha Sharma', role: 'Head of Design', img: '/team/neha.jpg', bio: 'Design lead — UX, visual systems and brand.' },
  { name: 'Ravi Patel', role: 'Engineering Lead', img: '/team/ravi.jpg', bio: 'Firmware & cloud engineer focused on reliability.' },
  { name: 'Priya Joshi', role: 'Customer Success', img: '/team/priya.jpg', bio: 'On-site install & support lead.' },
]

const timeline = [
  { year: '2018', title: 'Company Founded', body: 'Started with a small team building smart switches and basic home automation flows.' },
  { year: '2019', title: 'First Pilot', body: 'Completed our first pilot installs in apartments and small offices.' },
  { year: '2021', title: 'Retail Launch', body: 'Launched product line for installers and consumers.' },
  { year: '2023', title: 'Scaling Up', body: 'Expanded to multiple cities and launched cloud integrations.' },
]

const faqs = ref([
  { q: 'Do your systems work during power cuts?', a: 'Yes — core control works locally for basic scenes. Cloud features require internet.' },
  { q: 'Which voice assistants do you support?', a: 'Google Assistant and Amazon Alexa. Apple HomeKit integration available for certain SKUs.' },
  { q: 'What is the warranty period?', a: 'Standard 2-year onsite warranty. Extended options available.' },
])
</script>

<template>
  <main class="min-h-screen bg-white text-gray-800">
    <!-- HERO -->
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-sm text-red-600 font-semibold mb-3">ABOUT US</p>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            We make homes smarter — simply, reliably.
          </h1>
          <p class="text-gray-600 text-base sm:text-lg mb-6">
            We design and deliver elegant smart lighting, touch panels and automation systems that integrate seamlessly with everyday life. From pilot to full installation — we handle design, hardware, and long-term support.
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
            <a href="/contact"
               class="inline-flex items-center justify-center px-5 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
              Book a free site visit
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer"
               class="inline-flex items-center justify-center px-5 py-3 border border-gray-200 rounded-lg hover:shadow">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="bg-gradient-to-tr from-red-50 to-white rounded-2xl p-6 shadow-lg">
            <img src="" alt="Smart home mockup"
                 class="w-full h-64 object-cover rounded-lg shadow-sm" loading="lazy" />
          </div>
          <!-- <div class="mt-4 flex gap-3">
            <div class="bg-white border border-gray-100 rounded-lg p-3 text-sm">
              <p class="text-xs text-gray-500">Since</p>
              <p class="text-lg font-semibold">2018</p>
            </div>
            <div class="bg-white border border-gray-100 rounded-lg p-3 text-sm">
              <p class="text-xs text-gray-500">Cities</p>
              <p class="text-lg font-semibold">5+</p>
            </div>
            <div class="bg-white border border-gray-100 rounded-lg p-3 text-sm">
              <p class="text-xs text-gray-500">Installs</p>
              <p class="text-lg font-semibold">2k+</p>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- MISSION & VALUES -->
    <section class="border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold mb-4">Our mission</h2>
          <p class="text-gray-600 mb-6">
            To make safe, dependable and beautiful home automation accessible to everyone. We focus on reliability, easy install, and long-term maintainability — so your home keeps getting smarter without headaches.
          </p>

          <h3 class="text-lg font-semibold mb-3">How we work</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li class="flex gap-3 items-start">
              <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-semibold">1</div>
              <div>
                <p class="font-semibold">Consult</p>
                <p class="text-sm text-gray-600">On-site survey and requirement mapping.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-semibold">2</div>
              <div>
                <p class="font-semibold">Design</p>
                <p class="text-sm text-gray-600">Custom wiring & product selection for the space.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-semibold">3</div>
              <div>
                <p class="font-semibold">Install</p>
                <p class="text-sm text-gray-600">Certified technicians & clean installation.</p>
              </div>
            </li>
            <li class="flex gap-3 items-start">
              <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-semibold">4</div>
              <div>
                <p class="font-semibold">Support</p>
                <p class="text-sm text-gray-600">On-site warranty & remote assistance.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-red-50 rounded-2xl p-6">
          <h4 class="text-lg font-bold mb-3">Core values</h4>
          <ul class="space-y-3 text-gray-700">
            <li><strong>Reliability</strong> — hardware and software you can trust.</li>
            <li><strong>Simplicity</strong> — minimal learning curve for users & installers.</li>
            <li><strong>Privacy</strong> — local-first operation where possible.</li>
            <li><strong>Design</strong> — beautiful, tactile hardware & UI.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="bg-gray-50">
        <div class="max-w-7xl mx-auto px-6 py-16 ">
            <h2 class="text-2xl font-bold mb-8 text-center">Meet the team</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <article v-for="(m, idx) in team" :key="idx" class="bg-white border rounded-2xl p-4 text-center hover:shadow-lg transition">
                    <img :src="m.img" :alt="m.name" class="w-28 h-28 object-cover rounded-full mx-auto mb-4" loading="lazy" />
                    <h4 class="font-semibold text-lg">{{ m.name }}</h4>
                    <p class="text-sm text-red-600 mb-2">{{ m.role }}</p>
                    <p class="text-sm text-gray-600">{{ m.bio }}</p>
                </article>
            </div>
        </div>
    </section>

    <!-- TIMELINE -->
    <!-- <section class="bg-gray-50">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <h3 class="text-2xl font-bold mb-6 text-center">Our journey</h3>
        <div class="relative">
          <div class="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-red-200"></div>

          <div class="space-y-8 md:space-y-0 md:flex md:items-center md:justify-between">
            <div v-for="(t, i) in timeline" :key="i" class="md:flex-1 md:px-4">
              <div class="flex md:block items-start gap-4 md:gap-0">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">{{ t.year }}</div>
                </div>
                <div class="mt-2 md:mt-4">
                  <h4 class="font-semibold">{{ t.title }}</h4>
                  <p class="text-sm text-gray-600">{{ t.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- FAQ + CTA -->
    <section class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 class="text-2xl font-bold mb-4">Frequently asked questions</h3>
        <div class="space-y-4">
          <details v-for="(f, i) in faqs" :key="i" class="p-4 border rounded-lg">
            <summary class="font-medium cursor-pointer">{{ f.q }}</summary>
            <p class="mt-2 text-gray-600">{{ f.a }}</p>
          </details>
        </div>
      </div>

      <div class="bg-red-50 rounded-2xl p-8 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold mb-3">Ready to upgrade your home?</h3>
          <p class="text-gray-600 mb-6">Book a site visit and get a custom plan with transparent pricing.</p>
        </div>

        <div class="flex gap-3">
          <a href="/contact" class="w-full inline-flex items-center justify-center px-5 py-3 bg-red-600 text-white rounded-lg">Book site visit</a>
          <a href="mailto:info@kreckrobotics.com" class="w-full inline-flex items-center justify-center px-5 py-3 border border-gray-200 rounded-lg">Email us</a>
        </div>
      </div>
    </section>

    <!-- FOOTER CTA small -->
    <section class="bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p class="text-sm text-gray-600">Questions? Call us at <a href="tel:+91 75187 57518" class="text-red-600 font-medium">+91 75187 57518</a></p>
        </div>
        <div>
          <a href="/contact" class="px-4 py-2 bg-red-600 text-white rounded-lg">Contact sales</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
/* If you're using Tailwind this file won’t need much custom CSS.
   Add small tweaks here if required (kept minimal on purpose). */
</style>