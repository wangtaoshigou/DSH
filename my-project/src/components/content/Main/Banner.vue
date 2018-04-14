<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for=" banner in banners" :key = "banner.id">
                <img width="100%" :src="banner.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from "swiper"

export default {
    name: 'AppBanner',
    data () {
        return {
            banners: []
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/adwap/listAllAdSlide',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.banners = res.data.data
            })
        }
    },
    created () {
        this.getBanners()
    },
    updated () {
       new Swiper('.banner',{
           pagination: {
               el: '.swiper-pagination'
           }
       })
   }
}
</script>

<style lang="scss" scoped>

</style>
