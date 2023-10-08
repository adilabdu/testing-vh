<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const routes = [
  { title: "h-screen", name: "VH" },
  { title: "h-[100svh]", name: "SVH" },
  { title: "HTML Full", name: "HTML Full" },
]

const active = computed(() => route.name)
</script>

<template>

  <div class="w-full flex items-center justify-center h-fit">
    <ul class="grid p-1 m-2 grid-cols-3 place-items-center relative w-96 h-12 bg-gray-200 rounded-[10px]">
      <li
        v-for="(route, r) in routes"
        :key="r"
        class="col-span-1 rounded-[6px] w-full h-full flex items-center justify-center"
        :class="{ 'bg-white shadow-sm': route.name === active }"
      >
        <RouterLink class="w-full h-full grid place-items-center" :to="{ name: route.name }">
          <h3 class="font-bold text-xs text-gray-500 text-center">{{ route.title }}</h3>
        </RouterLink>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>