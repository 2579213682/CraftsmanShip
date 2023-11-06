<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="building">
      <div id="laopo" style="font-size: 50px; text-align: center;position: relative;top: 250px;  text-shadow: 2px, 2px, 5px, black;font-style: oblique;
">爱猪猪老婆</div>
      <!--外圈大心-->
      <div class="heart heart1"></div>
      <!--里面小心-->
      <div class="heart heart2"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#laopo {
  background: linear-gradient(to right, #fa1405, #ff8247, #ffff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#building {
  background: url('https://ts1.cn.mm.bing.net/th/id/R-C.e6dfecc32a2b325c35ebc2239996e786?rik=I0ge%2bnbQa38B%2bA&riu=http%3a%2f%2fpic29.photophoto.cn%2f20131107%2f0008020253247141_b.png&ehk=xWKprf1%2fw08%2biEyi6DFiB9Wb3bjES9an7chZ%2bqIhRac%3d&risl=&pid=ImgRaw&r=0');
  width: 100%; /*大小设置为100%*/
  height: 100%; /*大小设置为100%*/
  position: fixed;
  background-size: 100% 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 500px;
  overflow: hidden;
}
.heart {
  position: absolute;
  width: 100px;
  height: 90px;
  top: 50%;
  left: 50%;
  margin-top: -45px;
  margin-left: -50px;
}
.heart:before,
.heart:after {
  position: absolute;
  content: '';
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: #fc2e5a;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
.heart1 {
  animation: heart-anim 1s linear 0.4s infinite;
}
.heart2 {
  animation: pounding 0.5s linear infinite alternate;
}
.heart1:after,
.heart1:before {
  background-color: #ff7693;
}

@keyframes pounding {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes heart-anim {
  46% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  52% {
    transform: scale(1.5);
  }
  55% {
    transform: scale(3);
  }
  100% {
    opacity: 0;
    transform: scale(50);
  }
}
</style>
