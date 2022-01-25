<template>
    <div>
        <h2>深入v-model</h2>
        <input type="text" v-model="msg" /> <span>{{msg}}</span>
        <br>
        <hr>
        <h2>v-model实现原理(vue2)</h2>
        <!-- 原生的dom中有 oninput事件，常结合表单元素一起使用，，当表单内容发生变化的时候就触发一次回调 
            vue2: 可以通过value与input事件实现v-model功能
        -->
        <input type="text" :value="msg" @input="msg = $event.target.value">
        <span>{{msg}}</span>
        <hr>
        <!-- 深入学习v-model：实现父子组件数据同步（父子组件通信） 
        :value => props ，父子组件通信
        @input => 自定义事件
        -->
        <CustomInput :value='msg' @input="msg = $event"/>
        <!--  上述 CustomInput 可简写为 如下
            v-model 实现的原理 ： value与input事件实现的，可以使用v-model实现父子组件间的数据同步
         -->
        <CustomInput  v-model="msg"/>
    </div>
</template>

<script>
import CustomInput from './CustomInput'
export default {
    name:'ModelTest',
    components:{
        CustomInput
    },
    data(){
        return{
            msg:'测试文字'
        }
    }
}
</script>

<style>

</style>