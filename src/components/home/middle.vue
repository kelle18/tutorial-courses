<template>
  <div class="shiZhan">
    <div class="shiZhan1">
      <div class="shiZhan2">
        <h1>实战课程</h1>
      </div>
      <p>全程实战学习，快速掌握wed前端开发技术</p>
    </div>
    <div class="shiZhan3">
      <div class="shiZhan4" v-for="(item,index) in items" :key="index">
        <!-- 直接渲染item，就是一个对象 -->
        <img :src="item.imgSrc" />
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/study/000/000/003/5c19b24f88b30191.jpeg",
          text: "Vue.js开发基础教程",
        },
        {
          imgSrc:
            "https://img.php.cn/upload/study/000/000/001/5c0b7de4357e6814.png",
          text: "JavaScript函数与闭包",
        },
        {
          imgSrc:
            "https://img.php.cn/upload/study/000/000/001/5c0b7e02cbedb917.png",
          text: "JavaScript对象与常用设计模式",
        },
        {
          imgSrc:
            "https://img.php.cn/upload/study/000/000/011/5c188925e1bad589.png",
          text: "bootstrap框架后台开发实战",
        },
      ],
    };
  },
};
</script>
<style scoped>
.shiZhan {
  width: 1080px;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid red;
}
.shiZhan1 {
  display: flex;
}
.shiZhan3 {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.shiZhan4 {
  height: 150px;
  width: 250px;
  text-align: center;
  overflow: hidden;
}
img {
  height: 120px;
  width: 100%;
  border-radius: 8px;
}
h1 {
  padding-right: 8px;
  font-size: 25px;
  border-right: 3px solid black;
}
.shiZhan1 p {
  padding-left: 8px;
}
.shiZhan2 {
  height: 25px;
  line-height: 25px;
}
.shiZhan1 {
  margin-top: 10px;
}
.shiZhan4:nth-child(1) {
  margin-left: 10px !important;
}
.shiZhan4:nth-child(4) {
  margin-right: 10px !important;
}
</style>