<template>
  <div class="toast" :class="toast_type">
    <div class="toast-info">
      <i class="fa" :class="' ' + fontAwesomeIcon()"></i>

      <div className="toast__text">
        <p className="toast__title">{{ title }}</p>
        <p className="toast__message">{{ toast_desc }}</p>
      </div>
    </div>
    <i @click="closeModal" class="fa fa-times"></i>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  PropType,
} from "vue";

export default defineComponent({
  name: "SingleToast",
  props: {
    desc: {
      type: String,
      required: true,
    },
    toastType: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(() => {
        emit("closeModal");
      }, 5000);
    });
    // eslint-disable-next-line vue/no-setup-props-destructure
    const toast_type = ref(props.toastType);
    const toast_desc = ref(props.desc);

    const title = computed(() => {
      let firstLetter = toast_type.value.charAt(0).toUpperCase();
      let otherLetters = toast_type.value.slice(1);

      return firstLetter + otherLetters;
    });

    function fontAwesomeIcon() {
      switch (toast_type.value) {
        case "success":
          return "fa-check";
        case "info":
          return "fa-info";
        case "warning":
          return "fa-exclamation";
        case "danger":
          return "fa-times";
      }
    }

    const closeModal = () => {
      emit("closeModal");
    };

    return {
      toast_type,
      toast_desc,
      title,
      fontAwesomeIcon,
      closeModal,
    };
  },
});
</script>

<style lang="scss">
.toast {
  width: 300px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);

  i {
    &:hover {
      cursor: pointer;
    }
  }

  &.success {
    background: #47d764;
    color: #555555;

     i {
      color: #555555;
    }
  }

  &.info {
    background: #2f86eb;
  }

  &.warning {
    background: #ffc021;
  }

  &.danger {
    background: #e60023;
   color: #040404;

     i {
      color: #040404;
    }
  }
  &-info {
    display: flex;
    justify-content: space-around;
    align-items: center;

    i {
      margin: 0 8px;
      color: rgb(36, 35, 34);
      border: 1px solid rgb(36, 35, 34);
      border-radius: 50%;
      padding: 2px 3px;
      font-weight: 100;
    }

    .toast__text {
      display: flex;
      flex-direction: column;
      padding: 5px 0;

      p:first-child {
        font-weight: 600;
        margin: 1px 0;
      }
      p:last-child {
        font-weight: 100;
        font-size: 12px;
        margin: 1px 0;
      }
    }
  }
}
</style>
