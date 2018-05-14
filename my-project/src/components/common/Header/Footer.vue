<template>
    <div class="footer">
        <router-link to="/main" tag="li">
            <i class="fa fa-home"></i>
        </router-link>
        <router-link to="./list" tag="li">
            <i class="fa fa-bars"></i>
        </router-link>
        <router-link to="./shop" tag="li">
            <i class="fa fa-sticky-note-o"></i>
        </router-link>
        <router-link to="./market" tag="li">
            <i class="fa fa-shopping-cart"></i>
        </router-link>
        <router-link to="./login" tag="li">
            <i class="fa fa-user-circle"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style lang="scss" scoped>
    .footer{
        height: 44px;
        background: #000;
        position: fixed;
        bottom: 0;
        width: 100%;
        li{
            width: 20%;
            height: 44px;
            color: #999;
            font-size: 0.26rem;
            text-align: center;
            float: left;
            margin-top: 4px;
        }
    }
    li.router-link-active{
        color: #2058f3;
    }
</style>
