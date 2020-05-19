import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/nav",
      name: "nav-menu",
      meta: { layout: "empty" },
      component: () => import("../views/NavMenu.vue")
    },
    {
      path: "/",
      name: "home",
      meta: { layout: "home" },
      component: () => import("../views/Home.vue")
    }
  ]
});
