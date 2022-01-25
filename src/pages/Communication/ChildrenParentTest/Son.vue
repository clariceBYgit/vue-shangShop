<template>
  <div style=" background: #ede;margin: 20px auto;">
    <h2>儿子小明： 存款 {{money}}</h2>
    <button @click="give(20)">给爸爸钱： 50</button>

  </div>
</template>

<script>
import myMixin from './mixin';
export default {
    name:'Son',
    data(){
      return{
        money:20000
      }
    },
    mixins:[myMixin]
}
</script>

<style>


</style>