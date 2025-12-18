<template>
  <section class="bg-gray-50 min-h-screen py-12 md:py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <!-- LEFT: heading + contact info -->
        <div class="pt-2">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Get in — <br class="hidden md:block" />touch with us
          </h1>

          <p class="text-base sm:text-lg text-gray-600 max-w-xl mb-8">
            We’re here to help! Whether you have a question about our services, or want to provide feedback,
            our team is ready to assist you.
          </p>

          <div class="text-gray-700 space-y-4 mb-8">
            <div>
              <div class="text-sm text-gray-500">Email:</div>
              <div class="text-lg sm:text-xl font-semibold text-gray-900" ><NuxtLink to="mailto:info@kreckrobotics.com">info@kreckrobotics.com</NuxtLink></div>
            </div>

            <div>
              <div class="text-sm text-gray-500">Phone:</div>
              <div class="text-lg sm:text-xl font-semibold text-gray-900"><NuxtLink to="tel:+91 75187 57518">+91 75187 57518</NuxtLink></div>
              <div class="text-xs text-gray-500 mt-1">Available Monday to Friday, 9 AM - 6 PM GMT</div>
            </div>
          </div>

          <!-- <div>
            <button
              @click="openLiveChat"
              type="button"
              class="inline-flex items-center gap-3 bg-black text-white rounded-full px-5 py-3 shadow-md hover:shadow-xl transition transform active:scale-95"
            >
              
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="font-medium">Live Chat</span>

              
              <span class="ml-1 w-7 h-7 bg-white text-black rounded-full grid place-items-center">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </div> -->
        </div>

        <!-- RIGHT: form card -->
        <div class="order-first md:order-last">
          <form
            @submit.prevent="onSubmit"
            class="bg-white rounded-[28px] p-6 sm:p-8 md:p-10 shadow-sm relative"
            :class="{ 'ring-2 ring-green-200': submitted }"
            novalidate
          >
            <!-- grid for first + last name -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-medium text-gray-600">First Name</label>
                <input
                  v-model.trim="form.firstName"
                  type="text"
                  required
                  :class="inputClass('firstName')"
                  placeholder="Enter your first name..."
                  aria-label="First name"
                />
              </div>

              <div>
                <label class="text-xs font-medium text-gray-600">Last Name</label>
                <input
                  v-model.trim="form.lastName"
                  type="text"
                  :class="inputClass('lastName')"
                  placeholder="Enter your last name..."
                  aria-label="Last name"
                />
              </div>
            </div>

            <!-- email -->
            <div class="mt-4">
              <label class="text-xs font-medium text-gray-600">Email</label>
              <input
                v-model.trim="form.email"
                type="email"
                required
                :class="inputClass('email')"
                placeholder="Enter your email address..."
                aria-label="Email address"
              />
            </div>

            <!-- message -->
            <div class="mt-4">
              <label class="text-xs font-medium text-gray-600">How can we help you?</label>
              <textarea
                v-model="form.message"
                rows="6"
                required
                :class="textareaClass"
                placeholder="Enter your message..."
                aria-label="Message"
              ></textarea>
            </div>

            <!-- bottom-right send button -->
            <div class="mt-6 flex items-center justify-end">
              <button
                type="submit"
                :disabled="sending"
                class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 shadow-md hover:shadow-xl transition transform active:scale-95"
                aria-label="Send message"
              >
                <span>{{ sending ? 'Sending...' : 'Send Message' }}</span>
                <span class="w-8 h-8 bg-white text-black rounded-full grid place-items-center">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>

            <!-- submission feedback -->
            <div v-if="submitted" class="mt-4 text-sm text-green-700">
              Thanks — your message has been received. We'll get back to you soon.
            </div>
            <div v-if="error" class="mt-4 text-sm text-red-600">{{ error }}</div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
})
const sending = ref(false)
const submitted = ref(false)
const error = ref('')

// helpers for classes
const baseInput =
  'mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dc2223]/20 transition'

const inputClass = (field) => {
  // very simple validation highlight
  if (!form[field]) return baseInput
  return baseInput
}

const textareaClass = baseInput + ' resize-none min-h-[120px]'

// fake submit handler — replace with real API call
const onSubmit = async () => {
  error.value = ''
  submitted.value = false

  // basic validation
  if (!form.firstName || !form.email || !form.message) {
    error.value = 'Please fill in first name, email and a short message.'
    return
  }
  sending.value = true
  try {
    // replace with your API call, e.g. $fetch('/api/contact', { method: 'POST', body: form })
    await new Promise((r) => setTimeout(r, 900))
    submitted.value = true
    // clear form
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    error.value = 'Something went wrong. Please try again later.'
  } finally {
    sending.value = false
  }
}

// live chat placeholder
const openLiveChat = () => {
  // open chat widget or navigate; placeholder:
  alert('Open live chat (implement widget integration here)')
}
</script>

<style>
/* small tweak so long forms keep the bottom-right send button visible on small screens */
@media (max-width: 767px) {
  form > .mt-6 {
    justify-content: flex-start;
  }
}
</style>