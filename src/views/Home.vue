<template>
  <div>
    <div class="nav">
      <router-link to="/nav">
        <input type="checkbox" id="navi-toggle" class="nav__checkbox" />
        <label for="navi-toggle" class="nav__button">
          <span class="nav__icon">&nbsp;</span>
        </label>
        <div class="nav__background">&nbsp;</div>
      </router-link>
    </div>
    <Header />
    <main>
      <About />
      <Features />
      <Tours />
      <stories />
      <Book />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/components/About";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Stories from "@/components/Stories";
import Book from "@/components/Book";
import Footer from "@/components/Footer";

export default {
  name: "home-layout",
  components: {
    Header,
    About,
    Features,
    Tours,
    Stories,
    Book,
    Footer
  }
};
</script>

<style lang="scss">
.nav {
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 50;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    @include respond(tab-port) {
      top: 4rem;
      right: 4rem;
    }

    @include respond(phone) {
      top: 3rem;
      right: 3rem;
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(
        $color-primary-light,
        $color-primary-dark
      );
      z-index: 100;
      transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

      @include respond(tab-port) {
        top: 4.5rem;
        right: 4.5rem;
      }

      @include respond(phone) {
        top: 3.5rem;
        right: 3.5rem;
      }
    }
  }

  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }
}

.section-about {
  background-color: $color-grey-light-1;
  padding: 25rem 0;
  margin-top: -20vh;

  @include respond(tab-port) {
    padding: 20rem 0;
  }
}

.section-features {
  padding: 20rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)
    ),
    url("../assets/images/nat-4.jpg");
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -10rem;

  & > * {
    transform: skewY(7deg);
  }

  @include respond(tab-port) {
    padding: 10rem 0;
  }
}

.section-tours {
  background-color: $color-grey-light-1;
  padding: 25rem 0 15rem;
  margin-top: -10rem;

  @include respond(tab-port) {
    padding: 20rem 0 10rem;
  }
}

.section-stories {
  position: relative;
  padding: 15rem 0;

  @include respond(tab-port) {
    padding: 10rem 0;
  }
}

.section-book {
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    $color-primary-light,
    $color-primary-dark
  );

  @include respond(tab-port) {
    padding: 10rem 0;
  }
}
</style>
