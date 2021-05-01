<template>
  <the-header/>
  <router-view></router-view>
</template>
<script>
  import TheHeader from './components/layout/TheHeader'
  export default {
    components: {
      TheHeader,
    }
  }
</script>
<style>
    @import url('assets/app.css');
</style>
