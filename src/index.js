import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
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