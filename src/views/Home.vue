<!-- Template -->
<template>
  <div>
    <div class="banner-home">
      <h1>Home</h1>
    </div>
    <div class="home container">
      <Carousel />
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Carousel from "@/components/home/Carousel.vue";
export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.home {
  margin-bottom: 100px;
}
.banner-home {
  background-image: url("../../src/assets/img/banner-huesito-verde.png");
  opacity: 0.8;
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 10px;
}
</style>
