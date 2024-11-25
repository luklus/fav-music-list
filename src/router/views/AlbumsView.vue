<script setup lang="ts">
import AddAlbum from '@/components/albums/AddAlbum.vue'
import AlbumList from '@/components/albums/AlbumList.vue'
import AppGrid from '@/components/apps/AppGrid.vue'
import AppSort from '@/components/apps/AppSort.vue'
</script>

<template>
  <main>
    <AddAlbum />
    <hr class="my-8 h-0.5 bg-gray-400" />

    <div class="my-8 flex items-center justify-between">
      <AppSort />
      <AppGrid />
    </div>

    <div class="my-8">
      <AlbumList />
    </div>
  </main>
</template>
