<!-- Template -->
<template>
  <div>
    <div class="banner-about">
      <h2 id="tituloMision">Misión</h2>
    </div>
    <div class="contMision">
      <b-container class="txtPrincipal p-5">
        CornerDog nace desde la idea de darle una segunda oportunidad a muchos
        perritos que se encuentran sin hogar, haciendo uso de la tecnología para
        que los usuarios nos hagan llegar las historias e información de estos
        perritos rescatados o abandonados, y a su vez las personas que buscan
        una mascota, puedan encontrar la que se adapte mejor a su propio estilo
        de vida. Además entregamos información sobre las razas más compradas hoy
        en Chile, esto no se hace con el fin de promover la compra de animales
        de raza, si no, que las personas puedan conocer mejor las
        características de cada raza, esto es importante por 2 motivos
        principales:
      </b-container>

      <b-container>
        <b-row>
          <b-col class="contCorgi p-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/corgi-royalepng.png?alt=media&token=27afe12d-33e4-4f21-aa06-29dc2b1df5cc"
              img-alt="Card image"
              class="imgCorgiRoyale"
            />
          </b-col>
          <b-col class="txtRaza p-5">
            Primero, tenemos el caso de personas que SI COMPRAN un perro de
            raza, y esto no se puede prohibir, pero si podemos brindarle
            información para que elijan un compañero de vida y no un accesorio
            de moda. Hoy existe una realidad muy silenciosa que es el abandono
            de los perros de raza, esto ocurre mucho porque:
          </b-col>
        </b-row>
      </b-container>

      <b-container>
        <b-row>
          <b-col class="txtPrimero p-5">
            Primero las razas se ponen de moda esto es un hecho (durante los 90’
            vimos pekinés, dóberman, dálmatas por doquier, en el 2000 poodle
            toys, maltés, yorkshire y el boom de las razas toy, hoy en el 2020
            vemos pug, bulldog francés y bulldog inglés tapizando las redes).
            Muchas personas adquieren un perrito de raza porque está de moda y
            es bonito, y no aceptan el compromiso de responsabilidad con un ser
            vivo, aquí podemos encontrar perros que no son abandonados como tal,
            pero no reciben la atención a sus necesidades, son descuidados, se
            transforman en un estorbo llegando a ser maltratados en sus hogares.
          </b-col>
          <b-col class="txtSegundo p-5">
            En otros casos gana el entusiasmo de tener un bello cachorro que
            cuando se transforma en adulto ya no resulta tan adorable y se dan
            cuenta que “no era lo que esperaban”, o en otros casos no se adaptan
            a sus estilos de vida (espacio, niños, vida activa, etc), y son
            abandonados.
          </b-col>
        </b-row>
      </b-container>

      <b-container>
        <b-row>
          <b-col class="contMestizo p-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/corner-dog2.appspot.com/o/matapacos.png?alt=media&token=d85d3880-06fe-46c9-a865-322cf1500a53"
              img-alt="Card image"
              class="imgMestizo"
            />
          </b-col>
          <b-col class="txtMestizo p-5">
            Segundo, los mestizos no son más que mezclas de otras razas, es
            decir no tienen una raza reconocida por los estándares
            internacionales, pero igualmente provienen de la cruza de otras
            razas. Por ejemplo, puedo tener un perro que tiene “rasgos” de
            pastor alemán pero es más pequeño o su pelaje es un poco diferente,
            en efecto este perrito debe ser el cachorro de la cruza de un pastor
            alemán con otra raza o mestizo, esto SI lo hace heredar ciertas
            características físicas y del temple a nuestro cachorro, lo que nos
            puede llevar a tomar una mejor decisión a la hora de adoptar.
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
export default {};
</script>

<!-- Style -->
<style lang="scss">
.about {
  margin-bottom: 100px;
}
.banner-about {
  background-image: url("../../src/assets/img/Banner/BANNER-MISION.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 22px;
}
.contMision {
  margin-bottom: 100px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.txtPrincipal {
  background-color: #f36bbfde !important;
  color: #ffffff;
  text-align: left;
}
.txtRaza {
  text-align: justify;
}
.txtPrimero {
  background-color: rgb(149, 115, 228);
  color: #ffffff;
  text-align: justify;
}
.txtSegundo {
  background-color: rgb(99, 51, 211);
  color: #ffffff;
  text-align: justify;
}
.txtMestizo {
  text-align: justify;
}
.imgCorgiRoyale {
  max-width: 50%;
}
.imgMestizo {
  max-width: 50%;
}
@media (max-width: 768px) {
  .contCorgi {
    display: none;
  }
  .contMestizo {
    display: none;
  }
}
</style>
