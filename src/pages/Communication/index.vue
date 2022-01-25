<template>
    <div>
        <h1>组件件通信高级</h1>
        <router-link to='/communication/event'>event深入</router-link>
        <router-link to='/communication/model'>v-model深入</router-link>
        <router-link to='/communication/sync'>属性修饰符sync</router-link>
        <router-link to='/communication/attrs-listener'>$attrs与$listener</router-link>
        <router-link to='/communication/children-parent'>$children与$parent</router-link>
        <router-link to='/communication/scope-slot'>作用域插槽scope-slot</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'Communication'
}
</script>

<style lang="less" scoped>
div{
    margin: 10px;
        a{
            font-size: 16px;
            margin-left: 20px;
            &.router-link-active{   //表示router-link被选中激活的状态
                color: red;
            }
    }


}

</style>