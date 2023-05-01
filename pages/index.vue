<template>
  <div class="container">
    <SearchBar @filters="handleFilters" />
    <DataTable :value="books" />
  </div>
</template>

<script setup>
const books = ref([])
const titleFilter = ref('')
const authorFilter = ref('')
const appConfig = useRuntimeConfig()

const { data } = await useFetch(`${appConfig.public.apiBase}/books`)

onMounted(() => {
  books.value = data.value;
});

function handleFilters(e) {
  const { name, value } = e.target;

  if (name === "title") {
    titleFilter.value = value
  } else {
    authorFilter.value = value
  }
  
  books.value = data.value.filter(book => book.title.includes(titleFilter.value) && book.author.includes(authorFilter.value))
}

</script>