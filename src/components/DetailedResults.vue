<template>
  <div class="results my-4">
    <p class="text-white">
      Multiplier stop: <span class="multiplier"> 1.0X </span>
    </p>
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
                <p class="text-white font-medium py-2">Bet on Duration</p>
              </td>
            </tr>
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
        <div class="table-body-items">
          <div class="round">
            <p class="text-white font-medium px-3">ROUND</p>
            <span class="round_number py-1 px-2 font-medium text-xl">01</span>
          </div>
          <table>
            <tr class="cause_of_stop">
              <td class="">
                <div id="stopBus" class="font-medium flex flex-col py-3">
                  <span class=""> Bad Roads </span>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="bet_range  ">
                <div class="font-medium flex flex-col py-2">
                  <span class="">4.00x - 4.59x</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class=""><p class="py-2 font-medium ">Yellow</p></td>
            </tr>
            <tr>
              <td class=""><p class="py-2 font-medium ">Kilimanjaro</p></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailedResults",
});
</script>

<style lang="scss" scoped>
.results {
  p {
    .multiplier {
      color: goldenrod;
    }
  }
  .tables {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;

    .table-header {
      z-index: 50;
      margin-top: 40px;
      width: 250px;

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

        table {
          background: var(--blue);
          z-index: 50;
          width: 100%;

          tr {
            td {
              padding: 5px 0;
              border-bottom: 1px solid goldenrod;
            }
            .cause_of_stop {
              padding-top: 25px;
              margin-left: 0;
            }
            .range {
              // border-bottom: none;
              p {
                // margin-top: 80px;
                margin-left: 0px;
              }
            }
            .no-range {
              padding-bottom: 60px;
            }

            .bet-range {
            }
            .movement {
              margin-bottom: 7px;
              padding-bottom: 7px;
            }

            .colour {
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
      width: 250px;

      .timer {
        span {
          color: goldenrod;
        }
      }

      &-items {
        position: relative;
        border: 2px solid #fff;
        border-radius: 10px;
        padding: 50px 20px 0px 50px;
        margin-left: -150px;

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
          margin-top: 45px;

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

              }

              &:nth-child(2) {
                background: #ffff;
              }

              &:nth-child(3) {
                color: #fff;
                background: rgba(0, 0, 0, 0.1);
               
              }

              &:nth-child(4) {
                background: #ffff;
              }

              &:nth-child(5) {
                color: #fff;
                background: rgba(0, 0, 0, 0.1);
               
              }

              &:nth-child(6) {
                background: #ffff;
              }


              > div {
                span {
                  &:nth-child(2) {
                    color: goldenrod;
                  }
                }
              }
            }
            .bet_range {
              // padding-bottom: 30px;
              // margin-bottom: 20px;
              // border: 1px solid red;
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
</style>
