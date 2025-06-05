<template>
  <div>
    <header class="bg-white shadow py-4 px-8">
      <h1 class="text-2xl font-bold text-indigo-600">Kreckrobotics</h1>
      <!-- You can add navigation links here later -->
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-gray-100 text-gray-600 py-4 px-8 text-center">
      &copy; {{ new Date().getFullYear() }} Kreckrobotics. All rights reserved.
    </footer>
  </div>
</template>
