<template>
  <div class="navbar flex justify-around items-center py-4 shadow-md">
    <!-- <div class="logo">
      <img src="@/assets/logo.png" alt="" class="w-5 h-5" />
    </div>

    <div class="buttons flex items-center">
      <button class="action-norm text-gray-400">
        Login
      </button>

      <button class="text-white ml-3 action-norm action-filled">
        Register
      </button> 
      </div>
      -->
    <div class="game-logo flex justify-around items-center">
      <img alt="Vue logo" src="../assets/logo.png" class="w-5 h-5" />
      
      <div class="clock mx-5">
        <p class="time">{{ digitalClock }}</p>
      </div>
    </div>

    <img alt="Vue logo" src="../assets/logo.png" class="w-5 h-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { formatTime } from "@/utils/helpers";

export default defineComponent({
  name: "Navbar",
  components: {},
  setup() {

    const digitalClock = ref("");
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const updateTime = () => {
      var cd = new Date();
      const time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
      const date =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];

      digitalClock.value = time;
    };

    const timerID = setInterval(updateTime, 1000);

    const zeroPadding = (num: number, digit: number) => {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    };

    

    return {
      formatTime,
      digitalClock,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  background-color: black;
  color: #fff;

  .game-logo {
    .clock {
      font-family: "Share Tech Mono", monospace;
      color: #ffffff;
      color: #daf6ff;
      text-shadow: 0 0 20px rgba(10, 175, 230, 1),
        0 0 20px rgba(10, 175, 230, 0);
      .time {
        letter-spacing: 0.05em;
        font-size: 20px;
        padding: 5px 0;
      }
    }
  }
}
</style>
