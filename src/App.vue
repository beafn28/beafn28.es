<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <header class="p-6 text-center border-b border-gray-700">
      <h1 class="text-4xl font-bold">beafn28.es</h1>
      <p class="text-gray-400">Apuntes, Writeups, Proyectos y Contacto</p>
    </header>

    <nav class="flex justify-center gap-4 p-4 text-sm text-gray-300">
      <a href="#apuntes" class="hover:underline">Apuntes</a>
      <a href="#writeups" class="hover:underline">Writeups</a>
      <a href="#proyectos" class="hover:underline">Proyectos</a>
      <a href="#articulos" class="hover:underline">Artículos</a>
      <a href="#contacto" class="hover:underline">Contacto</a>
    </nav>

    <section id="proyectos" class="p-6">
      <h2 class="text-2xl mb-4 border-b border-gray-700 pb-2">🛠 Proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h3 class="text-xl font-semibold">Pentester Suite</h3>
          <p class="text-gray-400 text-sm mb-2">
            Dashboard ofensivo con JWT, Fuzzing, Subdomain Scan, etc.
          </p>
          <div class="flex gap-2">
            <a href="https://github.com/beafn28/PentesterSuite" class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm">Ver Código</a>
            <a href="#" class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white text-sm">Ver App</a>
          </div>
        </div>
      </div>
    </section>

    <section id="apuntes" class="p-6">
      <h2 class="text-2xl mb-4 border-b border-gray-700 pb-2">Apuntes</h2>
      <p class="text-gray-400">Próximamente: apuntes sobre redes, seguridad, cifrado...</p>
    </section>

    <section id="writeups" class="p-6">
      <h2 class="text-2xl mb-4 border-b border-gray-700 pb-2">Writeups</h2>
      <p class="text-gray-400">Próximamente: resoluciones de retos de CTF, HTB, THM...</p>
    </section>

    <section id="articulos" class="p-6">
      <h2 class="text-2xl mb-4 border-b border-gray-700 pb-2">Artículos</h2>
      <p class="text-gray-400">Próximamente: artículos técnicos y publicaciones.</p>
    </section>

    <section id="contacto" class="p-6">
      <h2 class="text-2xl mb-4 border-b border-gray-700 pb-2">Contacto</h2>
      <ul class="text-gray-400 space-y-1">
        <li><a href="https://t.me/Jugueteando_bot" class="hover:underline">Telegram</a></li>
        <li><a href="mailto:beafn23@gmail.com" class="hover:underline">Email: beafn23@gmail.com</a></li>
        <li><a href="https://github.com/beafn28" class="hover:underline">GitHub: beafn28</a></li>
        <li><a href="https://www.linkedin.com/in/beatriz-fresno-naumova-3797b931b" class="hover:underline">LinkedIn</a></li>
        <li><a href="https://beafn28.gitbook.io/beafn28/" class="hover:underline">GitBook</a></li>
      </ul>
    </section>

    <footer class="text-center text-gray-500 text-sm p-4 border-t border-gray-700">
      © 2025 Beatriz Fresno Naumova
    </footer>
  </div>
</template>

<script setup>
</script>
