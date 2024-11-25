<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const emits = defineEmits(['modal-close'])
const props = defineProps({
  isOpen: Boolean,
})

const target = ref(null)

onMounted(() => document.addEventListener('keydown', onEscapeClick))

onUnmounted(() => {
  document.removeEventListener('keydown', onEscapeClick)
  document.body.style.overflow = 'auto'
})

watch(
  () => props.isOpen,
  () => {
    if (props.isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  },
)

const onEscapeClick = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) emits('modal-close')
}

onClickOutside(target, () => emits('modal-close'))
</script>

<template>
  <div v-if="isOpen" class="fixed start-0 top-0 z-50 h-full w-full bg-black/50">
    <div class="flex h-full w-full items-center justify-center">
      <div class="relative w-1/2 rounded-sm bg-white p-8 shadow-md lg:w-1/3" ref="target">
        <header>
          <slot name="header" />
        </header>
        <div>
          <slot name="body" />
        </div>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </div>
</template>
