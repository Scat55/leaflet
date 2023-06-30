import Vue from 'vue';
import Vuex from 'vuex';
import dots from './modules/dots';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dots,
  },
});
