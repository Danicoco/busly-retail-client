<template>
  <div class="home">
    <div class="body">
      <Fixtures />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Fixtures from "@/components/Fixtures.vue";

export default defineComponent({
    components: { 
      Fixtures,
     }
})
</script>