<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-2">Proyectos</h2>
      <hr class="border-green-700 mb-6" />

      <!-- Filtros -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[ 'px-4 py-1 rounded-full border text-sm transition',
                    activeCategory === cat
                      ? 'bg-green-500 text-black border-green-400'
                      : 'border-green-500 text-white hover:bg-green-600 hover:text-black' ]">
          {{ cat }}
        </button>
      </div>

      <!-- Tarjetas -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="bg-[#11141c] border border-green-700 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between"
        >
          <!-- StegaToolkit -->
          <template v-if="project.title === 'StegaToolkit'">
            <div class="flex flex-col h-full justify-between">
              <div>
                <h3 class="text-xl font-bold text-green-300 mb-2">StegaToolkit</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
                    {{ tag }}
                  </span>
                </div>
                <p class="text-sm text-white mb-4">
                  Aplicación web de <span class="text-green-400">análisis forense y esteganografía</span> para ocultar y extraer mensajes en imágenes, realizar OCR, inspeccionar metadatos EXIF, análisis ELA y visualización RGB.
                </p>
              </div>
              <div class="mt-auto pt-4">
                <a href="https://github.com/beafn28/StegaToolkit" target="_blank"
                  class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
                  Ver repositorio
                </a>
              </div>
            </div>
          </template>

          <!-- CTF-Facultad -->
          <template v-else-if="project.title === 'CTF-Facultad'">
            <div class="flex flex-col h-full justify-between">
              <div>
                <h3 class="text-xl font-bold text-green-300 mb-2">Facultad</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
                    {{ tag }}
                  </span>
                </div>
                <p class="text-sm text-white mb-4">
                  CTF creado para <span class="text-green-400">The Hacker Labs</span> que pone a prueba tus habilidades con WordPress, esteganografía, cron jobs y escalada de privilegios.
                </p>
              </div>
              <div class="flex gap-3 flex-wrap mt-auto pt-4">
                <a href="https://thehackerslabs.com/facultad/" target="_blank"
                  class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
                  Ver CTF
                </a>
                <a href="https://beafn28.gitbook.io/beafn28/mis-ctfs/facultad" target="_blank"
                  class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
                  Ver writeup
                </a>
              </div>
            </div>
          </template>
          <!-- CTF-Elevator -->
<template v-else-if="project.title === 'CTF-Elevator'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Elevator</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        CTF diseñado para <span class="text-green-400">DockerLabs</span> que simula una máquina Linux vulnerable con múltiples binarios configurados incorrectamente en sudoers.
        Perfecto para practicar <span class="text-green-400">escalada de privilegios</span>, técnicas de bypass con lenguajes como Ruby, Lua, GCC o Ash, e inserción de shell maliciosa mediante imágenes.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://dockerlabs.es/" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver CTF
      </a>
      <a href="https://beafn28.gitbook.io/beafn28/mis-ctfs/elevator" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver writeup
      </a>
    </div>
  </div>
</template>
<!-- CTF-Pequeñas-Mentirosas -->
<template v-else-if="project.title === 'CTF-Pequeñas-Mentirosas'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Pequeñas Mentirosas</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        CTF creado para <span class="text-green-400">DockerLabs</span> inspirado en la serie "Pretty Little Liars", donde deberás usar técnicas de <span class="text-green-400">fuerza bruta por SSH</span>, análisis lógico, descifrado simétrico/asimétrico y enumeración web para progresar como si siguieras el rastro del misterioso usuario <code class="text-green-500">A</code>.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://dockerlabs.es/" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver CTF
      </a>
      <a href="https://beafn28.gitbook.io/beafn28/mis-ctfs/pequenas-mentirosas" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver writeup
      </a>
    </div>
  </div>
</template>
<!-- CTF-CryptoLabyrinth -->
<template v-else-if="project.title === 'CTF-CryptoLabyrinth'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">CryptoLabyrinth</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        CTF diseñado para <span class="text-green-400">The Hacker Labs</span> donde deberás navegar un laberinto de cifrados, hashes, combinaciones de contraseñas y <span class="text-green-400">escalada de privilegios con técnicas criptográficas</span> y fuerza bruta. Ideal para quien disfrute de retos basados en lógica y seguridad ofensiva.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://thehackerslabs.com/cryptolabyrinth" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver CTF
      </a>
      <a href="https://beafn28.gitbook.io/beafn28/mis-ctfs/cryptolabyrinth" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver writeup
      </a>
    </div>
  </div>
</template>
<!-- GitBook -->
<template v-else-if="project.title === 'GitBook'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">GitBook</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        En este espacio comparto <span class="text-green-400">writeups y apuntes de ciberseguridad</span> elaborados desde mi experiencia personal. Mi objetivo es documentar técnicas, metodologías y herramientas útiles para pentesters, entusiastas y estudiantes de hacking, promoviendo el <span class="text-green-400">aprendizaje colaborativo</span> y la mejora continua en la comunidad.
      </p>
    </div>
                      <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://github.com/beafn28/GitBook" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
      <a href="https://beafn28.gitbook.io/beafn28" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver Gitbook
      </a>
    </div>
  </div>
