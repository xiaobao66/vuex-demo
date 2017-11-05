import shop from '../../api/shopping'
import * as types from '../mutation-types'

const state = {
    all: []
}

const mutations = {
    [types.RECEIVE_PRODUCTS](state, {products}) {
        state.all = products
    },
    [types.ADD_TO_CART](state, {id}) {
        state.all.find(item => item.id === id).inventory--
    }
}

const actions = {
    getAllProducts({commit}) {
        shop.getProducts().then((products) => {
            commit(types.RECEIVE_PRODUCTS, {products})
        })
    }
}

export default {
    state,
    mutations,
    actions
}