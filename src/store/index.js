import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    razas: [],
    adoptados: [],
    tips: [],
  },
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
  },
  actions: {
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
  },
  getters: {
    getAdoptadoUpdating: (state) => (id) => {
      return state.adoptados.find((p) => p.id === id);
    },
  },
  modules: {},
});
