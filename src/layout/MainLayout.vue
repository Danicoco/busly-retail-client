<template>
  <div class="main-layout">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.main-layout {
  margin: 0;
  padding: 0;
  position: relative;
  margin-top: -10px;
  // background: green;
  // background: #E5E5E5;

  .hamburger-menu {
    display: none;
  }

  .body {
    display: flex;

    .sidebar {
      width: 18vw;
      height: 100vh;
      background: #0d142f;
      position: fixed;
      // margin-top: -10px;

      .brand {
        .admin-init {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px 0;

          span {
            background: #faa100;
            color: #f7f7f7;
            font-weight: 500;
            font-size: 22px;
            border-radius: 50%;
            padding: 10px 7px;
          }
        }
      }
    }

    .content {
      width: 88vw;
      // height: 100vh;
      height: 100%;
      overflow-y: auto;
      margin-left: 18.5%;
      // margin-top: 0;
      // margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 480px) {
  .main-layout {
    // border: 1px solid green;
    background: #e5e5e5;

    .body {
      width: 100vw;
      display: flex;
      flex-direction: column;
      // border: 1px solid blue;
      .sidebar {
        display: none;
        width: 0vw;
      }

      .content {
        width: 98vw;
        // border: 1px solid red;
        margin-left: 0;
        background: #e5e5e5;
      }
    }
  }
}
</style>
