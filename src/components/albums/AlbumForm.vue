<script setup lang="ts">
import { useAlbum } from '@/composables/useAlbum'
import { v4 as uuid } from 'uuid'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'

const emits = defineEmits(['addAlbumFormSubmitted'])

const { t } = useI18n()
const { addAlbum } = useAlbum()

const schema = yup.object({
  title: yup.string().required(),
})

const { defineField, errors, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})
const [title, titleAttrs] = defineField('title')

const onAlbumSubmit = handleSubmit(async (values) => {
  addAlbum({
    createdAt: new Date(),
    favourite: false,
    id: uuid(),
    title: values.title,
  })

  resetForm()
  emits('addAlbumFormSubmitted')
})
</script>

<template>
  <form @submit.prevent="onAlbumSubmit">
    <div class="my-8 flex flex-col">
      <input
        :class="errors.title ? 'border-red-400' : 'border-gray-400'"
        :placeholder="t('albums.title')"
        class="border p-2"
        type="text"
        v-model.trim="title"
        v-bind="titleAttrs"
      />
      <span class="text-red-500" v-if="errors.title">
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
