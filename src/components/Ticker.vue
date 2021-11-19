<template>
  <div class="ticker">
    <p class="text-2xl text-white font-bold ">Ticker</p>
    <div class="requirements py-3 flex flex-col">
      <p class="font-bold uppercase">Requirements</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
        incidunt eveniet omnis quia corrupti voluptates veniam saepe dolor
        debitis dolorum, quis, error atque, fugiat tempora ea recusandae. Fuga,
        inventore?
      </p>
    </div>
    <div class="ticker-details flex justify-around my-5 py-2">
      <p>Current identifier:</p>

      <p class="flex flex-col justify-items-start">
        <span>Maximum stake</span>
        <span>Currency: N</span>
      </p>

      <p class="flex flex-col justify-items-start">
        <span>Maximum price per bet: N300 </span>
        <span>Currency: N</span>
      </p>
      <div class="jackpot">
        <p>Previous Jackpot</p>
        <p>Amount: N45809</p>
        <p>Ticket Number: #1294gs121</p>
        <p>
          <span> 12/12/2021</span>
          <span>12:00 PM</span>
        </p>
        <p>Unit: 5</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ticker",
});
</script>

<style lang="scss" scoped>
.ticker {
  .requirements {
    color: gray;
  }

  &-details {
    color: gray;
  }
}
</style>
