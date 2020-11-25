<template>
  <div class="caroussel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="grey"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        text=""
        img-src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/slider%2FDUBI1.png?alt=media&token=fd03e64f-45e1-43d0-b9a7-57d574f222ea"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/slider%2FMONCHI..png?alt=media&token=db9aafd7-d209-4dc5-afdb-509faa52ce9e"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/slider%2FDUBI2.png?alt=media&token=4c066854-e2c2-462e-b755-c682fb198392"
      ></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/slider%2Fpradi2.png?alt=media&token=21ae37f6-3ee8-4063-a8f8-8e2857f134b5"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss">

</style>
