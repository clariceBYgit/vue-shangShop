<template>
  <div>
    <a :title="title">
        <!-- $listeners：组件实例的属性，可以获取到父亲传递自定义事件（对象形式呈现）
            必须以 v-on 的形式 
         -->
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
  </div>
</template>

<script>
export default {
  name: "HintButton",
  props: ["title"],
  mounted() {
    //   $attrs  属于组件的一个属性，可以获取副组件传递过来的props数据
    // 对于子组件而言 父组件的数据可以用props 接受，若 子组件已通过props接收，在$attrs 属性当中是获取不到的
    console.log(this.$attrs); //{type: 'success', icon: 'el-icon-delete', size: 'mini', title: '提示按钮'}
    // 组件实例的属性，可以获取到父亲传递自定义事件（对象形式呈现)
    console.log(this.$listeners); 
  },
};
</script>

<style>
</style>