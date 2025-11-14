<template>
  <section id="testimonials" class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <!-- <img
          src="https://d2ibglgkljrdv5.cloudfront.net/mumbai/homeNew/google-reviews.png"
          alt="Google Reviews"
          class="h-8 md:h-10"
          loading="lazy"
        /> -->
        <div>
          <p class="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#dc2223]">
            Hear from our Clients
          </p>
          <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900">
            Discover why our customers can’t stop raving about us!
          </h2>
        </div>
      </div>

      <!-- Slider -->
      <div class="relative">
        <div
          ref="track"
          class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                 no-scrollbar px-2 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none]"
          @scroll.passive="onScroll"
        >
          <!-- hide scrollbar (Firefox above, WebKit below) -->

          <article
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="snap-start shrink-0 w-[88%] sm:w-[calc(50%-12px)] rounded-2xl bg-white
                   border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-full bg-gray-900 text-white grid place-items-center font-semibold">
                {{ initials(t.name) }}
              </div>
              <h3 class="text-lg font-bold">{{ t.name }}</h3>
            </div>

            <p class="mt-4 text-gray-700 leading-relaxed">“{{ t.text }}”</p>

            <div class="mt-6 flex items-center gap-2">
              <!-- inline stars (no external assets) -->
              <div class="flex items-center gap-1">
                <svg
                  v-for="n in 5"
                  :key="n"
                  viewBox="0 0 24 24"
                  class="h-4 w-4"
                  :class="n <= t.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-500">Rated {{ t.rating }}/5</span>
            </div>
          </article>
        </div>

        <!-- Arrows (desktop) -->
        <!-- Arrows (desktop) -->
        <button
          @click="prev"
          class="hidden md:grid absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full
                bg-white border shadow place-items-center hover:bg-gray-50"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l-5-5l5-5v10Zm9-10v10h-2V7h2Z"/></svg>
        </button>

        <button
          @click="next"
          class="hidden md:grid absolute -right-8 lg:-right-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full
                bg-white border shadow place-items-center hover:bg-gray-50"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m14 7l5 5l-5 5V7ZM5 7h2v10H5V7Z"/></svg>
        </button>
      </div>

      <!-- Bullets -->
      <div class="mt-6 flex justify-center gap-2">
        <button
          v-for="(t, i) in testimonials"
          :key="'dot-'+t.id"
          class="h-2.5 w-2.5 rounded-full transition"
          :class="i === active ? 'bg-gray-900' : 'bg-gray-300'"
          @click="goTo(i)"
          :aria-label="`Go to testimonial ${i+1}`"
        />
      </div>

      <!-- CTA -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#bannerform"
          class="inline-flex items-center gap-2 rounded-full bg-[#016BFF] text-white px-6 py-3
                 text-sm font-semibold hover:brightness-110"
        >
          Talk to an Expert
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"/></svg>
        </a>

        <!-- <a
          href="https://www.google.com/search?q=KRECK+Robotics+Reviews"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-900 px-6 py-3
                 text-sm font-semibold hover:bg-gray-200"
        >
          <svg viewBox="0 0 48 48" class="h-4 w-4"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 31.6 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.4 7.2 28.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20s20-8.9 20-20c0-1.6-.2-3.1-.4-4.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.4 7.2 28.9 5 24 5C16 5 9.4 9.8 6.3 14.7z"/><path fill="#4CAF50" d="M24 45c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.9 26.8 37 24 37c-5.3 0-9.8-3.4-11.5-8.1l-6.6 5.1C9.3 41.8 16 45 24 45z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.5 5.5-6.7 6.5l6.2 5.2C37.5 37.9 44 32.7 44 25c0-1.6-.2-3.1-.4-4.5z"/></svg>
          All Reviews
          <svg viewBox="0 0 24 24" class="h-4 w-4"><path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"/></svg>
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

type T = { id:number; name:string; text:string; rating:number }
const testimonials = ref<T[]>([])
const active = ref(0)
const track = ref<HTMLDivElement | null>(null)

const supabase = useSupabaseClient() // uses @nuxtjs/supabase (anon key)

// Fetch from your server route that reads via Supabase (public)
const fetchTestimonials = async () => {
  const data = await $fetch<T[]>('/api/testimonials').catch(() => [])
  testimonials.value = data || []
  // keep active index in bounds after data changes
  if (active.value >= testimonials.value.length) active.value = Math.max(0, testimonials.value.length - 1)
}

// keep the “active” dot synced while user scrolls
const onScroll = () => {
  if (!track.value) return
  const children = Array.from(track.value.children) as HTMLElement[]
  const mid = track.value.scrollLeft + track.value.clientWidth / 2
  let nearest = 0, best = Infinity
  children.forEach((el, i) => {
    const c = el.offsetLeft + el.clientWidth / 2
    const d = Math.abs(c - mid)
    if (d < best) { best = d; nearest = i }
  })
  active.value = nearest
}

const goTo = (i:number) => {
  if (!track.value) return
  const el = track.value.children[i] as HTMLElement
  track.value.scrollTo({ left: el.offsetLeft - 16, behavior: 'smooth' })
  active.value = i
}
const prev = () => goTo(Math.max(0, active.value - 1))
const next = () => goTo(Math.min((testimonials.value.length - 1), active.value + 1))
const initials = (n:string) => n.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()

// --- Auto-rotate (pauses on hover) ---
let timer: ReturnType<typeof setInterval> | null = null
const startAuto = () => {
  stopAuto()
  if (!testimonials.value.length) return
  timer = setInterval(() => {
    if (!testimonials.value.length) return
    const i = (active.value + 1) % testimonials.value.length
    goTo(i)
  }, 4500) // 4.5s per slide
}
const stopAuto = () => { if (timer) { clearInterval(timer); timer = null } }

// --- Realtime refresh when admin edits anything ---
let channel: ReturnType<typeof supabase.channel> | null = null

onMounted(async () => {
  await fetchTestimonials()
  startAuto()

  channel = supabase
    .channel('rt-testimonials')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, () => {
      fetchTestimonials()
    })
    .subscribe()
})

onBeforeUnmount(() => {
  stopAuto()
  if (channel) supabase.removeChannel(channel)
})
</script>

<style>
/* hide native scrollbar cross-browser */
.no-scrollbar {
  -ms-overflow-style: none;   /* IE/Edge */
  scrollbar-width: none;      /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none;              /* Chrome/Safari */
}
</style>