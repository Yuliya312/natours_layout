<template>
  <section class="section-tours" id="section-tours">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">
        Most popular tours
      </h2>
    </div>
    <div class="row">
      <div class="col-1-of-3" v-for="card in cards" :key="card.id">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture" :class="card.class">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span" :class="card.titleClass">
                {{ card.title }}
              </span>
            </h4>
            <div class="card__details">
              <ul class="card__details-list">
                <li
                  class="card__details__item"
                  v-for="cardText in card.cardList"
                  :key="cardText.id"
                >
                  {{ cardText.text }}
                </li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back" :class="card.classBackSide">
            <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">{{ card.price }}</p>
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
        <Popup @closePopup="closeInfoPopup" @bookTour="bookNow"> </Popup>
      </div>
    </transition>
  </section>
</template>

<script>
import Popup from "@/components/Popup";
import router from "../router/index";

export default {
  name: "tours",
  components: {
    Popup
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          class: "card__picture--1",
          classBackSide: "card__side--back-1",
          titleClass: "card__heading-span--1",
          title: "The sea explorer",
          cardList: [
            {
              id: 1,
              text: "3 day tour"
            },
            {
              id: 2,
              text: "Up to 30 people"
            },
            {
              id: 3,
              text: "2 tour guides"
            },
            {
              id: 4,
              text: "Sleep in cozy hotels"
            },
            {
              id: 5,
              text: "Difficulty: easy"
            }
          ],
          price: "$297"
        },
        {
          id: 2,
          class: "card__picture--2",
          classBackSide: "card__side--back-2",
          titleClass: "card__heading-span--2",
          title: "The forest hiker",
          cardList: [
            {
              id: 1,
              text: "7 day tour"
            },
            {
              id: 2,
              text: "Up to 40 people"
            },
            {
              id: 3,
              text: "6 tour guides"
            },
            {
              id: 4,
              text: "Sleep in provided tents"
            },
            {
              id: 5,
              text: "Difficulty: medium"
            }
          ],
          price: "$497"
        },
        {
          id: 1,
          class: "card__picture--3",
          classBackSide: "card__side--back-3",
          titleClass: "card__heading-span--3",
          title: "The snow adventurer",
          cardList: [
            {
              id: 3,
              text: "5 day tour"
            },
            {
              id: 2,
              text: "Up to 15 people"
            },
            {
              id: 3,
              text: "3 tour guides"
            },
            {
              id: 4,
              text: "Sleep in provided tents"
            },
            {
              id: 5,
              text: "Difficulty: hard"
            }
          ],
          price: "$897"
        }
      ],
      isInfoPopupVisible: false
    };
  },
  methods: {
    bookNow() {
      this.isInfoPopupVisible = false;
      router.push({ name: "home", hash: "#section-book" });
    },
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
    transition: transform 0.8s ease;
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
