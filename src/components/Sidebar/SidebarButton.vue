<template>
  <div
    class="w-full rounded transition-all hover:text-gray-900 text-gray-700 duration-100 hover:bg-gray-200"
    @click="$emit('sidebarbuttonclicked')"
  >
    <router-link v-if="route" :to="route">
      <button
        class="py-1 pl-2 pr-2 w-full hover:text-gray-900 hover:bg-gray-200 text-gray-700 text-base text-left flex items-center"
      >
        {{ label }}
        <div
          v-if="tagNumber"
          class="ml-auto rounded-full bg-brand-blue-500 text-white font-bold h-6 w-6 flex items-center justify-center"
        >
          <p class="text-xs">{{ tagNumber }}</p>
        </div>
      </button>
    </router-link>
    <button v-else
        class="py-1 pl-2 pr-2 w-full hover:text-gray-900 hover:bg-gray-200 text-gray-700 text-base text-left flex items-center"
      >
        {{ label }}
        <div
          v-if="tagNumber"
          class="ml-auto rounded-full bg-brand-blue-500 text-white font-bold h-6 w-6 flex items-center justify-center"
        >
          <p class="text-xs">{{ tagNumber }}</p>
        </div>
      </button>
  </div>
</template>

<script>
export default {
  props: ["label", "tagNumber", "route"],
};
</script>

<style>
</style>