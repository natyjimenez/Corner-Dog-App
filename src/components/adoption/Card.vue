<template>
  <v-card class="cardAdoption mx-auto" max-width="344">
    <v-card-text>
      <v-card-title class="tituloCard">{{ adoptado.data.nombre }}</v-card-title>
      <v-img height="250" :src="adoptado.data.img"></v-img>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-btn class="btnMoreAdoption" id="btnMoreAdoption" @click="reveal = true">
        Leer más
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <div class="textCard" id="textoCard">
            <h5 class="contactoCard">Datos Mascota</h5>
            <div id="nombreMascota"><b>Nombre:</b> {{ adoptado.data.nombre }}</div>
            <div id="sexoMascota"><b>Sexo:</b> {{ adoptado.data.sexo }}</div>
            <div id="edadMascota"><b>Edad:</b> {{ adoptado.data.edad }}</div>
            <div id="tamanoMascota"><b>Tamaño:</b> {{ adoptado.data.tamano }}</div>
            <div id="esterilizadoMascota"><b>Esterilizado:</b> {{ adoptado.data.esterilizado }}</div>
            <div id="aptoParaDpto">
              <b>Recomendado para departamento:</b> {{ adoptado.data.espacio }}
            </div>
            <div id="aptoOtrasMascotas">
              <b>Se adapta a otras mascotas:</b> {{ adoptado.data.mascotas }}
            </div>
            <div id="AptoNinos"><b>Recomendado para niños:</b> {{ adoptado.data.ninos }}</div>

            <div>
              <h5 class="contactoCard" id="datosContacto">Datos contacto</h5>
              <div id="nombreContacto"><b>Nombre:</b> {{ adoptado.data.contacto }}</div>
              <div id="numeroContacto"><b>Wapp:</b> {{ adoptado.data.wapp }}</div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn class="btnCerrarAdoption" id="btnCerrarAdoption" @click="reveal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: ["adoptado"],
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
.cardAdoption {
  font-family: "Source sans pro";
}
.tituloCard {
  color: #2c3e50c2 !important;
  font-size: 25px;
}
.textCard {
  text-align: left;
  color: #2c3e50c2 !important;
  font-size: 14px;
}
.btnCerrarAdoption {
  background-color: rgb(252, 193, 0) !important;
  color: #ffffff !important;
  margin-top: 20px;
}
.btnMoreAdoption {
  background-color: rgba(247, 196, 29, 0.774) !important;
  color: #ffffff !important;
}
.contactoCard {
  font-weight: bold;
  margin-top: 20px;
}
</style>
