<template>
  <div
    v-if="visible"
    class="fixed inset-0 inset-y-16 z-10 flex items-start justify-center px-4 py-6 pointer-events-none sm:p-6 md:hidden"
  >
    <div
      class="max-w-sm w-full bg-white shadow-xl rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0" @click="openLink">
            <img
              :src="icon"
              class="rounded-xl object-contain md:object-scale-down h-12"
            />
          </div>
          <div class="ml-4 w-0 flex-1 pt-0.5" @click="openLink">
            <p class="text-md font-bold text-black">
              {{ title }}
            </p>
            <p class="mt-1 text-sm text-gray-900">
              {{ subtitle }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              class="bg-white rounded-md inline-flex text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              @click="closeModal"
            >
              <span class="sr-only">Close</span>

              <IconCross class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    icon: String,
    title: String,
    subtitle: String,
    link: String,
  },
  setup(props) {
    const visible = ref(true);

    const openLink = () => {
      window.open(props.link, "_blank");
    };
    const closeModal = () => {
      visible.value = !visible.value;
    };

    return {
      visible,
      openLink,
      closeModal,
    };
  },

});
</script>
