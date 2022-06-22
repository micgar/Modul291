import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    ausbildung:[
      {type:'modul', title:'286-Eigene ICT-Arbeitsinstrumente einrichten und bedienen', lek: 40, sem:[1]},
      {type:'modul', title:'287-Websites mit CSS gestalten', lek: 40, sem:[2]},
      {type:'modul', title:'291-Oberflächen (UIs) mit Webtechnologien entwickeln', lek: 40, sem:[6]},
      {type:'abu', title:'ABU-1.Lehrjahr', lek: 120, sem:[1,2]},
      {type:'abu', title:'ABU-2.Lehrjahr', lek: 120, sem:[3,4]},
      {type:'egk', title:'EGK-Zweite LSP', lek: 80, sem:[1,2],
        _cellVariants: { title: 'info', lek: 'danger', sem: 'warning' }},
      {type:'egk', title:'EGK-English', lek: 40, sem:[1],
        _cellVariants: { title: 'info', sem: 'warning' }}
    ]
  },
  getters: {
    module(state) {
      return state.ausbildung.filter(fach => fach.type === 'modul');
    },
    abu(state) {
      return state.ausbildung.filter(fach => fach.type === 'abu');
    },
    egk(state) {
      return state.ausbildung.filter(fach => fach.type === 'egk');
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
