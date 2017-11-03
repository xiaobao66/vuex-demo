import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

import list from './modules/list'
import done from './modules/done'

Vue.use(Vuex)

let store = new Vuex.Store({
    modules: {
        list,
        done
    }
})

new Vue({
    el: '#app',
    components: {
        App
    },
    store
})