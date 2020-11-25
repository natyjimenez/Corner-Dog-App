<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <v-card-title class="tituloCard">{{ raza.data.raza }}</v-card-title>
      <v-img height="250" :src="raza.data.img"></v-img>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <div class="textCard">
            <div><b>Altura:</b> {{ raza.data.nombre }}</div>
            <div><b>Peso:</b> {{ raza.data.peso }}</div>
            <div><b>Pelaje:</b> {{ raza.data.pelaje }}</div>
            <div><b>Característica:</b> {{ raza.data.caracteristica }}</div>
            <div><b>Espacio:</b> {{ raza.data.espacio }}</div>
            <div><b>Dueño:</b> {{ raza.data.dueno }}</div>
            <div><b>actividad:</b> {{ raza.data.actividad }}</div>
            <div>
              <b>Advertencia:</b>
              <ul>
                <li v-for="advertencia in raza.data.advertencia">
                  {{ advertencia }}
                </li>
              </ul>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
          <!-- Botón Eliminar -->
          <button @click="eliminar(raza.id)" class="btn btnDelete">
            Eliminar
          </button>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Cardedit",
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
</style>
