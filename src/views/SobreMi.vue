<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6 relative">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 border-b border-green-700 pb-2">Sobre mí</h1>

      <!-- Índice tipo terminal -->
<div class="mb-10 text-green-300 font-mono text-sm leading-relaxed space-y-2">
  <div><span class="text-green-500">beafn28@web</span>$ <a href="#sobre-mi" class="text-white hover:text-green-400">cd sobremi</a></div>
  <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/sobremi</span>$ <a href="#ciberseguridad" class="text-white hover:text-green-400">cat ciberseguridad</a></div>
  <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/sobremi</span>$ <a href="#tech-stack" class="text-white hover:text-green-400">cat tech-stack</a></div>
  <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/sobremi</span>$ <a href="#experiencia" class="text-white hover:text-green-400">cat experiencia</a></div>
  <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/sobremi</span>$ <a href="#certificaciones" class="text-white hover:text-green-400">cat certificaciones</a></div>
  <div><span class="text-green-500">beafn28@web</span>:<span class="text-blue-400">~/sobremi</span>$ <a href="#cursos" class="text-white hover:text-green-400">cat cursos</a></div>
</div>

      <!-- SOBRE MÍ -->
      <div id="sobre-mi">
        <p class="mb-6 text-lg leading-relaxed">
          Soy <strong class="text-white">Beatriz Fresno Naumova</strong>, estudiante del último curso de Ingeniería Informática en la Universidad de Salamanca (USAL). Me interesa especialmente la <span class="text-white">ciberseguridad</span>, área en la que me estoy especializando como <span class="text-white">pentester</span>. En esta web comparto <span class="text-white">proyectos personales</span>, <span class="text-white">herramientas</span>, <span class="text-white">writeups</span>, <span class="text-white">apuntes</span> y <span class="text-white">artículos</span>. También me apasiona la <span class="text-white">computación cuántica</span>, campo que considero clave para el futuro de la seguridad.
        </p>
        <p class="mb-6 text-lg leading-relaxed">
  Actualmente me encuentro en un proceso continuo de formación, ampliando mis conocimientos y habilidades mediante la obtención de certificaciones cada vez más avanzadas en ciberseguridad. Puedes consultar el progreso y el roadmap completo en el apartado <strong class="text-white">Certificaciones</strong>.
</p>
<p class="mb-6 text-lg leading-relaxed">
  Recientemente he publicado mi <strong class="text-white">primer CVE</strong> identificado de forma responsable: una vulnerabilidad en el sistema de login de Soosyze CMS <strong class="text-white">[CVE-2025-52392]</strong>, incluida en la base de datos oficial del <a href="https://nvd.nist.gov/vuln/detail/CVE-2025-52392" class="text-blue-400 hover:text-green-400">NVD</a>.
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


<!-- EXPERIENCIA -->
<div id="experiencia">
  <h2 class="text-2xl font-semibold text-green-300 mb-6 mt-12">Experiencia</h2>
  <ul class="list-disc pl-6 text-white space-y-6 text-base">
    <li>
      <strong class="text-green-400">Trainee en Pentesting</strong> — Advens (abr. 2025 – actualidad)<br />
      <ul class="list-disc pl-5 text-sm text-gray-300 mt-1 space-y-1">
        <li>Apoyo al equipo en el reconocimiento y recolección de información.</li>
        <li>Apoyo en pruebas de penetración.</li>
        <li>Análisis de resultados y documentación, ayuda en la redacción de reportes técnicos.</li>
        <li>Apoyo en mejorar la documentación del área.</li>
        <li>Aprendizaje continuo de ejercicios de pentesting.</li>
      </ul>
    </li>
    <li>
      <strong class="text-green-400">Colaboradora</strong> — The Hacker Labs (sept. 2024 – actualidad)<br />
      <p class="text-sm text-gray-300 mt-1">
        Enfocada en la creación de writeups, desarrollo de máquinas virtuales para CTF, y generación de contenido educativo para la comunidad de hacking ético. Contribuyo a la formación de profesionales en ciberseguridad mediante la creación de recursos prácticos y desafiantes que fomentan el aprendizaje continuo en la detección y explotación de vulnerabilidades.
      </p>
    </li>
    <li>
      <strong class="text-green-400">Intern en Ciberseguridad</strong> — AIR Institute (jul. 2024 – sept. 2024)<br />
      <p class="text-sm text-gray-300 mt-1">
        Participación en el desarrollo de un Sistema de Gestión de Información y Eventos de Seguridad (SIEM) con integración de capacidades de Inteligencia Artificial, orientado a la detección proactiva de amenazas.
