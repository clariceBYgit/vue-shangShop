<template>
    <div>
        <h2>深入v-model</h2>
        <!-- 
            :value => 动态的属性
            @input => 给原生dom绑定原生dom事件

         -->
        <input type="text" :value="value" @input="$emit('input',$event.target.value)"> <span>{{value}}</span>
    </div>
</template>

<script>
export default {
    name:'CustomInput',
    props:['value']
}
</script>

<style>

</style>