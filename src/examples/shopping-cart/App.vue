<template>
    <div>
        <h1>Shopping Cart Demo</h1>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <h2>Cart</h2>
        <cart></cart>
    </div>
</template>

<script>
    import ProductList from './components/ProductList.vue'
    import Cart from './components/Cart.vue'

    export default {
        components: {
            ProductList,
            Cart
        }
    }
</script>