Colaboración en tareas de diseño, programación y despliegue del sistema, aplicando técnicas de machine learning para la correlación y análisis inteligente de eventos de seguridad.
      </p>
    </li>
  </ul>
</div>
<!-- CERTIFICACIONES -->
<div id="certificaciones">
  <h2 class="text-2xl font-semibold text-green-300 mb-4 mt-12">Certificaciones</h2>

  <div class="relative border-l border-green-700 pl-6 ml-2 space-y-10 mt-6">
    <div
      v-for="cert in certifications"
      :key="cert.title"
      class="relative"
    >

      <!-- Contenido -->
      <div>
        <p class="text-sm text-green-400 font-bold tracking-wide">{{ cert.date }}</p>
        <p class="text-white font-semibold text-base">{{ cert.title }}</p>
        <p class="text-sm italic text-gray-400 mb-2">{{ cert.issuer }}</p>
        
      </div>
    </div>
  </div>
</div>


<!-- CURSOS -->
<div id="cursos" class="mt-16">
  <h2 class="text-2xl font-semibold text-green-300 mb-4">Cursos</h2>
  <ul class="list-disc pl-6 text-white space-y-2 text-base">
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
    <li><strong class="text-green-400">English for IT — Nivel 1 y 2</strong> — Cisco Networking Academy</li>
    <li><strong class="text-green-400">Esquema Nacional de Seguridad</strong> — Centro Criptológico Nacional</li>
    <li><strong class="text-green-400">Aplicaciones y Desafíos en Ciberseguridad</strong> — USAL / BISITE</li>
    <li><strong class="text-green-400">Concienciación sobre el Uso Seguro de Internet</strong> — USAL + INCIBE</li>
    <li><strong class="text-green-400">Ciberinteligencia y Seguridad</strong> — Universidad de Salamanca</li>
    <li><strong class="text-green-400">Programación en Python</strong> — Universidad de Salamanca</li>
  </ul>
</div>

<!-- Botón volver arriba -->
<button
  @click="scrollToTop"
  class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition"
  aria-label="Volver arriba"
>
  ↑
</button>
</div> <!-- Cierre de max-w-5xl -->
</div> <!-- Cierre de min-h-screen -->
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

const certifications = [
  {
    title: 'CPTS — Certified Penetration Testing Specialist',
    issuer: 'Hack The Box',
    date: 'Objetivo'
  },
  {
    title: 'CBBH — Certified Bug Bounty Hunter',
    issuer: 'Hack The Box',
    date: 'Objetivo'
  },
  {
    title: 'CRTA — Certified Red Team Analyst',
    issuer: 'CyberWarFare Labs',
    date: 'Objetivo'
  },
  {
    title: 'eCPPT — Certified Professional Penetration Tester',
    issuer: 'INE Security',
    date: 'Agosto 2025'
  },
  {
    title: 'eWPTX — Web Application Penetration Tester eXtreme',
    issuer: 'INE Security',
    date: 'Julio 2025'
  },
  {
    title: 'eJPT — Junior Penetration Tester',
    issuer: 'INE Security',
    date: 'Febrero 2025'
  }
]


</script>

<style scoped>

</style>
