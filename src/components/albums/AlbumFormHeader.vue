<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconClose from '../icons/IconClose.vue'

const { t } = useI18n()

defineEmits(['closeAlbumForm'])
</script>
<template>
  <header class="relative">
    <h3 class="text-center text-2xl md:text-start">{{ t('albums.addNewAlbum') }}</h3>

    <button
      @click="$emit('closeAlbumForm')"
      class="absolute end-0 top-0 flex items-center justify-center rounded-sm bg-gray-200 p-1 transition-colors hover:text-red-400"
      type="button"
    >
      <IconClose class="size-6" />
    </button>
  </header>
</template>
