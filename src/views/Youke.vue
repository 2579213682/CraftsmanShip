<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 背景图设置 -->
    <div id="building">
    </div>
    <!-- link超链接小图标 -->
    <el-container>
      <el-header style="height: 40px;">
        <div><el-link icon="iconfont icon-denglu" :underline="false"><router-link to="/login" style="color:pink">登录</router-link></el-link>
          <el-link icon="iconfont icon-zhuce" :underline="false"><router-link to="/register" style="color:pink">注册</router-link></el-link>
          <el-link :underline="false">
            <h3 style="color:rgb(255, 0, 0);
             font-size: 27px;
             font-weight: bolder;
             font-style: oblique;
             left: 575px;
              bottom:28px;
              position: relative;
              text-align: center;
  text-shadow: 2px 2px 5px black;
  opacity: 0.7;">工匠精神</h3>
          </el-link>
        </div>
      </el-header>
      <!-- 轮播图 -->
      <el-main class="block"><el-carousel :interval="3000" type="card" height="400px">
          <el-carousel-item v-for="item in imgList">
            <a :href="item.href"><img :src="item.idView" style="width: 100%;height: 100%;">
              <!-- <div class="min_span" :key="item.id" :word="item.word">{{ item.word }}</div> -->
              <h3 class="carousel-item-text">{{ item.word }}</h3>
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
    <el-container>
      <!-- 文字超链接link -->
      <el-header style="height: 0px;bottom: 50px;">
        <div class="text1"><el-link :underline="false"><router-link to="/login">
              <div class="lef">劳模精神、劳动精神、工匠精神是以爱国主义为核心的民族精神和以改革创新为核心的时代精神的生动体现，是鼓舞全党全国各族人民风雨无阻、勇敢前进的强大精神动力。</div>
              <div class="rig">——2020年11月24日，习近平在全国劳动模范和先进工作者表彰大会上的讲话</div>
            </router-link></el-link></div>
      </el-header>
      <!-- 列表a链接 -->
      <div id="list_word">
        <ul>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">工匠精神：匠心筑梦 匠艺强国</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">精益求精 勇于创新——工匠精神述评</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">在全社会弘扬工匠精神</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">如切如磋，如琢如磨——工匠精神述评</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">人民日报评论员：大力弘扬工匠精神，培养更多高技能人才和大国工匠</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">工匠精神：谱写敬业报国的时代乐章</a></li>
          <li class="list_word_li"> <a href="/#/login" target="_blank" style="color:#000">大力弘扬劳模精神劳动精神工匠精神</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">锻造中国制造中国创造的技能人才力量</a></li>
          <li class="list_word_li"><a href="/#/login" target="_blank" style="color:#000">技能人才 人尽其才——蓝领，撑起一片蓝天</a></li>
        </ul>
      </div>
    </el-container>
    <!-- swiper轮播图 -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <a :href="image.href"> <img :src="image.image_list" /> </a>

          <div :text="image.text" class="swiper_text">{{ image.text }}</div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// import Noadvyouke from '../views/noadvyouke'
