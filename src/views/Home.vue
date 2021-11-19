<template>
  <div class="home">
    <Fixtures />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fixtures from "../components/Fixtures.vue";

export default defineComponent({
  name: "Home",
  components: {
    Fixtures,
  },
});
</script>
