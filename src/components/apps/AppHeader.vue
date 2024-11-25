<script setup lang="ts">
import logo from '@/assets/logo.png'
import AppLang from '@/components/apps/AppLang.vue'
</script>

<template>
  <header class="flex items-center justify-between py-8">
    <div>
      <RouterLink to="/">
        <img :src="logo" alt="Logo" />
      </RouterLink>
    </div>

    <AppLang class="hidden md:block" />
  </header>
</template>
