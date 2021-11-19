<template>
  <div class="fixtures">
    <div
      class="fixtures-header flex justify-around items-center py-6 shadow-md"
    >
      <div class="game-logo flex justify-around items-center">
        <img alt="Vue logo" src="../assets/RapidPlayLogo.png" />

        <div class="clock mx-5">
          <p class="time">{{ min }} : {{ sec }}</p>
        </div>
      </div>

      <img alt="Vue logo" src="../assets/busly_logo.png" />
    </div>
    <div class="provider py-2 my-2 mx-4 flex justify-between items-center">
      <div class="providerLogo flex items-baseline">
        <img alt="Vue logo" src="../assets/busly_logo.png" />
        <p
          class="flex items-center mb-0 mx-3 text-xl text-white font-semibold "
        >
          Busly
          <span class="header-span mx-1 text-xs"> BY</span> S.E
        </p>
      </div>

      <div class="date flex items-center">
        <div class="clock">
          <p class="time text-5xl">{{ digitalClock }}</p>
        </div>
        <div class="next-bet mx-1 py-1 flex flex-col ">
          <p class="text-xs uppercase">next bet</p>
          <p class="text-xs ">{{ min }} : {{ sec }} GMT</p>
        </div>
      </div>
    </div>
    <div
      class="bet-on   mx-4 mb-10 px-8 py-4 flex flex-col justify-center items-center"
    >
      <div class="tables flex justify-center items-center">
        <div class="table-header">
          <p class="font-bold text-xs ">BET ON</p>
          <div class="table-header-items">
            <table>
              <tr>
                <td class="text-white">
                  <p class="cause_of_stop pb-3 font-medium">Cause of stop</p>
                </td>
              </tr>
              <tr>
                <td class="range ">
                  <p class="text-white font-medium">Bet on Duration</p>
                </td>
              </tr>
              <tr class="">
                <td class="no-range my-7">
                  <p class="my-7 text-white font-medium"></p>
                </td>
              </tr>
              <!-- <tr class="movement">
                <td class="text-white">No movement</td>
              </tr> -->
              <tr class="">
                <td class="colour">
                  <p class="text-white font-medium py-2 ">Bus color</p>
                </td>
              </tr>
              <tr>
                <td class="location ">
                  <p class="text-white font-medium py-2 ">Location</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="table-body">
          <div class="timer my-1 flex items-center">
            <p class="text-sm text-white font-medium uppercase">
              Bet closes in:
            </p>
            <span class=" ml-1" id="countDown"> {{ min }} : {{ sec }} </span>
          </div>
          <div class="table-body-items">
            <div class="round">
              <p class="text-white font-medium px-3">ROUND</p>
              <span class="round_number py-1 px-2 font-medium text-xl">01</span>
            </div>
            <table>
              <tr class="cause_of_stop">
                <td
                  @click="stopBus('overheating')"
                  :class="[activeStop === 1 ? 'active' : '']"
                >
                  <div id="stopBus" class="font-medium flex flex-col py-3">
                    <span class=""> Overheating </span>
                    <span> 5.36x </span>
                  </div>
                </td>
                <td
                  @click="stopBus('accident')"
                  :class="[activeStop === 2 ? 'active' : '']"
                >
                  <div id="stopBus" class="font-medium flex flex-col py-3">
                    <span>Accident</span>
                    <span> 4.52x </span>
                  </div>
                </td>
                <td
                  @click="stopBus('flattyre')"
                  :class="[activeStop === 3 ? 'active' : '']"
                >
                  <div id="stopBus" class="font-medium flex flex-col py-3">
                    <span class=""> Flat tyre </span>
                    <span> 5.66x </span>
                  </div>
                </td>
                <td
                  @click="stopBus('trafficofficer')"
                  :class="[activeStop === 4 ? 'active' : '']"
                >
                  <div id="stopBus" class="font-medium flex flex-col py-3">
                    <span> Traffic Officer </span>
                    <span> 7.81x </span>
                  </div>
                </td>
                <td
                  @click="stopBus('badroads')"
                  :class="[activeStop === 5 ? 'active' : '']"
                >
                  <div id="stopBus" class="font-medium flex flex-col py-3">
                    <span class=""> Bad Roads </span>
                    <span> 5.38x </span>
                  </div>
                </td>
              </tr>
              <tr class="">
                <td
                  @click="busDuration('1.01x -1.99x')"
                  :class="[activeDuration === 1 ? 'activeDuration ' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col ">
                    <span class="">1.01x -1.99x</span>
                    <span> 4.48x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('2.00x - 2.59x')"
                  :class="[activeDuration === 2 ? 'activeDuration' : '']"
                  class="bet_range"
                >
                  <div class="font-medium flex flex-col mt-5">
                    <span>2.00x - 2.59x</span> <span>2.59x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('2.60x - 3.59x')"
                  :class="[activeDuration === 3 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col mt-5">
                    <span class="">2.60x - 3.59x</span>
                    <span> 2.81x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('3.60x - 3.99x')"
                  :class="[activeDuration === 4 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col mt-5">
                    <span>3.60x - 3.99x</span> <span>4.03x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('4.00x - 4.59x')"
                  :class="[activeDuration === 5 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col mt-5">
                    <span class="">4.00x - 4.59x</span>
                    <span>8.97x</span>
                  </div>
                </td>
              </tr>
              <tr class="">
                <td
                  @click="busDuration('4.60x - 8.00x')"
                  :class="[activeDuration === 6 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col">
                    <span class="">4.60x - 8.00x</span>
                    <span> 5.78x </span>
                  </div>
                </td>
                <td
                  @click="busDuration('8.01x - 12.00x')"
                  :class="[activeDuration === 7 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col pb-1 mt-5">
                    <span>8.01x - 12.00x</span> <span>2.57x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('12.01x - 15.59x')"
                  :class="[activeDuration === 8 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col pb-1 mt-5">
                    <span class="">12.01x - 15.59x</span>
                    <span>4.12x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('15.60x - 20.00x')"
                  :class="[activeDuration === 9 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col pb-1 mt-5">
                    <span>15.60x - 20.00x</span> <span> 6.54x</span>
                  </div>
                </td>
                <td
                  @click="busDuration('NoMovement')"
                  :class="[activeDuration === 10 ? 'activeDuration' : '']"
                  class="bet_range  "
                >
                  <div class="font-medium flex flex-col pb-1 mt-5">
                    <span class=""> No Movement</span>
                    <span> 4.06x</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  @click="colourBus('yellow')"
                  :class="[activeColour === 1 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Yellow
                  </p>
                </td>
                <td
                  @click="colourBus('blue')"
                  :class="[activeColour === 2 ? 'active' : '']"
                >
                  <p class="py-2 font-medium">
                    Blue
                  </p>
                </td>
                <td
                  @click="colourBus('black')"
                  :class="[activeColour === 3 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Black
                  </p>
                </td>
                <td
                  @click="colourBus('red')"
                  :class="[activeColour === 4 ? 'active' : '']"
                >
                  <p class="py-2 font-medium">
                    Red
                  </p>
                </td>
                <td
                  @click="colourBus('green')"
                  :class="[activeColour === 5 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Green
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  @click="busLocation('kilimanjaro')"
                  :class="[activeLocation === 1 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Kilimanjaro
                  </p>
                </td>
                <td
                  @click="busLocation('lusaka')"
                  :class="[activeLocation === 2 ? 'active' : '']"
                >
                  <p class="py-2 font-medium">
                    Lusaka
                  </p>
                </td>
                <td
                  @click="busLocation('luanda')"
                  :class="[activeLocation === 3 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Luanda
                  </p>
                </td>
                <td
                  @click="busLocation('marrakesh')"
                  :class="[activeLocation === 4 ? 'active' : '']"
                >
                  <p class="py-2 font-medium">
                    Marrakesh
                  </p>
                </td>
                <td
                  @click="busLocation('zanzibar')"
                  :class="[activeLocation === 5 ? 'active' : '']"
                >
                  <p class="py-2 font-medium ">
                    Zanzibar
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="announcements my-10">
      <Announcements />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, Ref } from "vue";
