<template>
  <div class="all">
    <div class="left">
      <div class="keCheng">
        <P>全部课程</P>
      </div>
      <div class="html">
        <div>
          <router-link to="/home">
            <b>
              <p>html</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>html</p>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>html5</p>
          </router-link>
        </div>
      </div>
      <div class="css">
        <div>
          <router-link to="/home">
            <b>
              <p>css</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>css</p>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>css3</p>
          </router-link>
        </div>
      </div>
      <div class="JS">
        <div>
          <router-link to="/home">
            <b>
              <p>JS</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>JavaScript</p>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>Ajax</p>
          </router-link>
        </div>
      </div>
      <div class="JSK">
        <div>
          <router-link to="/home">
            <b>
              <p>JS框架</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>jQuery</p>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>Vue.js</p>
          </router-link>
        </div>
      </div>
      <div class="qianDuan">
        <div>
          <router-link to="/home">
            <b>
              <p>前端框架</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>Bootstrap</p>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>Layui</p>
          </router-link>
        </div>
      </div>
      <div class="mobile">
        <div>
          <router-link to="/home">
            <b>
              <p>移动开发</p>
            </b>
          </router-link>
        </div>
        <div>
          <router-link to="/home">
            <p>小程序开发</p>
          </router-link>
        </div>
      </div>
      <div class="Development">
        <div>
          <router-link to="/home">
            <b>
              <p>开发工具</p>
            </b>
          </router-link>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="ImgBox">
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP.7uCkVcryBNI29E9C73wMSAHaEZ?w=278&h=180&c=7&o=5&pid=1.7"
          alt
        />
      </div>
      <div class="imgList">
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP.7uCkVcryBNI29E9C73wMSAHaEZ?w=278&h=180&c=7&o=5&pid=1.7"
          alt
        />
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP.7uCkVcryBNI29E9C73wMSAHaEZ?w=278&h=180&c=7&o=5&pid=1.7"
          alt
        />
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP.7uCkVcryBNI29E9C73wMSAHaEZ?w=278&h=180&c=7&o=5&pid=1.7"
          alt
        />
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP.7uCkVcryBNI29E9C73wMSAHaEZ?w=278&h=180&c=7&o=5&pid=1.7"
          alt
        />
      </div>
    </div>
    <!-- <div class="right">
      <div class="rightTop">
        <div class="rightTop1">
          <div>
            <router-link to="/home">
              <p>视频</p>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <p>手册</p>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <p>直播</p>
            </router-link>
          </div>
        </div>
        <div class="liangDa">
          <div>
            <router-link to="/home">
              <div class="jiShu">
                <div>
                  <p>技术文章</p>
                </div>
                <div class="jiShu1">
                  <p>旧</p>
                </div>
              </div>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <div class="wenDang">
                <div>
                  <p>文档工具</p>
                </div>
                <div class="wenDang1">
                  <p>旧</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
</script>
<style scoped >
.router-link-active {
  text-decoration: none;
}
.all {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  /* 加个边框，方便调试，很明显，你的内容超出了 */
  border: 1px solid rgb(229, 132, 132);
}
.keCheng {
  height: 55px;
  width: 260px;
  background-color: rgb(0, 153, 255);
  border-top-left-radius: 8px;
}
.keCheng p {
  text-align: center;
  line-height: 55px;
}
.html {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgba(141, 133, 133, 0.904);
  border-bottom: 1px solid #f3e6e6be;
}
.html div {
  /* width: 30px; */
  margin-left: 10px;
}
.html p {
  color: #fff;
  line-height: 70px;
}
.css {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
  border-bottom: 1px solid #f3e6e6be;
}
.css div {
  margin-left: 10px;
}
.css p {
  color: #fff;
  line-height: 70px;
}
.JS {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
  border-bottom: 1px solid #f3e6e6be;
}
.JS div {
  margin-left: 10px;
  line-height: 70px;
}
.JS p {
  color: #fff;
}
.JSK {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
  border-bottom: 1px solid #f3e6e6be;
}
.JSK div {
  margin-left: 10px;
  line-height: 70px;
}
.JSK p {
  color: #fff;
}
.qianDuan {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
  border-bottom: 1px solid #f3e6e6be;
}
.qianDuan div {
  margin-left: 10px;
  line-height: 70px;
}
.qianDuan p {
  color: #fff;
}
.mobile {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
  border-bottom: 1px solid #f3e6e6be;
}
.mobile div {
  margin-left: 10px;
  line-height: 70px;
}
.mobile p {
  color: #fff;
}
.Development {
  display: flex;
  justify-content: flex-start;
  height: 70px;
  width: 260px;
  background-color: rgb(141, 133, 133);
}
.Development div {
  margin-left: 10px;
  line-height: 70px;
}
.Development p {
  color: #fff;
}
.left {
  width: 260px;
  height: 550px;
}
.right {
  flex: 1;
  height: 550px;
  background: #fff;
}
.ImgBox {
  width: 100%;
  height: 450px;
}
.ImgBox img {
  width: 100%;
  height: 100%;
}
.rightTop {
  display: flex;
}
.imgList {
  display: flex;
  justify-content: space-between;
}
.imgList img {
  width: 100px;
}
</style>