<template>
  <button :class="[
    'base-button', 
    'base-btn--' + type, 
    'base-btn--' + aligment,
    'base-btn--size-' + size
    ]"
    :style="{ background: bg}"
  >{{ text }}</button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        text: { type: String, default: "btn text"},
        type: { type: String, default: "" },
        aligment: { type: String, default: "" }, // center
        size: { type: String, default: "m" }, // s, m, l
        bg: { type: String, default: "" }, // s, m, l
    }

}
</script>

<style lang="scss">
  .base-button {
    background: $primary;
    color: $lightText;
    font-weight: 700;
    padding: 0.7em 2.1em;
    border: none;
    border-radius: $radius;
    width: max-content;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      font-size: 16px !important;
    }
  }
  // types
  .base-btn--dark {
    background: rgba($color: var(--secondary), $alpha: 0.8)
  }
  // aligment 
  .base-btn--center {
    // display: flex;
    // justify-content: center;
  }

  // sizes 
  .base-btn--size-s {
    font-size: 16px;
  }
  .base-btn--size-m {
    font-size: 18px;
  }
  .base-btn--size-l {
    font-size: 20px;
  }

</style>