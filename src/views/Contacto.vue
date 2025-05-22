<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6">
    <div class="max-w-2xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-10">
        
        <p class="text-gray-400 mt-3 text-lg">¿Preguntas? ¿Colaboraciones? ¿CTFs? Estoy disponible.</p>
      </div>

      <!-- Redes de contacto con estilo visual hacker -->
      <div class="bg-gradient-to-br from-[#0f1117] to-[#1a1f2b] border border-green-500 rounded-xl p-6 shadow-xl ring-1 ring-green-800 mb-12 space-y-4">
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">Email</span>
          <a href="mailto:beafn23@gmail.com" class="text-blue-400 group-hover:underline">beafn23@gmail.com</a>
        </div>
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">GitHub</span>
          <a href="https://github.com/beafn28" class="text-blue-400 group-hover:underline" target="_blank">github.com/beafn28</a>
        </div>
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">LinkedIn</span>
          <a href="https://linkedin.com/in/beatriz-fresno-naumova" class="text-blue-400 group-hover:underline" target="_blank">Beatriz Fresno Naumova</a>
        </div>
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">Hack The Box</span>
          <a href="https://app.hackthebox.com/profile/121349" class="text-blue-400 group-hover:underline" target="_blank">Perfil HTB</a>
        </div>
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">TryHackMe</span>
          <a href="https://tryhackme.com/p/beafn28" class="text-blue-400 group-hover:underline" target="_blank">Perfil THM</a>
        </div>
        <div class="group flex items-center justify-between px-4 py-2 hover:bg-[#182027] transition">
          <span class="text-green-500 font-bold">GitBook</span>
          <a href="https://beafn28.gitbook.io" class="text-blue-400 group-hover:underline" target="_blank">beafn28.gitbook.io</a>
        </div>
      </div>

      <!-- Formulario -->
      <div class="bg-gradient-to-tr from-[#0f1117] to-[#1f2937] border border-green-600 rounded-xl p-6 shadow-lg ring-1 ring-green-800">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-sm mb-1 text-green-300" for="name">Nombre</label>
            <input v-model="form.name" type="text" id="name" required class="w-full bg-[#0c0f13] border border-gray-600 rounded px-3 py-2 text-green-300 focus:outline-none focus:ring focus:ring-green-700 placeholder:text-green-700" placeholder="Tu nombre o nick" />
          </div>

          <div class="mb-4">
            <label class="block text-sm mb-1 text-green-300" for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required class="w-full bg-[#0c0f13] border border-gray-600 rounded px-3 py-2 text-green-300 focus:outline-none focus:ring focus:ring-green-700 placeholder:text-green-700" placeholder="tucorreo@example.com" />
          </div>

          <div class="mb-4">
            <label class="block text-sm mb-1 text-green-300" for="message">Mensaje</label>
            <textarea v-model="form.message" id="message" rows="5" required class="w-full bg-[#0c0f13] border border-gray-600 rounded px-3 py-2 text-green-300 focus:outline-none focus:ring focus:ring-green-700 placeholder:text-green-700" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>

          <div class="text-right">
            <button type="submit" class="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-extrabold tracking-wide shadow-md transition">Enviar</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

async function handleSubmit() {
  const payload = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  }

  try {
    const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) throw new Error('Error al enviar mensaje')
    alert('Mensaje enviado correctamente. ¡Gracias por contactar!')
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error(err)
    alert('Hubo un problema al enviar el mensaje.')
  }
}
</script>
