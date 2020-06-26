<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import NavLayout from "@/layouts/NavLayout";
import HomeLayout from "@/layouts/HomeLayout";
import NavToggle from "@/layouts/NavLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "nav") + "-layout";
    }
  },
  components: {
    NavToggle,
    NavLayout,
    HomeLayout
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
