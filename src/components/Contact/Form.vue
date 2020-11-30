<template>
  <div class="formularioAdopt w-50 m-auto">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Nombre Mascota:" label-for="input-1" class="font-weight-bold">
        <b-form-input id="input-1" v-model="form.nombre" required placeholder="Ingresa el nombre de la mascota">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Sexo:" label-for="input-1" class="font-weight-bold">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio1">Macho</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">Hembra</label>
        </div>
      </b-form-group>

      <b-form-group id="input-group-2" label="Edad:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="input-2" v-model="form.edad" required placeholder="Edad aproximada">
        </b-form-input>
      </b-form-group>

        <b-form-group id="input-group-1" label="Tamaño aproximado de adulto:" label-for="input-1" class="font-weight-bold">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio1">Pequeño</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">Mediano</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">Grande</label>
        </div>
      </b-form-group>

      <b-form-group id="input-group-1" label="Esterilizado:" label-for="input-1" class="font-weight-bold">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio1">Sí</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">No</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">Sin información</label>
        </div>
      </b-form-group>

      <b-form-group id="input-group-1" label="Apto para departamento (tamaño adulto):" label-for="input-1" class="font-weight-bold">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio1">Sí</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">No</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
          <label class="form-check-label font-weight-normal" for="inlineRadio2">No sé</label>
        </div>
      </b-form-group>

      <b-form-group id="input-group-2" label="Se adapta a otras mascotas:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="input-2" v-model="form.mascotas" required placeholder="índica a que mascotas se adapta y a cuales no">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Recomendado para niños:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="input-2" v-model="form.ninos" required placeholder="Sí/No/Sin información">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre de Contacto:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="input-2" v-model="form.nombreContacto" required placeholder="Nombre de contacto">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Wapp de contacto:" label-for="input-2" class="font-weight-bold">
        <b-form-input id="input-2" v-model="form.wapp" required placeholder="+56912345678">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Mensaje:" label-for="input-3" class="font-weight-bold">
        <b-form-textarea id="textarea" v-model="form.mensaje" placeholder="Mensaje o información adicional" rows="3" max-rows="6">
        </b-form-textarea>
      </b-form-group>
      
      <div class="btnsForm">
        <b-button type="submit" class="btnEnviar">Enviar</b-button>
        <b-button type="reset" class="btnBorrar">Borrar</b-button>
      </div>
    </b-form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        edad: "",
        mascotas: "",
        ninos: "",
        nombreContacto: "",
        wapp: "",
        mensaje: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nombre = "";
      this.form.edad = "";
      this.form.mascotas = "";
      this.form.ninos = "";
      this.form.nombreContacto = "";
      this.form.wapp = "";
      this.form.mensaje = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss">
.btnEnviar {
  background-color: #fcbd11  !important;
  color: #ffffff !important;
  border-style: none;
  margin: 5px;
  padding: 10px 20px;
}
.btnBorrar {
  background-color: rgb(99, 51, 211) !important;
  color: #ffffff !important;
  border-style: none;
  margin: 5px;
  padding: 10px 20px;
}
.formularioAdopt {
  text-align: left;
}
.btnsForm {
  text-align: center;
}
</style>
