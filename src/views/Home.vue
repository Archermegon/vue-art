<template>
  <div class="home container">
    <div class="search-to">
      <router-link to='/search'>
        <span class="iconfont icon-search">&#xe604;
        </span>
      </router-link>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="banner-content"></div>
          <img src="./../../static/banner/banner1.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./../../static/banner/banner2.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./../../static/banner/banner3.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="./../../static/banner/banner4.jpg" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="exhibit">
      <van-tabs v-model="activeBar" animated name="type" title-active-color="#222" color="#222">
        <!-- color屬性用來控制变换颜色 -->
        <van-tab title="展览">
          <ul>
            <li v-for="ind in 5" :key="ind">
              <Exhibation picSrc="./static/img/con2.jpg"></Exhibation>
            </li>
          </ul>
        </van-tab>
        <van-tab title="作品">
          <ul>
            <li v-for="ind in 5" :key="ind">
              <Exhibation picSrc="./static/img/con2.jpg"></Exhibation>
            </li>
          </ul>
        </van-tab>
        <van-tab title="艺术家">
          <ul>
            <li v-for="ind in 5" :key="ind">
              <Exhibation picSrc="./static/img/con2.jpg"></Exhibation>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import Exhibation from './home/Exhibation'
  export default {
    name: "home",
    components: {
      Exhibation
    },
    data: () => ({
      activeBar: 0,
      value: ""
    }),
    methods: {
      onSearch() {
        console.log(this.value);
        this.value = "";
      }
    }
  };

</script>

<style>
  .home {
    position: relative;
  }

  .search-to {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 100;
    font-weight: bold;
  }

  .search-to .icon-search {
    font-size: 20px;
    color: #f1f1f1;
  }
</style>