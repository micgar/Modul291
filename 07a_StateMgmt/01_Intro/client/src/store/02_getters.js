import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    vorname: "Anna",
    nachname: "Muster",
    lehrbetrieb: "UBS AG",
    beruf: "Mediamatiker EFZ",
    jahr: "1. bis 4. Lehrjahr"
  },
  getters: {
    trainer(state) {
      return `${state.vorname} ${state.nachname}`;
    },
    trainerEmail(state) {
      return `${state.vorname}.${state.nachname}@ubs.com`.toLowerCase();
    },
    jobPosition(state) {
      return `${state.lehrbetrieb} für ${state.beruf} im ${state.jahr}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
