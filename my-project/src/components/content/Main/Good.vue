<template>
    <div class="good">
        <p>超值热卖</p>
        <ul v-for=" item in list" :key="item.id">
            <li class="img">
                <img :src="item.img" alt="">
            </li>  
            <li class="title">{{item.title}}</li>
            <li class="dis">{{item.subtitle}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Good",
    data () {
        return {
            list: []
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/adwap/loadAdsByPadid?padid=6&pageNo=1',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.list = res.data.data
            })
        }
    },
    created () {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
    .good{
        background: #fff;
        margin-top: 10px;
        padding-top: 20px;
        p{
            text-align: center;
            font-size: 0.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color:#000;
        }
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
