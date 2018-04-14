<template>
  <div class="sect">
      <ul class="sec" v-for="nav in navs" :key="nav.id">
          <li>
              <i class="fa" :class="nav.className"></i>
          </li>
          <li>{{nav.info}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"Sect",
  data(){
      return{
          navs:[
              {className: "fa-bars",info:"全部",id:1},
              {className: "fa-bookmark",info:"新品",id:2},
              {className: "fa-tags",info:"清货",id:3},
              {className: "fa-briefcase",info:"回馈",id:4},
              {className: "fa-plane",info:"付邮",id:5}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
    .sect{
        color: #000;
        margin-top: 12px;
        height: 72px;
        background: #fff;
        padding: 10px 0;
        ul{
            margin-top: 5px;
            text-align: center;
            width: 20%;
            float: left;
            li{
                padding: 0;
                margin: 0;
                list-style: none;
                font-style: normal;
                text-decoration: none;
                border: none;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent;
                -webkit-font-smoothing: antialiased;
                margin-top: 5px;
                i{
                    font-size: 0.35rem;
                    color: #000;
                }
            }
        }
    }
</style>
