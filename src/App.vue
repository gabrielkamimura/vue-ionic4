<template>
<!--
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>

        <ion-tabs>
           Tab bar 
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="account">
              <ion-icon name="search"></ion-icon>
            </ion-tab-button>
            <ion-tab-button tab="settings">
              <ion-icon name="settings"></ion-icon>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </div>
-->
    <router-view/>
</template>

<style lang="scss">
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
