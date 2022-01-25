<template>
  <div style=" background: #ede;margin: 20px auto;">
    <h2>女儿小红： 存款 {{money}}</h2>
    <button @click="give(100)">给爸爸钱： 100</button>

  </div>
</template>

<script>
import myMixin from './mixin';
export default {
    name:'Daughter',
    data(){
      return{
        money:40000
      }
    },
    //  使用 混入  mixin
    mixins:[myMixin]
}
</script>

<style>


</style>