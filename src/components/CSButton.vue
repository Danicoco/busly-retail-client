<template>
  <button
    :class="[size, variant]"
    class="c-btn"
    :style="{ ...style }"
    :disabled="loading || disabled"
  >
    <span v-if="loading">
      <svg
        class="rotate"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
      >
        <path
          d="M165 7.5c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zM165 262.5c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-30c0-8.284-6.716-15-15-15zM315 157.5h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15s-6.716-15-15-15zM90 172.5c0-8.284-6.716-15-15-15H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15zM281.673 55.827c-5.857-5.858-15.355-5.858-21.213 0l-42.427 42.427c-5.858 5.858-5.858 15.355 0 21.213a14.954 14.954 0 0010.606 4.394 14.95 14.95 0 0010.607-4.394l42.427-42.427c5.858-5.858 5.858-15.355 0-21.213zM90.753 225.533L48.328 267.96c-5.857 5.858-5.857 15.355 0 21.213a14.953 14.953 0 0010.607 4.393c3.839 0 7.678-1.464 10.607-4.393l42.426-42.427c5.857-5.858 5.857-15.355 0-21.213-5.859-5.858-15.356-5.858-21.215 0zM69.541 55.827c-5.858-5.858-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l42.426 42.427a14.956 14.956 0 0010.607 4.394c3.838 0 7.678-1.465 10.606-4.393 5.858-5.858 5.858-15.355 0-21.213L69.541 55.827z"
        />
      </svg>
    </span>
    <span v-else>
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CSButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<"button" | "menu" | "reset" | "submit">,
      default: "button",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "normal" | "large">,
      default: "normal",
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => {
        return {};
      },
    },
    variant: {
      type: String as PropType<"pry" | "white" | "danger">,
      default: "pry",
    },
  },
});
</script>

<style lang="scss">
.c-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-width: 2px;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  outline: none;

  &:hover{
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  span {
    display: block;
    svg {
      height: 28px;
      fill: #fff;
    }
  }
}

.c-btn.pry {
  background: green;
  font-weight: 500;
  color: #fff;
  border: 1px solid white;

  &:hover{
    border: 1px solid green;
  }
}

.c-btn.white {
  background: #ffffff;
  border: 1px solid #e8e8e8;
}

.c-btn.danger {
  background-color: red;
  font-weight: 500;
  color: #fff;
  // border: 1px solid white;

  &:hover{
    border: 1px solid red;
  }
  @apply bg-red-500 text-white border-white hover:border-red-500;
}

.c-btn {
  &.small {
    height: 32px;
    font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &.normal {
    height: 48px;
  }

  &.large {
    height: 56px;
    // height: 32px;
    font-size: 18px;
  }
}

.rotate {
  animation: rotate 600ms linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
