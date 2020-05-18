<template>
  <section class="section-stories" id="section-stories">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../assets/images/video.mp4" type="video/mp4" />
        <source src="../assets/images/video.webm" type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        We make people genuinely happy
      </h2>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img
            src="../assets/images/nat-8.jpg"
            alt="Person on a tour"
            class="story__img"
          />
          <figcaption class="story__caption">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit, ipsum
            dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit
            amet consectetur adipisicing elit, ipsum dolor sit amet consectetur
            adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing
            elit, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img
            src="../assets/images/nat-9.jpg"
            alt="Person on a tour"
            class="story__img"
          />
          <figcaption class="story__caption">Jack Wilson</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">
            WOW! My life is complitely different now
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit, ipsum
            dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit
            amet consectetur adipisicing elit, ipsum dolor sit amet consectetur
            adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing
            elit, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </div>
    <div class="u-center-text u-margin-top-huge">
      <a href="#" class="btn-text">Read all stories &rarr;</a>
    </div>
  </section>
</template>

<style lang="scss">
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

figure {
  margin: 0;
}

.story {
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba($color-black, 0.1);
  background-color: rgba($color-white, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: $default-font-size;
  transform: skewX(-12deg);

  @include respond(tab-port) {
    width: 100%;
    padding: 4rem;
    padding-left: 7rem;
  }

  @include respond(phone) {
    transform: skewX(0);
  }

  &__shape {
    width: 15rem;
    height: 15rem;
    float: left;
    transform: translateX(-3rem) skewX(12deg);
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;

    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      -webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      -webkit-shape-outside: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      border-radius: none;
    }

    @include respond(phone) {
      transform: translateX(-3rem) skewX(0);
    }

    @include respond(small-phone) {
      float: none;
      transform: translateX(30%);
    }
  }

  &__img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
  }

  &__text {
    max-width: 65rem;
    transform: skewX(12deg);

    @include respond(phone) {
      transform: skewX(0);
    }
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: $color-white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &:hover &__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover &__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
}
</style>
