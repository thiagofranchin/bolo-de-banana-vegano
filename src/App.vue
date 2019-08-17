<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="d-none">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'scss/style';
  body {
    background: $dark;
  }
</style>
