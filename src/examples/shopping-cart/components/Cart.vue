<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">Please add some products to cart</p>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total}}</p>
        <p>
            <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
        </p>
        <p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapState({
                checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters({
                products: 'cartProducts'
            }),
            total() {
                return this.products.reduce((total, product) => {
                    return total + product.price * product.quantity
                }, 0)
            }
        },
        methods: {
            checkout(products) {
                this.$store.dispatch('checkout', products)
            }
        }
    }
</script>