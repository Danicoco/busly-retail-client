import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import OtherLayout from "@/layout/OtherLayout.vue";
import Login from "@/auth/Login.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "Main",
  //   component: MainLayout,
  //   children: [
      {
        path: "/",
        name: "Fixtures",
        component: import("../components/Fixtures.vue"),
      },
      {
        path: "/no-bets",
        name: "NoBet",
        component: import("../components/NoMoreBet.vue"),
      },
      {
        path: "/game",
        name: "Game",
        component: import("../components/Game.vue"),
      },
      {
        path: "/results",
        name: "Results",
        component: import("../components/Results.vue"),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
  //   ],
  // },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/404.vue"),
    meta: {
      noAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
