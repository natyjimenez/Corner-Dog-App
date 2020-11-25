<!-- Template -->
<template>
  <div>
    <div class="banner-contact">
      <h1>Contacto</h1>
    </div>

    <div class="contact container">
      <div class="introContacto">
        Para consultas o sugerencias escribe a
        <strong>administrador@cornerdog.cl.</strong><br />
        Si quieres entregar algún perrito en adopción completa el formulario a
        continuación.
        <h5 class="titleForm">FORMULARIO PARA PUBLICAR PERRO EN ADOPCIÓN</h5>
      </div>

      <Form />
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Form from "@/components/Contact/Form.vue";
export default {
  name: "Contact",
  components: {
    Form,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.contact {
  margin-top: 40px;
  margin-bottom: 100px;
}
.banner-contact {
  background-image: url("../../src/assets/img/banner-huesito-verde-azul.png");
  opacity: 0.8;
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.introContacto {
  max-width: 600px;
  margin: auto;
  text-align: left;
}
.titleForm {
  text-align: left;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
}
</style>
