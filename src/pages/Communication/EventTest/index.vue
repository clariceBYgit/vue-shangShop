<template>
  <div>
    <div>Event事件组件</div>
    <!-- 原生dom 绑定事件 -->
    <button @click="handler">原生dom事件</button>
    <!-- Event1组件：Event1非原生dom节点，为其绑定click事件 不再是原生dom事件而是自定义事件（handler1函数不会进行打印）  使用.native修饰符 就可以让自定义事件变为 原生的dom事件-->
    <!-- 当其加了.native 后   是给子组件的根节点绑定了点击事件 ----- 利用到事件委派 -->
    <Event1 @click.native="handler1"></Event1>
    <!-- 其下的实质就是跟 原生dom 绑定了自定义事件
        无意义的自定义事件 ，因为 没法触发$emit函数
     -->
    <button @xxx="handler2">原生dom绑定自定义事件</button>
    <!-- 组件😊 -->
    <Event2 @click="handler3" @xxx='handler3'>Event2组件的自定义事件回调</Event2>

  </div>
</template>

<script>
import Event1 from "./Event1";
import Event2 from "./Event2";
export default {
  name: "EventTest",
  components: {
    Event1,
    Event2,
  },
  methods:{
    //   原生dom button的事件回调，可以自动注入 事件对象 event
      handler(event){
          console.log('原生dom事件',event)
      },
    //   Event1组件的事件回调
      handler1(){
          console.log('Event1组件的事件回调')
      },
    // 给原生dom 绑定 无意义的自定义事件 
    handler2(){
          console.log('无意义的自定义事件')

    },
    handler3(a){
          console.log('Event2组件的自定义事件回调','参数：'+a)

    }
  }
};
</script>

<style>
</style>