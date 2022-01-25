<template>
    <div>
        <h1>小明的爸爸现在有{{money}}元？</h1>
        <h2>不使用sync修改符</h2>
        <!-- 
            :money => 父组件给子组件传递的props
            @update:money => 给子组件绑定的自定义事件 名字叫做update:money
            类似于 v-model

         -->
        <Child1 :money='money' @update:money='money = $event'/>
        <h2>使用sync修改符</h2>
        <!-- 

            :money.sync => 1.父组件给子组件传递了prop  2.给当前子组件绑定了一个自定义事件，事件名称为 update:money
         -->
        <Child2 :money.sync='money'/>


    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
    name:'SyncTest',
    components:{
        Child1,
        Child2
    },
    data(){
        return{
            money:1000
        }
    }
}
</script>

<style>

</style>