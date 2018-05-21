<template>
    <div class="market">
        <mt-cell v-for="good in car" :key="good.id" :title="good.title" :label="good.price">
            <mt-button @click= 'reduceGoodInCar(good)' size="small">-</mt-button>
            <input type="text" class="mt-inp" v-model="good.num">
            <mt-button @click = 'addGoodInCar(good)' size="small">+</mt-button>
        </mt-cell>
        <total></total>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '../../common/Header/Footer'
import { mapState, mapActions } from 'vuex'
import Total from './Total'
export default {
    name: 'market',
    components: {
        AppFooter, Total
    },
    computed: {
        ...mapState({
            car: (state) => state.tony.car
        })
    },
    methods: {
        ...mapActions(['addGoodInCar', 'reduceGoodInCar'])
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