import Announcements from "@/components/Announcements.vue";
import route from "@/router";

export default defineComponent({
  name: "Fixtures",
  components: {
    Announcements,
  },
  setup() {
    onMounted(async () => {
      // reloadPage()
      setTimeout(() => {
        goToNoBets();
        console.log("set time to move out ");
         }, 15000);
      // }, 180000);
    });
    const digitalClock = ref("");

    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const timeLimit = ref(10);
    const timePassed = ref(0);
    const timeInterval = ref(0);

    const startMinutes = ref(3);
    const time = ref(startMinutes.value * 60);
    const min = ref(0);
    const sec = ref(0);

    const activeStop = ref(0);
    const activeDuration = ref(0);
    const activeColour = ref(0);
    const activeLocation = ref(0);

    const causeOfStop = ref("");
    const busRange = ref("");
    const busColour = ref("");
    const busRoute = ref("");

    const currentTime = () => {
      var cd = new Date();
      const time =
        zeroPadding(cd.getHours(), 2) + ":" + zeroPadding(cd.getMinutes(), 2);
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

    const timerID = setInterval(currentTime, 1000);

    const zeroPadding = (num: number, digit: number) => {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    };

    const timeLeft = computed(() => {
      return timeLimit.value - timePassed.value;
    });

    const updateCountDown = () => {
      let minutes = Math.floor(time.value / 60);
      let seconds = time.value % 60;
      let timer = `${minutes}: ${seconds}`;
      min.value = minutes;
      // sec.value = seconds < 10 ? '0' + seconds : seconds
      sec.value = seconds;

      // let computedSec = ''
      // if(seconds < 10){

      // } < 10 ? (`${0 + seconds}`) : seconds

      // WORKING HERE

      // time.value--;

      if (min.value === 0 && sec.value === 0) {
        return;
      } else {
        time.value--;
      }
      // return timer
    };

    setInterval(updateCountDown, 1000);

    const stopDiv = document.getElementById("stopBus") as HTMLDivElement;

    const stopBus = (name: string) => {
      causeOfStop.value = name;

      switch (name) {
        case "overheating":
          activeStop.value = 1;

          break;

        case "accident":
          activeStop.value = 2;

          break;

        case "flattyre":
          activeStop.value = 3;

          break;

        case "trafficofficer":
          activeStop.value = 4;

          break;
        case "badroads":
          activeStop.value = 5;

          break;

        default:
          break;
      }

      // console.log(styleObject.active);
    };

    const busDuration = (name: string) => {
      busRange.value = name;

      switch (name) {
        case "1.01x -1.99x":
          activeDuration.value = 1;

          break;

        case "2.00x - 2.59x":
          activeDuration.value = 2;

          break;
        case "2.60x - 3.59x":
          activeDuration.value = 3;

          break;
        case "3.60x - 3.99x":
          activeDuration.value = 4;

          break;
        case "4.00x - 4.59x":
          activeDuration.value = 5;

          break;
        case "4.60x - 8.00x":
          activeDuration.value = 6;

          break;
        case "8.01x - 12.00x":
          activeDuration.value = 7;

          break;
        case "12.01x - 15.59x":
          activeDuration.value = 8;

          break;
        case "15.60x - 20.00x":
          activeDuration.value = 9;

          break;
        case "NoMovement":
          activeDuration.value = 10;

          break;
        default:
          break;
      }
    };

    const colourBus = (name: string) => {
      busColour.value = name;
      console.log(name, "colour");

      switch (name) {
        case "yellow":
          activeColour.value = 1;

          break;

        case "blue":
          activeColour.value = 2;

          break;

        case "black":
          activeColour.value = 3;

          break;
        case "red":
          activeColour.value = 4;

          break;

        case "green":
          activeColour.value = 5;

          break;
        default:
          break;
      }
    };

    const busLocation = (name: string) => {
      busRoute.value = name;

      switch (name) {
        case "kilimanjaro":
          activeLocation.value = 1;

          break;

        case "lusaka":
          activeLocation.value = 2;

          break;
        case "luanda":
          activeLocation.value = 3;

          break;

        case "marrakesh":
          activeLocation.value = 4;

          break;

        case "zanzibar":
          activeLocation.value = 5;

          break;
        default:
          break;
      }
    };

    const reloadPage = () => {
      location.reload();
    };

    const goToNoBets = () => {
      route.push("/no-bets");
      console.log("We move");
    };
    return {
      digitalClock,
      timeLeft,
      timeLimit,
      timeInterval,
      activeStop,
      activeDuration,
      activeColour,
      activeLocation,
      stopBus,
      busDuration,
      colourBus,
      busLocation,
      causeOfStop,
      min,
      sec,
      goToNoBets,
    };
  },
});
</script>

<style lang="scss" scoped>
.fixtures {
  background: var(--blue);

  &-header {
    background-color: #161923;
    color: #fff;

    img{
      width: 40px;
      height: 40px;
    }

    .game-logo{
      img{
        width: 40px;
        height: 40px;
      }
    }
  }

  .provider {
    &Logo {
      img{
        width: 80px;
        height: 80px;
      }
      p {
        span {
          color: goldenrod;
        }
      }
    }
    .date {
      .clock {
        font-family: "Share Tech Mono", monospace;
        color: #ffffff;
        color: #daf6ff;
        text-shadow: 0 0 20px rgba(10, 175, 230, 1),
          0 0 20px rgba(10, 175, 230, 0);
        .time {
          letter-spacing: 0.05em;
          padding: 5px 0;
        }
      }

      .next-bet {
        color: goldenrod;
      }
    }
  }
  .bet-on {
    .tables {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;
      // border: 1px solid red;
      // overflow: hidden;
      // padding: 80px 20px 20px 20px;

      .table-header {
        z-index: 50;
        // margin-top: 20px;
        margin-top: 70px;
        // margin-top: 65px;
        // border: 1px solid red;

        p {
          margin-left: 100px;
          color: goldenrod;
        }
        &-items {
          background: var(--blue);
          border: 2px solid goldenrod;
          border-radius: 10px;
          padding: 30px 0 20px 15px;
          margin-left: 80px;
          // margin-right: -;

          table {
            background: var(--blue);
            z-index: 50;
            // width: 150px;
            width: 100%;

            tr {
              td {
                padding: 5px 0;
                border-bottom: 1px solid goldenrod;

                // &:nth-child(2){
                //   margin-bottom: 30px;
                //   border: 1px solid red;
                // }
              }
              .cause_of_stop {
                // padding-top: 10px;
                padding-top: 25px;
                margin-left: 0;
              }
              .range {
                // padding-bottom: 30px;
                // padding-bottom: 25px;
                border-bottom: none;
                // margin-bottom: 50px;
                p {
                  // margin-top: 40px;
                  margin-top: 80px;
                  margin-left: 0px;
                }
              }
              .no-range {
                // padding-bottom: 59px;
                // padding-bottom: 5px;
                padding-bottom: 60px;
              }

              .bet-range {
              }
              .movement {
                margin-bottom: 7px;
                padding-bottom: 7px;
              }

              .colour {
                // margin-bottom: 7px;
                // padding-bottom: 7px;
                p {
                  margin-left: 0;
                }
              }
              .location {
                border-bottom: 1px solid transparent;

                p {
                  margin-left: 0;
                }
              }
            }
          }
        }
      }

      .table-body {
        margin-right: 50px;

        .timer {
          span {
            color: goldenrod;
          }
        }

        &-items {
          position: relative;
          // width: 700px;
          border: 2px solid #fff;
          border-radius: 10px;
          // padding: 250px 20px 0px 50px;
          padding: 50px 20px 0px 50px;
          margin-left: -50px;

          .round {
            position: absolute;
            right: -5px;
            top: -20px;
            // top: -15px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            p {
              background: goldenrod;
              border-radius: 10px 0 0 10px;
            }

            &_number {
              background: #fff;
              // padding: 7px 10px;
              border-radius: 7px;
            }
          }

          table {
            width: 100%;
            margin-top: 12px;

            margin-bottom: 10px;
            .cause_of_stop {
              margin-top: 0px;
            }

            tr {
              border-bottom: 1px solid goldenrod;

              &:last-child {
                border-bottom: none;
              }

              td {
                text-align: center;
                padding: 3px;

                &:first-child {
                  padding: 3px;
                  color: #fff;
                  // background: white;
                  background: rgba(0, 0, 0, 0.1);

                  &:hover {
                    background: white;
                    color: #000;
                    border: 2px solid var(--gold);
                    border-radius: 4px;
                    cursor: pointer;
                  }
                }

                &:nth-child(2) {
                  background: #ffff;
                }

                &:nth-child(3) {
                  color: #fff;
                  background: rgba(0, 0, 0, 0.1);
                  // background: #fff;
                  &:hover {
                    background: white;
                    color: #000;
                    border: 2px solid var(--gold);
                    border-radius: 4px;
                    cursor: pointer;
                  }
                }

                &:nth-child(4) {
                  background: #ffff;
                }

                &:nth-child(5) {
                  color: #fff;
                  background: rgba(0, 0, 0, 0.1);
                  // background: #fff;
                  &:hover {
                    background: white;
                    color: #000;
                    border: 2px solid var(--gold);
                    border-radius: 4px;
                    cursor: pointer;
                  }
                }

                &:nth-child(6) {
                  background: #ffff;
                }

                &:hover {
                  background: var(--blue);
                  color: #ffff;
                  border: 2px solid var(--gold);
                  border-radius: 4px;
                  cursor: pointer;
                }

                &.active,
                &.activeDuration {
                  color: #ffff;
                  background: goldenrod;

                  > div {
                    span {
                      &:nth-child(2) {
                        color: #ffff;
                      }
                    }
                  }
                }

                > div {
                  &.active {
                    color: #ffff;
                    background: goldenrod;

                    span {
                      &:nth-child(2) {
                        color: #ffff;
                      }
                    }
                  }

                  &.activeWhite {
                  }
                  span {
                    &:nth-child(2) {
                      color: goldenrod;
                    }
                  }
                }

                p {
                  &.active {
                    color: #ffff;
                    background: goldenrod;
                  }
                }
              }
              .bet_range {
                padding-bottom: 30px;
                margin-bottom: 20px;
                > div {
                  // border: 1px solid  pink;
                  // padding: 20px;
                  // margin: -20px 0 -20px 0;
                }
              }

              &:nth-child(3) {
                p {
                  margin-bottom: 6px;
                }
              }

              &:nth-child(4) {
                p {
                  margin-bottom: 5px;
                }
              }
              &:last-of-type {
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }
  .announcements {
    margin-top: 100px;
  }
}

@media screen and (max-width: 450px) {
  .bet-on{
  .tables{
    // border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr;
  }
  }
}
</style>
