<template>
  <section class="section-features">
    <div class="row" id="section-features">
      <div class="col-1-of-4">
        <div class="feature-box">
          <span class="feature-box__icon feature-box__icon--world"></span>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Explore the world
          </h3>
          <p class="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>

      <div class="col-1-of-4">
        <div class="feature-box">
          <span class="feature-box__icon feature-box__icon--compass"></span>
          <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
          <p class="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>

      <div class="col-1-of-4">
        <div class="feature-box">
          <span class="feature-box__icon feature-box__icon--map"></span>
          <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
          <p class="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>

      <div class="col-1-of-4">
        <div class="feature-box">
          <span class="feature-box__icon feature-box__icon--heart"></span>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Live a healthier life
          </h3>
          <p class="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.feature-box {
  background-color: rgba($color-white, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
  transition: transform 0.3s;

  @include respond(tab-port) {
    padding: 2rem;
  }

  &__icon {
    margin-bottom: 0.5rem;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 7.5rem;
    height: 7.5rem;

    &--world {
      background-image: url("../assets/images/icons/basic_world.svg");
    }

    &--compass {
      background-image: url("../assets/images/icons/basic_compass.svg");
    }

    &--map {
      background-image: url("../assets/images/icons/basic_map.svg");
    }

    &--heart {
      background-image: url("../assets/images/icons/basic_heart.svg");
    }

    @include respond(tab-port) {
      margin-bottom: 0;
      transform: scale(0.7);
    }
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
}
</style>
