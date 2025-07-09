<template>
  <div v-if="product" class="max-w-2xl mx-auto p-6">
    <img :src="product.image" :alt="product.name" class="w-full h-auto mb-4" />
    <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
    <p class="text-gray-700">{{ product.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import products from '@/data/products.json'

const route = useRoute()
const product = products.find(p => p.slug === route.params.slug)
</script>
