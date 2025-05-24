<template>
  <div class="min-h-screen bg-[#0b0e11] text-green-400 font-mono p-6">
    <div class="max-w-3xl mx-auto">

      <!-- Terminal simulada con formulario -->
      <div class="bg-[#0d1117] border border-green-700 shadow-green-500/20 shadow-md rounded-b-md px-6 py-6 space-y-5">
        <div>
          <span class="text-green-500">beafn28@web:~$</span>
          <span class="ml-2">echo "Tu nombre:"</span>
          <input v-model="form.name"
                 class="block w-full mt-1 bg-transparent border-b border-green-500 text-green-200 focus:outline-none placeholder-green-700"
                 placeholder="Tu nombre o nick" />
        </div>

        <div>
          <span class="text-green-500">beafn28@web:~$</span>
          <span class="ml-2">echo "Tu correo:"</span>
          <input v-model="form.email"
                 type="email"
                 class="block w-full mt-1 bg-transparent border-b border-green-500 text-green-200 focus:outline-none placeholder-green-700"
                 placeholder="tucorreo@example.com" />
        </div>

        <div>
          <span class="text-green-500">beafn28@web:~$</span>
          <span class="ml-2">nano mensaje.txt</span>
          <textarea v-model="form.message"
                    rows="5"
                    class="w-full mt-2 bg-[#0b0e11] border border-green-700 text-green-200 rounded p-2 focus:outline-none placeholder-green-700"
                    placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>

        <div class="text-right">
          <button @click="handleSubmit"
                  class="bg-green-500 text-black px-6 py-2 font-bold rounded shadow hover:bg-green-600 transition">
            ./enviar_mensaje.sh
          </button>
        </div>
      </div>

      <!-- Redes como comandos -->
      <div class="mt-12 bg-[#0d1117] border border-green-700 rounded p-6 shadow-green-500/10 shadow">
        <p class="mb-4 text-green-300">beafn28@web:~$ cat redes_contacto.txt</p>
        <div class="space-y-3 ml-4">
        <div><span class="text-green-500">[Email]</span> <a href="mailto:beafn23@gmail.com" class="text-blue-400 hover:underline">beafn23@gmail.com</a></div>
        <div><span class="text-green-500">[LinkedIn]</span> <a href="https://linkedin.com/in/beatriz-fresno-naumova" class="text-blue-400 hover:underline" target="_blank">linkedin.com/in/beatriz-fresno-naumova</a></div>
          <div><span class="text-green-500">[GitHub]</span> <a href="https://github.com/beafn28" class="text-blue-400 hover:underline" target="_blank">github.com/beafn28</a></div>
          <div><span class="text-green-500">[HackTheBox]</span> <a href="https://app.hackthebox.com/profile/121349" class="text-blue-400 hover:underline" target="_blank">app.hackthebox.com/profile/121349</a></div>
          <div><span class="text-green-500">[TryHackMe]</span> <a href="https://tryhackme.com/p/beafn28" class="text-blue-400 hover:underline" target="_blank">tryhackme.com/p/beafn28</a></div>
          <div><span class="text-green-500">[GitBook]</span> <a href="https://beafn28.gitbook.io" class="text-blue-400 hover:underline" target="_blank">beafn28.gitbook.io</a></div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

async function handleSubmit() {
  const payload = { ...form.value }
  try {
    const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!response.ok) throw new Error()
    alert('Mensaje enviado correctamente.')
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    alert('Error al enviar el mensaje.')
  }
}
</script>

<style scoped>
input, textarea {
  caret-color: #33ff99;
}
a {
  word-break: break-word;
}
</style>