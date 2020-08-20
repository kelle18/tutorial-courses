<template>
  <div class="box">
    <div class="zuiXin">
      <h1>最新课程</h1>
      <p>每日最新推荐，学习最新网站前端开发课程</p>
    </div>
    <div class="xueXu">
      <div class="xueXu1" v-for="(item,index) in items" :key="index">
        <div>
          <img src="https://img.php.cn/upload/study/000/000/006/5c1a1b09e88ee118.jpg" />
        </div>
        <p>教程手册</p>
      </div>
    </div>
    <div class="liangJie">
      <div class="liangJie1">
        <p>友情链接(QQ:88526)</p>
      </div>
      <div class="liangJie2">
        <div v-for="(item,index) in list" :key="index">
          <p>php中文网</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   sstt: [1, 2, 3],
      items: [{}, {}, {}, {}],
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
};
</script>
<style scoped>
.box {
  width: 1080px;
  height: 350px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid red;
}
.zuiXin {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  height: 25px;
  line-height: 25px;
}
h1 {
  padding-right: 8px;
  font-size: 25px;
  border-right: 3px solid black;
}
.zuiXin p {
  padding-left: 8px;
}
img {
  height: 150px;
  width: 250px;
}
/* .sstt1 {
  height: 150px;
  width: 500px;
} */
.xueXu {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.xueXu1 {
  text-align: center;
}
.liangJie {
  width: 1080px;
  height: 100px;
  margin-top: 30px;
  border: 1px solid red;
}
.liangJie1 {
  margin-top: 10px;
}
.liangJie2 {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>