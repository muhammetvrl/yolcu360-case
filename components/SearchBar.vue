<template>
    <div class="mb-5 flex justify-start items-center gap-3 flex-col md:flex-row">
        <input  name="title" @input="$emit('filters', $event)" class="input w-full md:w-auto"
            placeholder="Kitap arayın">
        <input name="author" @input="$emit('filters', $event)" class="input w-full md:w-auto"
            placeholder="Yazar arayın">
    </div>
</template>