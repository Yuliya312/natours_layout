<template>
  <section class="section-features">
    <div class="row" id="section-features">
      <div
        class="col-1-of-4"
        v-for="feature_box in feature_boxes"
        :key="feature_box.id"
      >
        <div class="feature-box">
          <span class="feature-box__icon" :class="feature_box.class"></span>
          <h3 class="heading-tertiary u-margin-bottom-small">
            {{ feature_box.title }}
          </h3>
          <p class="feature-box__text">{{ feature_box.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "features",
  data() {
    return {
      feature_boxes: [
        {
          id: 1,
          class: "feature-box__icon--world",
          title: "Explore the world",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
          id: 2,
          class: "feature-box__icon--compass",
          title: "Meet nature",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
          id: 3,
          class: "feature-box__icon--map",
          title: "Find your way",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        },
        {
          id: 4,
          class: "feature-box__icon--heart",
          title: "Live a healthier life",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        }
      ]
    };
  }
};
</script>

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
