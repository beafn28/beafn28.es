<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <header class="p-6 text-center border-b border-gray-700">
      <h1 class="text-4xl font-bold">beafn28.es</h1>
      <p class="text-gray-400">Apuntes, Writeups, Proyectos y Contacto</p>
    </header>
    <nav class="flex justify-center gap-4 p-4 text-sm text-gray-300">
      <router-link to="/" class="hover:underline">🏠 Inicio</router-link>
      <router-link to="/apuntes" class="hover:underline">🧠 Apuntes</router-link>
      <router-link to="/writeups" class="hover:underline">🔓 Writeups</router-link>
      <router-link to="/proyectos" class="hover:underline">🛠 Proyectos</router-link>
      <router-link to="/articulos" class="hover:underline">📜 Artículos</router-link>
      <router-link to="/contacto" class="hover:underline">🤝 Contacto</router-link>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
    <footer class="text-center text-gray-500 text-sm p-4 border-t border-gray-700">
      © 2025 Beatriz Fresno Naumova
    </footer>
  </div>
</template>

<script setup>
</script>
