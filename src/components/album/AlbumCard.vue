<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

import { useAlbum } from '@/composables/useAlbum'
import { useGrid } from '@/composables/useGrid'

import type { Album } from '@/models/albums.model'

const { deleteAlbum, toggleAlbumFavouriteStatus } = useAlbum()
const { isGridType } = useGrid()

const props = defineProps<{ album: Album }>()

const deleteAlbumHandler = () => {
  deleteAlbum(props.album.id)
}

const toogleAlbumFavouriteStatusHandler = () => {
  toggleAlbumFavouriteStatus(props.album.id)
}
</script>

<template>
  <li
    class="flex items-center justify-between rounded-sm border border-gray-400 bg-white hover:border-gray-800"
    :class="{ 'flex-col': isGridType }"
  >
    <div class="p-4" :class="{ 'order-2 flex h-24 items-center justify-center': isGridType }">
      {{ album.title }}
    </div>

    <div
      class="flex items-center gap-4 p-4"
      :class="isGridType ? 'w-full justify-between' : 'justify-center'"
    >
      <button
        :class="
          props.album.favourite
            ? 'text-indigo-600 hover:text-red-600'
            : 'text-gray-400 hover:text-indigo-600'
        "
        type="button"
        @click="toogleAlbumFavouriteStatusHandler"
      >
        <IconStar />
      </button>
      <button class="text-gray-400 hover:text-red-600" type="button" @click="deleteAlbumHandler">
        <IconTrash />
      </button>
    </div>
  </li>
</template>
