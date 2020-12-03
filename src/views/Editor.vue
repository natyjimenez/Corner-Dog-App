<!-- Template -->
<template>
  <div class="editor">
    <!-- Botón Logout -->
    <button @click="logout" class="btnLogout">Logout</button>
    <!-- Tabla para Leer Información -->
    <h4 class="titleTable">Adopciones</h4>

    <table class="table">
      <thead>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Sexo</th>
        <th>Edad</th>
        <th>Tamaño</th>
        <th>Esterilizado</th>
        <th>Apto para departamento</th>
        <th>Se adapta a otras mascotas</th>
        <th>Se adapta a niños</th>
        <th>Contacto</th>
        <th>Wapp</th>
        <th>Acciones</th>
      </thead>

      <tbody>
        <tr id="datosPerros" v-for="(adoptado, i) in adoptados" :key="i">
          <td><v-img class="imgDog" :src="adoptado.data.img"></v-img></td>
          <td>{{ adoptado.data.nombre }}</td>
          <td>{{ adoptado.data.sexo }}</td>
          <td>{{ adoptado.data.edad }}</td>
          <td>{{ adoptado.data.tamano }}</td>
          <td>{{ adoptado.data.esterilizado }}</td>
          <td>{{ adoptado.data.espacio }}</td> 
          <td>{{ adoptado.data.mascotas }}</td>
          <td>{{ adoptado.data.ninos }}</td>   
          <td>{{ adoptado.data.contacto }}</td>
          <td>{{ adoptado.data.wapp }}</td>          
          <td >
            <!-- Botón Editar -->
            <button v-b-modal.modal-1 @click="editar(adoptado.id)" class="btn btnEdit" id="btnEditarPerrito">
              Editar
            </button>
            <!-- Botón Eliminar -->
            <button @click="eliminar(adoptado.id)" class="btn btnDelete" id="btnEliminarPerrito">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
   
    <!-- Modal Editar Perrito-->
    <b-modal id="modal-1" title="BootstrapVue" class="EditForm">
      <b-form-group id="input-group-1" label="Imagen:" label-for="input-1">
        <b-form-input v-model="adoptado.data.img"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input v-model="adoptado.data.nombre"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sexo:" label-for="input-2">
        <b-form-input v-model="adoptado.data.sexo"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Edad:" label-for="input-2">
        <b-form-input v-model="adoptado.data.edad"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tamano:" label-for="input-2">
        <b-form-input v-model="adoptado.data.tamano"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Esterilizado:" label-for="input-2">
        <b-form-input v-model="adoptado.data.esterilizado"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apto para departamento:" label-for="input-2">
        <b-form-input v-model="adoptado.data.espacio"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Se adapta a otras mascotas:" label-for="input-2">
        <b-form-input id="adaptacion" v-model="adoptado.data.mascotas"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apto para niños:" label-for="input-2">
        <b-form-input v-model="adoptado.data.ninos"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contacto:" label-for="input-2">
        <b-form-input v-model="adoptado.data.contacto"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Wapp:" label-for="input-2">
        <b-form-input  v-model="adoptado.data.wapp"> </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btnCambios" @click="update">Aceptar cambios</b-button>
    </b-modal>
    <hr />

    <!-- Formulario Agregar Perrito -->
    <h4 class="titleAdd">Agrega un perrito para adopción</h4>
    <div class="w-50 m-auto formAdd">
      <b-form-group id="input-group-1" label="Imagen:" label-for="input-1" class="font-weight-bold">
        <b-form-input id="addImg" v-model="img"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1" class="font-weight-bold">
        <b-form-input id="addName" v-model="nombre"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sexo:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addGender" v-model="sexo"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Edad:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addAge" v-model="edad"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tamano:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addSize" v-model="tamano"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Esterilizado:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addSterilized" v-model="esterilizado"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Apto para departamento:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addApartment" v-model="espacio"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Se adapta a otras mascotas:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addPets" v-model="mascotas"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Apto para niños:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addChildren" v-model="ninos"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contacto:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addContactName" v-model="contacto"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Wapp:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="addContactNumber" v-model="wapp"> </b-form-input>
      </b-form-group>

      <b-button type="submit" id="clickAdd" class="btnAdd" @click="agregar">Agregar</b-button>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import firebase from "firebase";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      idUpdating: "",
      img: "",
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
      adoptado: {
        data: {
          img: "",
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
    };
  },
  computed: {
    ...mapState(["adoptados"]),
    ...mapGetters(["getAdoptadoUpdating"]),
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("admin"));
    },
    ...mapActions(["agregarAdoptados", "updateAdoptado", "eliminarAdoptado"]),
    agregar() {
      const adoptado = {
        img: this.img,
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
      this.agregarAdoptados(adoptado);
    },
    editar(id) {
      const adoptadoUpdating = JSON.parse(JSON.stringify(this.getAdoptadoUpdating(id)));
      this.adoptado = adoptadoUpdating;
      console.log(adoptadoUpdating);
    },
    update() {
      this.updateAdoptado(this.adoptado);
      this.$bvModal.hide("modal-1");
    },
    eliminar(id) {
      this.eliminarAdoptado(id);
    },
  },
};
</script>

<!-- Style -->
<style lang="scss">
.btnLogout {
  color: #ffffff;
  background-color: rgb(48, 151, 247);
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 50px;
}
.editor {
font-family: Helvetica, Arial, sans-serif;
font-size: 14px;
}
.titleTable {
  margin-top: 50px;
  font-weight: bold;
}
.table {
  margin-top: 20px;
}
.titleAdd {
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
}
.btnDelete {
  color: #ffffff !important;
  background-color: rgb(99, 51, 211) !important;
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 2px;
  margin-top: 3px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.btnEdit {
  color: #ffffff !important;
  background-color: #33cc99 !important;
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 28px;
  margin-right: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.btnAdd {
  color: #ffffff !important;
  background-color: #fcbd11 !important;
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 2px;
  margin-bottom: 100px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.btnCambios {
  color: #ffffff !important;
  background-color: #fcbd11 !important;
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
}
.modal-content footer, .modal-content header {
  display: none;
}
.imgDog {
  width: 100px;
  height: auto;
}
</style>
