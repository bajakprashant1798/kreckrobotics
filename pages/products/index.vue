<template>
  <section class="product-list grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
    <NuxtLink
      v-for="product in products"
      :key="product.id"
      :to="`/products/${product.slug}`"
      class="block border p-4 rounded hover:shadow"
    >
      <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover mb-2" />
      <h3 class="font-bold text-lg">{{ product.name }}</h3>
      <p class="text-sm text-gray-600">{{ product.description }}</p>
    </NuxtLink>
  </section>
</template>

<script setup>
import products from '@/data/products.json'
</script>
