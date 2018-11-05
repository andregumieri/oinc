<template>
    <div class="stage">
        <div class="stage__secondary_actions">
            <button class="secondary-action-button" @click="$router.push('/transactions')"><fa :icon="['fal', 'list-ul']" /></button>
            <button class="secondary-action-button" @click="$router.push('/settings')"><fa :icon="['fal', 'cog']" /></button>
        </div>

        <div class="stage__progress">
            <Progress />
        </div>
        <div class="stage__actions" v-if="Math.abs(preview)==0">
            <button @click="$router.push('/transaction/in')" class="action-button action-button--green"><fa :icon="['fas', 'plus']" /></button>
            <button @click="$router.push('/transaction/preview')" class="action-button action-button--blue"><fa :icon="['fas', 'question']" /></button>
            <button @click="$router.push('/transaction/out')" class="action-button action-button--red"><fa :icon="['fas', 'minus']" /></button>
        </div>

        <div class="stage__actions" v-if="Math.abs(preview)>0">
            <!--<button @click="$router.push('/transaction/in')" class="action-button action-button&#45;&#45;green"><fa :icon="['fas', 'plus']" /></button>-->
            <button @click="$store.commit('setPreview', 0)" class="action-button action-button--blue"><fa :icon="['fas', 'long-arrow-left']" /></button>
            <!--<button @click="$router.push('/transaction/out')" class="action-button action-button&#45;&#45;red"><fa :icon="['fas', 'minus']" /></button>-->
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import Progress from '@/components/Progress';
import {mapState} from 'vuex';
export default {
    name: 'home',
    components: {Progress},
    computed: {
        ...mapState(['preview'])
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {},
}
</script>


<style lang="scss">
    .stage {
        display:flex;
        flex-direction: column;
        height: 100vh;

        &__secondary_actions {
            /*position: absolute;*/
            /*top: 20px;*/
            /*right: 20px;*/
            height: 43px;
            display: flex;
            justify-content: flex-end;
            padding: 16px 16px 0 0;
            /*box-sizing: border-box;*/
            align-items: center;
        }

        &__progress {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        &__actions {
            height: 150px;
            /*background-color: #ccc;*/
            flex-grow: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .action-button {
        border-radius: 500px;
        width: 55px;
        height: 55px;
        vertical-align: middle;
        font-size: 30px;
        color: #fff;
        border: 0;

        &--green {
            background-color: #80AB12;
        }
        &--red {
            background-color: #DA1900;
        }
        &--blue {
            background-color: #4A90E2;
        }
    }

    .secondary-action-button {
        font-size: 22px;
        width: 30px;
        height: 30px;
        color: #555;
        border: 0;
        background-color: transparent;
        margin-left: 16px;
    }
</style>