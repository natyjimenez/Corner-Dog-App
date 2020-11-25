<!-- Template -->
<template>
  <div>
    <div class="banner-tips">
      <h1>Enfermedades Genéticas</h1>
    </div>

    <b-container class="introEnfermedades p-5">
      La selección de crías durante muchas generaciones a favorecido el traspaso
      de enfermedades genéticas entre los ejemplares de una misma raza.<br> Existe un
      amplio abanico de enfermedades hereditarias, existen muchos ejemplos, pero
      hablaremos de las más comunes:
    </b-container>

    <div class="tips container">
      <v-container>
        <v-row>
          <v-col md="4" v-for="(tip, i) in tips" :key="i">
            <Cardtips :tip="tip" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import { mapState } from "vuex";
import Cardtips from "@/components/enfermedades/Cardtips.vue";
export default {
  name: "Enfermedades",
  components: {
    Cardtips,
  },
  computed: {
    ...mapState(["tips"]),
  },
};
</script>

<!-- Style -->
<style lang="scss">
.tips {
  margin-bottom: 100px;
}
.banner-tips {
  background-image: url("../../src/assets/img/banner-huesito.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.introEnfermedades {
  background-color: #33cc99;
  color: #ffffff;
  text-align: justify;
}
</style>
