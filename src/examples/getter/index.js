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
    }
})

new Vue({
    el: '#app',
    components: {
        App
    },
    store
})