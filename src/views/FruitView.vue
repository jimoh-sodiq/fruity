<script lang="ts" setup>
import { computed } from "vue";
import { useQuery, useLazyQuery } from "@vue/apollo-composable";
import { ALL_FRUITS_QUERY, SINGLE_FRUIT_QUERY } from "@/graphql";
import Loader from "../components/Loader.vue";
import { ArrowLeftIcon, TrashIcon, PencilIcon } from "@heroicons/vue/outline";
import Modal from "../components/Modal.vue";
import { useModal } from "../composables/useModal";

const { result: fruits, error, loading } = useQuery(ALL_FRUITS_QUERY);

const {
  result: uniqueFruit,
  error: fruitError,
  loading: fruitLoading,
  load: fetchFruitInfo,
  variables,
} = useLazyQuery(SINGLE_FRUIT_QUERY, { id: "" });

const allFruits = computed(() => {
  return fruits.value?.fruits ?? [];
});

const singleFruit = computed(() => {
  return uniqueFruit.value.fruit ?? {};
});
const { modalIsOpen, openModal, closeModal } = useModal();

function selectFruit(id: any) {
  console.log(id);
  variables.value = {
    id
  };
  openModal()
}
</script>
<template>
  <div class="relative">
    <router-link
      :to="{ name: 'home' }"
      class="z-40 px-4 flex items-center justify-center gap-x-2 whitespace-nowrap py-2 bg-purple-500 outline-none fixed top-8 rounded-full cursor-pointer font-semibold text-white right-10"
      ><ArrowLeftIcon class="w-5" /> <span>Go back</span></router-link
    >
    <div
      v-if="loading"
      class="w-screen h-screen overflow-hidden flex items-center justify-center"
    >
      <Loader>Fetching fruits</Loader>
    </div>
    <p v-else-if="error">{{ error?.message }}</p>
    <div class="mt-20" v-else>
      <div class="w-full flex items-center justify-center">
        <button
          class="my-6 whitespace-nowrap text-center gap-x-2 flex items-center justify-center mx-auto px-9 py-3 font-semibold text-lg rounded-full cursor-pointer bg-rose-600 hover:bg-opacity-90 text-gray-100"
        >
          <span> Add new Fruit </span>
        </button>
      </div>

      <div
        class="max-w-[1800px] mx-auto text-center text-lg text-gray-600 font-semibold font-mono mb-10"
      >
        <h1>Click on any fruit to see more info</h1>
        <h1>Click on the pen icon to edit the fruit</h1>
        <h1>Click on the trash icon to delete the fruit</h1>
      </div>
      <div class="flex gap-x-12 px-6 max-w-[1800px] mx-auto">
        <div class="flex-col gap-12 hidden md:flex">
          <img
            src="@/assets/images/1.jpg"
            class="rounded-full w-[200px] h-[200px] object-cover"
          />
          <img
            src="@/assets/images/2.jpg"
            class="rounded-full w-[200px] h-[200px] object-cover"
          />
          <img
            src="@/assets/images/3.jpg"
            class="rounded-full w-[200px] h-[200px] objcet-cover"
          />
          <img
            src="@/assets/images/4.jpg"
            class="rounded-full w-[200px] h-[200px] objcet-cover"
          />
          <img
            src="@/assets/images/5.jpg"
            class="rounded-full w-[200px] h-[200px] objcet-cover"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grow gap-6">
          <div
            class="bg-gray-100 relative hover:bg-gray-200 rounded-md p-2 cursor-pointer gap-y-2"
            v-for="fruit in allFruits"
            @click="selectFruit(fruit.id)"
            :key="fruit.id"
          >
            <div
              class="absolute gap-x-2 top-2 right-3 flex items-center justify-center"
            >
              <TrashIcon class="w-5 text-gray-400 hover:text-gray-700" />
              <PencilIcon class="w-5 text-gray-400 hover:text-gray-700" />
            </div>
            <h1 class="text-xl font-semibold text-green-500 font-mono">
              {{ fruit.fruit_name }}
            </h1>
            <h1>
              <span class="font-semibold text-gray-600">family: </span
              >{{ fruit.family }}
            </h1>
            <h1>
              <span class="font-semibold text-gray-600">origin: </span
              >{{ fruit?.origin }}
            </h1>
          </div>
        </div>
      </div>

      <div class="w-full flex items-center justify-center">
        <button
          class="my-10 whitespace-nowrap mt-14 text-center mx-auto px-9 py-3 font-semibold text-lg rounded-full cursor-pointer bg-rose-600 hover:bg-opacity-90 text-gray-100"
        >
          Add new Fruit
        </button>
      </div>
      <Modal v-if="modalIsOpen" @closeModal="closeModal">
        {{ singleFruit?.fruit_name }}
      </Modal>
      <div class="w-full">
        <img src="@/assets/images/fruitfooter.png" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style></style>
