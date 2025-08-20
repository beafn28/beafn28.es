<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Apuntes</h2>
      <hr class="border-green-700 mb-6" />

      <!-- Buscador -->
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar..."
          class="w-full px-4 py-2 rounded border border-green-500 bg-[#0c0f13] text-white placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <!-- Filtros -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[ 'px-4 py-1 rounded-full border text-sm transition',
                    activeCategory === cat
                      ? 'bg-green-500 text-black border-green-400'
                      : 'border-green-500 text-white hover:bg-green-600 hover:text-black' ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Sección: Fundamentos de Pentesting -->
      <div v-if="showPentestingSection" class="mb-12">
        <h3 class="text-2xl font-bold text-green-300 mb-4">Fundamentos de Pentesting</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Tarjeta principal -->
          <div class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition">
            <h4 class="text-lg font-bold text-green-300 mb-2">Introducción a Pentesting</h4>
            <p class="text-sm text-white mb-3">
              Conceptos clave para iniciar en el pentesting, reconocimiento y técnicas.
            </p>
            <a
              href="https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics"
              target="_blank"
              class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
            >
              Ver apuntes
            </a>
          </div>

          <!-- Subapartados -->
          <div
            v-for="note in pentestingNotes"
            :key="note.title"
            class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
            <p class="text-sm text-white mb-3">{{ note.description }}</p>
            <a
              :href="note.link"
              target="_blank"
              class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
            >
              Ver apuntes
            </a>
          </div>
        </div>
      </div>

      <!-- Sección: Enumeración con Nmap -->
      <div v-if="showNmapSection" class="mb-12">
        <h3 class="text-2xl font-bold text-green-300 mb-4">Enumeración de Red con Nmap</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Tarjeta principal -->
          <div class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition">
            <h4 class="text-lg font-bold text-green-300 mb-2">Introducción a Nmap</h4>
            <p class="text-sm text-white mb-3">
              Uso de Nmap para descubrir hosts, escanear puertos y enumerar servicios en una red.
            </p>
            <a
              href="https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap"
              target="_blank"
              class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
            >
              Ver apuntes
            </a>
          </div>

          <!-- Subapartados Nmap -->
          <div
            v-for="note in nmapNotes"
            :key="note.title"
            class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
            <p class="text-sm text-white mb-3">{{ note.description }}</p>
            <a
              :href="note.link"
              target="_blank"
              class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
            >
              Ver apuntes
            </a>
          </div>
        </div>
      </div>
        <!-- Sección: Footprinting -->
<div v-if="showFootprintingSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Footprinting</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in footprintingNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Recolección de Información Web -->
<div v-if="showInfoGatheringSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Recolección de Información - Web Edition</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div v-for="note in infoNotes" :key="note.title" class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition">
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Evaluación de Vulnerabilidades -->

<div v-if="showVulnerabilitySection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Evaluación de Vulnerabilidades</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in vulnerabilityNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Nessus -->
<div v-if="showNessusSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Escaneo de Vulnerabilidades con Nessus</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in nessusNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: OpenVAS -->
<div v-if="showOpenVASSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Escaneo de Vulnerabilidades con OpenVAS</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in openvasNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Reporting -->
<div v-if="showReportingSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Elaboración de Reportes</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in reportingNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Transferencia de Archivos -->
<div v-if="showFileTransfersSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Transferencia de Archivos</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in fileTransfersNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Shells y Payloads -->
<div v-if="showShellsSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Shells y Payloads</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in shellsNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Metasploit -->
<div v-if="showMetasploitSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Metasploit</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in metasploitNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Ataques de Contraseñas -->
<div v-if="showPasswordsSection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Ataques de Contraseñas</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in passwordNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col justify-between h-full"
    >
      <div>
        <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
        <p class="text-sm text-white mb-4">{{ note.description }}</p>
      </div>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition w-fit"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Web Security -->
<div v-if="showWebSecuritySection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Seguridad Web</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in webSecurityNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col justify-between h-full"
    >
      <div>
        <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
        <p class="text-sm text-white mb-4">{{ note.description }}</p>
      </div>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition w-fit"
      >
        Ver apuntes
      </a>
    </div>
  </div>
