<template>
  <div class="min-h-screen bg-[#0c0f13] text-white font-mono">
    <!-- Header -->
    <header class="p-6 text-center border-b border-gray-800 shadow-md shadow-green-500/10">
      <h1 class="text-4xl font-bold text-green-400 tracking-wide">beafn28 — Blog Hacker Personal</h1>
    </header>

    <!-- Navbar -->
    <nav class="flex flex-wrap justify-center gap-6 p-4 text-sm text-gray-400 border-b border-gray-800 bg-[#0f1117]">
      <router-link to="/" class="hover:text-green-400 hover:underline transition">Terminal</router-link>
      <router-link to="/writeups" class="hover:text-green-400 hover:underline transition">Writeups</router-link>
      <router-link to="/articulos" class="hover:text-green-400 hover:underline transition">Artículos</router-link>
      <router-link to="/apuntes" class="hover:text-green-400 hover:underline transition">Apuntes</router-link>
      <router-link to="/proyectos" class="hover:text-green-400 hover:underline transition">Proyectos</router-link>
      <router-link to="/sobremi" class="hover:text-green-400 hover:underline transition">Sobre mí</router-link>
      <router-link to="/contacto" class="hover:text-green-400 hover:underline transition">Contacto</router-link>
    </nav>

    <!-- Main Content -->
    <main class="p-6 max-w-6xl mx-auto">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="text-center text-gray-600 text-xs p-4 border-t border-gray-800">
      © 2025 Beatriz Fresno Naumova — <a href="https://beafn28.es" class="hover:underline hover:text-green-400">beafn28.es</a>
    </footer>
  </div>
</template>

<script setup>
</script>
