<!-- Template -->
<template>
  <div>
    <div class="banner-breed">
      <h2>Información sobre Razas</h2>
    </div>

    <b-container>
      <b-row>
        <b-col class="txtIzq p-5">
          Queremos recordar que nuestra intención NO es fomentar o promover la
          compra de perros (u otro animal). Muy por el contrario promovemos la
          ADOPCIÓN.<br />
          La finalidad de esta sección es entregar un poco más de información
          para que las personas que deseen adquirir un perro de raza, conozcan
          sus características previamente y se aseguren que se adapta a sus
          necesidades y estilos de vida, y no se convierta en otro perro
          abandonado.<br />
          Y en el caso de adoptar un mestizo del cual podemos identificar algún
          rasgo predominante de alguna raza, se pueda de igual manera conocer
          sus características físicas o temperamento.<br />
          Acá una selección de las razas más comunes actualmente en Chile.
        </b-col>
      </b-row>
    </b-container>

    <div class="breed container">
      <v-container>
        <v-row>
          <v-col md="4" v-for="(raza, i) in razas" :key="i">
            <Cardbreed :raza="raza" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Cardbreed from "@/components/breed/Cardbreed.vue";
import { mapState } from "vuex";
export default {
  name: "Breed",
  computed: {
    ...mapState(["razas"]),
  },
  components: {
    Cardbreed,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.breed {
  margin-bottom: 100px;
}
.banner-breed {
  background-image: url("../../src/assets/img/Banner/BANNER-RAZAS.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 10px;
}
.cardsGroup {
  justify-content: center;
}
.txtIzq {
  background-color: rgb(149, 115, 228);
  color: #ffffff;
  text-align: left;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
</style>
