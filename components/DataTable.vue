<template>
    <div class="overflow-auto" v-if="value && value.length > 0">
        <table class="w-full  table-auto border-collapse text-center [&>*:nth-child(even)]:bg-secondary [&>*:nth-child(even)]:text-white">
            <tr>
                <th class="bg-primary p-4" v-for="key in Object.keys(value[0])" :key="key">{{ key.toUpperCase() }}</th>
                <th class="bg-primary">Aksiyon</th>
            </tr>
            <tr class=" border border-black " v-for="item in  value" :key="item.id">
                <td class="p-4 border border-black text-center" :class="regex.test(item[key]) ? 'flex justify-center items-center border-none' : null" v-for="key in Object.keys(item)" :key="key">
                    <img width="100" v-if="regex.test(item[key])" :src="item[key]">
                    <span v-else>{{ item[key] }}</span>
                </td>
               <td class="text-xs p-2">
                <button @click="addBasket(item)"  class="py-2 px-4 bg-transparent border border-primary rounded-xl">Sepete Ekle</button>
               </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { useCheckoutStore } from '~/store/checkout'
const { value } = defineProps(['value'])
const { addBasket } = useCheckoutStore()
const regex = /\.(png|jpg|jpeg)$/i;
</script>