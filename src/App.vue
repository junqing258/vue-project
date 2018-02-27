
<template>
  <div id="app">
    <img src="./assets/logo.png" 
        style="width:1.0rem; height:1.0rem; margin: 0.2rem;" 
        @click="handleClick"/>
    <h1>{{ msg }}</h1>
    <h2 >Ecosystem</h2>
    <div id="wrap" ref="wrap" style="display: flex">
        <transition mode="in-out" :duration="250"
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut">
            <router-view></router-view>
        </transition>
    </div>
    
    <div style="height: 1.3rem"></div>
    <div class="footbar">
       <router-link to="/bar">
            <img src="./assets/wxb.png" alt="">
            <h3>Bar</h3>
        </router-link>
        <router-link to="/game">
            <img src="./assets/game.png" alt="">
            <h3>Game</h3>
        </router-link>
        <router-link to="/foo">
            <img src="./assets/yiqiyibiao.png" alt="">
            <h3>Foo</h3>
        </router-link>
    </div>

  </div>
</template>

<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Game from './components/Game.vue'

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {

  },
  mounted() {
    let $wrap = this.$refs.wrap;
    $wrap.style.height = px2rem(window.innerHeight- $wrap.offsetTop) - 1.3 + "rem";
  },
  methods: {
    handleClick: function() {
      alert("1");
    }
  }
};

export const routes = [
  { path: '/', redirect: '/bar' },
  { path: '/game', component: Game },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  font-size: 0.16rem;
  overflow-x: hidden;
  -webkit-tap-highlight-color: none;
}

#wrap {
  width: 100%;
  overflow-x: hidden;
  display: flex;
  position: relative;
  justify-content: flex-start;

  > div {
    flex-shrink: 0;
    &:nth-child(1) {
      z-index: 1;
    }
    &:nth-child(2) {
      z-index: 10;
    }
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

.footbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  box-shadow: 0rem -0.03rem 0.2rem rgba(0, 0, 0, 0.5);
  z-index: 9;
  user-select: none;

  & > a {
    display: block;
    margin: 0.02rem 0;
    font-size: 0.28rem;
    min-width: 20%;
    text-decoration: none;

    img {
      width: 0.48rem;
      height: 0.48rem;
    }

    h3 {
      color: #2c2c2c;
      margin: 0.01rem 0 0 0;
      font-weight: normal;
    }

  }

  .router-link-active {
    img {
      transform: scale(1.2, 1.2);
    }
    h3 {
      font-weight: bold;
    }
  }
}

li {
  display: inline-block;
  margin: 0 0.1rem;
}

a {
  color: #42b983;
}

.page {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #41b883;
}
</style>
