<template>
    <div class="three" >
        <div v-for="item in imgs.slice(0,3)" :key="item.id">
            <img :src="item.img" alt="">
        </div>
  </div>
</template>

<script>
export default {
    name: "Three",
    data () {
        return {
            imgs: []
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.imgs = res.data.data
            })
        }
    },
    created () {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
    .three{
        margin-top: 12px;
        display: flex;
        justify-content: space-around;
        img{
            width: 100%;
            border-right:1px solid #666;
        }
    }
</style>

