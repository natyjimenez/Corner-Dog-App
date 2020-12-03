<!-- Template -->
<template>
  <div>

    <div class="banner-contact">
      <h2>Contacto</h2>
    </div>

    <div class="contact container">
      <div class="introContacto">
        <p>Para consultas o sugerencias escribe a
        <strong>administrador@cornerdog.cl</strong><br />
        Si quieres entregar algún perrito en adopción completa el formulario a
        continuación.</p>        
        <h5 class="titleForm">FORMULARIO PARA PUBLICAR PERRO EN ADOPCIÓN</h5>
        <p class="importante">***La publicación se mantendrá activa por 30 días, si pasado ese periódo no has tenido buenos resultados, puedes volver a publicar***</p>       
      </div>
    
    <!-- Formulario Agregar Perrito -->
        <div class="w-50 m-auto formAdd">
      
        <b-form-group id="input-group-1" label="Nombre de la mascota:" label-for="input-1" class="font-weight-bold">
          <b-form-input id="addName" v-model="nombre" placeholder="Ingresa su nombre"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Sexo:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addGender" v-model="sexo" placeholder="Macho/Hembra"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Edad:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addAge" v-model="edad" placeholder="Edad aproximada de la mascota"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Tamaño aproximado de adulto:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addSize" v-model="tamano" placeholder="Grande/Mediano/Pequeño"> </b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="Se encuentra esterilizado/a:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addSterilized" v-model="esterilizado" placeholder="Sí/No/Sin información"> </b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="Apto para departamento:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addApartment" v-model="espacio" placeholder="Sí/No/Sin información"> </b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="Se adapta a otras mascotas:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addPets" v-model="mascotas" placeholder="Ej: Se adapta a otros perros pero no a gatos"> </b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="Apto para niños:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addChildren" v-model="ninos" placeholder="Sí/No/Sin información"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Contacto:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addContactName" v-model="contacto" placeholder="Nombre de contacto"> </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Wapp:" label-for="input-2" class="font-weight-bold">
          <b-form-input id="addContactNumber" v-model="wapp" placeholder="+56912345678"> </b-form-input>
        </b-form-group>
      
        <div class="btnsForm">
          <b-button type="submit" class="btnEnviar" @click="enviar">Enviar</b-button>
        </div>
       
      </div>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  name: "Contact",
   data() {
    return {
      adoptado: {
        data: {
          nombre: "",
          sexo: "",
          edad: "",
          tamano: "",
          esterilizado: "",
          espacio: "",
          mascotas: "",
          ninos: "",
          contacto: "",
          wapp: "",
        },
      },
      show: true,
    };
  },
  computed: {
    ...mapState(["formulario"]),
  },
  methods: {
    ...mapActions(["agregarFormulario"]),
    enviar() {
      const form = {
        nombre: this.nombre,
        sexo: this.sexo,
        edad: this.edad,
        tamano: this.tamano,
        esterilizado: this.esterilizado,
        espacio: this.espacio,
        mascotas: this.mascotas,
        ninos: this.ninos,
        contacto: this.contacto,
        wapp: this.wapp,
      };
      this.agregarFormulario(form);
    },
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
  background-image: url("../../src/assets/img/Banner/BANNER-CONTACTO.png");
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
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.titleForm {
  text-align: left;
  margin-top: 40px;
  font-weight: bold;
}
.importante {
  font-size: 14px;
  font-style: italic;
    margin-bottom: 40px;
}
.btnEnviar {
  background-color: #fcbd11  !important;
  color: #ffffff !important;
  border-style: none;
  margin: 5px;
  padding: 10px 20px;
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
}
.btnsForm {
  text-align: center;
}
.formAdd {
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
}
</style>
