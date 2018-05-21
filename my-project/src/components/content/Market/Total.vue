<template>
    <mt-cell
        :title= "totalMoney" :label = "totalNum">
        <mt-button size="small" type="primary">结算</mt-button>
    </mt-cell>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
    computed: {
        ...mapGetters(['total']),
        totalMoney () {
            return '总价钱：'+ this.total.money
        },
        totalNum () {
            return '总数: '+ this.total.num
        }
    }
}
</script>

<style>

</style>

