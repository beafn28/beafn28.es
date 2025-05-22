<template>
  <div class="min-h-screen bg-[#0c0f13] text-white font-mono">
    <header class="p-6 text-center border-b border-gray-800">
      <h1 class="text-4xl font-bold text-green-400">beafn28 — Blog Hacker Personal</h1>
      <p class="text-gray-400 text-sm">Hacking ético, OSINT, redes, criptografía, herramientas ofensivas</p>
    </header>
    <nav class="flex justify-center gap-4 p-4 text-sm text-gray-400 border-b border-gray-800">
      <router-link to="/" class="hover:text-green-400 hover:underline transition">Terminal</router-link>
      <router-link to="/proyectos" class="hover:text-green-400 hover:underline transition">Proyectos</router-link>
      <router-link to="/herramientas" class="hover:text-green-400 hover:underline transition">Herramientas</router-link>
      <router-link to="/contacto" class="hover:text-green-400 hover:underline transition">Contacto</router-link>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
    <footer class="text-center text-gray-600 text-xs p-4 border-t border-gray-800">
      © 2025 Beatriz Fresno Naumova — beafn28.es
    </footer>
  </div>
</template>

<script setup>
</script>
