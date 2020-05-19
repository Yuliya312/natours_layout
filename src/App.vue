<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import HomeLayout from "@/layouts/HomeLayout";
import NavToggle from "@/layouts/EmptyLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    NavToggle,
    EmptyLayout,
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
