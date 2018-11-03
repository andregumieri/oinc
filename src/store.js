import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)


const vuexPersist = new VuexPersist({
    key: 'oinc',
    storage: localStorage
});

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        budget: 55000,
        transactions: [{label: 'Saldo inicial', amount: 55000}, {label: 'Brinquedo', amount: -3900}],
    },
    mutations: {
        addTransaction(state, payload) {
            state.transactions.push(payload);
        },
        deleteTransaction(state, index) {
            state.transactions = [
                ...state.transactions.slice(0, index),
                ...state.transactions.slice(index + 1)
            ]
        }
    },
    actions: {

    },
    getters: {
        balance: state => {
            let sum = 0;
            state.transactions.map(item => sum+=item.amount);
            return sum;
        }
    }
})
