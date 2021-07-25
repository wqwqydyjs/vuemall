
<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <!-- vue2.6.0之后的slot语法已经发生改变 -->
        <template v-slot:item-icon>
          <div><img src="./assets/img/tabbar/home.svg" alt="首页图片" /></div>
        </template>
        <template v-slot:item-icon-active>
          <div>
            <img src="./assets/img/tabbar/home_active.svg" alt="首页图片" />
          </div>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <!-- vue2.6.0之后的slot语法已经发生改变 -->
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tabbar/category.svg" alt="分类图片" />
          </div>
        </template>
        <template v-slot:item-icon-active>
          <div>
            <img src="./assets/img/tabbar/category_active.svg" alt="分类图片" />
          </div>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <!-- vue2.6.0之后的slot语法已经发生改变 -->
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tabbar/shopcart.svg" alt="购物车图片" />
          </div>
        </template>
        <template v-slot:item-icon-active>
          <div>
            <img src="./assets/img/tabbar/shopcart_active.svg" alt="购物车图片" />
          </div>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <!-- vue2.6.0之后的slot语法已经发生改变 -->
        <template v-slot:item-icon>
          <div>
            <img src="./assets/img/tabbar/profile.svg" alt="我的图片" />
          </div>
        </template>
        <template v-slot:item-icon-active>
          <div>
            <img src="./assets/img/tabbar/profile_active.svg" alt="我的图片" />
          </div>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 注意这里的路径最后面不要加上.vue
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  methods: {
    temClick() {
      console.log("点击");
    },
  },
};
</script>

<style>
/* style中的引用基本样式 */
@import "assets/css/base.css";
</style>
