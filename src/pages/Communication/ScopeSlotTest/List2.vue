<template>
  <ul>
    <li v-for="(item, index) in todos" :key="item.id">
        <!-- 作用域插槽  子组件的数据回传给父组件 回传数据名称todo  -->
        <slot :todo='item'></slot>

    </li>
  </ul>
</template>

<script>
export default {
  name: "List2",
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>