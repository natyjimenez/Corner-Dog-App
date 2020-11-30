<!-- Template -->
<template>
  <div>
    <div class="banner-admin">
      <h1>Administrador</h1>
    </div>
    <div class="admin container">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1" >
        <b-form-input class="input" id="input-1" v-model="email" type="email" required placeholder="Ingrese email" >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input class="input" id="input-2" v-model="password" required placeholder="Ingrese password" >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btnAceptar" id="btnAceptar" @click="login">Aceptar</b-button>
 
      </div> 
  </div>
</template>

<!-- Script -->
<script>
import firebase from "firebase";
import router from "../router/index.js";
export default {
  data() {
    return {    
        email: "",
        password: "",
    };
  },
  methods: {
    login() {
      const email = this.email
      const password = this.password
      firebase.auth().signInWithEmailAndPassword(email, password).then( (resultado) => {
        console.log(resultado)
        router.push({name:"Editor"})
      }).catch(e => console.log(e.message))
    } 
  },
};
</script>

<!-- Style -->
<style>
.banner-admin {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/banners%2FBANNER-ADMIN.png?alt=media&token=bb055cd4-a855-48dc-9238-a7f9c64bf3ca");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.btnAceptar {
  color: #ffffff;
  background-color: #fcbd11;
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
}
.input {
  max-width: 400px;
  margin: auto;
}
.admin {
  margin-top: 100px;
}  
.titleDatos {
  font-weight: bolder;
}
</style>