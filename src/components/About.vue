<template>
  <section class="section-about" id="section-about">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-tertiary u-margin-bottom-small">
          Yu're going to fall in love with nature
        </h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          quas ea ut officia debitis, blanditiis amet eaque quis quasi minima
          voluptatum possimus corporis, dignissimos saepe quidem corrupti
          necessitatibus ad exercitationem.
        </p>
        <h3 class="heading-tertiary u-margin-bottom-small">
          Live adventutes that you never had before
        </h3>
        <p class="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          cumque eum aperiam.
        </p>

        <a href="#section-features" class="btn-text">Lern more &rarr;</a>
      </div>
      <div class="col-1-of-2">
        <div class="composition">
          <img
            srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 1"
            class="composition__photo composition__photo--p1"
            src="img/nat-1-large.jpg"
          />

          <img
            srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 2"
            class="composition__photo composition__photo--p2"
            src="img/nat-2-large.jpg"
          />

          <img
            srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 3"
            class="composition__photo composition__photo--p3"
            src="img/nat-3-large.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.composition {
  position: relative;
  width: 100%;
  margin: 0 auto;

  &__photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 2rem;

    @include respond(tab-port) {
      position: relative;
      width: 33%;
      box-shadow: 0 1.5rem 3rem rgba($color-black, 0.2);
    }

    &--p1 {
      left: 0;
      top: -2rem;

      @include respond(tab-port) {
        top: 0;
        transform: scale(1.2);
      }
    }

    &--p2 {
      right: 0;
      top: 2rem;

      @include respond(tab-port) {
        top: -1rem;
        transform: scale(1.3);
        z-index: 30;
      }

      @include respond(small-phone) {
        top: 5rem;
      }
    }

    &--p3 {
      left: 20%;
      top: 10rem;

      @include respond(tab-port) {
        top: 1rem;
        left: 0;
        transform: scale(1.1);
      }
    }

    &:hover {
      outline: 1.5rem solid $color-primary;
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
      z-index: 40;

      @include respond(tab-port) {
        transform: scale(1.1) translateY(-0.5rem);
      }
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }

  @include respond(tab-port) {
    transform: scale(1.05);
    z-index: 0;
  }
}
</style>
