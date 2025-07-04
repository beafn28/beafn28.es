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
  CTF creado para <span class="text-green-400">The Hacker Labs</span> donde deberás enfrentarte a explotación de WordPress, técnicas de esteganografía, automatización con cron jobs y escalada de privilegios en un entorno realista.
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
<!-- Preparar eJPTv2 -->
<template v-else-if="project.title === 'Preparar eJPTv2'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Preparar eJPTv2</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        Recurso de preparación para la <span class="text-green-400">eJPTv2</span> que incluye apuntes detallados sobre los temas del examen
        y un listado de <span class="text-green-400">máquinas prácticas</span> para entrenar
        técnicas específicas como escaneo, explotación, explotación de servicios y más.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://beafn28.gitbook.io/beafn28/preparar-ejptv2/curso-de-mario"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver apuntes
      </a>
      <a href="https://beafn28.gitbook.io/beafn28/preparar-ejptv2/maquinas" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver máquinas
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
        CTF creado para <span class="text-green-400">DockerLabs</span> inspirado en la serie "Pretty Little Liars", donde deberás usar técnicas de <span class="text-green-400">fuerza bruta por SSH</span>, análisis lógico, descifrado simétrico/asimétrico y enumeración web para progresar como si siguieras el rastro del misterioso usuario.
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
        class="min-w-[150px] text-center inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
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
        class="min-w-[150px] text-center inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
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
        class="min-w-[150px] text-center inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver repositorio
      </a>
    </div>
  </div>
</template>
<template v-else-if="project.title === 'Preparar OSCP'">
  <div class="flex flex-col h-full justify-between">
    <div>
      <h3 class="text-xl font-bold text-green-300 mb-2">Preparar OSCP</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 bg-green-700/20 text-green-400 border border-green-400 text-xs rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm text-white mb-4">
        Recursos clave, consejos, máquinas y estrategias para afrontar la certificación <span class="text-green-400">OSCP</span>. Accede a apuntes, listado de máquinas preparatorias y guías técnicas elaboradas desde la experiencia personal.
      </p>
    </div>
    <div class="flex gap-3 flex-wrap mt-auto pt-4">
      <a href="https://legend-penguin-a5d.notion.site/Recursos-OSCP-1b1faf5bfa5c8030adb2eb2c7564dc09" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver recursos
      </a>
      <a href="https://www.notion.so/Gu-a-de-m-quinas-OSCP-1b1faf5bfa5c80d099e5ca04247f465a" target="_blank"
        class="text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
        Ver máquinas
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
                          class="min-w-[150px] text-center inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded transition font-bold">
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
        <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const route = useRoute()

const activeCategory = ref('Todos')
const categories = ['Todos', 'CTF', 'Herramienta', 'Apuntes', 'Cuántica']

// Reacciona al tag en la URL (por ejemplo: /proyectos?tag=CTF)
watch(
  () => route.query.tag,
  (newTag) => {
    if (newTag && categories.includes(newTag)) {
      activeCategory.value = newTag
    } else {
      activeCategory.value = 'Todos'
    }
  },
  { immediate: true }
)

const projects = [
  { title: 'StegaToolkit', link: 'https://github.com/beafn28/StegaToolkit', tags: ['Herramienta'], description: '' },
  { title: 'CTF-Facultad', link: 'https://github.com/beafn28/CTF-Facultad', tags: ['CTF'], description: '' },
  {
  title: 'Preparar OSCP',
  tags: ['Apuntes'],
  link: 'https://www.notion.so/Preparaci-n-para-la-OSCP-e647672e82174eb7b5621b9fcc49ce9c',
  description: 'Recopilación estructurada para preparar la certificación OSCP: incluye apuntes, recursos y una guía práctica de máquinas organizadas por técnica.'
},
  { title: 'CTF-Elevator', link: 'https://github.com/beafn28/CTF-Elevator', tags: ['CTF'], description: 'CTF de escalada de privilegios y evasión en Linux.' },
    {
  title: 'Preparar eJPTv2',
  tags: ['Apuntes'],
  link: 'https://beafn28.gitbook.io/beafn28/preparar-ejptv2/curso-de-mario'
},
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
