<template>
  <div class="min-h-screen bg-gray-50">
    <header class="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 class="text-lg font-bold">Manage Testimonials</h1>
      <button @click="signOut" class="text-sm underline">Sign out</button>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
      <!-- Form -->
      <form @submit.prevent="save" class="bg-white p-6 rounded-2xl shadow border">
        <h2 class="font-semibold text-lg mb-4">{{ editing ? 'Edit' : 'Add' }} Testimonial</h2>
        <label class="block text-sm font-medium">Name</label>
        <input v-model="form.name" class="mt-1 w-full border rounded-lg px-3 py-2" required />

        <label class="block text-sm font-medium mt-4">Review</label>
        <textarea v-model="form.text" class="mt-1 w-full border rounded-lg px-3 py-2 h-28" required />

        <label class="block text-sm font-medium mt-4">Rating (1–5)</label>
        <input v-model.number="form.rating" type="number" min="1" max="5" class="mt-1 w-24 border rounded-lg px-3 py-2" required />

        <div class="mt-6 flex gap-3">
          <button class="rounded-lg bg-black text-white px-4 py-2 font-semibold">{{ editing ? 'Update' : 'Create' }}</button>
          <button v-if="editing" type="button" @click="cancelEdit" class="rounded-lg bg-gray-100 px-4 py-2">Cancel</button>
        </div>
        <p v-if="err" class="text-red-600 text-sm mt-3">{{ err }}</p>
      </form>

      <!-- List -->
      <div class="space-y-4">
        <div v-for="t in list" :key="t.id" class="bg-white p-5 rounded-2xl border shadow flex items-start justify-between gap-4">
          <div>
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-full bg-gray-900 text-white grid place-items-center text-xs font-bold">
                {{ initials(t.name) }}
              </div>
              <div class="font-semibold">{{ t.name }}</div>
              <div class="text-yellow-500 text-sm">★ {{ t.rating }}</div>
            </div>
            <p class="mt-2 text-sm text-gray-700">{{ t.text }}</p>
            <div class="mt-2 text-xs text-gray-500">#{{ t.id }}</div>
          </div>
          <div class="flex gap-2 shrink-0">
            <button @click="startEdit(t)" class="px-3 py-1.5 rounded-lg bg-gray-100">Edit</button>
            <button @click="remove(t.id)" class="px-3 py-1.5 rounded-lg bg-red-600 text-white">Delete</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
type T = { id:number; name:string; text:string; rating:number; created_at:string }
const client = useSupabaseClient()
const user = useSupabaseUser()
const list = ref<T[]>([])
const err = ref('')

const form = reactive({ id: null as number|null, name: '', text: '', rating: 5 })
const editing = computed(() => form.id !== null)

const fetchAll = async () => {
  const { data, error } = await client.from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) err.value = error.message
  else list.value = data as T[]
}

const save = async () => {
  err.value = ''
  if (!user.value) { err.value = 'Not authenticated'; return }
  const payload = { name: form.name, text: form.text, rating: form.rating }
  let res
  if (editing.value) {
    res = await client.from('testimonials').update(payload).eq('id', form.id as number).select('*').single()
  } else {
    res = await client.from('testimonials').insert(payload).select('*').single()
  }
  if (res.error) { err.value = res.error.message; return }
  await fetchAll()
  Object.assign(form, { id: null, name: '', text: '', rating: 5 })
}

const remove = async (id:number) => {
  err.value = ''
  const { error } = await client.from('testimonials').delete().eq('id', id)
  if (error) { err.value = error.message; return }
  await fetchAll()
}

const startEdit = (t:T) => Object.assign(form, t)
const cancelEdit = () => Object.assign(form, { id:null, name:'', text:'', rating:5 })
const initials = (n:string) => n.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()

const signOut = async () => { await client.auth.signOut(); await navigateTo('/admin/login') }

onMounted(fetchAll)
</script>