<template>
  <div>
    <div class="box">
      <div class="tuiJian">
        <h1>课程推荐</h1>
        <p>定期课程推荐，只推荐优质的WEB开发课程</p>
      </div>
      <div>
        <div class="jiaoCheng">
          <div class="jiaoCheng1" v-for="(item,index) in items" :key="index">
            <div>
              <img src="https://img.php.cn/upload/study/000/000/006/5c1a1b09e88ee118.jpg" />
            </div>
            <p>教程手册</p>
          </div>
        </div>
        <div class="jiaoCheng2">
          <div class="jiaoCheng3" v-for="(item,index) in list" :key="index">
            <div>
              <img src="https://img.php.cn/upload/study/000/000/006/5c1a1b09e88ee118.jpg" />
            </div>
            <p>教程手册</p>
          </div>
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
      items: [{}, {}, {}],
      list: [{}, {}, {}, {}],
    };
  },
};
</script>
<style scoped>
.box {
  width: 1080px;
  height: 550px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid red;
}
.tuiJian {
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
.tuiJian p {
  padding-left: 8px;
}
img {
  height: 170px;
  width: 250px;
  border-radius: 8px;
}
/* .sstt1 {
  height: 150px;
  width: 500px;
} */
.jiaoCheng {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.jiaoCheng1:nth-child(1) {
  width: 400px !important;
  /* border: 2px solid green; */
}
.jiaoCheng1 img {
  width: 100%;
  height: 220px;
}

.jiaoCheng1 {
  text-align: center;
  /* flex布局，flex内的盒子最好也要给个宽度 */
  width: 250px;
}
.jiaoCheng2 {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
.jiaoCheng3 {
  text-align: center;
}
.jiaoCheng1:nth-child(1) {
  margin-left: 10px !important;
  width: 450px !important;
  border-radius: 8px;
}
.jiaoCheng1:nth-child(2) {
  width: 280px !important;
}
.jiaoCheng1:nth-child(3) {
  margin-right: 10px !important;
  width: 280px !important;
}
.jiaoCheng1:nth-child(1) {
  margin-left: 10px !important;
  width: 450px !important;
  border-radius: 8px;
}
.jiaoCheng3:nth-child(1) {
  margin-left: 10px !important;
}
.jiaoCheng3:nth-child(4) {
  margin-right: 10px !important;
}
</style>