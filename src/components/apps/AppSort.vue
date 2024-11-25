<script setup lang="ts">
import { useSort } from '@/composables/useSort'
import { SortTypeList } from '@/models/sort.model'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { state } = useSort()
const sortTypeList = SortTypeList
</script>

<template>
  <div class="flex items-center">
    <label for="sort" class="mr-2">{{ t('apps.sortedBy') }}:</label>
    <select
      class="w-32 rounded-full border border-gray-400 p-2"
      id="sort"
      name="sort"
      v-model="state"
    >
      <option v-for="sort in sortTypeList" :value="sort" :key="sort">
        {{ t(`apps.${sort}`) }}
      </option>
    </select>
  </div>
</template>
