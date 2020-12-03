<!-- Template -->
<template>
  <div>
    <div class="banner-home">
      <h2>Home</h2>
    </div>
    <div class="home container">
      <Carousel />
    </div>
    <div class="cardFrases">
      <v-container>
        <v-row>
          <v-card class="fraseBuda mx-auto" md-4 max-width="344">
            <v-card-text>
              <div class="text--primary">
               "Cuando un hombre se apiade de todas las criaturas vivientes, solo entonces será noble"
              </div>
              <p class="autorFrase1">Buda</p>
            </v-card-text>
          </v-card>
          <v-card class="fraseGandhi mx-auto" md-4 max-width="344">
            <v-card-text>
              <div class="text--primary">
                "La grandeza de una nación y su proceso moral pueden ser juzgados según la forma en que tratan a sus animales"
              </div>
              <p class="autorFrase2">Gandhi</p>
            </v-card-text>
          </v-card>
          <v-card class="fraseWilson mx-auto" sm-6 md-4 max-width="344">
            <v-card-text>
              <div class="text--primary">
                "Si un perro no corre hacía ti después de mirar tu rostro, debes volver a casa y examinar tu conciencia"
              </div>
              <p class="autorFrase3">Woodrow Wilson</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
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
  margin-bottom: 30px;
}
.banner-home {
  background-image: url("../../src/assets/img/Banner/BANNER-HOME.png");
  opacity: 0.8;
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 10px;
}
.cardFrases {
  margin-bottom: 100px;
}
.fraseBuda {
 background-color: rgb(138, 100, 226) !important;
 margin-top: 10px;
 font-size: 20px;
}
.fraseGandhi{
 background-color: #5a8eee !important;
 margin-top: 10px;
}
.fraseWilson {
 background-color:  rgb(16, 204, 179) !important;
 margin-top: 10px;
}
.text--primary {
  color: #ffffff !important;
  margin-top: 20px;
  font-weight: 700 !important;
  font-size: 14px !important;
}
.autorFrase2 {
  color: #ffffff !important;
  margin-top: 20px;
  font-size: 14px !important;
  font-style: italic;
}
.autorFrase1 {
  color: #ffffff !important;
  padding-top: 40px;
  font-size: 14px !important;
  font-style: italic;
}
.autorFrase3 {
  color: #ffffff !important;
  padding-top: 40px;
  font-size: 14px !important;
  font-style: italic;
}
</style>
