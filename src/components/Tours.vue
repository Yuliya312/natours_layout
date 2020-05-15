<template>
  <section class="section-tours" id="section-tours">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        Most popular tours
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                The sea explorer
              </span>
            </h4>
            <div class="card__details">
              <ul class="card__details-list">
                <li class="card__details__item">3 day tour</li>
                <li class="card__details__item">Up to 30 people</li>
                <li class="card__details__item">2 tour guides</li>
                <li class="card__details__item">Sleep in cozy hotels</li>
                <li class="card__details__item">Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$297</p>
              </div>
              <button class="btn btn--white" @click="showPopupInfo()">
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--2">
                The forest hiker
              </span>
            </h4>
            <div class="card__details">
              <ul class="card__details-list">
                <li class="card__details__item">7 day tour</li>
                <li class="card__details__item">Up to 40 people</li>
                <li class="card__details__item">6 tour guides</li>
                <li class="card__details__item">Sleep in provided tents</li>
                <li class="card__details__item">Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$497</p>
              </div>
              <button class="btn btn--white" @click="showPopupInfo()">
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--3">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--3">
                The snow adventurer
              </span>
            </h4>
            <div class="card__details">
              <ul class="card__details-list">
                <li class="card__details__item">5 day tour</li>
                <li class="card__details__item">Up to 15 people</li>
                <li class="card__details__item">3 tour guides</li>
                <li class="card__details__item">Sleep in provided tents</li>
                <li class="card__details__item">Difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-3">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$897</p>
              </div>
              <button class="btn btn--white" @click="showPopupInfo()">
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="u-center-text u-margin-top-huge">
      <a href="#" class="btn btn--green">Discover all tours</a>
    </div>

    <transition name="fade" appear>
      <div
        v-if="isInfoPopupVisible"
        :class="{ popup__visible: isInfoPopupVisible }"
      >
        <Popup @closePopup="closeInfoPopup"> </Popup>
      </div>
    </transition>
  </section>
</template>

<script>
import Popup from "@/components/Popup";

export default {
  name: "tours",
  components: {
    Popup
  },
  data() {
    return {
      isInfoPopupVisible: false
    };
  },
  methods: {
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    }
  }
};
</script>

<style lang="scss">
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  &__side {
    height: 52rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

    &--front {
      background-color: $color-white;
    }

    &--back {
      transform: rotateY(180deg);

      &-1 {
        background-image: linear-gradient(
          to right bottom,
          $color-secondary-light,
          $color-secondary-dark
        );
      }

      &-2 {
        background-image: linear-gradient(
          to right bottom,
          $color-primary-light,
          $color-primary-dark
        );
      }

      &-3 {
        background-image: linear-gradient(
          to right bottom,
          $color-tertiary-light,
          $color-tertiary-dark
        );
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }

  // Front side styling
  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    &--1 {
      background-image: linear-gradient(
          to right bottom,
          $color-secondary-light,
          $color-secondary-dark
        ),
        url("../assets/images/nat-5.jpg");
    }

    &--2 {
      background-image: linear-gradient(
          to right bottom,
          $color-primary-light,
          $color-primary-dark
        ),
        url("../assets/images/nat-6.jpg");
    }

    &--3 {
      background-image: linear-gradient(
          to right bottom,
          $color-tertiary-light,
          $color-tertiary-dark
        ),
        url("../assets/images/nat-7.jpg");
    }
  }

  &__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: $color-white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
    margin: 0;
  }

  &__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    &--1 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-secondary-light, 0.85),
        rgba($color-secondary-dark, 0.85)
      );
    }

    &--2 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.85),
        rgba($color-primary-dark, 0.85)
      );
    }

    &--3 {
      background-image: linear-gradient(
        to right bottom,
        rgba($color-tertiary-light, 0.85),
        rgba($color-tertiary-dark, 0.85)
      );
    }
  }

  &__details {
    padding: 3rem;
    margin: 0 auto;

    &-list {
      list-style: none;
      width: 80%;
      margin: 0 auto;
    }

    &__item {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid $color-grey-light-2;
      }
    }
  }

  // Back side styling

  &__cta {
    @include absCenter;
    width: 90%;
    text-align: center;
  }

  &__price-box {
    text-align: center;
    color: $color-white;
    margin-bottom: 8rem;
  }

  &__price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 6rem;
    font-weight: 100;
  }

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    min-width: 25rem;
    border-radius: 3px;
    background-color: $color-white;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

    &__side {
      height: auto;
      position: relative;
      box-shadow: none;

      &--back {
        transform: rotateY(0);
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
      }
    }

    &:hover &__side--front {
      transform: rotateY(0);
    }

    &__details {
      padding: 1rem 3rem;
    }

    // FRONT SIDE STYLING
    &__cta {
      position: relative;
      top: 0%;
      left: 0;
      width: calc(100% - 8rem);
      transform: translate(0);
      padding: 7rem 4rem 4rem;
    }

    &__price-box {
      margin-bottom: 3rem;
    }

    &__price-value {
      font-size: 4rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
