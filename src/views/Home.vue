<template>
    <div class="stage">
        <div class="stage__progress">
            <Progress />
        </div>
        <div class="stage__actions">
            <button @click="$router.push('/transaction/in')">Ganhar</button>
            <button>Quanto sobra?</button>
            <button @click="$router.push('/transaction/out')">Comprar</button>
        </div>



    </div>
</template>

<script>
// @ is an alias to /src
import Progress from '@/components/Progress';
export default {
    name: 'home',
    components: {Progress},
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

        &__progress {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        &__actions {
            height: 150px;
            background-color: #ccc;
            flex-grow: 0;
        }
    }
</style>