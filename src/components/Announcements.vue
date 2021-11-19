<template>
  <div class="announcement  my-2 py-3">
    <div class="announcement_slider  py-2  flex items-center justify-between">
      <div class="jackpot flex items-center">
        <p class=" flex items-center uppercase">
          <span class="text-2xl font-medium"> JACKPOT Amount </span>
        </p>
        <h3 class="mx-2 flex items-center  text-white font-medium text-3xl">
          <span>🎉</span>
          <span> {{ formatCurrency("en-ng", 123456, "NGN") }} </span>
          <span>🎊</span>
        </h3>
      </div>
      <div class="ticker ml-24 flex justify-end">
        <p class="mx-2 flex text-white">
           Date: {{ date.toDateString().slice(0,15)}}
        </p>
        <p class="mx-2 flex text-white">
          Minimum stake: {{ formatCurrency("en-ng", 50, "NGN") }}
        </p>
        <p class="mx-2 flex text-white">
          Maximum stake: {{ formatCurrency("en-ng", 5000, "NGN") }}
        </p>
        <!-- <p class="flex text-white">
          
        Manimum stake: N50
        </p>
        <p class="flex text-white font-semibold">
          Previous Round
        </p>
        <p class="flex text-white">
          Cause of stop: Overheating
        </p>
        <p class="flex text-white">
          Bet Duration: 1.01x -1.99x
        </p>
        <p class="flex text-white">
          Bus color: Blue
        </p>
        <p class="flex text-white">
          Location: Kilimanjaro
        </p> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { formatCurrency, formatDate } from "@/utils/helpers";

export default defineComponent({
  name: "Announcements",
  components: {},
  setup() {
    const date = ref(new Date())
    return {
      formatCurrency,
      formatDate,

      date,
    };
  },
});
</script>

<style lang="scss" scoped>
.announcement {
  width: 100%;
  // height: 80px;
  overflow: hidden;
  background: #0c0a07;

  &_slider {
    position: relative;
    -webkit-animation: scroll 15s infinite linear;
    -moz-animation: scroll 15s infinite linear;
    -o-animation: scroll 15s infinite linear;
    animation: scroll 15s infinite linear;

    .jackpot {
      p {
        border: 2px solid goldenrod;
        color: goldenrod;
        border-radius: 5px;
        padding: 5px 7px;
        span {
          &:nth-child(2) {
            //     font-family: "Anton";
            //     // background: linear-gradient(to right, #FE900F 0%, #FBEB7C 100%);
            //     // -webkit-background-clip: text;
            //     // -webkit-text-fill-color: transparent;

            //     -webkit-text-fill-color: transparent;
            // -webkit-text-stroke-color: orange;
            // -webkit-text-stroke-width: 0.01rem;
          }
        }
        //       font-size: 2rem;
        // -webkit-text-fill-color: transparent;
        // -webkit-text-stroke-color: #717d29;
        // -webkit-text-stroke-width: 0.01rem;
      }
    }
  }
}

@keyframes scroll {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
@-webkit-keyframes scroll {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
// .announcement {
//   border: 1px solid blue;
//   width: 100%;
//   overflow: hidden;
//   visibility: hidden;
//   margin: 0 auto;
//   background: red;
//   position: relative;
//   animation: announcement infinite;
//   animation-duration: 3s;

//   @keyframes announcement {
//     from {
//       left: 100%;
//       visibility: visible;
//     }
//     to {
//       left: 0;
//       visibility: visible;
//     }
//   }
// }
</style>
