<template>
  <button :class="sec ? 'sec' : ''">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CButton",
  props: {
    sec: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  height: 32px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  // box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  &.sec {
    background: #ffffff;
    border: 1px solid #e8e8e8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
    color: #1c1c1c;
    :deep(i) {
      color: #969696;
      // @apply mr-2;
    }
    // &:hover {
    //   @apply bg-gray-50 text-n-black font-medium;
    // }
  }
  &:hover {
    cursor: pointer;
    // @apply bg-n-green text-white font-medium;
  }
  :deep(i) {
    // @apply mr-2;
  }
}
</style>
