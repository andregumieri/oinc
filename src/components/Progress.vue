<template>
    <div class="progress">
        <div class="progress__bar" @click="$router.push('/transactions')">
            <div class="progress__progress" :style="{height: css_bar_percentage}"></div>
            <!--<div class="progress__progress progress__progress&#45;&#45;simulacao"></div>-->
        </div>
        <div class="progress__balance">
            <Money class="amount" :amount="balance" :style="{top: css_balance_top_percentage}" />
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
            ...mapState(['budget']),
            css_bar_percentage() {
                return ((this.balance/this.budget)*100) + "%";
            },

            css_balance_top_percentage() {
                return (100-((this.balance/this.budget)*100)) + "%";
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
    }
    .progress {
        $height: 74%;
        $width: 33%;

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
            position: absolute;
            height: 80%;
            width: 100%;
            background-color: aqua;
            bottom: 0;
            left: 0;
            transition-property: height;
            transition-duration: 500ms;
            transition-timing-function: ease-in-out;

            &--simulacao {
                background-color:blueviolet;
                z-index: 5;
                height: 34%;
            }
        }
    }

</style>