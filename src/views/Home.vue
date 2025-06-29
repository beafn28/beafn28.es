<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-4">
    <div class="max-w-4xl mx-auto">
      <div ref="terminalBox" class="bg-[#0f1117] p-6 border border-[#1a1f2b] rounded shadow-lg shadow-green-500/10 overflow-auto max-h-[80vh]">
        <div v-for="(line, index) in output" :key="index" class="whitespace-pre-wrap text-sm leading-relaxed">
          <template v-if="line.type === 'cmd'">
            <span class="text-green-500">beafn28@web:<span class="text-blue-400">{{ currentPath }}</span>$</span>
            <span class="ml-2 text-green-200">{{ line.text }}</span>
          </template>
          <template v-else>
            <span class="ml-6 text-blue-300">{{ line.text }}</span>
          </template>
        </div>

        <form @submit.prevent="runCommand" class="mt-4 flex items-center">
          <span class="text-green-500 mr-2">beafn28@web:<span class="text-blue-400">{{ currentPath }}</span>$</span>
          <input
  v-model="command"
  class="bg-transparent outline-none flex-1 text-green-200"
  autocomplete="off"
  autocapitalize="off"
  spellcheck="false"
  @keydown.up.prevent="navigateHistory(-1)"
  @keydown.down.prevent="navigateHistory(1)"
  @keydown.ctrl.l.prevent="clearScreen"
  @keydown.tab.prevent="handleTab"
  autofocus
/>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
const rootDirs = ['apuntes', 'writeups', 'articulos', 'proyectos', 'sobremi', 'contacto']
const router = useRouter()
const command = ref('')
const output = ref([
  {
    type: 'sys',
    text:
`
TERMINAL INTERACTIVA DE BEAFN28 (•◡•)
Fecha: ${new Date().toLocaleDateString('es-ES')}   Hora: ${new Date().toLocaleTimeString('es-ES')}

Bienvenid@, hacker. Has accedido al núcleo técnico de esta web.
Explora, estudia y accede a conocimiento desde una terminal personalizada.

COMANDOS DISPONIBLES

  cd [directorio]     → Entra en una sección: apuntes, writeups, proyectos, etc.
  cd ..               → Retrocede al directorio anterior
  ls                  → Lista los elementos del directorio actual

  cat [archivo]       → Muestra contenido o redirige a secciones detalladas
  cat [categoría]     → Filtra contenido (por plataforma, tag o categoría)

  help                → Muestra este panel de ayuda
  limpiar / Ctrl+L    → Limpia la terminal

INICIA TU BUSQUEDA

"El verdadero hacker no destruye sistemas... los comprende para mejorarlos."
    — Eric S. Raymond
`
  }
])
const history = ref([])
const historyIndex = ref(-1)
const terminalBox = ref(null)
const currentPath = ref('/')


const sobremiContent = {
  ciberseguridad: "Apasionada por la ciberseguridad, con foco en pentesting y análisis de vulnerabilidades.",
  "tech-stack": "Vue, TailwindCSS, Node.js, Python, Docker, GitHub Actions, etc.",
  certificaciones: "Preparando OSCP, completado HTB Starting Point, THM Jr Penetration Tester"
}
const proyectosCategorias = ['CTF', 'Herramienta', 'Apuntes', 'Cuántica']
const articles = [
  { slug: 'hacktivismo-italia-2025', title: 'La nueva ofensiva hacktivista de 2025: ataque de NoName057(16) a infraestructuras italianas' }
]
const writeupsPlatforms = [
  "TryHackMe", "DockerLabs", "HackTheBox", "PortSwigger", "Vulnhub",
  "The Hacker Labs", "Vulnyx", "Proving Ground Play", "OverTheWire"
]
const categories = [
  "Pentesting", "Red", "Footprinting", "InfoWeb", "Vulnerabilidades",
  "Nessus", "OpenVAS", "Reporting", "TransferFiles", "Shells",
  "Metasploit", "Passwords", "WebSecurity", "Active Directory"
]
const commands = {
  help: () => [
    "Comandos disponibles:",
    "- cd [dir]",
    "- ls",
    "- cat [archivo]",
    "- home, apuntes, writeups, articulos, proyectos, sobremi, contacto",
    "- limpiar"
  ],
  limpiar: () => {
    output.value = []
    return []
  },
  ls: () => {
    if (currentPath.value === '/') {
      return [
        "Directorio actual: /",
        "- writeups",
        "- articulos",
        "- apuntes",
        "- proyectos",
        "- sobremi",
        "- contacto"
      ]
    }
    if (currentPath.value === '/apuntes') {
      return ["Categorías disponibles:", ...categories.map(c => `- ${c}`)]
    }
    if (currentPath.value === '/writeups') {
      return [
        "Plataformas disponibles:",
        "- HackTheBox",
        "- TryHackMe",
        "- PortSwigger",
        "- Vulnhub",
        "- DockerLabs",
        "- TheHackerLabs",
        "- Vulnyx",
        "- OverTheWire",
        "- ProvingGround"
      ]
    }
    if (currentPath.value === '/articulos') {
  return [
    "Artículos disponibles:",
    ...articles.map(article => `- ${article.title}`)
  ]
}
    if (currentPath.value === '/proyectos') {
    return ["Categorías disponibles:", ...proyectosCategorias.map(c => `- ${c}`)]
  }
    if (currentPath.value === '/sobremi') {
  return [
    "Contenido disponible:",
    "- ciberseguridad",
    "- tech-stack",
    "- certificaciones"
  ]
}
if (currentPath.value === '/contacto') {
    return ["Contenido disponible:", "- formulario_contacto.txt", "- redes_contacto.txt"]
  }
    return ["No hay contenido en este directorio"]
  },
  home: () => redirect('/'),
  apuntes: () => redirect('/apuntes'),
  writeups: () => redirect('/writeups'),
  articulos: () => redirect('/articulos'),
  proyectos: () => redirect('/proyectos'),
  sobremi: () => redirect('/sobremi'),
  contacto: () => redirect('/contacto')
}

