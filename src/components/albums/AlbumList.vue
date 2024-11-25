<script setup lang="ts">
import AlbumCard from '@/components/albums/AlbumCard.vue'

import { useAlbum } from '@/composables/useAlbum'
import { useGrid } from '@/composables/useGrid'
import { useSort } from '@/composables/useSort'

import { SortTypeList } from '@/models/sort.model'

import { computed } from 'vue'

const { isGridType } = useGrid()
const { state: albums } = useAlbum()
const { state: sort } = useSort()

const sortedAlbums = computed(() => {
  return albums.value.slice().sort((a, b) => {
    switch (sort.value) {
      case SortTypeList.DATE:
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case SortTypeList.ID:
        return a.id.localeCompare(b.id)
      case SortTypeList.TITLE:
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })
})
</script>

<template>
  <ul class="grid grid-cols-1 gap-4" :class="{ 'grid-cols-2 md:grid-cols-5': isGridType }">
    <AlbumCard v-for="album in sortedAlbums" :key="album.id" :album="album" />
  </ul>
</template>
