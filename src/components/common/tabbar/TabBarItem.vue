把里面的小的图标进行进一步抽离，再细化为一个组件
<template>
  <div class="tab-BarItem" @click="itemClick">
   <div v-if="!isActive"><slot name="item-icon"></slot></div>
   <div v-else ><slot name="item-icon-active"></slot></div>
   <div :style="activeStyle"><slot name="item-text"></slot> </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"//跟双引号，以后尽量用双引号
    }
  },
  data()
  {
      return{
        // isActive:true         
      }
  },
  computed:{
    isActive(){
      //indexOf检索有没有相同的字符串出现，如果出现则返回第一次出现该字符的位置
      //如果没有出现该字符则返回-1，且该方法对大小写敏感
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }

  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
      console.log(this.$route.path);
      console.log(this.activeColor);
    }
  }
};
</script>

<style>
#tab-Bar {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -10px 1px rgba(100, 100, 100, 0.1);
}
.tab-BarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-BarItem img {
  height: 24px;
}

</style>