// 引入swiper样式
import Swiper from 'swiper'
// 引入swiper样式css
import '../../node_modules/swiper/dist/css/swiper.css'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  // eslint-disable-next-line no-dupe-keys
  data () {
    return {
      // 轮播图图片，文本，url
      imgList: [
        { id: 0, idView: 'https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/14/1631585558680_828.jpg', href: '/#/login', word: '系列节目《大国工匠》' },
        { id: 1, idView: 'https://p1.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/14/1631585401197_943.jpg', href: '/#/login', word: '优秀电教片《了不起的成都工匠》' },
        { id: 2, idView: 'https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/14/1631585327917_970.jpg', href: '/#/login', word: '优秀电教片《小伙子大工匠》' },
        { id: 3, idView: 'https://p3.img.cctvpic.com/photoAlbum/page/performance/img/2021/9/14/1631585675991_678.jpg', href: '/#/login', word: '系列节目《精神的追寻》工匠精神' }
      ],
      // swiper轮播图图片,文本,url，url没写
      images: [
        { image_list: 'https://th.bing.com/th/id/OIP.QhSWDIvbpVLGQjztUNx87wAAAA?pid=ImgDet&w=450&h=880&rs=1', text: '劳模制造 必是精品', href: '/#/login' },
        { image_list: 'https://th.bing.com/th/id/OIP.F_BmYJ5zqao-RWPWGZYrBQAAAA?pid=ImgDet&rs=1', text: '矢志奋斗 只争朝夕', href: '/#/login' },
        { image_list: 'https://th.bing.com/th/id/R.a638bc9415f629961dee7ed751db6cc9?rik=av78xSeSOhmM9g&riu=http%3a%2f%2fwww.workercn.cn%2fupload%2fresources%2fimage%2f2022%2f09%2f01%2f106642_450x10000.jpg%3fr%3d1662027437569&ehk=CscwiUrfTx6RvwsMABaskCR9vjEi9eHnNtEgdGbfylU%3d&risl=&pid=ImgRaw&r=0', text: '中国精度 极致匠心', href: '/#/login' },
        { image_list: 'https://th.bing.com/th/id/OIP.ADz0LdC4paY-yuqDV5C72QHaLw?pid=ImgDet&rs=1', text: '周式精度 如琢如磨', href: '/#/login' },
        { image_list: 'https://pic.baike.soso.com/ugc/baikepic2/3284/20220303132848-1955194536_png_587_612_742757.jpg/0', text: '言传身教 匠心筑梦', href: '/#/login' }
      ]
    }
  },
  // swiper轮播图的生命周期函数
  mounted () {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      initialSlide: 2 // 设置初始显示第三张照片
    })
  },
  methods: {
  }
}
</script>
<style>
/* 背景图css */
#building {
  background: url('https://bpic.588ku.com/back_pic/19/03/15/84a0e60fb26ef821fd533cfb9fc67cbb.jpg');
  width: 100%; /*大小设置为100%*/
  height: 100%; /*大小设置为100%*/
  position: fixed;
  background-size: 100% 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 40px;
  width: auto;
  height: 40px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-link {
  float: left;
  margin-left: 10px;
}

/* 轮播图 */
.el-carousel__item h3 {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
  z-index: 1;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block {
  background: #fff;
  width: 100%;
  text-align: center;
  width: 100%;
}
/* 第一个轮播图文本 */
.carousel-item-text {
  position: absolute;
  top: 310px;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  background: linear-gradient(to right, #f0610e, #e8771a, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: 1px 1px 1px #e8771a; */
}
/* 轮播图h3 */
.el-carousel__item h3 {
  color: #fff;
  font-size: 20px;
  opacity: 0.8;
  line-height: 100px;
  margin: 0;
  z-index: 1;
}
/* router-link的伪类可改变颜色 */
/* .router-link-active {
  text-decoration: none;
  color: white;
} */
/* 文字链接 */
.text1 {
  width: 1180px;
  margin: 40px auto 0;
}
/* 第一行文案 */
.lef {
  position: relative;
  text-indent: 2em;
  font: 26px '微软雅黑';
  line-height: 66px;
  /* color: #90ee90; */
  background: linear-gradient(to right, #f0610e, #e8771a, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  bottom: 100px;
}
/* 第二行文案 */
.rig {
  position: relative;
  font: 26px '微软雅黑';
  line-height: 68px;
  /* color: #90ee90; */
  background: linear-gradient(to right, #f0610e, #e8771a, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  bottom: 100px;
}
/* 列表 */
/* 最外层div列表css */
#list_word {
  position: relative;
  width: 1300px;
  background: #f8ebcd;
  padding: 38px 0 58px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  left: 0px;
  top: 125px;
}
.list_word_li {
  font: 22px '微软雅黑';
  line-height: 72px;
  color: #000;
  float: left;
  width: 500px;
  margin: 0 40px;
  padding: 0 10px;
  border-bottom: 1px dashed #898886;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  list-style-type: none;
  top: 0px;
  left: 50px;
  position: relative;
}
a {
  text-decoration: none;
}
/* swiper轮播图 */
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  top: 125px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  height: 100%;
  width: 100%;
}

/* swiper轮播图文本 */
.swiper_text {
  position: relative;
  text-align: center;
  top: 0px;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 10px;
  font-size: 35px;
  background: linear-gradient(to right, #f0610e, #e8771a, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 1px #e8771a;
  font-style: oblique;
  opacity: 0.75;
}
</style>
