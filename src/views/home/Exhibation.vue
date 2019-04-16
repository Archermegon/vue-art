<template>
  <div class="exhibation">
    <img src="./../../../static/img/con3.jpg" alt="">
    <div class="time">
      剩余10天
    </div>
    <div class="txt">
      <h3>
        肖像的圣化
      </h3>
      <h4 class="name-cn">
        肖泉个人作品展
      </h4>
      <h4 class="name-en">
        XIAO QUAN EXHIBITION
      </h4>
      <p>
        展览时间：2019.03-2019.12
      </p>
      <p>
        展览地点：chiki艺术空间
      </p>
    </div>
    <div class="share">
      <ul class="list-share">
        <li>
          <div class="txt-share">
            <span class="iconfont">&#xe655;</span>
          </div>
        </li>
        <li>
          <div class="txt-share">
            <span class="iconfont">&#xe67c;</span>
          </div>
        </li>
        <li>
          <div class="txt-share">
            <span class="iconfont">&#xe603;</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exhibation',
    props: ["day", "picSrc"],
    data: () => ({

    })
  }
</script>

<style>
  .exhibation {
    position: relative;
    width: 100%;
    height: 201px;
    color: #f1f1f1;
    margin-bottom: 5px;
    ;
  }

  .exhibation>img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
  }

  .time {
    position: absolute;
    background: #d52315;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    line-height: 32px;
    right: 0;
    padding: 0 20px;
    font-size: 15px;
    top: 10px;
  }

  .txt {
    padding-top: 40px;
    padding-left: 10px;
  }

  .txt h3 {
    font-weight: normal;
  }

  .txt h4 {
    font-weight: normal;
  }

  .txt>h3 {
    padding-bottom: 12px;
    font-size: 22px;
  }

  .txt p {
    font-size: 14px;
  }

  .name-en {
    font-size: 12px;
    padding-bottom: 8px;
  }

  .share {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    width: 100%;
    line-height: 36px;
  }

  .list-share {
    display: flex;
    justify-content: flex-end;
  }

  .txt-share {
    padding-right: 10px;
  }
</style>