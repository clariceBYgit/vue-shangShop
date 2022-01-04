<template>
  <div id="app">
    <!-- 测试 使用  自定义 插件 -->
    <!-- <h1 v-upper = 'msg'></h1> -->
    <Header />
    <router-view></router-view>
    <Footer  v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data() {
    return {
      msg:'abc'
    }
  },
  components: {
    Header,
    Footer
  },
  mounted(){
    //派发一个action||获取三级分类的数据
    this.$store.dispatch("getCategoryList");

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
