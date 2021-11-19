<template>
  <div class="game px-4">
    <div class="game-body">
      <div class="main flex flex-col">
        <div class="status flex justify-center items-center">
          <p class="text-yellow-500 my-4">Round Name: #1siqSWT5</p>
        </div>
        <div class="video"></div>
        <div class="logo">
          <img alt="Vue logo" src="../assets/logo.png" class="w-20 h-20" />
        </div>
      </div>
    </div>
    <Announcements />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ResultsTable from "@/components/ResultsTable.vue";
import Jackpot from "@/components/Jackpot.vue";
import Ticker from "@/components/Ticker.vue";
import Announcements from "@/components/Announcements.vue";
import route from "@/router";

export default defineComponent({
  name: "Game",
  components: {
    Announcements
},
  setup() {
    onMounted(() => {
      // setInterval(() => {
      //   currentImg.value = currentImg.value + 1;
      // }, 3000);

      setTimeout(() => {
        goToResults()
        console.log("set time to play game ")
      }, 60000)
    });
    const show = ref(true);
    const imgList = [
      "http://via.placeholder.com/350x150",
      "http://via.placeholder.com/350x151",
      "http://via.placeholder.com/350x152",
    ];

    const currentImg = ref(0);

    const goToResults = () => {
      route.push('/results')
      console.log("Game time")
    }

    return {
      show,
      imgList,
      currentImg,
    };
  },
});
</script>

<style lang="scss" scoped>
.game {
  border: 1px solid blue;
  background: var(--blue);
  height: 100vh;

  &-body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-start;
    gap: 2rem;

    padding: 0;
    margin: 0;
    border: 1px solid green;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: flex-start;
    gap: 2rem;

    // padding: 0;
    margin: 0;
    border: 1px solid red;
  }

  // .jackpot {
  //   width: 100%;
  //   overflow: hidden;
  //   visibility: hidden;
  //   margin: 0 auto;
  //   background: red;
  //   position: relative;
  //   animation: jackpotSlide 4s;
  //   // animation-duration: 4s;
  // animation-iteration-count: 4;
  //   animation-delay: -10s;

  //   @keyframes jackpotSlide {
  //     from {
  //       left: 200%;
  //       visibility: visible;
  //     }
  //     to {
  //       left: 0;
  //       visibility: visible;
  //     }
  //   }
  // }

  // .ticker {
  //   width: 100%;
  //   visibility: hidden;
  //   margin: 0 auto;
  //   background: red;
  //   position: relative;
  //   animation-delay: 50s;
  //   // animation: ticker infinite;
  //   // animation-duration: 4s;

  //   @keyframes ticker {
  //     from {
  //       left: 100px;
  //       visibility: visible;
  //     }
  //     to {
  //       left: 0;
  //       visibility: visible;
  //     }
  //   }
  // }

  .demo {
    width: 100%;
    visibility: hidden;
    margin: 0 auto;
    background: red;
    position: relative;
    animation: jackpotSlide infinite;
    animation-duration: 5s;

    @keyframes jackpotSlide {
      from {
        left: 100%;
        visibility: visible;
      }
      to {
        left: 0;
        visibility: visible;
      }
    }
  }

  // .jackpot {
  //   width: 500px;
  //   margin: 0 auto;
  //   background: red;
  //   position: relative;
  //   animation: myfirst 5s infinite;
  //   animation-direction: normal;

  //   @keyframes myfirst {
  //     0% {
  //       background: pink;
  //       left: 200px;
  //       top: 0px;
  //     }
  //     25% {
  //       background: yellow;
  //       left: 100px;
  //     }
  //     50% {
  //       background: blue;
  //       left: 50px;
  //     }
  //     75% {
  //       background: green;
  //       left: 20px;
  //     }
  //     100% {
  //       background: red;
  //       left: 0px;
  //     }
  //   }
  // }
}
</style>
