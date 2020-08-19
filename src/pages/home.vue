<template>
  <div>
    <Head />
    <Swiper />
    <Middle />
    <Mini />
  </div>
</template>
<script>
import Head from "../components/home/header";
import Swiper from "../components/home/swiper";
import Middle from "../components/home/middle";
import Mini from "../components/home/mini";
export default {
  name: "",
  components: {
    Head: Head,
    Swiper: Swiper,
    Middle: Middle,
    Mini: Mini,
  },
};
</script>
<style scoped>
</style>