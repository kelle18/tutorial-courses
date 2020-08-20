<template>
  <div>
    <Head />
    <Swiper />
    <Middle />
    <Mini />
    <Recommend />
    <New />
    <Bottom />
  </div>
</template>
<script>
import Head from "../components/home/header";
import Swiper from "../components/home/swiper";
import Middle from "../components/home/middle";
import Mini from "../components/home/mini";
import Recommend from "../components/home/recommend";
import New from "../components/home/new";
import Bottom from "../components/home/bottom";
export default {
  name: "",
  components: {
    Head: Head,
    Swiper: Swiper,
    Middle: Middle,
    Mini: Mini,
    Recommend: Recommend,
    New: New,
    Bottom: Bottom,
  },
};
</script>
<style scoped>
</style>