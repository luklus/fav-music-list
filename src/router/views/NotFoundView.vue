<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="mt-16 flex flex-col items-center justify-center">
    <h2 class="mb-4 text-8xl font-bold">404</h2>
    <h2 class="mb-4 text-2xl font-bold">{{ t('apps.notFound') }}</h2>
    <RouterLink class="hover:text-indigo-600" to="/">{{ t('apps.returnHome') }}</RouterLink>
  </main>
</template>
