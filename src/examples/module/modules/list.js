export default {
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
    mutations: {
        done(state, {id}) {
            state.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.done = true
                }
            })
        },
        cancel(state, {id}) {
            state.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.done = false
                }
            })
        }
    }
}