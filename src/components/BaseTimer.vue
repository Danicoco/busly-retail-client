<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5" />
        <path
          :stroke-dasharray="circleDasharray"
          :class="remainingPathColor"
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "BaseTimer",
  props: {
    timeLeft: {
      type: Number,
      required: true,
    },
    timeLimit: {
      type: Number,
      required: true,
    },
    alertThreshold: {
      type: Number,
      default: 5,
    },
    warningThreshold: {
      type: Number,
      default: 10,
    },
  },

  setup(props) {
    // let timeRemaining = ref(5);

    const formattedTimeLeft = computed(() => {
      const timeLeft = props.timeLeft;

      const minutes = Math.floor(timeLeft / 60);

      let seconds = timeLeft % 60;
      let secs = ref('')

      if (seconds < 10) {
        // let secs = `0${seconds}`;
        // seconds = +secs;

        secs.value = `0${seconds}`
        // seconds = seconds.replace(seconds, secs.value)
      }
      if (seconds === 0) {
        clearInterval(timeLeft);
        return;
      }

      if (seconds < 0) {
        clearInterval(timeLeft);
        return;
      }
      return `${minutes}: ${seconds}`;
    });

    const FULL_DASH_ARRAY = ref(282.8);

    const circleDasharray = computed(() => {
      // return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
      return `${(timeFraction.value * FULL_DASH_ARRAY.value).toFixed(0)} 283`;
    });

    const timeFraction = computed(() => {
      const rawTimeFraction = props.timeLeft / props.timeLimit;

      return rawTimeFraction - (1 / props.timeLimit) * (1 - rawTimeFraction);
    });

    const colorCodes = computed(() => {
      return {
        info: {
          color: "green",
        },
        warning: {
          color: "orange",
          threshold: props.warningThreshold,
        },
        alert: {
          color: "red",
          threshold: props.alertThreshold,
        },
      };
    });

    const remainingPathColor = computed(() => {
      const { alert, warning, info } = colorCodes.value;

      if (props.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (props.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    });

    return {
      formattedTimeLeft,
      circleDasharray,
      remainingPathColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-timer {
  position: relative;
  width: 80px;
  height: 80px;

  /* Removes SVG styling that would hide the time label */
  &__circle {
    fill: none;
    stroke: none;
  }

  /* The SVG path that displays the timer's progress */
  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__label {
    position: absolute;
    color: #fff;

    /* Size should match the parent container */
    width: 80px;
    height: 80px;

    /* Keep the label aligned to the top */
    top: 0;

    /* Create a flexible box that centers content vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 18px;
  }

  &__path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 7px;

    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;

    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;

    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;

    /* Allows the ring to change color when the color value updates */
    // stroke: rgb(65, 184, 131); // green
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__svg {
    /* Flips the svg and makes the animation to move left-to-right */
    transform: scaleX(-1);
  }
}
</style>
