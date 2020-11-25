<template>
  <div class="barraNav">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand to="/"
        ><li class="patita">CornerDog <i class="fas fa-paw"></i></li
      ></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">Misión</b-nav-item>
          <b-nav-item to="/breed">Info Razas</b-nav-item>
          <b-nav-item to="/enfermedades">Enfermedades Genéticas</b-nav-item>
          <b-nav-item to="/adoption">Adopta</b-nav-item>
          <b-nav-item to="/contact">Contacto</b-nav-item>
          <b-nav-item to="/admin" disabled>Administrador</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.patita {
  list-style: none !important;
  color: #ffffff !important;
}
</style>
