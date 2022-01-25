<template>
    <div style="height:40px;background:#faa;text-align: center;line-height:40px">
        <span>小明每次花100</span>
        <button @click="$emit('update:money',money - 100)">花钱</button>
        爸爸还剩{{money}}？

    </div>
</template>

<script>

export default {
    name:'Child1',
    props:['money']

}
</script>

<style>

</style>