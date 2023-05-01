import { PiniaPlugin, defineStore } from 'pinia'
import persist, { PersistOptions } from 'pinia-plugin-persist'

export interface IBook {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  price: number;
  quantity: number
}

export const useCheckoutStore = defineStore('checkoutStore', () => {
  const basket = ref<Array<IBook>>([])

  function addBasket(payload: IBook) {
    const productIndex = basket.value.findIndex((p) => p.id === payload.id);

    if (productIndex !== -1) {
      const currentProduct = basket.value[productIndex];
      basket.value[productIndex] = { ...currentProduct, quantity: currentProduct.quantity + 1 };
    } else {
      basket.value.push({ ...payload, quantity: 1 })
    }
  }

  function deleteBasket(id: number) {
    const filterBasket = basket.value.filter(item => item.id !== id)
    basket.value = filterBasket;
  }

  return { addBasket, deleteBasket, basket }
},{
  persist: {
    storage: persistedState.localStorage,
  } as unknown as PersistOptions
})