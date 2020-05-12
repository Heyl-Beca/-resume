<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style lang="less">
@import 'assets/css/reset';
#app {
  width: 100%;
  height: 100%;
}
</style>
