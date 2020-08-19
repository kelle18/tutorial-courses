<template>
  <div>
    <section class="box">
      <div class="left">
        <div class="qianduan">
          <h1>前端工具</h1>
        </div>
        <div class="first">
          <div class="one" v-for="(item,index) in items" :key="index">
            <img :src="item.imgSrc" />
            <p class="one1">{{item.text1}}</p>
            <p>{{item.text2}}</p>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="center1">
          <div>
            <p>文章</p>
          </div>
          <div>
            <p>视频</p>
          </div>

          <div>
            <p>资源</p>
          </div>

          <div>
            <p>教程</p>
          </div>
        </div>
        <div class="content">
          <div class="line" v-for="(item,index) in centerList" :key="index">
            <div class="t1">标题1</div>
            <div class="t2">标题222222222222222222222</div>
            <div>2020-08-06 9:16:15</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="first">
          <div class="one" v-for="(item,index) in items" :key="index">
            <img :src="item.imgSrc" />
            <p class="one1">{{item.text1}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      items: [
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
        {
          // 不知道
          imgSrc:
            "https://img.php.cn/upload/codes/000/010/003/5c4fcc7e2f6ea163.jpg",
          text1: "Notepad+++",
          text2: "1995次下载",
        },
      ],
    };
  },
};
</script>
<style scoped>
.box {
  margin-top: 60px;
  width: 1080px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 300px;
  height: 600px;

  border: 1px solid green;
}
.center {
  width: 550px;
  height: 600px;
  /* display: flex; */

  border: 1px solid green;
}
.center .line {
  display: flex;
}
.line .t2 {
  flex: 1;
}
.line .t1 {
  width: 100px;
  text-align: right;
  border-right: 1px solid #333;
  padding-right: 10px;
}
.center1 {
  display: flex;
}

.center1 div {
  width: 100px;
  height: 50px;
  border: 1px solid green;
  border-radius: 6px;
  text-align: center;
  line-height: 50px;
}
.right {
  width: 200px;
  height: 600px;

  border: 1px solid green;
}
.one {
  display: flex;
}
.one .cenText {
  flex: 1;
}

img {
  height: 20px;
  width: 20px;
}
h1 {
  font-size: 15px;
}
.qianduan {
  margin-bottom: 15px;
}
.one1 {
  flex: 1;
  margin-top: 10px;
}
.content {
  margin-top: 20px;
}
</style>