<template>
    <div class="relative">
        <NuxtLink to="/checkout">
            <Icon size="3em" name="solar:cart-3-linear" />
            <span v-if="basket.length > 0"
                class="bg-primary text-white absolute -right-4 top-0 py-2 px-3 rounded-full text-xs">{{ basket.length
                }}</span>
        </NuxtLink>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCheckoutStore } from '~/store/checkout'
const { basket } = storeToRefs(useCheckoutStore())
</script>