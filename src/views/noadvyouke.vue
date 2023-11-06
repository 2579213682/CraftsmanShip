<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="building">
      <div class="quanxian">无权限访问</div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.quanxian {
  position: relative;
  top: 50px;
  font-size: 50px;
  text-align: center;
}
#building {
  background: url('https://www.wordpress.la/sites/default/files/wordpress401.jpg');
  width: 100%; /*大小设置为100%*/
  height: 100%; /*大小设置为100%*/
  position: fixed;
  background-size: 100% 100%;
}
</style>
