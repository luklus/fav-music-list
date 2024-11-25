<script setup lang="ts">
import IconGrid from '@/components/icons/IconGrid.vue'
import IconList from '@/components/icons/IconList.vue'

import { useGrid } from '@/composables/useGrid'
import { GridTypeList } from '@/models/grid.model'

const { state, setGrid } = useGrid()
const gridTypeList = GridTypeList
</script>

<template>
  <div>
    <ul class="flex items-center gap-4">
      <li v-for="grid in gridTypeList" :key="grid">
        <button @click="setGrid(grid)" :class="{ 'text-gray-400': grid !== state }">
          <IconGrid class="size-8" v-if="grid === gridTypeList.GRID" />
          <IconList class="size-8" v-else />
        </button>
      </li>
    </ul>
  </div>
</template>
