
<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Terminal -->
      <div class="bg-[#0f1117] p-6 border border-[#1a1f2b] rounded shadow-lg shadow-green-500/10">
        <div
          v-for="(line, index) in output"
          :key="index"
          class="whitespace-pre-wrap text-sm"
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
            spellcheck="false"
            @keydown.up.prevent="navigateHistory(-1)"
            @keydown.down.prevent="navigateHistory(1)"
            autofocus
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const command = ref('')
const output = ref([
  {
    type: 'sys',
    text: `Comandos disponibles:
- whoami
- listar_proyectos
- herramientas_osint
- apuntes_redes
- apuntes_crypto
- writeups_ctf
- contacto
- limpiar`
  }
])
const history = ref([])
const historyIndex = ref(-1)

const commands = {
  whoami: [
    "Usuario: Beatriz Fresno Naumova",
    "Alias: beafn28",
    "Rol: Hacker ético, desarrolladora fullstack, investigadora OSINT"
  ],
  listar_proyectos: [
    "PentesterSuite: Herramientas ofensivas en dashboard Vue",
    "ASN Visualizer: OSINT de prefijos IP y BGP",
    "DHT Tracker: Red descentralizada en Kademlia"
  ],
  herramientas_osint: [
    "Shodan API",
    "WHOIS XML API",
    "Amass + Subfinder",
    "TheHarvester",
    "ASN graph extractor"
  ],
  apuntes_redes: [
    "OSPF y su intercambio de bases de datos",
    "RIP vs BGP: diferencias clave",
    "Direccionamiento IP y VLSM"
  ],
  apuntes_crypto: [
    "RSA: generación de claves y cifrado",
    "Firmas digitales y autenticación",
    "Criptografía simétrica: AES, ChaCha20"
  ],
  writeups_ctf: [
    "HTB Bastion: explotación de SMB y escalada",
    "THM OSINT 101: imagen, metadatos, redes",
    "Crypto CTF: ataque de factorización clásica vs Shor"
  ],
  contacto: [
    "Email: beafn23@gmail.com",
    "Telegram: @Jugueteando_bot",
    "GitHub: https://github.com/beafn28",
    "LinkedIn: Beatriz Fresno Naumova"
  ],
  limpiar: []
}

function runCommand() {
  const input = command.value.trim()
  if (!input) return

  output.value.push({ type: 'cmd', text: input })
  history.value.push(input)
  historyIndex.value = history.value.length

  if (commands[input]) {
    if (input === 'limpiar') {
      output.value = []
    } else {
      commands[input].forEach(line =>
        output.value.push({ type: 'sys', text: line })
      )
    }
  } else {
    output.value.push({
      type: 'sys',
      text: `Comando no reconocido: '${input}'. Escribe 'help' para ver opciones.`
    })
  }

  command.value = ''
}

function navigateHistory(dir) {
  if (!history.value.length) return

  historyIndex.value += dir
  if (historyIndex.value < 0) historyIndex.value = 0
  if (historyIndex.value >= history.value.length) {
    historyIndex.value = history.value.length - 1
  }

  command.value = history.value[historyIndex.value] || ''
}
</script>

<style scoped>
input {
  caret-color: #33ff99;
}
</style>
