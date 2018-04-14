<template>
  <header class="header">
      <ul>
          <li class="user">
              <i class="fa fa-user-o"></i>
          </li>
          <li><input type="text"></li>
          <router-link to="/registe" tag="li">注册</router-link>
      </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped lang="scss">
    .header{
        position: fixed;
        z-index: 9;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        max-width: 640px;
        background: #000;
        ul{
            display: flex;
            justify-content: space-between;
            padding: 10px 8px;
        }
        li{
            color: #fff;
            font-size: 0.16rem;
            input{
                border: none;
                width: 2.8rem;
                height: 0.3rem;
            }
        }
    }
</style>
