<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { loginSchema as validationSchema } from '../validation/loginSchema'

const { handleSubmit } = useForm({ validationSchema });

const email = useField('email');
const password = useField('password');

const submit = handleSubmit(() => {
  console.log('submit');
});

</script>

<template>
  <div class="flex items-center justify-center mt-20">
    <form
      class="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800"
    >
      <div class="px-8 py-10 md:px-10">
        <h2
          class="text-4xl font-extrabold text-center text-zinc-800 dark:text-white"
        >
          Real Estates
        </h2>
        <div class="mt-10">
          <div class="relative">
            <label
              class="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              for="email"
              >Email</label
            >
            <input
              placeholder="you@example.com"
              class="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="email"
              id="email"
              type="email"
              v-model="email.value.value"
            />
          </div>
          <div class="mt-6">
            <label
              class="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              for="password"
              >Password</label
            >
            <input
              placeholder="••••••••"
              class="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="password"
              id="password"
              type="password"
              v-model="password.value.value"
            />
          </div>
          <div class="mt-10">
            <button
              class="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
              type="submit"
              @click="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
      <div class="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
        <div class="text-sm text-blue-900 dark:text-blue-300 text-center">
          Don't have an account?
          <a class="font-medium underline" href="#">Sign up</a>
        </div>
      </div>
    </form>
  </div>

</template>
