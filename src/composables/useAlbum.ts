import type { Album } from '@/models/albums.model'
import { useStorage } from '@vueuse/core'

const ALBUMS_STORAGE_NAME = 'ALBUMS'
const state = useStorage<Album[]>(ALBUMS_STORAGE_NAME, [])

export const useAlbum = () => {
  const addAlbum = (album: Album) => {
    state.value = [...state.value, album]
  }

  const deleteAlbum = (albumId: string) => {
    state.value = state.value.filter((album) => album.id !== albumId)
  }

  const toggleAlbumFavouriteStatus = (albumId: string) => {
    state.value = state.value.map((album) =>
      album.id === albumId ? { ...album, favourite: !album.favourite } : album,
    )
  }

  return {
    state,
    addAlbum,
    deleteAlbum,
    toggleAlbumFavouriteStatus,
  }
}
