<template>
  <v-card class="cardBreed mx-auto" max-width="344">
    <v-card-text>
      <v-card-title class="tituloCard" id="nombreRaza">{{ raza.data.nombre }}</v-card-title>
      <v-img height="250" :src="raza.data.img"></v-img>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-btn class="btnMoreBreed" id="btnMoreBreed" @click="reveal = true">
        Leer Más
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <div class="textCard" id="textCardBreed">
            <div id="alturaRaza"><b>Altura:</b> {{ raza.data.altura }}</div>
            <div id="pesoRaza"><b>Peso:</b> {{ raza.data.peso }}</div>
            <div id="pelajeRaza"><b>Pelaje:</b> {{ raza.data.pelaje }}</div>
            <div id="caractRaza"><b>Característica:</b> {{ raza.data.caracteristica }}</div>
            <div id="espacioRaza"><b>Espacio recomendado:</b> {{ raza.data.espacio }}</div>
            <div id="duenoRaza"><b>Dueño ideal:</b> {{ raza.data.dueno }}</div>
            <div id="actividadRaza"><b>Actividad requerida:</b> {{ raza.data.actividad }}</div>
            <div>
              <b>Advertencia:</b>
              <ul class="txtAdvertencia">
                <li v-for="advertencia in raza.data.advertencia">
                  {{ advertencia }}
                </li>
              </ul>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn class="btnCerrarBreed" id="btnCerrarBreed" @click="reveal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Cardbreed",
  props: ["raza"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style lang="scss">
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.btnMoreBreed {
  background-color: #fcbd11 !important;
  color: #ffffff !important;
}
.btnCerrarBreed {
  background-color: #fcd34f !important;
  color: #ffffff !important;
}
.txtAdvertencia {
  padding-left: 20px;
}
.textCard {
  text-align: left !important;
  color: #2c3e50c2 !important;
  font-size: 14px;
}
.tituloCard {
  color: #2c3e50c2 !important;
  font-size: 25px;
}
.cardBreed {
  font-family: "Source sans pro";
}
</style>
