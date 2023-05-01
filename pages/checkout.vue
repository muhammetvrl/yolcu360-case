<template>
    <section class="bg-gray-100 h-screen py-8">
        <div class="container">
            <div v-if="basket.length > 0">
                <div class="flex gap-3 justify-center md:justify-between flex-col md:flex-row md:items-center shadow-md bg-white rounded-lg p-8 my-4"
                    v-for="item in basket" :key="item.id">
                    <div class="w-full md:w-[30%]">
                        <h1 class="text-xl font-bold">{{ item.title }}</h1>
                        <span>{{ item.author }}</span>
                    </div>
                    <span class="text-xl text-red-500">{{ item.price * item.quantity }} TL</span>
                    <span class="text-xl text-red-500">Adet : {{ item.quantity }}</span>
                    <button @click="deleteBasket(item.id)"
                        class="py-2 px-4 bg-transparent border border-black rounded-xl flex justify-center items-center gap-1">
                        <Icon size="1.5em" name="solar:trash-bin-minimalistic-bold" />Sil
                    </button>
                </div>
                <hr class="h-1 bg-primary" />
                <div class="text-lg flex justify-end gap-2 py-4">
                    Toplam Adet : <b> {{ totalQuantity }}</b>
                    Toplam TL: <b>{{ total }} TL</b>
                </div>
            </div>
            <p v-else>Sepetiniz boş</p>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '~/store/checkout'
const store = useCheckoutStore()
const { basket } = storeToRefs(store)
const { deleteBasket } = store;
const total = computed(() => basket.value.reduce((total, product) => total + (product.price * product.quantity), 0))
const totalQuantity = computed(() => basket.value.reduce((total, product) => total + product.quantity, 0))
</script>