<template>
  <div class="bottom">
    <div class="one">
      <img src="https://www.html.cn/static/images/logo.png" />
      <p>HTML中文网</p>
      <p>联系QQ：88526</p>
    </div>
    <div class="two">
      <div v-for="(item,index) in items" :key="index">
        <p>网站导航</p>
      </div>
    </div>
    <div class="three">
      <div v-for="(item,index) in list" :key="index">
        <p>网站导航</p>
      </div>
    </div>
    <div class="four">
      <div v-for="(item,index) in table" :key="index">
        <p>网站导航</p>
      </div>
    </div>
    <div class="five">
      <p>QQ交流群</p>
      <img src="https://www.html.cn/static/qq.png" />
    </div>
    <div class="six">
      <p>微信公众号</p>
      <img src="https://www.html.cn/static/weixin.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}],
      table: [{}, {}, {}, {}, {}],
      list: [{}, {}, {}, {}, {}],
    };
  },
};
</script>
<style scoped>
.bottom {
  width: 1080px;
  height: 250px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
}
.bottom div {
  margin-top: 20px;
}
.five {
  margin-top: 40px !important;
}
.six {
  margin-top: 40px !important;
}
.five img {
  height: 110px;
  width: 110px;
}
.six img {
  height: 110px;
  width: 110px;
}
</style>