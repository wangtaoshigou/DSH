<template>
  <div class="main page">
      <app-header></app-header>
      <app-banner></app-banner>
      <Notice/>
      <Sect/>
      <img :src="img" alt="" class="imgone">
      <Three/>
      <product></product>
      <Good/>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppBanner from './Banner'
import Notice from './Notice'
import Sect from './Sect'
import Three from './Three'
import Product from './Product'
import Good from './good'
import AppHeader from '../../common/Header/Header'
import AppFooter from '../../common/Header/Footer'

export default {
  name: "Main",
  components: {
    AppBanner,Notice,Sect,Three,Product,Good,AppHeader,AppFooter
  },
  data () {
        return {
            img: ''
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/activityWap/one?token=',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.img = res.data.data.imgUrl
            })
        }
    },
    created () {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
    .imgone{
        max-width:100%;
        box-shadow: 0 2px 3px rgba(0,0,0,.12);
        margin-top: 12px;
    }
    .main{
        background: #f4f4f4;
    }
</style>