</div>
<!-- Sección: Active Directory -->
<div v-if="showActiveDirectorySection" class="mb-12">
  <h3 class="text-2xl font-bold text-green-300 mb-4">Active Directory</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="note in activeDirectoryNotes"
      :key="note.title"
      class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition"
    >
      <h4 class="text-lg font-bold text-green-300 mb-2">{{ note.title }}</h4>
      <p class="text-sm text-white mb-3">{{ note.description }}</p>
      <a
        :href="note.link"
        target="_blank"
        class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
      >
        Ver apuntes
      </a>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const searchQuery = ref('')
const activeCategory = ref('Todos')
const selectedCategory = ref('')
const categories = [
  'Todos',
  'Pentesting',
  'Red',
  'Footprinting',
  'InfoWeb',
  'Vulnerabilidades',
  'Nessus',
  'OpenVAS',
  'Reporting',
  'TransferFiles',
  'Shells',
  'Metasploit',
  'Passwords',
  'WebSecurity',
  'Active Directory'
]

const notes = [
  // Pentesting
  {
    title: 'Enumeración Web',
    category: 'Pentesting',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics/web-enumeration',
    description: 'Técnicas y herramientas para identificar directorios, tecnologías y servicios web.'
  },
  {
    title: 'Exploits Públicos',
    category: 'Pentesting',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics/public-exploits',
    description: 'Cómo usar exploits públicos para comprometer servicios conocidos.'
  },
  {
    title: 'Tipos de Shells',
    category: 'Pentesting',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics/types-of-shells',
    description: 'Reverse shells, bind shells y técnicas para obtener acceso remoto.'
  },
  {
    title: 'Escalada de Privilegios',
    category: 'Escalada',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics/privilege-escalation',
    description: 'Métodos y vectores para obtener privilegios más altos en el sistema.'
  },
  {
    title: 'Transferencia de Archivos',
    category: 'Transferencia',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/pentesting-basics/transfering-files',
    description: 'Formas seguras y efectivas de mover archivos entre máquinas comprometidas.'
  },
  // Nmap
  {
    title: 'Descubrimiento de Hosts',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/host-discovery',
    description: 'Técnicas para detectar qué dispositivos están activos en una red.'
  },
  {
    title: 'Escaneo de Puertos',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/host-and-port-scanning',
    description: 'Uso de Nmap para identificar puertos abiertos en los hosts detectados.'
  },
  {
    title: 'Guardar Resultados',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/saving-the-results',
    description: 'Opciones para almacenar y exportar los resultados del escaneo.'
  },
  {
    title: 'Enumeración de Servicios',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/service-enumeration',
    description: 'Descubrir versiones de servicios y sistemas operativos.'
  },
  {
    title: 'Nmap Scripting Engine',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/nmap-scripting-engine',
    description: 'Automatizar tareas con scripts NSE para exploración y explotación.'
  },
  {
    title: 'Rendimiento en Escaneos',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/performance',
    description: 'Ajustes para optimizar velocidad y precisión del escaneo.'
  },
  {
    title: 'Evasión de IDS/IPS',
    category: 'Red',
    link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/network-enumeration-with-nmap/firewall-and-ids-ips-evasion',
    description: 'Técnicas para evadir cortafuegos y sistemas de detección.'
  },

{
  title: 'Información de Dominio',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/domain-information',
  description: 'Cómo recolectar datos sobre dominios y registrar información.'
},
{
  title: 'Recursos en la Nube',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/cloud-resources',
  description: 'Técnicas para identificar activos en entornos cloud como AWS, Azure y GCP.'
},
{
  title: 'FTP',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/ftp',
  description: 'Identificación de servidores FTP y explotación básica de configuraciones inseguras.'
},
{
  title: 'SMB',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/smb',
  description: 'Enumeración y acceso a recursos compartidos en redes Windows mediante SMB.'
},
{
  title: 'NFS',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/nfs',
  description: 'Acceso a sistemas de archivos compartidos en redes UNIX/Linux.'
},
{
  title: 'DNS',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/dns',
  description: 'Recolección de registros DNS, zone transfers y herramientas.'
},
{
  title: 'SMTP',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/smtp',
  description: 'Enumeración de usuarios y explotación básica de servidores de correo.'
},
{
  title: 'IMAP/POP3',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/imap-pop3',
  description: 'Análisis de servicios de correo y posibles puntos débiles en autenticación.'
},
{
  title: 'SNMP',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/snmp',
  description: 'Enumeración de dispositivos de red a través del protocolo SNMP.'
},
{
  title: 'MySQL',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/mysql',
  description: 'Conexión, autenticación y explotación básica de bases de datos MySQL.'
},
{
  title: 'MSSQL',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/mssql',
  description: 'Enumeración de bases de datos Microsoft SQL Server.'
},
{
  title: 'Oracle TNS',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/oracle-tns',
  description: 'Interacción con bases de datos Oracle a través del protocolo TNS.'
},
{
  title: 'IPMI',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/ipmi',
  description: 'Acceso remoto a servidores a través de IPMI detalladamente.'
},
{
  title: 'Protocolos de Gestión Linux',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/linux-remote-management-protocols',
  description: 'Servicios como SSH, Telnet o VNC para acceso remoto y su análisis.'
},
{
  title: 'Protocolos de Gestión Windows',
  category: 'Footprinting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/footprinting/windows-remote-management-protocols',
  description: 'RPC, WinRM y otros servicios de administración remota en entornos Windows.'
},
{
  title: 'Reconocimiento Web',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition',
  description: 'Guía general sobre técnicas de recopilación de información en entornos web.'
},
{
  title: 'WHOIS',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/whois',
  description: 'Uso de WHOIS para recolectar datos sobre el propietario de un dominio y su registro.'
},
{
  title: 'DNS',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/dns',
  description: 'Consulta de registros DNS, zonas y servicios asociados al dominio objetivo.'
},
{
  title: 'Exploración DNS',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/dns/digging-dns',
  description: 'Exploración de información DNS con herramientas como dig y nslookup.'
},
{
  title: 'Subdominios',
  category: 'InfoWeb',
  sub: 'Subdominios',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/subdomains',
  description: 'Enumeración de subdominios usando múltiples fuentes como DNS, certificados y crawling.'
},
{
  title: 'Fuerza Bruta sobre Subdominios',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/subdomains/subdomain-bruteforcing',
  description: 'Fuerza bruta sobre subdominios usando diccionarios para descubrir activos ocultos.'
},
{
  title: 'Transferencias de zonas DNS',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/subdomains/dns-zone-transfers',
  description: 'Explotación de configuraciones erróneas para obtener toda la zona DNS de un dominio.'
},
{
  title: 'Virtual Hosts',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/subdomains/virtual-hosts',
  description: 'Descubrimiento de sitios alojados en la misma IP usando encabezados Host.'
},
{
  title: 'Logs de Transperencia de Certificados',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/subdomains/certificate-transparency-logs',
  description: 'Uso de logs de transparencia de certificados para descubrir subdominios.'
},
{
  title: 'Fingerprinting',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/fingerprinting',
  description: 'Identificación de tecnologías, servidores y frameworks en el sitio objetivo.'
},
{
  title: 'Crawling',
  category: 'InfoWeb',
  sub: 'Crawling',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/crawling',
  description: 'Exploración automatizada de sitios web para descubrir rutas y más.'
},
{
  title: 'robots.txt',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/crawling/robots.txt',
  description: 'Análisis del archivo robots.txt para encontrar rutas restringidas u olvidadas.'
},
{
  title: 'Well-Known URIs',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/crawling/well-known-uris',
  description: 'Descubrimiento de endpoints interesantes mediante URIs estándar.'
},
{
  title: 'Rastrear Web',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/crawling/creepy-crawlies',
  description: 'Uso de crawlers para detectar contenido oculto, links internos y rutas expuestas.'
},
{
  title: 'Motores de Búsqueda',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/search-engine-discovery',
  description: 'Uso avanzado de motores de búsqueda para descubrir información sensible (dorks).'
},
{
  title: 'Archivos Web',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering-web-edition/web-archives',
  description: 'Revisión de versiones antiguas de sitios web usando servicios como Wayback Machine.'
},
{
  title: 'Automatización del reconocimiento',
  category: 'InfoWeb',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/information-gathering---web-edition/automating-recon',
  description: 'Automatización del reconocimiento usando herramientas como Amass, Subfinder y más.'
},

{
  title: 'Evaluación de Vulnerabilidades',
  category: 'Vulnerabilidades',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/vulnerability-assessment/vulnerability-assessment',
  description: 'Introducción a la evaluación de vulnerabilidades en sistemas, servicios y aplicaciones.'
},
{
  title: 'Estándares de Evaluación',
  category: 'Vulnerabilidades',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/vulnerability-assessment/assessment-standards',
  description: 'Normativas y marcos usados en la evaluación de vulnerabilidades.'
},
{
  title: 'Sistema de Puntuación CVSS',
  category: 'Vulnerabilidades',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/vulnerability-assessment/common-vulnerability-scoring-system-cvss',
  description: 'Uso del CVSS para puntuar y clasificar vulnerabilidades.'
},
{
  title: 'CVE: Vulnerabilidades y Exposiciones Comunes',
  category: 'Vulnerabilidades',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/vulnerability-assessment/common-vulnerabilities-and-exposures-cve',
  description: 'Identificadores CVE para vulnerabilidades públicas.'
},
{
  title: 'Introducción a Nessus',
  category: 'Nessus',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/nessus/getting-started-with-nessus',
  description: 'Guía básica para comenzar con el uso de Nessus en tareas de escaneo de vulnerabilidades.'
},
{
  title: 'Escaneo con Nessus',
  category: 'Nessus',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/nessus/nessus-scan',
  description: 'Cómo configurar y ejecutar escaneos efectivos en Nessus.'
},
{
  title: 'Configuraciones Avanzadas',
  category: 'Nessus',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/nessus/advanced-settings',
  description: 'Ajustes avanzados para personalizar los análisis según tus necesidades.'
},
{
  title: 'Analizar Resultados',
  category: 'Nessus',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/nessus/working-with-nessus-scan-output',
  description: 'Interpretar los datos obtenidos y priorizar vulnerabilidades encontradas.'
},
{
  title: 'Errores de Escaneo',
  category: 'Nessus',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/nessus/scanning-issues',
  description: 'Solución de problemas comunes que pueden surgir durante los escaneos.'
},
{
  title: 'Escaneo con OpenVAS',
  category: 'OpenVAS',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/openvas/openvas-scan',
  description: 'Cómo realizar un escaneo de vulnerabilidades con OpenVAS paso a paso.'
},
{
  title: 'Exportar Resultados',
  category: 'OpenVAS',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/openvas/exporting-the-results',
  description: 'Formas de exportar los resultados obtenidos de un análisis con OpenVAS.'
},
{
  title: 'Buenas Prácticas para Reporting',
  category: 'Reporting',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/reporting',
  description: 'Recomendaciones para redactar informes técnicos claros, organizados y efectivos tras una auditoría.'
},
{
  title: 'Métodos de Transferencia en Windows',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/windows-file-transfer-methods',
  description: 'Herramientas y comandos nativos para mover archivos en entornos Windows.'
},
{
  title: 'Transferencia en Linux',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/linux-file-transfer-methods',
  description: 'Utilidades de red y comandos básicos para transferir archivos en Linux.'
},
{
  title: 'Transferencia con Código',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/transferring-files-with-code',
  description: 'Ejemplos de scripts en Python, Bash y otros para transferencias automatizadas.'
},
{
  title: 'Otros Métodos de Transferencia',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/miscellaneous-file-transfer-methods',
  description: 'Técnicas adicionales menos convencionales para mover archivos entre sistemas.'
},
{
  title: 'Transferencias Protegidas',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/protected-file-transfers',
  description: 'Métodos para ocultar o cifrar archivos al transferirlos de forma segura.'
},
{
  title: 'Captura de Archivos por HTTP/S',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/catching-files-over-http-s',
  description: 'Uso de servidores web para descargar archivos remotamente a sistemas comprometidos.'
},
{
  title: 'Living off the Land',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/living-off-the-land',
  description: 'Aprovechamiento de herramientas del sistema para evitar detección durante la transferencia de archivos.'
},
{
  title: 'Detección de Transferencias',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/detection',
  description: 'Indicadores y técnicas que permiten detectar transferencias sospechosas.'
},
{
  title: 'Evasión de Detección',
  category: 'TransferFiles',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/file-transfers/evading-detection',
  description: 'Estrategias para evadir firewalls, IDS y monitoreo durante transferencia de archivos.'
},
{
  title: 'Anatomía de una Shell',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/anatomy-of-a-shell',
  description: 'Fundamentos sobre cómo funcionan las shells y su estructura básica.'
},
{
  title: 'Bind Shells',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/bind-shells',
  description: 'Shells que abren un puerto en la máquina víctima y esperan conexión.'
},
{
  title: 'Reverse Shells',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/reverse-shells',
  description: 'Shells que conectan de vuelta al atacante para obtener control remoto.'
},
{
  title: 'Payloads',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads',
  description: 'Conceptos esenciales sobre qué son los payloads, cómo se diseñan y sus diferentes tipos para obtener shells.'
},
{
  title: 'Automatizar Payloads con Metasploit',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads/automating-payloads-and-delivery-with-metasploit',
  description: 'Uso de Metasploit para automatizar la generación y entrega de payloads.'
},
{
  title: 'Creación de Payloads con MSFvenom',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads/crafting-payloads-with-msfvenom',
  description: 'Cómo crear payloads personalizados con MSFvenom para múltiples plataformas.'
},
{
  title: 'Infiltración en Windows',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads/infiltrating-windows',
  description: 'Técnicas para entregar payloads y ejecutar shells en sistemas Windows.'
},
{
  title: 'Infiltración en Unix/Linux',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads/infiltrating-unix-linux',
  description: 'Estrategias específicas para explotar y mantener shells en entornos Unix/Linux.'
},
{
  title: 'Shells Interactivas',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/payloads/spawning-interactive-shells',
  description: 'Métodos para obtener shells interactivas y estables tras explotación.'
},
{
  title: 'Introducción a Web Shells',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/introduction-to-web-shells',
  description: 'Qué son las web shells, cómo funcionan y en qué casos se utilizan.'
},
{
  title: 'Laudanum Webshell',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/introduction-to-web-shells/laudanum-one-webshell-to-rule-them-all',
  description: 'Uso de la colección de shells Laudanum para múltiples entornos.'
},
{
  title: 'Antak Webshell',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/introduction-to-web-shells/antak-webshell',
  description: 'Shell creada por Microsoft para evaluar vulnerabilidades de gestión remota.'
},
{
  title: 'Web Shells en PHP',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/introduction-to-web-shells/php-web-shells',
  description: 'Ejemplos y análisis de shells PHP para controlar servidores web.'
},
{
  title: 'Detección y Prevención',
  category: 'Shells',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/shells-and-payloads/detection-and-prevention',
  description: 'Indicadores de compromiso y contramedidas para detectar y bloquear shells.'
},
{
  title: 'Metasploit',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit',
  description: 'Guía general sobre el framework Metasploit: módulos, payloads, escaneo, evasión, explotación y automatización.'
},
{
  title: 'MSFConsole',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/msfconsole',
  description: 'Uso de la consola interactiva de Metasploit: comandos esenciales, navegación y flujo de trabajo.'
},
{
  title: 'Modules',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/modules',
  description: 'Tipos de módulos en Metasploit: exploits, payloads, auxiliares, post-explotación y más.'
},
{
  title: 'Targets',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/targets',
  description: 'Cómo se definen y configuran los objetivos dentro de los módulos de Metasploit.'
},
{
  title: 'Payloads',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/payloads',
  description: 'Tipos de payloads: singles, stagers y stages. Cómo elegir y personalizar payloads.'
},
{
  title: 'Encoders',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/encoders',
  description: 'Encoders para evasión de detección: cuándo usarlos y limitaciones.'
},
{
  title: 'Databases',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/databases',
  description: 'Uso de la base de datos integrada en Metasploit para guardar resultados y reutilizarlos.'
},
{
  title: 'Plugins',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/plugins',
  description: 'Extender funcionalidades de Metasploit mediante plugins: carga, uso y ejemplos.'
},
{
  title: 'Sessions',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/sessions',
  description: 'Gestión de sesiones post-explotación: interacción, migración y automatización.'
},
{
  title: 'Meterpreter',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/meterpreter',
  description: 'Uso del payload avanzado Meterpreter: comandos, scripts y control remoto.'
},
{
  title: 'Writing and Importing Modules',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/writing-and-importing-modules',
  description: 'Cómo crear tus propios módulos y cargarlos en el framework Metasploit.'
},
{
  title: 'Introducción a MSFVenom',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/introduction-to-msfvenom',
  description: 'Creación de payloads personalizados usando MSFVenom: sintaxis y casos comunes.'
},
{
  title: 'Evasión de Firewall y IDS/IPS',
  category: 'Metasploit',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/metasploit/firewall-and-ids-ips-evasion',
  description: 'Técnicas para evadir firewalls, IDS y IPS durante el uso de Metasploit.'
},
{
  title: 'Ataques de Contraseñas',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks',
  description: 'Técnicas para obtener credenciales a través de herramientas, reutilización de contraseñas y ataques a servicios del sistema.'
},
{
  title: 'John The Ripper',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/john-the-ripper',
  description: 'Uso de John The Ripper para descifrar contraseñas mediante ataques por diccionario y fuerza bruta.'
},
{
  title: 'Servicios de Red',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/network-services',
  description: 'Ataques de contraseña dirigidos a servicios accesibles en red como SSH, FTP, SMB, entre otros.'
},
{
  title: 'Mutaciones de Contraseñas',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/password-mutations',
  description: 'Generación de variaciones comunes de contraseñas para mejorar diccionarios.'
},
{
  title: 'Reutilización y Contraseñas por Defecto',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/password-reuse-default-passwords',
  description: 'Explotación de contraseñas por defecto o repetidas entre múltiples servicios.'
},
{
  title: 'Ataques a SAM',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/attacking-sam',
  description: 'Extracción de hashes desde el archivo SAM en sistemas Windows.'
},
{
  title: 'Ataques a LSASS',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/attacking-lsass',
  description: 'Obtención de credenciales de procesos activos mediante volcado de LSASS.'
},
{
  title: 'Ataques a Active Directory y NTDS.dit',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/attacking-active-directory-and-ntds.dit',
  description: 'Técnicas para extraer credenciales de dominios en entornos AD.'
},
{
  title: 'Hunting de Credenciales en Windows',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/credential-hunting-in-windows',
  description: 'Revisión de memoria, archivos y configuraciones para encontrar credenciales en Windows.'
},
{
  title: 'Hunting de Credenciales en Linux',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/credential-hunting-in-linux',
  description: 'Métodos para localizar credenciales almacenadas o mal protegidas en sistemas Linux.'
},
{
  title: 'passwd, shadow y opasswd',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/passwd-shadow-and-opasswd',
  description: 'Análisis y extracción de hashes desde archivos clave del sistema Linux.'
},
{
  title: 'Pass the Hash (PtH)',
  category: 'Passwords',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/password-attacks/pass-the-hash-pth',
  description: 'Uso de hashes de contraseñas para autenticarse en sistemas sin conocer la contraseña original.'
},
{
  title: 'Path Traversal',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/web-security/path-traversal',
  description: 'Explotación de rutas inseguras para acceder a archivos fuera del directorio permitido.'
},
{
  title: 'SQL Injection',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/web-security/sql-injection',
  description: 'Inyección de código SQL para manipular bases de datos y obtener información confidencial.'
},
{
  title: 'Control de Acceso',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/web-security/control-de-acceso',
  description: 'Bypass de restricciones de acceso para acceder a recursos no autorizados.'
},
{
  title: 'Introducción a Active Directory',
  category: 'Active Directory',
  link: 'https://beafn28.gitbook.io/beafn28/apuntes-hacking/introduction-active-directory',
  description: 'Conceptos básicos, arquitectura y componentes esenciales para entender Active Directory en un entorno de red.'
},
{
  title: 'Conceptos AD - Parte 1',
  category: 'Active Directory',
  link: 'https://beafn28.gitbook.io/beafn28/notas/active-directory-parte-1',
  description: 'Fundamentos clave de Active Directory, estructura, tipos de usuarios y fases técnicas de un pentester en entornos AD.'
},
{
  title: 'Conceptos AD - Parte 2',
  category: 'Active Directory',
  link: 'https://beafn28.gitbook.io/beafn28/notas/active-directory-parte-2',
  description: 'Notas rápidas de reconocimiento y técnicas como Kerberoasting, Mimikatz, Golden Ticket y más.'
},
{
  title: 'Web Requests',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/web-requests',
  description: 'Fundamentos del protocolo HTTP, métodos de petición, estado de respuestas, uso de cURL y análisis de cabeceras para comprender cómo funcionan las solicitudes web.'
},
{
  title: 'Introducción a Aplicaciones Web',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/introduction-to-web-applications',
  description: 'Introducción a aplicaciones web revisando frontend, backend, servidores, bases de datos, vulnerabilidades comunes, códigos HTTP, cURL y CVEs con métricas CVSS.'
},
{
  title: 'Usando Proxies Web',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/using-web-proxies',
  description: 'Uso de proxies web (Burp, ZAP, Proxychains) para interceptar, repetir, modificar y fuzzear solicitudes HTTP, identificar vulnerabilidades y extraer flags en aplicaciones web.'
},
{
  title: 'Recolección de Información - Edición Web',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/introduction-gathering-web-edition',
  description: 'Técnicas de reconocimiento web utilizando WHOIS, DNS, subdominios, transferencias de zona, vhosts, fingerprinting, crawling y archivos históricos para identificar tecnologías, infraestructura y datos expuestos.'
},
{
  title: 'Atacando Aplicaciones Web con FFUF',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/attacking-web-applications-with-ffuz',
  description: 'Uso avanzado de ffuf para fuzzing de directorios, páginas, extensiones, subdominios, vhosts, parámetros y valores, permitiendo descubrir rutas ocultas, flags y vulnerabilidades en aplicaciones web.'
},
{
  title: 'Desofuscación de JavaScript',
  category: 'WebSecurity',
  link: 'https://beafn28.gitbook.io/beafn28/preparar-cbbh/javascript-deobfuscation',
  description: 'Técnicas para identificar, analizar y desofuscar código JavaScript mediante herramientas de beautify, unpackers y métodos de decodificación (Base64, Hex, Rot13).'
}
]

