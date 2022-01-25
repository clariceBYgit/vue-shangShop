export default{
    //对外暴露  重复的业务逻辑
    methods:{
        give(money){
            this.money -= money
            this.$parent.money += money;
          }
    }

}