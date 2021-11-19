<template>
  <div class="timer">
    {{ countDown }}
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  setup(_, { emit }) {
    const countDown = ref(0);

    watch(countDown, (val) => {
      if (val > 0) {
        setTimeout(() => {
          countDown.value -= 1;
        }, 1000);
      }
    });

    return {
      countDown,
    };
  },
  // watch: {
  //           countdown: function(val) {
  //               if(val > 0) {
  //                   setTimeout(() => {
  //                       countDown.value -= 1;
  //                   }, 1000);
  //               }
  //           },
  //       }
});
</script>
