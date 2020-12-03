import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  // ESTADO
  state: {
    razas: [],
    adoptados: [],
    tips: [],
    formulario: [],
  },
  // MUTACIONES
  mutations: {
    GET_DATA_RAZAS(state, razas) {
      state.razas = razas;
    },
    GET_DATA_ADOPTADOS(state, adoptados) {
      state.adoptados = adoptados;
    },
    GET_DATA_TIPS(state, tips) {
      state.tips = tips;
    },
    GET_DATA_FORMULARIO(state, formulario) {
      state.formulario = formulario;
    },
  },
  // ACCIONES
  actions: {
  // petición asíncrona data ADOPTADOS
    async getDataAdoptados({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("adoptados")
          .onSnapshot((snapshot) => {
            let adoptados = [];
            snapshot.forEach((p) => {
              adoptados.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_ADOPTADOS", adoptados);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },
  // petición asíncrona data RAZAS
    async getDataRazas({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("razas")
          .onSnapshot((snapshot) => {
            let razas = [];
            snapshot.forEach((p) => {
              razas.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_RAZAS", razas);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },
    // petición asíncrona data TIPS O ENFERMEDADES
    async getDataTips({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("tips")
          .onSnapshot((snapshot) => {
            let tips = [];
            snapshot.forEach((p) => {
              tips.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_TIPS", tips);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },
    // petición asíncrona data FORMULARIO
    async getDataFormulario({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("formulario")
          .onSnapshot((snapshot) => {
            let formulario = [];
            snapshot.forEach((p) => {
              formulario.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_FORMULARIO", formulario);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },
    agregarAdoptados({ commit }, adoptado) {
      firebase
        .firestore()
        .collection("adoptados")
        .add(adoptado);
    },
    updateAdoptado({ commit }, adoptado) {
      firebase
        .firestore()
        .collection("adoptados")
        .doc(adoptado.id)
        .update(adoptado.data);
    },
    eliminarAdoptado({ commit }, id) {
      firebase
        .firestore()
        .collection("adoptados")
        .doc(id)
        .delete();
    },
    agregarFormulario({ commit }, form) {
      firebase
        .firestore()
        .collection("formulario")
        .add(form);
    },

  },
  getters: {
    getAdoptadoUpdating: (state) => (id) => {
      return state.adoptados.find((p) => p.id === id);
    },
  },
  modules: {},
});
