<template>
  <div class="jackpot flex flex-col items-center">
    <p class="text-yellow-500 font-bold uppercase">We have a winner</p>
    <p class="text-2xl text-white font-extrabold uppercase">JACKPOT</p>
    <h3 class="text-white font-bold text-4xl">N123,456</h3>
    <p class="text-yellow-500 uppercase">ticket #0000 -unit unit-name</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Jackpot",
});
</script>

<style lang="scss" scoped>
.jackpot{

}
</style>
