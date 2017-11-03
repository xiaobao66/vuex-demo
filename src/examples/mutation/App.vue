<template>
    <div>
        <p>结果：{{count}}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement({amount: 10})">-</button>
        </p>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {}
        },
//        computed: {
//            count() {
//                return this.$store.state.count
//            }
//        },
        computed: mapState({
            count: state => state.count
        }),
        methods: {
            increment() {
                this.$store.commit('increment', {
                    amount: 10
                })
            },
            ...mapMutations([
                'decrement'
            ])
        }
    }
</script>