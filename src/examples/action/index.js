import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        todos: [{
            id: 1,
            text: 'go shopping',
            done: true
        }, {
            id: 2,
            text: 'see a film',
            done: false
        }, {
            id: 3,
            text: 'have a sleep',
            done: false
        }]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        }
    },
    mutations: {
        done(state, payload) {
            state.todos.forEach(todo => {
                if (todo.id === payload.id) {
                    todo.done = true
                }
            })
        },
        cancel(state, payload) {
            state.todos.forEach(todo => {
                if (todo.id === payload.id) {
                    todo.done = false
                }
            })
        }
    },
    actions: {
        doneRequest({commit}, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('done', payload)
                    resolve('finish')
                }, 1000)
            })
        },
        cancelRequest({commit}, payload) {
            setTimeout(() => {
                commit('cancel', payload)
            }, 1000)
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