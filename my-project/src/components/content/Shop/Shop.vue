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
import { mapActions } from '../../../../../../../DSH/my-project/node_modules/vuex';

export default {
    name: 'shop',
    components: {
        AppFooter
    },
    data() {
        return {
            goods: [
                { id: 1, title: '郭海狗',price: '75.00'},
                { id: 2, title: 'toogle',price: '85.00'},
                { id: 3, title: '社会王',price: '70.00'},
                { id: 4, title: '徐聪聪',price: '80.00'},
                { id: 5, title: '小粪心',price: '95.00'}
            ]
        }
    },
    methods: {
            ...mapActions(['addGoodInCar'])
    },
    mounted(){
        console.log(this)
    }
}
</script>


<style lang="scss" scoped>

</style>
