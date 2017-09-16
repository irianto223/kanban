import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
import Vuefire from 'vuefire'
import router from '../src/router/index'

Vue.use(Vuex)
Vue.use(Vuefire)

var state = {
  tasks: []
}

var mutations = {
  //
}

var actions = {
  //
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
