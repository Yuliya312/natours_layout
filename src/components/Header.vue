<template>
  <header class="header">
    <div class="header__logo-box">
      <img
        src="../assets/images/logo-white.png"
        alt="Logo"
        class="header__logo"
      />
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happends</span>
      </h1>
      <a href="#section-tours" class="btn btn--white btn--animated">
        Discover our tours
      </a>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)
    ),
    url("../assets/images/hero.jpg");
  background-size: cover;
  background-position: top;

  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  @include respond(phone) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  }

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 3.5rem;
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>
