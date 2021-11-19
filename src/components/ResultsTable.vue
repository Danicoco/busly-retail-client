<template>
  <div class="results my-4">
    <table>
      <thead>
        <tr>
          <td class="font-bold"> User </td>
          <td class="font-bold"> Bet</td>
          <td class="font-bold"> Time </td>
          <td class="font-bold"> Win/ Loss</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Won</td>
        </tr>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Won</td>
        </tr>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Loss</td>
        </tr>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Won</td>
        </tr>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Loss</td>
        </tr>
        <tr>
          <td class="text-gray-500">user one</td>
          <td class="text-gray-500">u238dsqj232</td>
          <td class="text-gray-500">12:00AM</td>
          <td class="text-gray-500">Won</td>
        </tr>   
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultsTable",

})
</script>

<style lang="scss" scoped>
.results{
  table{
    width: 100%;

    thead{
      color: #fff;
    }
  }

}
</style>
