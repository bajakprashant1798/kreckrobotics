<template>
  <section class="bg-gray-50 min-h-screen py-16">
    <div class="max-w-7xl mx-auto px-6">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Our Smart Products
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="product in productsClean"
          :key="product.id"
          :to="`/products/${product.slug}`"
          class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm
                 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div class="overflow-hidden">
            <img
              :src="firstImage(product)"
              :alt="product.name"
              class="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-5">
            <h3 class="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#dc2223] transition">
              {{ product.name }}
            </h3>
            <p class="text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import raw from '@/data/products.json'

// (optional) if your data might contain duplicate slugs, keep the first occurrence
const seen = new Set()
const productsClean = raw.filter(p => (seen.has(p.slug) ? false : seen.add(p.slug)))

const firstImage = (p) => (p.images?.[0]) || p.image || '/images/placeholder.jpg'
</script>