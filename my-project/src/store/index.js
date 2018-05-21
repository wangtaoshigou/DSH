import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)
import tony from './tony'

const store = new Vuex.Store({
    modules: {
        tony
    }
})

export default store