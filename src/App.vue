<template>
  <div id="app">
    <router-view v-if="show"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
  created() {
    // var x = document.cookie
    setTimeout(()=>{

          console.log("得到的x的值话好多好多好多话好多话",window.get_address_info)
      this.show = true
    },1000)
  }
}
</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
  margin: 0px;
  background-color: #ffffff;
  font-family: Helvetica;
  position: relative;
}
* {
  /* touch-action: pan-y pan-x; */
  touch-action:none;
  touch-action:pan-y;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
