<template>
    <div class="create_transaction">
        <div class="field">
            <label>{{label_value}}</label>
            <input type="number" v-model="value" />
        </div>
        <div class="field">
            <label>{{label_description}}</label>
            <input type="text" v-model="label" />
        </div>
        <div class="field">
            <button class="button button--secondary" @click="$router.push('/')">Voltar</button>
            <button :class="{'button--green': action=='in', 'button--red': action=='out'}" class="button" @click="create_transaction()">{{label_button}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateTransaction",
        data() {
            return {
                action: '',
                value: 0.00,
                label: "",
                labels: {
                    in: {
                        button: 'Ganhar',
                        value_text: 'Quanto você ganhou?',
                        description_text: 'De quem você ganhou?'
                    },
                    out: {
                        button: 'Comprar',
                        value_text: 'Quanto você gastou?',
                        description_text: 'O que você comprou?'
                    }
                }
            }
        },

        computed: {
            label_button() {
                return this.labels[this.action].button;
            },

            label_value() {
                return this.labels[this.action].value_text;
            },

            label_description() {
                return this.labels[this.action].description_text;
            }
        },

        methods: {
            create_transaction() {
                this.$store.commit("addTransaction", {
                    label: this.label,
                    amount: (parseFloat(this.value) * 100).toFixed(0) * (this.action == 'in' ? 1 : -1)
                });

                this.$router.push('/');
            }
        },

        created() {
            this.action = this.$route.params.action;
        }
    }
</script>

<style lang="scss" scoped>
    label {
        display: block;
        margin-bottom: 6px;
    }

    .create_transaction {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .field {
        margin-bottom: 40px;
        font-weight: 600;
    }

    input {
        width: 80%;
        border-radius: 6px;
        border: 1px solid #ccc;
        padding: 8px;
        font-size: 22px;
        font-family: inherit;
    }

    .button {
        background-color: #ccc;
        border-radius: 120px;
        margin: 0 4px;
        padding: 12px 24px;
        border: 0;
        font-family: inherit;
        font-weight: bold;
        text-transform: lowercase;
        font-size: 22px;

        &--green {
            background-color: #80AB12;
            color: #fff;
        }

        &--red {
            background-color: #DA1900;
            color: #fff;
        }
    }
</style>