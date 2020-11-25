<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="tip.data.img" height="200px"></v-img>

    <v-card-title class="tituloEnfermedad">
      {{ tip.data.enfermedad }}
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="txtIzqTip">
          <b>Problemas:</b> {{ tip.data.problemas }}
        </v-card-text>
        <v-card-text class="txtIzqTip">
          <b>Razas propensas a padecerla:</b> {{ tip.data.razas }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Cardtips",
  props: ["tip"],
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss">
.tituloEnfermedad {
  text-align: left !important;
  font-family: "Source sans pro";
  color: #2c3e50c2 !important;
  font-size: 25px !important;
}
.txtIzqTip {
  text-align: left !important;
  font-family: "Source sans pro";
  color: #2c3e50c2 !important;
  font-size: 14px;
}
</style>
