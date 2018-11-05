<template>
    <div class="progress">
        <div class="progress__bar" v-if="balance>0">
            <div
                class="progress__progress"
                :class="{
                    'progress__progress--green': bar_percentage > 40,
                    'progress__progress--yellow': bar_percentage <= 40 && bar_percentage > 10,
                    'progress__progress--red': bar_percentage <= 10,
                    'progress__progress--low-priority': Math.abs(preview)>0
                }"
                :style="{height: css_bar_percentage}"
            >
            </div>

            <div
                v-if="Math.abs(preview)>0"
                class="progress__progress progress__progress--simulacao"
                :style="{height: css_bar_percentage_preview}"
            >
            </div>
        </div>


        <div
            class="progress__balance"

        >

            <div
                v-if="Math.abs(preview)==0"
                class="amount"
                :style="{top: css_balance_top_percentage}"
                :class="{'amount--green': bar_percentage > 40, 'amount--yellow': bar_percentage <= 40 && bar_percentage > 10, 'amount--red': bar_percentage <= 10}"
            >
                    <fa class="amount__icon" :icon="['fal', 'piggy-bank']" />
                    <Money :amount="balance" />
            </div>

            <div
                v-if="Math.abs(preview)>0"
                class="amount amount--preview"
                :style="{top: css_balance_top_percentage_preview}"
            >
                    <fa class="amount__icon" :icon="['fal', 'piggy-bank']" />
                    <Money :amount="preview_balance" />
            </div>

        </div>

        <!--<Money :amount="budget" />, -->
    </div>
</template>

<script>
    import Money from '@/components/Money';
    import {mapState, mapGetters} from 'vuex';
    export default {
        components: {Money},
        name: "Progress",
        computed: {
            ...mapGetters(['balance']),
            ...mapState(['budget', 'preview']),
            css_bar_percentage() {
                return this.bar_percentage + "%";
            },

            bar_percentage() {
                return (this.balance/this.budget)*100;
            },

            css_balance_top_percentage() {
                return (100-((this.balance/this.budget)*100)) + "%";
            },

            bar_percentage_preview() {
                return this.preview_balance >= 0 ? (this.preview_balance/this.budget)*100 : 0;
            },

            css_bar_percentage_preview() {
                return this.bar_percentage_preview + "%";
            },

            css_balance_top_percentage_preview() {
                return (100-this.bar_percentage_preview) + "%";
            },

            preview_balance() {
                return (this.balance+this.preview);
            }



        },
    }
</script>

<style lang="scss" scoped>
    .amount {
        $h: 50px;
        height: $h;
        display: block;
        line-height: $h;
        position: absolute;
        left: 0;
        margin-top: ($h/2)*-1;
        white-space: nowrap;
        &__icon {
            margin-right: 10px;
        }

        &--green {color: rgb(66, 147, 33);}
        &--yellow {color: rgb(255, 227, 0);}
        &--red {color: rgb(236, 81, 81);}
        &--preview { z-index: 10; }

    }
    .progress {
        $height: 74%;
        $width: 34%;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        &__balance {
            height: $height;
            margin-left: 20px;
            font-size: 30px;
            font-weight: 800;
            position: relative;
            min-width: 100px;
        }

        &__bar {
            width: $width;
            height: $height;
            border: 3px solid #ccc;
            border-radius: 30px;
            position: relative;
            overflow: hidden;
            background-color: #F8F8F8;
        }

        &__progress {
            border-radius: 22px;
            position: absolute;
            height: 80%;
            width: 100%;
            background-color: aqua;
            bottom: 0;
            left: 0;
            transition-property: height;
            transition-duration: 500ms;
            transition-timing-function: ease-in-out;

            &--green {background: linear-gradient(180deg, rgb(180, 236, 81) 0%, rgb(66, 147, 33) 100%);}
            &--yellow {background: linear-gradient(180deg, rgb(255, 227, 0) 0%, rgb(202, 162, 9) 100%);}
            &--red {background: linear-gradient(180deg, rgb(236, 81, 81) 0%, rgb(177, 53, 53) 100%);}
            &--low-priority {opacity: 0.2;}

            &--simulacao {
                background-color:blueviolet;
                z-index: 5;
                height: 34%;
            }
        }
    }

</style>