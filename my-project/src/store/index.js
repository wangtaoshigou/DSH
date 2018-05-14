import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)

import allen from './allen'

const store = new Vuex.Store({
    modules: {
        allen
    }
})

export default store