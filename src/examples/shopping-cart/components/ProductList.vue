<template>
    <ul>
        <li v-for="product in products">
            <span>{{product.title}} - {{product.price}}</span>
            <span>amount: {{product.inventory}}</span>
            <button :disabled="!product.inventory" @click="addToCart(product)">Add to cart</button>
        </li>
    </ul>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState({
            products: state => state.products.all
        }),
        methods: mapActions([
            'addToCart'
        ]),
        created() {
            this.$store.dispatch('getAllProducts')
        }
    }
</script>