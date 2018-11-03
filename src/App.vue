<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Mali:400,500,600,700');
  * {
    margin: 0;
    padding: 0;
  }
  body,html {
    height: 100%;
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Mali', cursive;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
