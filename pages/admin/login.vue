<template>
  <div class="min-h-screen grid place-items-center bg-gray-50 px-6">
    <form @submit.prevent="submit" class="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
      <h1 class="text-xl font-bold mb-4">Admin Login</h1>
      <label class="block text-sm font-medium">Email</label>
      <input v-model="email" type="email" class="mt-1 w-full border rounded-lg px-3 py-2" required />
      <label class="block text-sm font-medium mt-4">Password</label>
      <input v-model="password" type="password" class="mt-1 w-full border rounded-lg px-3 py-2" required />
      <button :disabled="loading" class="mt-6 w-full rounded-lg bg-black text-white py-2 font-semibold">
        {{ loading ? 'Signing in...' : 'Sign in' }}
      </button>
      <p v-if="err" class="text-red-600 text-sm mt-3">{{ err }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const err = ref('')

watch(user, (u) => { if (u) router.replace('/admin/testimonials') })

const submit = async () => {
  err.value = ''
  loading.value = true
  const { error } = await client.auth.signInWithPassword({ email: email.value, password: password.value })
  loading.value = false
  if (error) err.value = error.message
}
</script>