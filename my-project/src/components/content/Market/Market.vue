<template>
    <div class="market">
        <mt-cell 
            v-for = "good in cars" :key = "good.id"
            :title="good.title" :label = "good.price">
            <mt-button @click = "reduceGoodInCar(good)" size="small">-</mt-button>
            <input type="text" class="mt-inp" v-model = "good.num">
            <mt-button @click = "addGoodInCar(good)" size="small">+</mt-button>
        </mt-cell>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '../../common/Header/Footer'
import { mapState, mapActions } from '../../../../../../../DSH/my-project/node_modules/vuex';
export default {
    name: 'market',
    components: {
        AppFooter
    },
    computed: {
        ...mapState({
            cars: (state) => state.allen.car
        })
    },
    methods: {
        ...mapActions(
            ['addGoodInCar','reduceGoodInCar']
        )
    }
}
</script>

<style lang="scss" scoped>
    .market{
        background:#EBEBEB;
        .mt-inp {
            width: 30px;
            height: 30px;
            border: 1px solid #EBEBEB;
            margin: 0px 5px;
            padding:2px;
        }
    }
</style>