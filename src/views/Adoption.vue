<!-- Template -->
<template>
  <div>
    <div class="banner-adoption">
      <h1>Adopción</h1>
    </div>

    <b-container class="introAdoption p-5">
      Antes de decidir adoptar, recuerdo que estás haciendo un compromiso para
      toda la vida con otro ser vivo. Será un nuevo miembro de la familia que
      estará aproximadamente 10 años o más viviendo con ustedes y necesitará
      vacunación, cuidado, desparasitación, comida, atención y amor.<br />
      Una mascota rescatada te dará amor incondicional, compañía permanente,
      alegría en todo momento, fidelidad absoluta y un eterno agradecimiento.<br />
      Los animales no son productos ni juguetes y con tantos que necesitan un
      hogar en Chile, ¿qué mejor que salvar uno? ¡ADOPTA NO COMPRES!.
    </b-container>

    <div class="breed container">
      <v-container>
        <v-row>
          <v-col md="4" v-for="(adoptado, i) in adoptados" :key="i">
            <Card :adoptado="adoptado" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Card from "@/components/adoption/Card.vue";
import { mapState } from "vuex";
export default {
  name: "Adoption",
  computed: {
    ...mapState(["adoptados"]),
  },
  components: {
    Card,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.adoption {
  margin-bottom: 100px;
}
.banner-adoption {
  background-image: url("../../src/assets/img/banner-huesito-verde-oscuro.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.cardsGroup {
  justify-content: center;
}
.introAdoption {
  background-color: rgb(159, 128, 230);
  color: #ffffff;
  text-align: justify;
}
</style>
