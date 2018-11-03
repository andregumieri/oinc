<template>
    <span>{{str_amount}}</span>
</template>

<script>
    export default {
        props: {
            amount: {
                type: Number,
                default: 0
            },
        },
        computed: {
            str_amount() {
                return (this.amount/100).toFixed(2);
            }
        },
        name: "Money"
    }
</script>

<style scoped>

</style>