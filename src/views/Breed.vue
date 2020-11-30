<!-- Template -->
<template>
  <div>
    <div class="banner-breed">
      <h1>Información sobre Razas</h1>
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
  background-image: url("https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/banners%2FBANNER-RAZAS.png?alt=media&token=8f46ac8e-1103-46a3-be64-1f8eefcfe39b");
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
}
</style>
