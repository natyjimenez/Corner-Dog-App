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
  background-image: url("https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/banners%2FBANNER-ENFERMEDADES.png?alt=media&token=cf5355b1-d532-4af1-840b-cfde239c5710");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.introEnfermedades {
  background-color: #4a70ecc7;
  color: #ffffff;
  text-align: justify;
}
</style>
