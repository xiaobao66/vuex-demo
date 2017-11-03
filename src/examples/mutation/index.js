import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

import {INCREMENT, DECREMENT} from './mutation-types'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        [INCREMENT](state, payload) {
            state.count += payload.amount
        },
        [DECREMENT](state, payload) {
            state.count -= payload.amount
        }
    }
})

new Vue({
    el: '#app',
    components: {
        App
    },
    store
})