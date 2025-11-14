<template>
  <section class="bg-gray-50 min-h-screen py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <!-- Gallery -->
      <div class="w-full">
        <!-- Main image area with zoom -->
        <div
          class="relative rounded-2xl bg-white shadow overflow-hidden select-none"
          @mousemove="onZoomMove"
          @mouseleave="onZoomLeave"
          @wheel.prevent="onZoomWheel"
          @dblclick="toggleZoom"
          @touchstart.passive="onTouchStart"
          @touchmove.prevent.passive="onTouchMove"
          @touchend.passive="onTouchEnd"
        >
          <img
            :src="currentImage"
            :alt="product.name"
            class="w-full h-[420px] md:h-[520px] object-contain transition-transform duration-150"
            :style="zoomStyle"
            ref="imgEl"
          />

          <!-- Zoom controls (desktop) -->
          <div class="hidden md:flex absolute right-3 top-3 bg-white/90 backdrop-blur rounded-full border shadow">
            <button class="h-9 w-9 grid place-items-center" @click.stop="zoomIn" aria-label="Zoom in">+</button>
            <div class="w-px bg-gray-200 my-2"></div>
            <button class="h-9 w-9 grid place-items-center" @click.stop="zoomOut" aria-label="Zoom out">−</button>
            <div class="w-px bg-gray-200 my-2"></div>
            <button class="h-9 w-9 grid place-items-center" @click.stop="resetZoom" aria-label="Reset">⤾</button>
          </div>

          <!-- Prev / Next arrows (desktop) -->
          <button
            class="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full
                   bg-white/90 border shadow items-center justify-center hover:bg-white"
            @click="prev"
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m14 7l-5 5l5 5V7Z"/></svg>
          </button>
          <button
            class="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full
                   bg-white/90 border shadow items-center justify-center hover:bg-white"
            @click="next"
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5v10Z"/></svg>
          </button>
        </div>

        <!-- Thumbnails -->
        <div class="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
          <button
            v-for="(img, i) in gallery"
            :key="img + i"
            class="shrink-0 relative rounded-xl overflow-hidden border"
            :class="i === index ? 'border-gray-900' : 'border-gray-200'"
            @click="go(i)"
            aria-label="Select image"
          >
            <img :src="img" :alt="`${product.name} thumbnail ${i+1}`" class="h-20 w-28 object-cover" />
            <span
              v-if="i === index"
              class="absolute inset-0 ring-2 ring-gray-900/60 rounded-xl pointer-events-none"
            />
          </button>
        </div>

        <!-- Color options (if present) -->
        <div v-if="colors.length" class="mt-6 flex items-center gap-3">
          <span class="text-sm text-gray-600">Color:</span>
          <button
            v-for="c in colors"
            :key="c"
            class="w-8 h-8 rounded-full border-2 transition"
            :style="{
              backgroundColor: colorMap[c] ?? '#e5e7eb',
              borderColor: activeColor === c ? '#111827' : '#d1d5db'
            }"
            @click="selectColor(c)"
            :aria-label="`Select ${c}`"
            title="Choose color"
          />
        </div>
      </div>

      <!-- Info -->
      <div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900">{{ product.name }}</h1>
        <p class="mt-3 text-gray-600 leading-relaxed">
          {{ product.description }}
        </p>

        <ul class="mt-6 space-y-2 text-gray-700">
          <li>✔ Smart connectivity</li>
          <li>✔ Premium materials</li>
          <li>✔ Energy efficient</li>
        </ul>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#getInTouchFormNew"
            class="inline-flex items-center gap-2 rounded-full bg-[#dc2223] text-white px-6 py-3
                   text-sm font-semibold hover:brightness-110 transition"
          >
            Talk to an Expert
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
              <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"/>
            </svg>
          </a>
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-2 rounded-full bg-white border px-6 py-3
                   text-sm font-semibold hover:bg-gray-50"
          >
            Back to Products
          </NuxtLink>
        </div>

        <!-- Related -->
        <div class="mt-14">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Other Products</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="p in related"
              :key="p.id"
              :to="`/products/${p.slug}`"
              class="group bg-white rounded-xl overflow-hidden border hover:shadow transition"
            >
              <img :src="(p.images && p.images[0]) || p.image" :alt="p.name" class="h-40 w-full object-cover group-hover:opacity-95 transition"/>
              <div class="p-4">
                <div class="font-semibold">{{ p.name }}</div>
                <div class="text-xs text-gray-500 line-clamp-2">{{ p.description }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import products from '@/data/products.json'

// simple swatch colors
const colorMap = { gold: '#d4af37', silver: '#c0c0c0', white: '#e5e7eb', black: '#111827' }

const route = useRoute()
const product = products.find(p => p.slug === route.params.slug)

// --- gallery state ---
const activeColor = ref(null) // null means use product.images
const index = ref(0)

// Resolve the current gallery (color-specific or generic)
const gallery = computed(() => {
  if (!product) return []
  if (activeColor.value && product.colors?.[activeColor.value]?.images?.length) {
    return product.colors[activeColor.value].images
  }
  if (product.images?.length) return product.images
  return product.image ? [product.image] : []
})

const currentImage = computed(() => gallery.value[index.value])

// colors present?
const colors = computed(() => product?.colors ? Object.keys(product.colors) : [])

// --- actions ---
const selectColor = (c) => {
  activeColor.value = c
  index.value = 0
}

const go = (i) => {
  index.value = Math.min(Math.max(i, 0), gallery.value.length - 1)
}

const prev = () => go(index.value - 1)
const next = () => go(index.value + 1)

// keyboard navigation
const onKey = (e) => {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

// touch swipe
let touchX = 0
const onTouchStart = (e) => { touchX = e.touches[0].clientX }
const onTouchMove = () => {}
const onTouchEnd = (e) => {
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) > 40) (dx > 0 ? prev() : next())
}

