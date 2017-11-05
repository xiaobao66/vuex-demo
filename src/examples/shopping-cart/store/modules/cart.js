import shop from '../../api/shopping'
import * as types from '../mutation-types'

const state = {
    added: [],
    checkoutStatus: null
}

const mutations = {
    [types.ADD_TO_CART](state, {id}) {
        state.checkoutStatus = null
        let record = state.added.find(item => item.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.CHECKOUT_REQUEST](state) {
        state.added = []
        state.checkoutStatus = 'requesting'
    },
    [types.CHECKOUT_SUCCESS](state) {
        state.checkoutStatus = 'success'
    },
    [types.CHECKOUT_FAILURE](state, {savedCartItems}) {
        state.added = savedCartItems
        state.checkoutStatus = 'failed'
    }
}

const actions = {
    checkout({commit, state}, products) {
        const savedCartItems = state.added.map(item => item)
        commit(types.CHECKOUT_REQUEST)
        shop.buyProducts(products).then(() => {
            commit(types.CHECKOUT_SUCCESS)
        }).catch(() => {
            commit(types.CHECKOUT_FAILURE, {savedCartItems})
        })
    }
}

export default {
    state,
    mutations,
    actions
}