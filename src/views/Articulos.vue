<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6 relative">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-green-400 mb-2">Artículos</h2>
      <hr class="border-green-700 mb-6" />

      <!-- Filtros -->
      <div class="flex flex-wrap gap-4 mb-8">
        <select v-model="selectedYear" class="bg-[#0c0f13] border border-green-500 px-4 py-2 rounded">
          <option value="">Todos los años</option>
          <option v-for="year in uniqueYears" :key="year">{{ year }}</option>
        </select>
      </div>

      <!-- Tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="art in filteredArticles"
          :key="art.slug"
          class="bg-[#11141c] border border-green-700 rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col justify-between"
        >
          <div>
            <span class="text-xs text-green-500 mb-1 block">{{ art.date }}</span>
            <h3 class="text-xl font-bold text-green-300 mb-2">{{ art.title }}</h3>
            <p class="text-sm text-white mb-3">{{ art.summary }}</p>
          </div>
          <RouterLink
            :to="`/articulos/${art.slug}`"
            class="mt-auto inline-block text-sm text-black bg-green-400 hover:bg-green-500 px-4 py-1 rounded font-bold transition self-start"
          >
            Leer más
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Botón scroll top SIEMPRE visible -->
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition z-50"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const articles = ref([
  {
    slug: 'hacktivismo-italia-2025',
    title: 'La nueva ofensiva hacktivista de 2025: ataque de NoName057(16) a infraestructuras italianas',
    date: '2025-06-01',
    year: '2025',
    summary: 'Analizamos el ataque hacktivista del grupo prorruso NoName057(16) a infraestructuras italianas y sus consecuencias.'
  }
])

const selectedYear = ref('')

const uniqueYears = computed(() => [...new Set(articles.value.map(a => a.year))])

const filteredArticles = computed(() =>
  articles.value.filter(a => !selectedYear.value || a.year === selectedYear.value)
)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
select {
  color: #9ae6b4;
}
</style>