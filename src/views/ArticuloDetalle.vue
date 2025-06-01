<template>
  <div class="min-h-screen bg-[#0c0f13] text-green-400 font-mono p-6">
    <div class="max-w-3xl mx-auto">
      <RouterLink to="/articulos" class="text-green-400 hover:underline mb-4 block">← Volver a artículos</RouterLink>
      <h1 class="text-3xl font-bold text-green-300 mb-4">{{ title }}</h1>
      <div class="prose prose-invert max-w-none" v-html="content" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const slug = route.params.slug
const title = ref('')
const content = ref('')

onMounted(async () => {
  try {
    const md = await import(`../articulos/${slug}.md?raw`)
    content.value = marked.parse(md.default)
    title.value = md.default.split('\n').find(line => line.startsWith('# ')).replace(/^# /, '')
  } catch (err) {
    content.value = '<p class="text-red-500">Artículo no encontrado.</p>'
  }
})
</script>

<style scoped>
.prose-invert :is(h1, h2, h3, p, ul, ol, a) {
  color: #e6ffe6;
}
</style>
