<template>
  <van-tabbar v-model="active" active-color="#c1372c">
    <van-tabbar-item icon="home-o">
      <router-link to='/'>
        首页
      </router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <router-link to='/learn'>
        推荐
      </router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="freinds-o">
      <router-link to='/social'>
        社区
      </router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <router-link to='/about'>
        我的
      </router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>


<script>
  export default {
    name: "foot",
    components: {},
    data: () => ({
      active: 0
    })
  }

</script>

<style>
  .van-tabbar {
    background-color: #222;
  }
</style>