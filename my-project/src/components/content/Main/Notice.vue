<template>
    <div class="notice">
        <i>Notice |</i>
        <p>DSHui | 声明</p>
    </div>
</template>

<script>
export default {
  name: "Notice"
}
</script>

<style lang="scss" scoped>
    .notice{
        height: 40px;
        position: relative;
        background: #fff;
        margin-top: 8px;
        i{  
            margin-left: 10px;
            margin-top: 6px;
            float: left;
            font-family: "微软雅黑";
            font-weight: bolder;
            font-size: 0.18rem;
            color: #000;
            width: 90px;
            height: 52px;
        }
        p{
            margin-top: 8px;
            float: left;
        }
    }
</style>
