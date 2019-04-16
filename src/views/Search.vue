<template>
  <div class="search">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="hot-search con-search">
      <div class="wrap-title">
        <div class="con-title">
          <span class="iconfont">&#xe676;</span>
          <p>热门搜索</p>
        </div>
      </div>
      <ul class="hot-tag">
        <li>
          水墨画
        </li>
        <li>
          壁画
        </li>
        <li>
          油画
        </li>
        <li>
          素描
        </li>
      </ul>
    </div>
    <div class="his-search con-search">
      <div class="wrap-title">
        <div class="con-title">
          <span class="iconfont">&#xe676;</span>
          <p>历史记录</p>
        </div>
      </div>
      <span class="clear">
        清空历史记录
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data: () => ({
      value: ''
    }),
    methods: {
      onSearch() {
        console.log(1);
      }
    }
  }
</script>

<style>
  .con-search {
    border-top: 1px solid #e1e1e1;
    padding: 5px 16px;
  }

  .hot-search {
    height: 200px;
  }

  .his-search {
    position: relative;
  }

  .clear {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #222;
    font-size: 14px;
  }

  .wrap-title {
    padding-top: 3px;
    padding-bottom: 10px;
  }

  .con-title {
    display: flex;
    align-items: center;
  }

  .hot-tag {
    display: flex;
  }

  .hot-tag>li {
    padding: 8px 15px;
    background: #f1f1f1;
    border-radius: 3px;
    margin-right: 5px;
    color: #222;
  }
</style>