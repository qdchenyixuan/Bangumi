<template>
  <div id="app">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
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
