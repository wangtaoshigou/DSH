<template>
    <div class="list page">
        <div class="left">
            <ul v-for=" item in title " :key="item.id">
                <li :class="{active:isActive}" @click="change">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    data () {
        return {
            title: [],
            isActive: false
        }
    },
    methods: {
        getBanners () {
            this.$http.get('http://www.dshui.cc/goodswap/allCtgy?',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                console.log(res.data.data)
                this.title = res.data.data
            })
        },
        change () {
            this.isActive = !isActive
        }
    },
    created () {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
    .list{
        background: #fff;
        .left{
        width: 20%;
        background: #f0f0f0;
            li{
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 0.14rem;
            }
        }
    }
    .active{
        background: #fff;
        border-left: 2px solid #000;
        color: #000;
        font-weight: 600;
    }
</style>
