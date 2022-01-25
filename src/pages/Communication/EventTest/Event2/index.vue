<template>
  <div style="width:500px;height:50px;margin:50px auto;border:1px solid #000;text-align: center;">
    <h2>Event2事件组件</h2>
    <button @click="$emit('click','自定义事件click')">自定义事件click</button>
    <button @click="$emit('xxx','自定义事件xxx')">自定义事件xxxx</button>
  </div>
</template>

<script>
export default {
    name:'Event2'
}
</script>

<style>

</style>