import { defineStore } from 'pinia'
import { PersistOptions } from 'pinia-plugin-persist'

export interface IBook {
    id: number;
    title: string;
    author: string;
    coverImageUrl: string;
    price: number;
}

export const useBookStore = defineStore('bookStore', () => {
    const books = ref<Array<IBook>>([])

    function setBook(payload: IBook[]) {
        books.value = payload
    }

    return { setBook, books }
}, {
    persist: {
        storage: persistedState.localStorage,
    } as unknown as PersistOptions
})