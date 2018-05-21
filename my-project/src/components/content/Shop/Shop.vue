<template>
    <div class="shop">
        <mt-cell v-for=" good in goods " :key="good.id" :title="good.title" :label="good.price" >
            <mt-button @click="addGoodInCar(good)" size="small" type="primary">加入</mt-button>
        </mt-cell>
        <app-footer></app-footer>
    </div>
    
</template>

<script>
import AppFooter from '../../common/Header/Footer'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'shop',
    components: {
        AppFooter
    },
    data () {
        return {
            goods: [
                {id: 1, title: 'AWM', price: '马格南'},
                {id: 2, title: 'M24', price: '7.62'},
                {id: 3, title: 'kar98k', price: '7.62'}
            ]
        }
    },
    // computed: {
    //     ...mapState({
    //         car: (state) => state.tony.car
    //     })
    // },
    methods: {
        ...mapActions(['addGoodInCar'])
    }
}
</script>


<style lang="scss" scoped>

</style>
