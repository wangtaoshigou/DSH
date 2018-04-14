<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <router-view></router-view>
    <!-- <app-footer></app-footer> -->
  </div>
</template>



<script>

import Main from './components/content/Main/Main'
// import AppHeader from './components/common/Header/Header'
// import AppFooter from './components/common/Header/Footer'
export default {
  name: 'App',
  components: {
    // AppHeader,AppFooter
  }
}
</script>

<style lang="scss">

</style>
