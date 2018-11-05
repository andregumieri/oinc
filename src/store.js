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
        budget: 0,
        transactions: [],
        preview: 0
    },
    mutations: {
        addTransaction(state, payload) {
            state.transactions.push(payload);
        },

        setBudget(state, newBudget) {
            state.budget = newBudget;
        },

        setTransactions(state, newArrayBalance) {
            state.transactions = newArrayBalance;
        },

        setPreview(state, previewValue) {
            state.preview = previewValue;
        },

        deleteTransaction(state, index) {
            state.transactions = [
                ...state.transactions.slice(0, index),
                ...state.transactions.slice(index + 1)
            ]
        }
    },
    actions: {
        addTransaction({commit, getters, state}, payload) {
            commit('addTransaction', payload);
            if(getters.balance > state.budget) {
                commit('setBudget', getters.balance);
            }
        }
    },
    getters: {
        balance: state => {
            let sum = 0;
            state.transactions.map(item => sum+=item.amount);
            return sum;
        }
    }
})
