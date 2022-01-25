<template>
  <div>
    <h2>效果一：现实todo列表时，已完成的todo为绿色</h2>
    <List :todos='todos'>
        <!-- 子组件无法决定结构与外观 -->
        <!-- 接收子组件回传的数据 todo -->
        <template slot-scope="todo">
            <span :style="{color:todo.todo.isComplete?'green':'red'}">{{todo.todo.text}}</span>
        </template>
    </List>
    <hr />
    <h2>效果二：显示todo列表时，带序号</h2>
    <List2 :todos="todos">
        <template slot-scope="todo">
            <span>{{todo.todo.id}}-{{todo.todo.text}}</span>
        </template>
    </List2>
  </div>
</template>

<script>
import List from "./List.vue";
import List2 from "./List2.vue";
export default {
  name: "ScopeSlotTest",
  data(){
      return{
          todos:[
              {id:1,text:'AAA',isComplete:false},
              {id:2,text:'BBB',isComplete:true},
              {id:3,text:'CCC',isComplete:false},
          ]
      }
  },
  components: {
    List,
    List2
  },
};
</script>

<style>
</style>