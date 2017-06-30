<template>
  <div id="app">
    <div class="header">
      <ul>
        <router-link tag="li" to="/forms">点餐</router-link>
        <router-link tag="li" to="/record">查看记录</router-link>
      </ul>
    </div>
    <div class="content">
      <!-- <cons :is='currentView'></cons> -->
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import forms from './components/forms'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    tabToggle (tabText) {
      this.currentView = tabText
    }
  }
}
</script>

<style lang="scss" scope>
html,body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .header {
    ul {
      display: flex;
      li {
        border-bottom: 1px solid #999;
        padding: 1rem;
        width: 50%;
      }
      .active {
        color: #fe5e5e;
        border-bottom: 2px solid #fe5e5e;
      }
    }
  }
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
