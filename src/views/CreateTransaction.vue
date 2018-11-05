<template>
    <div class="create_transaction">
        <div class="field">
            <label>{{label_value}}</label>
            <!--<input type="number" step="0.01" v-model="value" />-->
            <money v-model="value" v-bind="money"></money>
        </div>
        <div v-if="action!='preview'" class="field">
            <label>{{label_description}}</label>
            <input type="text" v-model="label" />
        </div>
        <div class="field">
            <button class="button button--secondary" @click="$router.push('/')">Voltar</button>
            <button :class="{'button--green': action=='in', 'button--red': action=='out', 'button--blue': action=='preview'}" class="button" @click="create_transaction()">{{label_button}}</button>
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
                money: {
                    decimal: '.',
                    thousands: ',',
                    prefix: '$ ',
                    suffix: '',
                    precision: 2,
                    masked: false
                },
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
                    },
                    preview: {
                        button: 'Quanto sobra?',
                        value_text: 'Quanto custa?',
                        description_text: ''
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
                if(this.action=='preview') {
                    this.$store.commit('setPreview', (parseFloat(this.value) * 100).toFixed(0) * -1);
                } else {
                    this.$store.dispatch("addTransaction", {
                        label: this.label,
                        amount: (parseFloat(this.value) * 100).toFixed(0) * (this.action == 'in' ? 1 : -1)
                    });
                }


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

        &--blue {
            background-color: #4A90E2;
            color: #fff;
        }
    }
</style>