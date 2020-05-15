<template>
  <div class="popup" ref="popup" id="popup">
    <transition name="grow" appear>
      <div class="popup__content" v-show="show">
        <div class="popup__left">
          <img
            src="../assets/images/nat-8.jpg"
            alt="Tour photo"
            class="popup__img"
          />
          <img
            src="../assets/images/nat-9.jpg"
            alt="Tour photo"
            class="popup__img"
          />
        </div>
        <div class="popup__right">
          <a href="#section-tours" class="popup__close" @click="closePopup"
            >&times;</a
          >
          <h2 class="heading-secondary .u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 class="heading-tertiary .u-margin-bottom-small">
            Important &ndash; Please read this terms before booking
          </h3>
          <p class="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#section-tours" class="btn btn--green" @click="closePopup"
            >Book now</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "popup",
  data() {
    return {
      show: true
    };
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["popup"]) {
        vm.closePopup();
      }
    });
  }
};
</script>

<style lang="scss">
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color-black, 0.8);
  z-index: 20;
  transition: all 0.3s;

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba($color-black, 0.3);
  }

  &__content {
    @include absCenter;

    width: 75%;
    background-color: $color-white;
    box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
    border-radius: 3px;
    display: table;
    overflow: hidden;
    transform: translate(-50%, -50%);
    transition: all 0.5s 0.2s;
  }

  &__left {
    width: 33.333333%;
    display: table-cell;
  }

  &__right {
    width: 66.6666667%;
    display: table-cell;
    vertical-align: middle;
    padding: 3rem 5rem;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__text {
    font-size: 1.4rem;
    margin-bottom: 4rem;

    -moz-column-count: 2;
    -moz-column-gap: 4rem; //1em = 14px;
    -moz-column-rule: 1px solid $color-grey-light-2;

    column-count: 2;
    column-gap: 4rem; //1em = 14px;
    column-rule: 1px solid $color-grey-light-2;

    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  /* &__visible &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  } */

  &__close {
    &:link,
    &:visited {
      color: $color-grey-dark;
      position: absolute;
      top: 2.5rem;
      right: 2.5rem;
      font-size: 3rem;
      text-decoration: none;
      display: inline-block;
    }

    &:hover {
      color: $color-primary;
    }
  }
}

.grow-enter-active {
  transition: all 0.3s ease 0.2s;
}

.grow-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.25);
}
</style>
