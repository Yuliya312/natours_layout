<template>
  <div class="navigation">
    <slot name="nav-toggle"></slot>
    <button class="close" @click="closeNav">X</button>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link
            :to="{ name: 'home', hash: '#section-about' }"
            class="navigation__link"
          >
            <span>01</span>
            About Natours
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link
            :to="{ name: 'home', hash: '#section-features' }"
            class="navigation__link"
          >
            <span>02</span>
            Your benfits
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link
            :to="{ name: 'home', hash: '#section-tours' }"
            class="navigation__link"
          >
            <span>03</span>
            Popular Tours
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link
            :to="{ name: 'home', hash: '#section-stories' }"
            class="navigation__link"
          >
            <span>04</span>
            Stories
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link
            :to="{ name: 'home', hash: '#section-book' }"
            class="navigation__link"
          >
            <span>05</span>
            Book Now
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  methods: {
    closeNav() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.navigation {
  height: 90vh;
  background-image: linear-gradient(
    to right,
    $color-primary-dark,
    $color-primary-light
  );

  &__list {
    @include absCenter;
    text-align: center;
    width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 220%;
      transition: all 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
}

.close {
  background-color: $color-white;
  border: 1px solid $color-white;
  outline: none;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 5;
  box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
}
</style>
