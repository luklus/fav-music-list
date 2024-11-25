<script setup lang="ts">
import enFlag from '@/assets/en.png'
import plFlag from '@/assets/pl.png'
import { useI18n } from 'vue-i18n'
const { locale: currentLocale, availableLocales } = useI18n()

const changeLocaleHandler = (selectedLocale: string) => {
  currentLocale.value = selectedLocale
}
</script>

<template>
  <div>
    <ul class="flex items-center justify-center gap-4 py-4">
      <li v-for="locale in availableLocales" :key="locale">
        <button
          type="button"
          class="flex items-center justify-center rounded-full border p-0.5 transition-colors"
          :class="currentLocale === locale ? 'border-indigo-600' : 'border-white'"
          @click="changeLocaleHandler(locale)"
        >
          <img v-if="locale === 'en'" :src="enFlag" alt="Great Britaine Flag" width="32" />
          <img v-else :src="plFlag" alt="Polish Flag" width="32" />
        </button>
      </li>
    </ul>
  </div>
</template>
