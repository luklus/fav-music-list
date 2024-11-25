import { GridTypeList } from '@/models/grid.model'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

const GRID_STORAGE_NAME = 'GRID'
const state = useStorage<GridTypeList>(GRID_STORAGE_NAME, GridTypeList.LIST)

export const useGrid = () => {
  const setGrid = (gridType: GridTypeList) => {
    state.value = gridType
  }

  const isGridType = computed(() => state.value === GridTypeList.GRID)

  return {
    state,
    isGridType,
    setGrid,
  }
}
