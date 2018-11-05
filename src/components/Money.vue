<template>
    <span>
        <span class="value">{{str_amount.split(".")[0]}}</span>
        <span class="cents">.{{str_amount.split(".")[1]}}</span>
    </span>
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
    .cents {
        font-size: 0.7em;
    }
</style>