</template>
<!-- Cheatsheet-Hacking -->
<template v-else-if="project.title === 'Cheatsheet-Hacking'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Cheatsheet Hacking</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        Recopilación práctica de <span class="text-green-400">comandos, técnicas y procedimientos</span> esenciales para pruebas de penetración y análisis de seguridad. Incluye desde comandos básicos y escaneo de servicios hasta explotación, post-explotación y uso de herramientas como Wireshark, Hydra y más.
      </p>
    </div>
    <div class="mt-auto pt-4">
      <a href="https://github.com/beafn28/Cheatsheet-Hacking" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
    </div>
  </div>
</template>
<!-- VulnSpy -->
<template v-else-if="project.title === 'VulnSpy'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">VulnSpy</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        Script en Bash para <span class="text-green-400">detectar vulnerabilidades en servicios expuestos</span>. Escanea puertos con nmap, identifica servicios activos y consulta searchsploit para posibles exploits relacionados.
        Diseñado para facilitar el reconocimiento inicial en auditorías de seguridad.
      </p>
    </div>
    <div class="mt-auto pt-4">
      <a href="https://github.com/beafn28/VulnSpy" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
    </div>
  </div>
</template>
<!-- Computación Cuántica -->
<template v-else-if="project.title === 'Computacion Cuantica'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Computación Cuántica</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        En este repositorio comparto mis <span class="text-green-400">apuntes en LaTeX sobre computación cuántica</span>. Desde fundamentos como qubits y puertas lógicas hasta algoritmos como Grover o Bernstein-Vazirani. Ideal para quienes comienzan en este universo tan fascinante como confuso.
      </p>
    </div>
    <div class="mt-auto pt-4">
      <a href="https://github.com/beafn28/Computacion-Cuantica" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
    </div>
  </div>
</template>
<!-- CripTool -->
<template v-else-if="project.title === 'CripTool'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">CripTool</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        Herramienta de <span class="text-green-400">criptografía y cracking</span> para CTFs desarrollada en Bash. Incluye codificación Base64, ROT13, cifrados XOR, César, Vigenère y ataques de fuerza bruta sobre hashes y RSA, todo gestionado desde un <span class="text-green-400">menú interactivo</span>.
      </p>
    </div>
    <div class="mt-auto pt-4">
      <a href="https://github.com/beafn28/CripTool" target="_blank"
                          class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
    </div>
  </div>
</template>
          <!-- Otros proyectos -->
          <template v-else>
            <div class="flex flex-col h-full justify-between">
              <div>
                <h3 class="text-xl font-semibold text-green-300 mb-2">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
                    {{ tag }}
                  </span>
                </div>
                <p class="text-white text-sm mb-3">{{ project.description }}</p>
              </div>
              <div class="mt-auto pt-4">
                <a :href="project.link" target="_blank"
                  class="inline-block text-sm bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-1 rounded">
                  Ver proyecto
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Todos')
const categories = ['Todos', 'CTF', 'Herramienta', 'Apuntes', 'Cuántica']

const projects = [
  { title: 'StegaToolkit', link: 'https://github.com/beafn28/StegaToolkit', tags: ['Herramienta', 'OSINT'], description: '' },
  { title: 'CTF-Facultad', link: 'https://github.com/beafn28/CTF-Facultad', tags: ['CTF'], description: '' },
  { title: 'CTF-Elevator', link: 'https://github.com/beafn28/CTF-Elevator', tags: ['CTF'], description: 'CTF de escalada de privilegios y evasión en Linux.' },
  { title: 'CTF-Pequeñas-Mentirosas', link: 'https://github.com/beafn28/CTF-Pequenas-Mentirosas', tags: ['CTF'], description: 'CTF temático basado en lógica y cifrados sencillos.' },
  { title: 'CTF-CryptoLabyrinth', link: 'https://github.com/beafn28/CTF-CryptoLabyrinth', tags: ['CTF'], description: 'CTF enfocado en técnicas criptográficas y desafíos lógicos.' },
  { title: 'GitBook', link: 'https://github.com/beafn28/GitBook', tags: ['Apuntes'], description: 'Repositorio de apuntes en GitBook sobre ciberseguridad y herramientas útiles.' },
  { title: 'Cheatsheet-Hacking', link: 'https://github.com/beafn28/Cheatsheet-Hacking', tags: ['Apuntes'], description: 'Resumen práctico con comandos y herramientas de pentesting.' },
  { title: 'VulnSpy', link: 'https://github.com/beafn28/VulnSpy', tags: ['Herramienta'], description: 'Script para analizar vulnerabilidades comunes en servicios expuestos.' },
  { title: 'Computacion Cuantica', link: 'https://github.com/beafn28/Computacion-Cuantica', tags: ['Cuántica'], description: 'Ejercicios, recursos y experimentos relacionados con la computación cuántica.' },
  { title: 'CripTool', link: 'https://github.com/beafn28/CripTool', tags: ['Herramienta'], description: 'Herramienta básica para cifrado y descifrado con algoritmos clásicos.' },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') return projects
  return projects.filter(p => p.tags.includes(activeCategory.value))
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
