<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-green-400 mb-2">Writeups</h2>
      <hr class="border-green-700 mb-6" />
        <!-- Buscador -->
<div class="mb-6 w-full">
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Buscar CTF por nombre..."
    class="w-full px-4 py-2 rounded border border-green-500 bg-[#0c0f13] text-white placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
</div>
      <!-- Filtros -->
      <div class="flex flex-wrap gap-4 mb-8">
        <select v-model="selectedPlatform" class="bg-[#0c0f13] border border-green-500 px-4 py-2 rounded">
          <option value="">Todas las plataformas</option>
          <option v-for="p in uniquePlatforms" :key="p">{{ p }}</option>
        </select>

        <select v-model="selectedOS" class="bg-[#0c0f13] border border-green-500 px-4 py-2 rounded">
          <option value="">Todos los SO</option>
          <option v-for="os in uniqueOS" :key="os">{{ os }}</option>
        </select>

        <select v-model="selectedDifficulty" class="bg-[#0c0f13] border border-green-500 px-4 py-2 rounded">
          <option value="">Todas las dificultades</option>
          <option v-for="d in uniqueDifficulties" :key="d">{{ d }}</option>
        </select>
      </div>

      <!-- Tarjetas -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="writeup in filteredWriteups"
          :key="writeup.title"
          class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition relative"
        >
          <span class="absolute top-2 right-2 bg-green-600 text-black text-xs font-bold px-2 py-1 rounded">
            {{ writeup.os }}
          </span>
          <h4 class="text-lg font-bold text-green-300 mb-2">{{ writeup.title }}</h4>
          <p class="text-sm text-white">Plataforma: <span class="text-green-400">{{ writeup.platform }}</span></p>
          <p class="text-sm text-white mb-3">Dificultad: <span class="text-green-400">{{ writeup.difficulty }}</span></p>
          <a
            :href="writeup.link"
            target="_blank"
            class="inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition"
          >
            Ver writeup
          </a>
        </div>
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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const writeups = ref([
  { title: 'Brooklyn Nine Nine', platform: 'TryHackMe', os: 'Linux', difficulty: 'Fácil', link: 'https://beafn28.gitbook.io/beafn28/writeups/tryhackme/brooklyn-nine-nine' },
  { title: 'Pickle Rick', platform: 'TryHackMe', os: 'Linux', difficulty: 'Fácil', link: 'https://beafn28.gitbook.io/beafn28/writeups/tryhackme/pickle-rick' },
  { title: 'Laboratorios PortSwigger', platform: 'PortSwigger', os: 'Windows y Linux', difficulty: 'Fácil', link: 'https://beafn28.gitbook.io/beafn28/web-security/laboratorios-portswigger' },
  { title: 'Billing', platform: 'TryHackMe', os: 'Linux', difficulty: 'Fácil', link: 'https://beafn28.gitbook.io/beafn28/writeups/tryhackme/billing' },
  { title: 'Blue', platform: 'TryHackMe', os: 'Windows', difficulty: 'Fácil', link: 'https://beafn28.gitbook.io/beafn28/writeups/tryhackme/blue' },
    {
    "title": "BuscaLove", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/buscalove"
  },
  {
    "title": "Amor", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/amor"
  },
  {
    "title": "Injection", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/injection"
  },
  {
    "title": "BorazuwarahCTF", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/borazuwarahctf"
  },
  {
    "title": "Trust", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/trust"
  },
  {
    "title": "Picadilly", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/picadilly"
  },
  {
    "title": "Pinguinazo", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/pinguinazo"
  },
  {
    "title": "AguaDeMayo", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/aguademayo"
  },
  {
    "title": "BreakMySSH", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/breakmyssh"
  },
  {
    "title": "NodeClimb", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/nodeclimb"
  },
  {
    "title": "Move", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/move"
  },
  {
    "title": "Los 40 ladrones", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/los-40-ladrones"
  },
  {
    "title": "Vulnvault", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/vulnvault"
  },
  {
    "title": "Pntopntobarra", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/pntopntobarra"
  },
  {
    "title": "Library", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/library"
  },
  {
    "title": "Escolares", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/escolares"
  },
  {
    "title": "ConsoleLog", "platform": "DockerLabs", "os": "Linux", "difficulty": "Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/consolelog"
  },
  {
    "title": "Vacaciones", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/vacaciones"
  },
  {
    "title": "Obsession", "platform": "DockerLabs", "os": "Linux", "difficulty": "Muy Fácil",
    "link": "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/obsession"
  },
  {
  title: "FirstHacking",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/firsthacking"
},
{
  title: "SecretJenkins",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/secretjenkins"
},
{
  title: "HedgeHog",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/hedgehog"
},
{
  title: "AnonymousPingu",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/anonymouspingu"
},
{
  title: "ChocolateLovers",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/chocolatelovers"
},
{
  title: "Dockerlabs",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/dockerlabs"
},
{
  title: "Pressenter",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/pressenter"
},
{
  title: "Candy",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/candy"
},
{
  title: "JenkHack",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/jenkhack"
},
{
  title: "ShowTime",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/showtime"
},
{
  title: "Upload",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/upload"
},
{
  title: "Verdejo",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/verdejo"
},
{
  title: "WalkingCMS",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/walkingcms"
},
{
  title: "WhereIsMyWebShell",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/whereismywebshell"
},
{
  title: "Whoiam",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/whoiam"
},
{
  title: "Winterfell",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/winterfell"
},
{
  title: "-Pn",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/pn"
},
{
  title: "Psycho",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/psycho"
},
{
  title: "Mirame",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/mirame"
},
{
  title: "Backend",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/backend"
},
{
  title: "Paradise",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/paradise"
},
{
  title: "Balurero",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/balurero"
},
{
  title: "Allien",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/allien"
},
{
  title: "Vendetta",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/vendetta"
},
{
  title: "FindYourStyle",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/findyourstyle"
},
{
  title: "Stellarjwt",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/stellarjwt"
},
{
  title: "File",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/file"
},
{
  title: "Redirection (Por completar)",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/redirection"
},
{
  title: "Extravíado",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/extraviado"
},
{
  title: "Patriaquerida",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/patriaquerida"
},
{
  title: "Tproot",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/tproot"
},
{
  title: "Internship",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/internship"
},
{
  title: "Walking Dead",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/walking-dead"
},
{
  title: "Bicho (Por completar)",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/bicho"
},
{
  title: "BaluFood",
  platform: "DockerLabs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/dockerlabs/balufood"
},
  {
    title: "Meow",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/meow"
  },
  {
    title: "Fawn",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/fawn"
  },
  {
    title: "Dancing",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/dancing"
  },
  {
    title: "Redeemer",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/redeemer"
  },
  {
    title: "Appointment",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/appointment"
  },
  {
    title: "Sequel",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/sequel"
  },
  {
    title: "Crocodile",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/crocodile"
  },
  {
    title: "Responder",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/responder"
  },
  {
    title: "Three",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/three"
  },
  {
    title: "Archetype",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/archetype"
  },
  {
    title: "Oopsie",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/oopsie"
  },
  {
    title: "Vaccine",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/vaccine"
  },
  {
    title: "Unified",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/unified"
  },
  {
    title: "Explosion",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/explosion"
  },
  {
    title: "Preignition",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/preignition"
  },
  {
    title: "Mongod",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/mongod"
  },
  {
    title: "Synced",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/synced"
  },
  {
    title: "Ignition",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/ignition"
  },
  {
    title: "Bike",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/bike"
  },
  {
    title: "Funnel",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/funnel"
  },
  {
    title: "Pennyworth",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/pennyworth"
  },
  {
    title: "Tactics",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/tactics"
  },
  {
    title: "Included",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/included"
  },
  {
    title: "Markup",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/markup"
  },
  {
    title: "Base",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Muy Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/starting-point/base"
  },
    {
    title: "Nibbles",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/nibbles"
  },
  {
    title: "BoardLight",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/boardlight"
  },
  {
    title: "Cap",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/cap"
  },
  {
    title: "TwoMillion",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/twomillion"
  },
  {
    title: "Lame",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/lame"
  },
  {
    title: "Legacy",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/legacy"
  },
  {
    title: "Devel",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/devel"
  },
  {
    title: "Beep",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/beep"
  },
  {
    title: "Optimum",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/optimum"
  },
  {
    title: "Arctic",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/arctic"
  },
  {
    title: "Jerry",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/jerry"
  },
  {
    title: "Sau",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/sau"
  },
  {
    title: "GoodGames",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/goodgames"
  },
  {
    title: "Heist",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/heist"
  },
  {
    title: "OpenAdmin",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/openadmin"
  },
  {
    title: "Nest",
    platform: "HackTheBox",
    os: "Windows",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/nest"
  },
  {
    title: "Curling",
    platform: "HackTheBox",
    os: "Linux",
    difficulty: "Fácil",
    link: "https://beafn28.gitbook.io/beafn28/writeups/hackthebox/curling"
  },
  {
  title: "Wakanda",
  platform: "Vulnhub",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnhub/wakanda"
},
{
  title: "Election (Por terminar)",
  platform: "Vulnhub",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnhub/election"
},
{
  title: "Avengers",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/avengers"
},
{
  title: "Can you hack me?",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/can-you-hack-me"
},
{
  title: "Fruits",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/fruits"
},
{
  title: "Microchoft",
  platform: "The Hacker Labs",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/microchoft"
},
{
  title: "TickTakRoot",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/ticktakroot"
},
{
  title: "Grillo",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/grillo"
},
{
  title: "Mortadela",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/mortadela"
},
{
  title: "Zapas Guapas",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/zapas-guapas"
},
{
  title: "Sal y Azúcar",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/sal-y-azucar"
},
{
  title: "Cyberpunk",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/cyberpunk"
},
{
  title: "Papafrita",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/papafrita"
},
{
  title: "PizzaHot",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/pizzahot"
},
{
  title: "Decryptor",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/decryptor"
},
{
  title: "Academy",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/academy"
},
{
  title: "Cocido andaluz",
  platform: "The Hacker Labs",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/cocido-andaluz"
},
{
  title: "Find Me",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/find-me"
},
{
  title: "Quokka",
  platform: "The Hacker Labs",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/quokka"
},
{
  title: "Campana Feliz",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/campana-feliz"
},
{
  title: "Bocata de Calamares",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/bocata-de-calamares"
},
{
  title: "Casa Paco",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/casa-paco"
},
{
  title: "Torrijas",
  platform: "The Hacker Labs",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/the-hacker-labs/torrijas"
},
{
  title: "Fuser",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/fuser"
},
{
  title: "Blogguer",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/blogguer"
},
{
  title: "Lower",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/lower"
},
{
  title: "Exec",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/exec"
},
{
  title: "Diff3r3ntS3c",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/diff3r3nts3c"
},
{
  title: "Hacking Station",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/hacking-station"
},
{
  title: "Experience",
  platform: "Vulnyx",
  os: "Windows",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/experience"
},
{
  title: "Eternal",
  platform: "Vulnyx",
  os: "Windows",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/eternal"
},
{
  title: "Agent",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/agent"
},
{
  title: "Infected",
  platform: "Vulnyx",
  os: "Linux",
  difficulty: "Muy Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/infected"
},
{
  title: "Admin",
  platform: "Vulnyx",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/admin"
},
{
  title: "War",
  platform: "Vulnyx",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/war"
},
{
  title: "Hosting",
  platform: "Vulnyx",
  os: "Windows",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/vulnyx/hosting"
},
{
  title: "Monitoring",
  platform: "Proving Ground Play",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/proving-ground-play/monitoring"
},
{
  title: "DriftingBlues6 (Por terminar)",
  platform: "Proving Ground Play",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/proving-ground-play/driftingblues6"
},
{
  title: "Natas: Nivel 0–5",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas/nivel-0-5"
},
{
  title: "Natas: Nivel 6–11",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas/nivel-6-11"
},
{
  title: "Natas: Nivel 12–17",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas/nivel-12-17"
},
{
  title: "Natas: Nivel 18–23",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas-18-23"
},
{
  title: "Natas: Nivel 24–29",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas/nivel-24-29"
},
{
  title: "Natas: Nivel 30–34",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/natas/nivel-30-34"
},
{
  title: "Leviathan: Nivel 0–7",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/leviathan/nivel-0-7"
},
{
  title: "Krypton",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/krypton"
},
{
  title: "Bandit: Nivel 0–10",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/bandit/nivel-0-10"
},
{
  title: "Bandit: Nivel 11–20",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/bandit/nivel-11-20"
},
{
  title: "Bandit: Nivel 21–30",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/bandit/nivel-21-30"
},
{
  title: "Bandit: Nivel 31–34",
  platform: "OverTheWire",
  os: "Linux",
  difficulty: "Fácil",
  link: "https://beafn28.gitbook.io/beafn28/writeups/overthewire/bandit/nivel-31-34"
}
  

])

const selectedPlatform = ref('')
const selectedOS = ref('')
const selectedDifficulty = ref('')
const searchQuery = ref('')
const uniquePlatforms = computed(() => [...new Set(writeups.value.map(w => w.platform))])
const uniqueOS = computed(() => [...new Set(writeups.value.map(w => w.os))])
const uniqueDifficulties = computed(() => [...new Set(writeups.value.map(w => w.difficulty))])

const filteredWriteups = computed(() => {
  return writeups.value.filter(w => {
    const matchPlatform = !selectedPlatform.value || w.platform === selectedPlatform.value
    const matchOS = !selectedOS.value || w.os === selectedOS.value
    const matchDifficulty = !selectedDifficulty.value || w.difficulty === selectedDifficulty.value
    const matchSearch = w.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchPlatform && matchOS && matchDifficulty && matchSearch
  })
})
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  const platformFromQuery = route.query.platform
  if (platformFromQuery) {
    selectedPlatform.value = platformFromQuery
  }
})
</script>

<style scoped>
select {
  color: #9ae6b4;
}
</style>
