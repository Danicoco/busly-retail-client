<template>
  <div
    class="no-more-bet flex flex-col justify-center items-center"
  >
    <p class="game-text uppercase text-5xl text-yellow-500">
      <span> game is about to begin </span>
    </p>
    <p class="mb-10 capitalize  text-green-100 "><span> no more bets </span></p>
    <img
      src="https://c.tenor.com/vVKKGHibh2kAAAAC/undefeated-undefeated-in-bets.gif"
      alt=""
      srcset=""
    />

    
    <div class="announcements w-full mt-10 mb-0">
      <Announcements />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import Announcements from "@/components/Announcements.vue";
import route from "@/router";

export default defineComponent({
  name: "NoMoreBet",
    components: {
    Announcements,
  },
  setup() {
    onMounted(async () => {
      setTimeout(() => {
        goToGame();
        console.log("set time to play game ");
      }, 10000);
    });

    const goToGame = () => {
      route.push("/game");
      console.log("Game time");
    };
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
.no-more-bet {
  background: var(--blue);
  padding-top: 100px;

  p {
    &:first-child {
      // width: 400px;
      // height: 80px;
      width: 600px;
      overflow: hidden;
      font-style: italic;

      span {
        position: relative;
        -webkit-animation: scroll 15s infinite linear;
        -moz-animation: scroll 15s infinite linear;
        -o-animation: scroll 15s infinite linear;
        animation: scroll 15s infinite linear;
      }
    }

    &:nth-child(2) {
      width: 100px;
      overflow: hidden;

      span {
        position: relative;
        white-space: nowrap;
        height: 100%;
        margin: 0;
        line-height: 20px;
        text-align: left;
        -webkit-animation: betsScroll 2s infinite linear;
        -moz-animation: betsScroll 2s infinite linear;
        -o-animation: betsScroll 2s infinite linear;
        animation: betsScroll 2s infinite linear;
      }
    }
  }
  img {
    // border: 1px solid red;
  }
}

@keyframes scroll {
  0% {
    left: 400px;
  }
  100% {
    left: -400px;
  }
}
@-webkit-keyframes scroll {
  0% {
    left: 400px;
  }
  100% {
    left: -400px;
  }
}

@keyframes betsScroll {
  0% {
    left: 150px;
  }
  100% {
    left: -150px;
  }
}
@-webkit-keyframes betsScroll {
  0% {
    left: 150px;
  }
  100% {
    left: -150px;
  }
}
</style>
