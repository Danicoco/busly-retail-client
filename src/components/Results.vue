<template>
  <div class="results px-4">
    <div class="results-body flex flex-col">
      <div class="main py-4 flex justify-around items-center">
        <div class="logo">
          <img alt="Vue logo" src="../assets/busly_logo.png" class="w-5 h-5" />
        </div>
        <div class="event">
          <p class="text-xl text-white font-bold"> Round name: #gfDVSN  </p>
        </div>
        <div></div>
      </div>
      <div class="results mt-12">
        <DetailedResults />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import DetailedResults from "@/components/DetailedResults.vue";
import Jackpot from "@/components/Jackpot.vue";
import Ticker from "@/components/Ticker.vue";
import route from "@/router";


export default defineComponent({
  name: "Results",
  components: {
    DetailedResults,
  },

  setup() {
  onMounted(async () => {
      // setTimeout(() => {
      //   goToHome()
      //   console.log("reset game ")
      // }, 30000)
    });

    const goToHome = () => {
      route.push('/')
      console.log("Re Start time")
    }
 }
});
</script>

<style lang="scss" scoped>
.results {
  background: var(--blue);
  // height: 100vh;

  &-body {
    padding: 0;
    margin: 0;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: flex-start;
    gap: 2rem;
    margin: 0;
  }
}
</style>
