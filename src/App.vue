<script setup lang="ts">
import backgroundSource from '@/assets/background.svg'

import AppFooter from '@/components/apps/AppFooter.vue'
import AppHeader from '@/components/apps/AppHeader.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="container min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: 'url(' + backgroundSource + ')' }"
  >
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
