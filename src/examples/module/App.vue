<template>
    <div>
        <h2>所有的todos</h2>
        <ul>
            <li v-for="todo in todos">
                <span>{{todo.text}}</span>
                <button v-if="!todo.done" @click="done(todo.id)">done</button>
                <button v-if="todo.done" @click="cancel({id: todo.id})">cancel</button>
            </li>
        </ul>
        <h2>已完成的todos</h2>
        <ul>
            <li v-for="doneTodo in doneTodos">
                <span>{{doneTodo.text}}</span>
            </li>
        </ul>
        <p>已完成的todos数量：{{doneTodosCount}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {}
        },
//        computed: {
//            todos() {
//                return this.$store.state.todos
//            },
//            doneTodos() {
//                return this.$store.getters.doneTodos
//            },
//            doneTodosCount() {
//                return this.$store.getters.doneTodosCount
//            }
//        },
        computed: {
            ...mapState({
                todos: state => state.list.todos
            }),
            ...mapGetters([
                'doneTodos',
                'doneTodosCount'
            ])
        },
        methods: {
            done(id) {
                this.$store.dispatch('doneRequest', {
                    id: id
                }).then((data) => {
                    console.log(data)
                })
            },
            ...mapActions({
                cancel: 'cancelRequest'
            })
        }
    }
</script>