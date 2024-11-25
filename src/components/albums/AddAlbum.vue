<script setup lang="ts">
import AppModal from '@/components/apps/AppModal.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AlbumForm from './AlbumForm.vue'
import AlbumFormHeader from './AlbumFormHeader.vue'

const { t } = useI18n()
const isFormSectionOpened = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const isModalOpened = ref(false)

const closeAddAlbumModal = () => {
  isModalOpened.value = false
}

const openAddAlbumModal = () => {
  isModalOpened.value = true
}

const hideFormSection = () => {
  isFormSectionOpened.value = false
}

const showFormSection = () => {
  isFormSectionOpened.value = true
}
</script>

<template>
  <section>
    <button
      @click="isLargeScreen ? openAddAlbumModal() : showFormSection()"
      class="md:justify-start-start flex w-full items-center justify-center rounded-sm border border-black bg-black px-8 py-4 text-white transition-colors md:w-fit md:bg-white md:text-black"
      v-if="!isFormSectionOpened"
    >
      <IconPlus class="mr-2" />
      {{ t('albums.addNewAlbum') }}
    </button>

    <section class="my-8" v-if="isFormSectionOpened">
      <AlbumFormHeader @close-album-form="hideFormSection" />
      <AlbumForm @add-album-form-submitted="hideFormSection" />
    </section>

    <Teleport to="body">
      <AppModal :isOpen="isModalOpened" @modal-close="closeAddAlbumModal">
        <template #header>
          <AlbumFormHeader @close-album-form="closeAddAlbumModal" />
        </template>
        <template #body>
          <AlbumForm @add-album-form-submitted="closeAddAlbumModal" />
        </template>
      </AppModal>
    </Teleport>
  </section>
</template>
