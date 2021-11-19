<template>
  <!-- <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/no-bets">No Bets</router-link>|
    <router-link to="/game">Game</router-link>|
    <router-link to="/results">Results</router-link>
  </div>
  <Fixtures /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Fixtures from "./views/Fixtures.vue";
// import Announcements from "./components/Announcements.vue";
// import Fixtures from "@/views/Fixtures.vue";
// import Game from "./views/Game.vue";
// import Results from "./views/Results.vue";
// import NoMoreBet from "./views/NoMoreBet.vue";

export default defineComponent({
  // name: "App",
  components: {
    // Fixtures
},
});
</script>

<style lang="scss">
#app {
  background: var(--blue);
  height: 100vh;

  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  // .router
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
