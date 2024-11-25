<script setup lang="ts">
import { useAlbum } from '@/composables/useAlbum'
import { v4 as uuid } from 'uuid'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { addAlbum } = useAlbum()

const emits = defineEmits(['addAlbumFormSubmitted'])
const title = ref('')
const titleError = ref(false)

const onAlbumSubmit = () => {
  if (!title.value) {
    titleError.value = true
    return
  }

  addAlbum({
    createdAt: new Date(),
    favourite: false,
    id: uuid(),
    title: title.value,
  })

  emits('addAlbumFormSubmitted')
}
</script>

<template>
  <form @submit.prevent="onAlbumSubmit">
    <div class="my-8 flex flex-col">
      <input
        :class="titleError ? 'border-red-400' : 'border-gray-400'"
        :placeholder="t('albums.title')"
        class="border p-2"
        type="text"
        v-model.trim="title"
      />
      <span class="text-red-500" v-if="titleError">
        {{ t('albums.albumTitleRequired') }}
      </span>
    </div>
    <button
      class="flex w-full items-center justify-center rounded-sm bg-indigo-600 px-8 py-4 text-white transition-colors hover:bg-indigo-800 md:w-fit md:justify-start"
      type="submit"
    >
      {{ t('albums.addAlbum') }}
    </button>
  </form>
</template>
