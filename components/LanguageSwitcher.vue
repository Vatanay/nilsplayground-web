<template>
  <div class="fixed top-4 right-4 z-50">

    <div class="bg-white shadow-md rounded-full px-3 py-1 flex items-center space-x-2">
      <button 
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="switchLanguage(locale.code)" 
        :class="{ 'font-bold': locale.code === locale.value }"
        class="text-sm hover:text-blue-600 transition-colors"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const router = useRouter()

function switchLanguage(lang) {
  setLocale(lang)
  
  const currentRoute = router.currentRoute.value
  router.replace({
    ...currentRoute,
    query: {
      ...currentRoute.query,
      _: Date.now()
    }
  })
}
</script>