function runCommand() {
  const input = command.value.trim()
  if (!input) return

  const normalized = input.toLowerCase()
  output.value.push({ type: 'cmd', text: input })
  history.value.push(input)
  historyIndex.value = history.value.length

  const rootDirs = ['apuntes', 'writeups', 'articulos', 'proyectos', 'sobremi', 'contacto']
  const apuntesCategorias = [
    "Pentesting", "Red", "Footprinting", "InfoWeb", "Vulnerabilidades",
    "Nessus", "OpenVAS", "Reporting", "TransferFiles", "Shells",
    "Metasploit", "Passwords", "WebSecurity","Active Directory"
  ]

  // === CD ===
  if (normalized.startsWith('cd ')) {
    const dir = input.slice(3).trim()

    if (dir === '..') {
      currentPath.value = '/'
      output.value.push({ type: 'sys', text: 'Volviendo a /' })
    } else if (currentPath.value === '/' && rootDirs.includes(dir)) {
      currentPath.value = `/${dir}`
      output.value.push({ type: 'sys', text: `Entrando a /${dir}...` })
    } else if (currentPath.value === '/apuntes' && apuntesCategorias.includes(dir)) {
      router.push({ path: '/apuntes', query: { tag: dir } })
      output.value.push({ type: 'sys', text: `Redirigiendo a /apuntes?tag=${dir}` })
    } else {
      output.value.push({ type: 'sys', text: `Directorio no encontrado: '${dir}'` })
    }

  // === CAT ===
  } else if (normalized.startsWith('cat ')) {
    const file = input.slice(4).trim().toLowerCase()

    // SOBRE MI
    if (currentPath.value === '/sobremi') {
      const validFiles = {
        'ciberseguridad': '#ciberseguridad',
        'tech-stack': '#tech-stack',
        'certificaciones': '#certificaciones'
      }
      if (validFiles[file]) {
        router.push({ path: '/sobremi', hash: validFiles[file] })
        output.value.push({ type: 'sys', text: `Mostrando sección: ${file}` })
      } else {
        output.value.push({ type: 'sys', text: `Archivo no encontrado: '${file}'` })
      }

    // PROYECTOS
    } else if (currentPath.value === '/proyectos') {
      const categorias = ['CTF', 'Herramienta', 'Apuntes', 'Cuántica']
      const match = categorias.find(p => p.toLowerCase() === file)
      if (file === 'todos') {
        router.push({ path: '/proyectos' })
        output.value.push({ type: 'sys', text: 'Mostrando todos los proyectos' })
      } else if (match) {
        router.push({ path: '/proyectos', query: { tag: match } })
        output.value.push({ type: 'sys', text: `Mostrando proyectos de tipo: ${match}` })
      } else {
        output.value.push({ type: 'sys', text: `Categoría no encontrada: '${file}'` })
      }

    // ARTÍCULOS
    } else if (currentPath.value === '/articulos') {
      const found = articles.find(
        a => a.title.toLowerCase() === file || a.slug === file
      )
      if (found) {
        router.push(`/articulos/${found.slug}`)
        output.value.push({ type: 'sys', text: `Mostrando artículo: ${found.title}` })
      } else {
        output.value.push({ type: 'sys', text: `'cat ${file}' no está disponible en este directorio` })
      }

    // WRITEUPS
    } else if (currentPath.value === '/writeups') {
      const platform = writeupsPlatforms.find(p =>
        p.toLowerCase().replaceAll(' ', '') === file.replaceAll(' ', '').toLowerCase()
      )
      if (platform) {
        router.push({ path: '/writeups', query: { platform } })
        output.value.push({ type: 'sys', text: `Mostrando writeups de plataforma: ${platform}` })
      } else {
        output.value.push({ type: 'sys', text: `Plataforma no encontrada: '${file}'` })
      }

    // APUNTES
    } else if (currentPath.value === '/apuntes') {
      const tag = categories.find(c => c.toLowerCase() === file)
      if (tag) {
        router.push({ path: '/apuntes', query: { tag } })
        output.value.push({ type: 'sys', text: `Redirigiendo a /apuntes?tag=${tag}` })
      } else {
        output.value.push({ type: 'sys', text: `Categoría no encontrada: '${file}'` })
      }

    // CONTACTO
    } else if (currentPath.value === '/contacto') {
      if (file === 'redes_contacto.txt') {
        output.value.push(
          { type: 'sys', text: "[Email] beafn23@gmail.com" },
          { type: 'sys', text: "[LinkedIn] linkedin.com/in/beatriz-fresno-naumova" },
          { type: 'sys', text: "[GitHub] github.com/beafn28" },
          { type: 'sys', text: "[HackTheBox] app.hackthebox.com/profile/121349" },
          { type: 'sys', text: "[TryHackMe] tryhackme.com/p/beafn28" },
          { type: 'sys', text: "[GitBook] beafn28.gitbook.io" }
        )
      } else if (file === 'formulario_contacto.txt') {
        router.push('/contacto')
        output.value.push(
          { type: 'sys', text: "Redirigiendo a /contacto..." },
          { type: 'sys', text: "Campos del formulario:" },
          { type: 'sys', text: "- Nombre" },
          { type: 'sys', text: "- Email" },
          { type: 'sys', text: "- Mensaje" },
          { type: 'sys', text: "Usa ./enviar_mensaje.sh para enviar." }
        )
      } else {
        output.value.push({ type: 'sys', text: `Archivo no encontrado: '${file}'` })
      }

    } else {
      output.value.push({ type: 'sys', text: `'cat ${file}' no está disponible en este directorio` })
    }

  // OTROS COMANDOS
  } else {
    const action = commands[normalized]
    if (action) {
      const result = action()
      result.forEach(line => output.value.push({ type: 'sys', text: line }))
    } else {
      output.value.push({ type: 'sys', text: `Comando no reconocido: '${input}'` })
    }
  }

  // LIMPIEZA
  command.value = ''
  nextTick(() => {
    if (terminalBox.value) {
      terminalBox.value.scrollTop = terminalBox.value.scrollHeight
    }
  })
}

