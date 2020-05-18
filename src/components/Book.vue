<template>
  <section class="section-book" id="section-book">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form action="#" class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">
                Start booking now
              </h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Full Name"
                id="name"
                required
              />
              <label for="name" class="form__label">Full name</label>
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                required
              />
              <label for="email" class="form__label">Email address</label>
            </div>
            <div class="form__group .u-margin-bottom-medium">
              <div class="form__radio-group">
                <input
                  type="radio"
                  name="size"
                  id="small"
                  class="form__radio-input"
                />
                <label for="small" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Small tour group
                </label>
              </div>
              <div class="form__radio-group">
                <input
                  type="radio"
                  name="size"
                  id="large"
                  class="form__radio-input"
                />
                <label for="large" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>
            <div class="form__group">
              <button class="btn btn--green">Next step &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.book {
  width: 100%;
  max-width: 114rem;
  background-image: linear-gradient(
      105deg,
      rgba($color-white, 0.9) 0%,
      rgba($color-white, 0.9) 50%,
      transparent 50%
    ),
    url("../assets/images/nat-10.jpg");
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);

  @include respond(tab-land) {
    background-image: linear-gradient(
        105deg,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 65%,
        transparent 65%
      ),
      url("../assets/images/nat-10.jpg");
    background-size: cover;
  }

  @include respond(tab-port) {
    background-image: linear-gradient(
        to right,
        rgba($color-white, 0.9) 0%,
        rgba($color-white, 0.9) 100%
      ),
      url("../assets/images/nat-10.jpg");
  }

  &__form {
    width: 50%;
    padding: 6rem;

    @include respond(tab-land) {
      width: 65%;
    }

    @include respond(tab-port) {
      width: 70%;
    }
  }
}

.form {
  &__group:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rbga($color-white, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-primary;
    }

    &:focus:invalid {
      border-bottom: 3px solid $color-secondary-dark;
    }

    &::placeholder {
      color: $color-grey-dark-2;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  &__radio-group {
    width: 49%;
    display: inline-block;

    @include respond(tab-port) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  &__radio-input {
    display: none;
  }

  &__radio-label {
    font-size: $default-font-size;
    cursor: pointer;
    position: relative;
    padding-left: 4.5rem;
  }

  &__radio-button {
    height: 2rem;
    width: 2rem;
    border: 5px solid $color-primary;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -0.4rem;

    &::after {
      @include absCenter;
      content: "";
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      background-color: $color-primary;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
  }
}
</style>
