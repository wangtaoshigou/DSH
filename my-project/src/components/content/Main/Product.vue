<template>
    <div class="product">
        <ul>
            <li class="title">{{item.title}}</li>
            <li class="dis">{{item.subtitle}}</li>
            <li class="img">
                <img :src="item.img" alt="">
            </li>  
        </ul>
        <ul>
            <li class="title">{{irr.title}}</li>
            <li class="dis">{{irr.subtitle}}</li>
            <li class="img">
                <img v-lazy="irr.img" alt="">
            </li>  
        </ul>
    </div>
</template>

<script>
export default {
    name: "product",
    data () {
        return {
            item: '',
            irr: ''
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.item = res.data.data[3],
                this.irr = res.data.data[4]
            })
        }
    },
    created () {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
    .product{
        background-color: #fff;
        padding: 10px 0;
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 10px;
        ul{
            padding:10px;
            border-bottom:1px solid #e0e0e0;
            .title{
                font-size: 0.16rem;
                color: #000;
                font-weight: 700;
            }
            .dis{
                font-size: 0.13rem;
                color: #858585;
                white-space: nowrap;
            }
            .img{
                margin-top: 10px;
                img{
                    width:100%;
                }
            }
        }
    }
</style>