function redirect(path) {
  router.push(path)
  return [`Redirigiendo a ${path}...`]
}

function navigateHistory(dir) {
  if (!history.value.length) return
  historyIndex.value += dir
  if (historyIndex.value < 0) historyIndex.value = 0
  if (historyIndex.value >= history.value.length) historyIndex.value = history.value.length - 1
  command.value = history.value[historyIndex.value] || ''
}

function clearScreen() {
  output.value = []
}
function handleTab(event) {
  event.preventDefault()
  const inputVal = command.value.trim()
  const [cmd, ...args] = inputVal.split(' ')
  const partial = args.join(' ').toLowerCase()

  // Rutas y archivos disponibles según el contexto
  const contextMap = {
    '/': {
      cd: rootDirs,
    },
    '/apuntes': {
      cd: categories,
      cat: categories,
    },
    '/writeups': {
      cat: writeupsPlatforms,
    },
    '/proyectos': {
      cd: proyectosCategorias,
      cat: proyectosCategorias,
    },
    '/sobremi': {
      cat: ['ciberseguridad', 'tech-stack', 'certificaciones'],
    },
    '/contacto': {
      cat: ['redes_contacto.txt', 'formulario_contacto.txt'],
    },
    '/articulos': {
      cat: articles.map(a => a.slug),
    }
  }

  const globalCommands = ['cd', 'ls', 'cat', 'help', 'limpiar', ...Object.keys(commands)]

  const suggestMatch = (options) => {
    const matches = options.filter(opt =>
      opt.toLowerCase().startsWith(partial)
    )

    if (matches.length === 1) {
      command.value = `${cmd} ${matches[0]}`
    } else if (matches.length > 1) {
      output.value.push({
        type: 'sys',
        text: `Opciones: ${matches.join('   ')}`
      })
    }
  }

  // Permitir autocompletar rutas desde cualquier sitio si cmd === 'cd'
  if (cmd === 'cd') {
    suggestMatch(rootDirs)
    return
  }

  // Buscar dentro del contexto actual
  const currentContext = contextMap[currentPath.value] || {}
  if (['cd', 'cat'].includes(cmd) && currentContext[cmd]) {
    suggestMatch(currentContext[cmd])
  } else {
    suggestMatch(globalCommands)
  }
}
</script>

<style scoped>
input {
  caret-color: #33ff99;
}

</style>
