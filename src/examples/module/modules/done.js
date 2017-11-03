export default {
    getters: {
        doneTodos(state, getters, rootState) {
            return rootState.list.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        }
    },
    actions: {
        doneRequest({state, commit}, payload) {
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
}