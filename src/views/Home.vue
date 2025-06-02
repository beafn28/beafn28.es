<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-4">
    <div class="max-w-4xl mx-auto">
      <div ref="terminalBox" class="bg-[#0f1117] p-6 border border-[#1a1f2b] rounded shadow-lg shadow-green-500/10 overflow-auto max-h-[80vh]">
        <div
          v-for="(line, index) in output"
          :key="index"
          class="whitespace-pre-wrap text-sm leading-relaxed"
        >
          <template v-if="line.type === 'cmd'">
            <span class="text-green-500">beafn28@web:~$</span>
            <span class="ml-2 text-green-200">{{ line.text }}</span>
          </template>
          <template v-else>
            <span class="ml-6 text-blue-300">{{ line.text }}</span>
          </template>
        </div>

        <form @submit.prevent="runCommand" class="mt-4 flex items-center">
          <span class="text-green-500 mr-2">beafn28@web:~$</span>
          <input
            v-model="command"
            class="bg-transparent outline-none flex-1 text-green-200"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            @keydown.up.prevent="navigateHistory(-1)"
            @keydown.down.prevent="navigateHistory(1)"
            @keydown.ctrl.l.prevent="clearScreen"
            autofocus
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const command = ref('')
const output = ref([
  {
    type: 'sys',
    text:
      "Bienvenid@ a la terminal interactiva de beafn28.\n" +
      "Escribe 'help' para ver los comandos disponibles."
  }
])
const history = ref([])
const historyIndex = ref(-1)
const terminalBox = ref(null)
const currentPath = ref('/')

const categories = [
  "Red", "Footprinting", "InfoWeb", "Vulnerabilidades", "Nessus",
  "OpenVAS", "Reporting", "TransferFiles", "Shells", "Metasploit",
  "Passwords", "WebSecurity"
]

const commands = {
  help: () => [
    "Comandos disponibles:",
    "- home",
    "- apuntes",
    "- writeups",
    "- articulos",
    "- proyectos",
    "- sobremi",
    "- contacto",
    "- whoami",
    "- limpiar",
    "- cd [directorio]",
    "- ls"
  ],
  home: () => redirect('/'),
  apuntes: () => redirect('/apuntes'),
  writeups: () => redirect('/writeups'),
  articulos: () => redirect('/articulos'),
  proyectos: () => redirect('/proyectos'),
  sobremi: () => redirect('/sobremi'),
  contacto: () => redirect('/contacto'),
  whoami: () => [
    "Usuario: Beatriz Fresno Naumova",
    "Alias: beafn28",
    "Rol: Estudiante de Ingeniería Informática especializada en Hacking Ético",
    "Perfil: Pentester, desarrolladora, investigadora OSINT",
    "Email: beafn23@gmail.com"
  ],
  limpiar: () => {
    output.value = []
    return []
  },
  ls: () => {
    if (currentPath.value === '/') {
      return ["Directorio actual: /", "- apuntes"]
    }
    if (currentPath.value === '/apuntes') {
      return ["Categorias disponibles:", ...categories.map(c => `- ${c}`)]
    }
    return ["No hay contenido en este directorio"]
  }
}

function redirect(path) {
  router.push(path)
  return [`Redirigiendo a ${path}...`]
}

function runCommand() {
  const input = command.value.trim()
  if (!input) return

  const normalized = input.toLowerCase()
  output.value.push({ type: 'cmd', text: input })
  history.value.push(input)
  historyIndex.value = history.value.length

  if (normalized.startsWith('cd ')) {
    const dir = input.slice(3).trim()
    if (currentPath.value === '/' && dir === 'apuntes') {
      currentPath.value = '/apuntes'
      output.value.push({ type: 'sys', text: `Entrando a /apuntes...` })
    } else if (currentPath.value === '/apuntes' && categories.includes(dir)) {
      router.push({ path: '/apuntes', query: { tag: dir } })
      output.value.push({ type: 'sys', text: `Redirigiendo a apuntes/${dir}...` })
    } else {
      output.value.push({ type: 'sys', text: `Directorio no encontrado: '${dir}'` })
    }
  } else {
    const action = commands[normalized]
    if (action) {
      const result = action()
      result.forEach(line => output.value.push({ type: 'sys', text: line }))
    } else {
      output.value.push({ type: 'sys', text: `Comando no reconocido: '${input}'. Escribe 'help' para ver opciones.` })
    }
  }

  command.value = ''
  nextTick(() => {
    if (terminalBox.value) {
      terminalBox.value.scrollTop = terminalBox.value.scrollHeight
    }
  })
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
</script>

<style scoped>
input {
  caret-color: #33ff99;
}
</style>