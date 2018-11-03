<template>
    <div>
        <div v-for="(transaction, index) in transactions" :key="index">
            {{transaction.label}} => <Money :amount="transaction.amount" /> <a @click.prevent="deleteTransaction(index)" href="#">delete</a>
        </div>

        <button @click="$router.push('/')">Voltar</button>
    </div>
</template>

<script>
    import Money from '@/components/Money';
    import {mapState} from 'vuex';
    export default {
        name: "TransactionsList",
        components: {Money},
        computed: {
            ...mapState(['transactions'])
        },
        methods: {
            deleteTransaction(index) {
                this.$store.commit("deleteTransaction", index);
            }
        },
    }
</script>

<style scoped>

</style>