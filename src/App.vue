<script setup lang="ts">
import AppFooter from '@/components/apps/AppFooter.vue'
import AppHeader from '@/components/apps/AppHeader.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="container min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: 'url(/background.svg)' }"
  >
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
