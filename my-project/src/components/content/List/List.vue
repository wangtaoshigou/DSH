<template>
    <div class="list page">
        <app-header></app-header>
        <div class="left">
            <li 
            v-for="item in title" 
            :key="item.id" 
            :class="{active:item.name===isActive}" 
            @click="change(item.name,item.id)">
            {{item.name}}
            </li>
        </div>
        <div class="right">
            <ul>
                <!-- <li v-for="list in list[0]" :key="list.id">
                    <div class="top">
                        <img :src="list.imgUrl" alt="">
                    </div>
                    <div class="bottom">{{list.name}}</div>
                </li> -->
                <li v-for="list in list" :key="list.i">
                    <div class="top">
                        <img :src="list.imgUrl" alt="">
                    </div>
                    <div class="bottom">{{list.name}}</div>
                </li>
            </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '../../common/Header/Header'
import AppFooter from '../../common/Header/Footer'
import { Indicator } from 'mint-ui';

export default {
    name: "List",
    components: {
    AppHeader,AppFooter
    },
    data () {
        return {
            title: [],
            isActive: '董事惠热卖',
            list: []
        }
    },
    methods: {
        getBanners () {
            
            this.$http.get('http://www.dshui.cc/goodswap/allCtgy?',{
                params: {
                    __t: Date.now()
                }
            }).then( res=>{
                this.title = res.data.data
            })
        },
        change (name,id) {
             Indicator.open('加载中...')
                setTimeout( () => {
                    Indicator.close()
            },800)
            this.isActive = name;
            this.$http.get('http://www.dshui.cc/goodswap/subCtgyList?',{
                params: {
                    parentId: id
                }
            }).then( res=>{
                this.list = res.data.data
            })
        }
    },
    created () {
        this.getBanners(),
        this.change("董事惠热卖","4")
        Indicator.open('加载中...')
        setTimeout( () => {
            Indicator.close()
        },800)
    },
    beforeUpdate () {
        
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
    .right{
        position: fixed;
        background: #fff;
        width: 80%;
        left: 20%;
        top: 44px;
        ul{
            overflow: auto;
            min-height: 100%;
            width: 100%;
            li{
                margin-right: 5px;
                width: 30.5%;
                list-style: none;
                float: left;
                text-align: center;
                .top{
                    height: 80px;
                    text-align: center;
                    margin: 0 auto;
                    img{
                        display: block;
                        height: 100%;
                        margin: 0 auto;
                    }
                }
                .bottom{
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                }
            }
        }
    }
</style>
