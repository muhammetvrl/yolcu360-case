<template>
  <div class="container">
    <SearchBar @filters="handleFilters" />
    <DataTable :value="books" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBookStore } from '~/store/books'
const books = ref([])
const titleFilter = ref('')
const authorFilter = ref('')
const appConfig = useRuntimeConfig()

const store = useBookStore()
const { books : bookStore } = storeToRefs(store)
const { setBook } = store;

const { data } = await useFetch(`${appConfig.public.apiBase}/books`)

onMounted(() => {
  books.value = data.value;
  setBook(data.value)
});

function handleFilters(e) {
  const { name, value } = e.target;

  if (name === "title") {
    titleFilter.value = value
  } else {
    authorFilter.value = value
  }

  books.value = bookStore.value.filter(book => book.title.includes(titleFilter.value) && book.author.includes(authorFilter.value))
}

</script>