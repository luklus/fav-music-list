import { SortTypeList } from '@/models/sort.model'
import { useStorage } from '@vueuse/core'

const SORT_STORAGE_NAME = 'SORT'
const state = useStorage<SortTypeList>(SORT_STORAGE_NAME, SortTypeList.ID)

export const useSort = () => {
  const setSort = (sortType: SortTypeList) => {
    state.value = sortType
  }

  return {
    state,
    setSort,
  }
}
