<template>
  <div>
    <h2>爸爸有存款：{{ money }}</h2>
    <button @click="jieqianFromM(100)">找小明借钱100</button>
    <button @click="jieqianFromH(150)">找小红借钱150</button>
    <button @click="jieqianFromBoth(100)">找所有小孩借钱200</button>
    <br />
    <Son ref="xm"></Son>
    <br />
    <Daughter ref="xh"></Daughter>
  </div>
</template>

<script>
import Daughter from "./Daughter.vue";
import Son from "./Son.vue";

export default {
  name: "ChildrenParentTest",

  data() {
    return {
      money: 1000,
    };
  },
  methods:{
    jieqianFromM(money){
      this.money += 100;
      this.$refs.xm.money -= 100

    },
    jieqianFromH(money){
      this.money += 150;
      this.$refs.xh.money -= 150;
    },
    jieqianFromBoth(money){
      this.money += money * 2;
      this.$children.forEach(item => item.money -= 100)
    }
  },
  components: {
    Son,
    Daughter,
  },
};
</script>

<style>
</style>