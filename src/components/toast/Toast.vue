<template>
  <teleport to="#toastRoot">
    <div class="notification-container top-right">
    <transition-group name="slide" appear>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-content__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition-group>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType } from "vue";

export default defineComponent({
  name: "Toast",

  setup(_, { emit }) {
    onMounted(() => {
      document.body.style.maxHeight = "100vh";
      document.body.style.overflow = "hidden";
    });

    onUnmounted(() => {
      document.body.style.overflow = "auto";
    });

    const closeModal = () => {
      emit("closeModal");
    };

    return {
      closeModal,
    };
  },
  emits: ["closeModal"],
});
</script>

<style lang="scss" scoped>
// .top-right {
//   // top: 12px;
//   // right: 0px;
//   transition: transform 0.6s ease-in-out;
//   animation: toast-in-right 0.7s;
// }

// @keyframes toast-in-right {
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// }


// .slide-enter-from {
//   transform: scaleY(0);
// }

// .slide-enter-to {
//   transform: scaleY(100%);
// }

// .slide-enter-active,
// .slide-leave-active {
//   transition: all 0.4s ease;
//   position: absolute;
// }

// .slide-move {
//   transition: all 0.3s ease;
// }

// .slide-leave-from {
//   transform: scaleY(100%);
// }

// .slide-leave-to {
//   transform: scaleY(0);
// }


//hash .slide-enter-from {
//   opacity: 0;
//   transform: translateX(-100px);
// }

// hash .slide-enter-to {
//   opacity: 1;
//   transform: translateX(0);
// }

.slide-enter-active,
.slide-leave-active {
  animation: slideRight 0.4s ease;
}
.slide-leave-from {
  transform: scaleY(100%);
}

.slide-leave-to {
  transform: scaleY(0);
}

// .notification-container {
//   font-size: 14px;
//   box-sizing: border-box;
//   position: fixed;
//   z-index: 999999;
// }

// .top-right {
//   top: 12px;
//   right: 0px;
//   animation: transform 0.6s ease-in-out;
//   animation: slide-from-right 0.7s;
// }

@keyframes slideRight {
  0% {
    // transform: translateX(100%);
    opacity: 0;
  transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}


.modal {
  position: fixed;
  height: 100px;
  top: 0;
  right: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  opacity: 50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  z-index: 30;

  &-content {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    // width: 100%;
    // width: 400px;
    max-height: 100px;
    border-radius: 10px;
    display: inline-block;
    position: relative;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 500;
        color: #1c1c1c;
      }
      i {
        font-size: 20px;
        color: rgb(78, 74, 74);

        &:hover {
          cursor: pointer;
        }
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 480px) {
  .modal {
    &-content {
      width: 250px;
    }
  }
}
</style>
