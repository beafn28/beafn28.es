<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6 relative">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 border-b border-green-700 pb-2">Sobre mí</h1>

      <!-- Índice tipo terminal -->
      <div class="mb-10 text-green-300 font-mono text-sm leading-relaxed space-y-2">
        <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/blog</span>$ <a href="#sobre-mi" class="text-white hover:text-green-400">cd sobre-mi</a></div>
        <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/blog/sobre-mi</span>$ <a href="#ciberseguridad" class="text-white hover:text-green-400">cat ciberseguridad</a></div>
        <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/blog/sobre-mi</span>$ <a href="#tech-stack" class="text-white hover:text-green-400">cat tech-stack</a></div>
        <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/blog/sobre-mi</span>$ <a href="#certificaciones" class="text-white hover:text-green-400">cat certificaciones</a><span class="animate-pulse text-white"></span></div>
      </div>

      <!-- SOBRE MÍ -->
      <div id="sobre-mi">
        <p class="mb-6 text-lg leading-relaxed">
          Soy <strong class="text-white">Beatriz Fresno Naumova</strong>, estudiante del último curso de Ingeniería Informática en la Universidad de Salamanca (USAL). Me interesa especialmente la <span class="text-white">ciberseguridad</span>, área en la que me estoy especializando como <span class="text-white">pentester</span>. En esta web comparto <span class="text-white">proyectos personales</span>, <span class="text-white">herramientas</span>, <span class="text-white">writeups</span>, <span class="text-white">apuntes</span> y <span class="text-white">artículos</span>. También me apasiona la <span class="text-white">computación cuántica</span>, campo que considero clave para el futuro de la seguridad.
        </p>
        <p class="mb-6 text-lg leading-relaxed">
          Mi próximo objetivo profesional es la obtención de la certificación <strong class="text-white">OSCP (Offensive Security Certified Professional)</strong>, un reto que refleja mi compromiso con la ciberseguridad ofensiva y la mejora continua.
        </p>
      </div>

      <!-- CIBERSEGURIDAD -->
      <div id="ciberseguridad">
        <h2 class="text-2xl font-semibold text-green-300 mb-6 mt-12">Ciberseguridad</h2>
        <div class="space-y-10">
          <div v-for="category in toolCategories" :key="category.title">
            <h3 class="text-xl text-green-200 mb-3">{{ category.title }}</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tool in category.items"
                :key="tool"
                class="bg-[#11141c] text-white border border-green-500 px-4 py-1 rounded-full text-sm shadow-sm hover:bg-green-500 hover:text-black transition"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- TECH STACK -->
      <div id="tech-stack">
        <h2 class="text-2xl font-semibold text-green-300 mb-6 mt-12">Tech Stack</h2>
        <div class="space-y-10">
          <div v-for="section in techStack" :key="section.title">
            <h3 class="text-xl text-green-200 mb-3">{{ section.title }}</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in section.items"
                :key="tech"
                class="bg-[#11141c] text-white border border-green-500 px-4 py-1 rounded-full text-sm shadow-sm hover:bg-green-500 hover:text-black transition"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CERTIFICACIONES -->
      <div id="certificaciones">
        <h2 class="text-2xl font-semibold text-green-300 mb-4 mt-12">Certificaciones</h2>
        <ul class="list-disc pl-6 text-white space-y-2 text-base">
          <li><strong class="text-green-400">Junior Penetration Tester (eJPT)</strong> — INE Security</li>
          <li><strong class="text-green-400">API Penetration Testing</strong> — APISec University</li>
          <li><strong class="text-green-400">Cyber Threat Intelligence 101</strong> — arcX Foundation Level</li>
          <li><strong class="text-green-400">ISC2 Candidate + ISC2 CC</strong> — Certified in Cybersecurity (ISC2)</li>
          <li><strong class="text-green-400">Practical Introduction to Quantum-Safe Cryptography</strong> — IBM Quantum</li>
          <li><strong class="text-green-400">Junior Cybersecurity Analyst Career Path</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Ethical Hacker</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Endpoint Security</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Network Defense</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Networking Basics</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Networking Devices and Initial Configuration</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">Introduction to Cybersecurity</strong> — Cisco Networking Academy</li>
          <li><strong class="text-green-400">English for IT</strong> — Nivel 1 y 2 (Cisco)</li>
          <li><strong class="text-green-400">Esquema Nacional de Seguridad</strong> — Centro Criptológico Nacional</li>
          <li><strong class="text-green-400">Aplicaciones y Desafíos en Ciberseguridad</strong> — USAL / BISITE</li>
          <li><strong class="text-green-400">Concienciación sobre el Uso Seguro de Internet</strong> — USAL + INCIBE</li>
          <li><strong class="text-green-400">Ciberinteligencia y Seguridad</strong> — Universidad de Salamanca</li>
          <li><strong class="text-green-400">Programación en Python</strong> — Universidad de Salamanca</li>
        </ul>
      </div>
    </div>

    <!-- Botón volver arriba -->
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
const techStack = [
  { title: 'Lenguajes de Programación', items: ['Python', 'C', 'C++', 'Java', 'Go', 'JavaScript', 'PHP', 'Perl', 'Shell Script', 'PowerShell', 'Swift'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'Vue.js', 'React', 'Three.js'] },
  { title: 'Backend', items: ['Node.js', 'FastAPI', 'Flask', 'Apache Kafka'] },
  { title: 'Bases de Datos', items: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'MariaDB'] },
  { title: 'DevOps e Infraestructura', items: ['Docker', 'Azure', 'Google Cloud', 'Apache', 'Nginx', 'Git', 'GitHub', 'NPM', 'Windows Terminal', 'Linux'] },
  { title: 'Data Science y ML', items: ['Anaconda', 'NumPy', 'Pandas', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Matplotlib', 'Jupyter', 'MATLAB'] },
  { title: 'Herramientas y Diseño', items: ['Adobe', 'Figma', 'Canva', 'SPSS'] }
]

const toolCategories = [
  { title: 'Plataformas de CTF', items: ['Hack The Box', 'TryHackMe', 'Proving Grounds', 'VulnHub', 'OverTheWire', 'PortSwigger Academy', 'The Hacker Labs', 'DockerLabs', 'Vulnyx'] },
  { title: 'Sistemas Operativos y Networking', items: ['Kali Linux', 'Parrot OS', 'Cisco', 'Wireshark', 'Tcpdump', 'Nmap', 'Netcat', 'Cloudflare'] },
  { title: 'Herramientas de Pentesting', items: ['Burp Suite', 'Dirb', 'Dirbuster', 'Nikto', 'Wfuzz', 'OWASP Amass', 'FFUF', 'Hydra', 'Metasploit', 'ExploitDB', 'SQLMap'] },
  { title: 'OSINT y Análisis Forense', items: ['Maltego', 'Recon-ng', 'SpiderFoot', 'Sherlock', 'Social Analyzer', 'ExifTool', 'Autopsy', 'Binwalk', 'Foremost', 'Volatility', 'Fuzzy'] },
  { title: 'Seguridad de Red y Detección', items: ['Snort', 'Suricata', 'OpenVAS', 'Splunk', 'Fail2ban', 'Nessus'] },
  { title: 'Cracking y Explotación', items: ['John the Ripper', 'Hashcat', 'Aircrack-ng', 'CrackMapExec', 'Mimikatz', 'Impacket', 'BloodHound'] }
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
/* Puedes añadir animaciones o estilos si lo deseas */
</style>
