<template>
    <div>
        <button @click="$router.push('/')">Voltar</button>
        <button @click="reset()" :disabled="reset_count==-1">{{reset_label}}</button>
    </div>

</template>

<script>
    export default {
        name: "settings",

        data() {
            return {
                reset_label: 'Reset',
                reset_count: 4,
            }
        },

        methods: {
            reset() {
                if(this.reset_count>0) {
                    this.reset_count--;
                    this.reset_label = `Pressione mais ${(this.reset_count+1)} vezes`;
                } else {
                    this.reset_label = "Tudo resetado";
                    this.reset_count = -1;
                    this.$store.commit('setBudget', 0);
                    this.$store.commit('setTransactions', []);
                    this.$router.push("/");
                }
            }
        },
    }
</script>

<style scoped>

</style>