// --- Zoom state ---
const imgEl = ref(null)
const zoom = ref({
  enabled: false,
  scale: 1.0,          // 1 = no zoom
  min: 1.0,
  max: 3.0,
  x: 50,               // transform-origin as %
  y: 50
})

const clamp = (n, a, b) => Math.min(Math.max(n, a), b)

const zoomStyle = computed(() => ({
  transform: `scale(${zoom.value.scale})`,
  transformOrigin: `${zoom.value.x}% ${zoom.value.y}%`
}))

const toggleZoom = () => {
  zoom.value.enabled = !zoom.value.enabled
  zoom.value.scale = zoom.value.enabled ? 2.0 : 1.0
}

const onZoomMove = (e) => {
  if (!zoom.value.enabled) return
  const rect = imgEl.value?.getBoundingClientRect?.()
  if (!rect) return
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  zoom.value.x = clamp(x, 0, 100)
  zoom.value.y = clamp(y, 0, 100)
}

const onZoomWheel = (e) => {
  const delta = e.deltaY > 0 ? -0.2 : 0.2
  const next = clamp(zoom.value.scale + delta, zoom.value.min, zoom.value.max)
  zoom.value.scale = next
  zoom.value.enabled = next > 1
}

const zoomIn  = () => { zoom.value.scale = clamp(zoom.value.scale + 0.2, zoom.value.min, zoom.value.max); zoom.value.enabled = zoom.value.scale > 1 }
const zoomOut = () => { zoom.value.scale = clamp(zoom.value.scale - 0.2, zoom.value.min, zoom.value.max); zoom.value.enabled = zoom.value.scale > 1 }
const resetZoom = () => { zoom.value = { enabled: false, scale: 1, min: 1, max: 3, x: 50, y: 50 } }

const onZoomLeave = () => {
  // keep zoomed or reset—your choice
  // resetZoom()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

// related list
const related = products.filter(p => p.slug !== route.params.slug).slice(0, 2)
</script>

<style>
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
</style>