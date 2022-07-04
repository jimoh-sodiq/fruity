<script setup lang="ts">

</script>

<template>
  <main
    class="w-screen select-none h-screen overflow-hidden relative flex flex-col items-center justify-center text-center"
  >
    <img
      src="@/assets/images/6.jpg"
      class="object-contain absolute top-0 left-0 overflow-hidden"
    />
    <div class="bg-black opacity-50 z-20 absolute top-0 left-0 w-full h-full" />

    <h1
      class="text-[60px] z-50 font-extrabold text-purple-600 font-serif opacity-1"
    >
      Welcome to Fruity
    </h1>
    <h1 class="text-[45px] z-50 font-extrabold text-green-500 font-serif">
      Built with graphql and vue-apollo
    </h1>
    <router-link
      :to="{ name: 'fruits' }"
      class="z-50 bg-purple-500 py-2 px-6 text-gray-50 font-semibold text-lg rounded-full mt-5 cursor-pointer hover:scale-105 duration-300 transition-[scale]"
    >
      View Available Fruits
    </router-link>
  </main>
</template>
