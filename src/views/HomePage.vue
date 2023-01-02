<template>
  <div class="home-page">
    <div class="home-page__item">
      <BarcodeScanner />
    </div>
    <!-- <div class="home-page__item">
    </div> -->
  </div>
</template>

<script>
import BarcodeScanner from "../components/TheBarcode.vue"
export default {
    name: "HomePage",
    components: {
      BarcodeScanner
    }
}
</script>

<style lang="scss">
  .home-page {
    padding: 50px 0;
    display: flex;
    gap: 50px;
    .home-page__item {
      flex: 1;
      min-height: 30vh;
      padding: 20px 40px;
      border-radius: 8px;
      background: #8199adbd;
      -webkit-backdrop-filter: blur(25px);
      backdrop-filter: blur(25px);
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }
  }
</style>