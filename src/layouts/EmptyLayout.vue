<template>
  <div class="app-nav-layout">
    <div class="app-page">
      <transition name="smooth" appear>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "empty-layout"
};
</script>

<style lang="scss">
.smooth-enter-active {
  transition: opacity 0.5s ease-in-out;
}

.smooth-enter,
.smooth-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
