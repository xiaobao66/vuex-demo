<template>
    <div>
        <p>基本映射：{{count}}</p>
        <p>字符串映射：{{countAlias}}</p>
        <p>函数映射：{{countPlusLocalState}}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                localCount: 1
            }
        },
//        computed: {
//            count() {
//                return this.$store.state.count
//            }
//        },
        computed: mapState({
            count: state => state.count,
            countAlias: 'count',
            countPlusLocalState(state) {
                return state.count + this.localCount
            }
        }),
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>