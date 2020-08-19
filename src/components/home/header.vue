<template>
  <div class="header">
    <div class="left-header">
      <img src="../../static/homeImages/logo.png" />
      <div>
        <router-link to="/home">首页</router-link>
      </div>
      <div>
        <router-link to="/home">课程</router-link>
      </div>
      <div>
        <router-link to="/home">路径</router-link>
      </div>
      <div>
        <router-link to="/home">资源</router-link>
      </div>
      <div>
        <router-link to="/home">文章</router-link>
      </div>

      <div>
        <router-link to="/home">html手册</router-link>
      </div>
      <div>
        <router-link to="/home">css手册</router-link>
      </div>
    </div>
    <div class="right-header">
      <div>
        <router-link to="/home">登录</router-link>
      </div>
      <div>/</div>
      <div>
        <router-link to="/home">注册</router-link>
      </div>
    </div>
    <!-- 顶部的就在这里写 -->
  </div>
</template>
<script>
</script>
<style scoped>
.header {
  width: 100%;
  /* 我这里并不是想居中 所以auto无效， */
  margin: 0 0 30px;
  display: flex;
  box-shadow: 0px 6px 5px #dddbdb;
}
.left-header {
  height: 100px;
  flex: 1;
  line-height: 100px;
  display: flex;
  /* justify-content: space-around; */
}
.left-header div {
  width: 100px;
}
.right-header {
  height: 100px;
  width: 150px;
  line-height: 100px;
  display: flex;
  justify-content: space-around;
  /* margin-right: -30px; */
}
.router-link-active {
  text-decoration: none;
}
</style>