const filteredNotes = computed(() => {
  return notes.filter(note => {
    const categoryMatch = activeCategory.value === 'Todos' || note.category === activeCategory.value
    const searchMatch =
      note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return categoryMatch && searchMatch
  })
})

const pentestingNotes = computed(() =>
  filteredNotes.value.filter(n =>
    ['Enumeración Web', 'Exploits Públicos', 'Tipos de Shells', 'Escalada de Privilegios', 'Transferencia de Archivos'].includes(n.title)
  )
)
const activeDirectoryNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Active Directory')
)

const showActiveDirectorySection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Active Directory') &&
  activeDirectoryNotes.value.length > 0
)
const nmapNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Red')
)

const showPentestingSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Pentesting') &&
  pentestingNotes.value.length > 0
)

const showNmapSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Red') &&
  nmapNotes.value.length > 0
)
const footprintingNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Footprinting')
)

const showFootprintingSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Footprinting') &&
  footprintingNotes.value.length > 0
)
const infoNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'InfoWeb')
)

const showInfoGatheringSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'InfoWeb') &&
  infoNotes.value.length > 0
)
const vulnerabilityNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Vulnerabilidades')
)

const showVulnerabilitySection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Vulnerabilidades') &&
  vulnerabilityNotes.value.length > 0
)
const nessusNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Nessus')
)

const showNessusSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Nessus') &&
  nessusNotes.value.length > 0
)
const openvasNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'OpenVAS')
)

const showOpenVASSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'OpenVAS') &&
  openvasNotes.value.length > 0
)
const reportingNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Reporting')
)

const showReportingSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Reporting') &&
  reportingNotes.value.length > 0
)
const fileTransfersNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'TransferFiles')
)

const showFileTransfersSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'TransferFiles') &&
  fileTransfersNotes.value.length > 0
)
const shellsNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Shells')
)

const showShellsSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Shells') &&
  shellsNotes.value.length > 0
)
const metasploitNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Metasploit')
)

const showMetasploitSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Metasploit') &&
  metasploitNotes.value.length > 0
)

const passwordNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'Passwords')
)

const showPasswordsSection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'Passwords') &&
  passwordNotes.value.length > 0
)
const webSecurityNotes = computed(() =>
  filteredNotes.value.filter(n => n.category === 'WebSecurity')
)

const showWebSecuritySection = computed(() =>
  (activeCategory.value === 'Todos' || activeCategory.value === 'WebSecurity') &&
  webSecurityNotes.value.length > 0
)
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
  const tag = route.query.tag
  if (tag && categories.includes(tag)) {
    selectedCategory.value = tag
    activeCategory.value = tag
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
