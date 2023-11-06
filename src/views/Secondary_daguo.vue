<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <!-- 背景图 -->
    <div id="building_chengdu"></div>
    <!-- 设置页心，使页面元素全部能展示出来，不受放大缩小影响 -->
    <div class="header clearfix w">
      <!-- 第一个图片文字div -->
      <div class="top_dyw407" id="char">
        <img src="https://p3.img.cctvpic.com/photoworkspace/2020/07/21/2020072110544951062.png">
        <div class="text">
          <h4>《大国工匠》</h4>
          <p>该系列节目讲述了为长征火箭焊接发动机的国家高级技师高凤林等8位不同岗位劳动者。叙述了他们用自己的灵巧双手，匠心筑梦的故事。</p>
          <span>来源：央视</span>
        </div>
      </div>
      <!-- 选集标题 -->
      <div style="float: left;position: relative;">
        <div class="xuanji">
          <h3>选 集</h3>
        </div>
        <!-- ul>li列表超链接序列 -->
        <ul style="width: 1000px;height: 300px;list-style-type: none;float: left;">
          <li style="  margin: 0 40px;list-style: none;height: 90px;width:auto;
  padding: 0 10px;  line-height: 72px; margin-top: 40px;">
            <div v-for="item in dataShow" :key="item.id">
              <!-- li图片 -->
              <a :href="item.href" target="_blank"> <img :src="item.imgurl"
                  style="width:120px;height:90px; margin-right: 30px;display: inline-block;float: left;" />
                <!-- li的p文字 -->
                <p :key="item.name" :title="item.title"
                  style="float: left;vertical-align:middle;position: relative;width: 230px;font-size: 18px; line-height: 32px;margin-right: 50px;margin-top: 30px;top: -37px;">
                  {{item.name}}
                </p>
              </a>
            </div>
          </li>
        </ul>
        <!-- 分页器 -->
        <div style="position: absolute;;margin:0 auto;margin-left: -100px;left: 50%;margin-top: 270px;top: 50%;">
          <input type="button" value="上一页" @click="prePage">
          <span v-for="i in pageNum" @click="page(i)" :style="{cursor: 'pointer', margin:'10px'}">{{ i }}</span>
          <input type="button" value="下一页" @click="nextPage">
        </div>
      </div>
      <!-- 右边的li的div -->
      <div class="mainrig">
        <h3 class="kankan">为您推荐</h3>
        <div class="ul_list">
          <ul>
            <li><a href=""><img src="https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2023/3/27/1679876492812_712.jpg"></a>
              <p><a href="" title="《榜样7》专题节目">《榜样7》专题节目</a></p>
              <div class="clear"></div>
            </li>
            <li><a href=""><img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2022/4/24/1650784485237_396.jpg" alt=""></a>
              <p><a href="" title="全国党员教育电视片优秀作品展播">全国党员教育电视<br>片优秀作品展播</a></p>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom_dyw407">
        <h3 class="bottom">大家都在看</h3>
        <div class="bottom_list">
          <ul>
            <li><a href=""><img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2021/4/1/1617264181821_495.jpg"></a>
              <p><a href="" target="_blank">《党史故事100讲》</a></p>
            </li>
            <li><a href="" target="_blank"><img src="https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2021/4/1/1617264291093_579.jpg"></a>
              <p><a href="" target="_blank">《红色档案》</a></p>
            </li>
            <li><a href="" target="_blank"> <img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2018/4/11/1523415877104_572.jpg"></a>
              <p><a href="" target="_blank">微视频《两学一做·榜样》</a></p>
            </li>
            <li><a href="" target="_blank"><img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2017/9/28/1506606046865_263.jpg"></a>
              <p><a href="" target="_blank">微视频《准则大家学》</a></p>
            </li>
            <li><a href="" target="_blank"><img src="https://p4.img.cctvpic.com/photoAlbum/page/performance/img/2017/9/28/1506606039965_803.jpg"></a>
              <p><a href="" target="_blank">微视频《条例轻松学》</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 第一个li列表序列数据
      data: [ // 模拟数据
        { id: 1, name: '《大国工匠》 第一集 大勇不惧', href: 'https://www.12371.cn/2020/07/22/VIDE1595400600315700.shtml', title: '《大国工匠》 第一集 大勇不惧', imgurl: 'https://p5.img.cctvpic.com/fmspic/2020/07/22/de650c5d08194ab7ab255ca4067a89c3_h264818000nero_aac32-1.png' },
        { id: 2, name: '《大国工匠》 第二集 大术无极', href: 'https://www.12371.cn/2020/07/22/VIDE1595401680565782.shtml', title: '《大国工匠》 第二集 大术无极', imgurl: 'https://p1.img.cctvpic.com/fmspic/2020/07/22/48fe810d715d44389e5d2069be2826f0_h264200000nero_aac16-1.png' },
        { id: 3, name: '《大国工匠》 第三集 大巧破难', href: 'https://www.12371.cn/2020/07/22/VIDE1595402520673818.shtml', title: '《大国工匠》 第三集 大巧破难', imgurl: 'https://p1.img.cctvpic.com/fmspic/2020/07/22/bf1c1b906eb045f89a264655a5e73eca_h2642000000nero_aac16-1.png' },
        { id: 4, name: '《大国工匠》 第四集 大艺法古', href: 'https://www.12371.cn/2020/07/22/VIDE1595404801569983.shtml', title: '《大国工匠》 第四集 大艺法古', imgurl: 'https://p2.img.cctvpic.com/fmspic/2020/07/22/1bdcd2c0fcf4442fb8a4ada30339bb9f_h2642000000nero_aac16-1.png' },
        { id: 5, name: '《大国工匠》 第五集 大工传世', href: 'https://www.12371.cn/2020/07/22/VIDE1595404801720998.shtml', title: '《大国工匠》 第五集 大工传世', imgurl: 'https://p4.img.cctvpic.com/fmspic/2020/07/22/fe8690181af1431d96a16f89ee459b96_h2642000000nero_aac16-1.png' },
        { id: 6, name: '《大国工匠》 第六集 大技贵精', href: 'https://www.12371.cn/2020/07/22/VIDE1595402881417845.shtml', title: '《大国工匠》 第六集 大技贵精', imgurl: 'https://p2.img.cctvpic.com/fmspic/2020/07/22/5cfbaf9423fa424cbd50dd55317224ad_h2642000000nero_aac16-1.png' },
        { id: 7, name: '《大国工匠》 第七集 大道无疆', href: 'https://www.12371.cn/2020/07/22/VIDE1595406960487329.shtml', title: '《大国工匠》 第七集 大道无疆', imgurl: 'https://p5.img.cctvpic.com/fmspic/2020/07/22/e1decd99a4564cdca1c8fb6d2a7ff0b4_h264418000nero_aac32-1.png' },
        { id: 8, name: '《大国工匠》 第八集 大任担当', href: 'https://www.12371.cn/2020/07/22/VIDE1595404440716950.shtml', title: '《大国工匠》 第八集 大任担当', imgurl: 'https://p1.img.cctvpic.com/fmspic/2020/07/22/cdddda8e92da4dd4b9fdf7a99ddb6888_h2642000000nero_aac16-1.png' }

      ],
      totalPage: [], // 所有分页的数据
      pageSize: 6, // 每页显示数量
      pageNum: 1, // 共几页=所有数据/每页显示数量
      dataShow: [], // 当前显示的数据
      currentPage: 0 // 默认当前显示第一页
    }
  },
  created () {
    this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1 // 计算有多少页数据，默认为1

    // 循环页面
    for (let i = 0; i < this.pageNum; i++) {
      // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
      // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
      this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
    }

    // 获取到数据后默认显示第一页内容
    this.dataShow = this.totalPage[this.currentPage]
  },
  methods: {
    // 下一页
    nextPage () {
      if (this.currentPage === this.pageNum - 1) return
      this.dataShow = this.totalPage[++this.currentPage]
    },
    // 上一页
    prePage () {
      if (this.currentPage === 0) return
      this.dataShow = this.totalPage[--this.currentPage]
    },
    // 点击页码
    page (i) {
      this.currentPage = i
      this.dataShow = this.totalPage[i - 1]
    }

  }
}
</script>
<style scoped>
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
/* p元素设置，显示无横线 */
p {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}
/* p元素鼠标放入出现横线 */
p:hover {
  text-decoration: underline;
}

.app_p {
  position: relative;
  float: left;
}
/* 选集题目背景图 */
.xuanji {
  background: url('https://p5.img.cctvpic.com/photoAlbum/templet/common/DEPA1467795228701387/dyw407_xuanji.jpg')
    no-repeat left bottom;
  position: relative;
  top: 50px;
  left: 8.5%;
}
/* 选集h3标签设置 */
.xuanji h3 {
  font-size: 24px;
  font-family: '微软雅黑';
  color: #292929;
  font-weight: 500;
  padding-bottom: 14px;
  position: relative;
}
/* 嵌套css文字第一个div的span */
.top_dyw407 .text span {
  margin-top: 16px;
  display: block;
  width: 100%;
  font-size: 14px;
}
/* !important优先 */
.top_dyw407 .text span {
  font-family: '微软雅黑' !important;
}
/* 第一个div中设置h4文本 */
.top_dyw407 .text h4 {
  font-size: 18px;
  font-family: '微软雅黑';
  color: #292929;
  font-weight: 500;
  line-height: 28px;
  padding-bottom: 11px;
}
/* 第一个div文本之间的间距 */
.top_dyw407 .text {
  margin-left: 30px;
  float: left;
  width: 570px;
}
/* 第一个div的img设置 */
.top_dyw407 img {
  display: block;
  float: left;
  width: 200px;
  height: 150px;
}
/* 第一个div盒子 */
.top_dyw407 {
  float: left;
  position: relative;
  left: 6.4%;
  top: 40px;
}
/* 右边div最外层css，主要的右边div */
.mainrig {
  width: 360px;
  float: right;
  position: relative;
  bottom: 550px;
  right: 70px;
}
/* 右边li设置h3 */
.mainrig h3 {
  font-size: 24px;
  font-family: '微软雅黑';
  color: #292929;
  font-weight: 500;
  padding-bottom: 14px;
}
/* 最右边图片 */
.kankan {
  background: url('http://p4.img.cctvpic.com/photoAlbum/templet/common/DEPA1467795228701387/dyw407_tuijian.jpg')
    no-repeat left bottom;
  position: relative;
  left: 38.5px;
  /* bottom: 550px;
  right: 70px; */
}
/* 最右边序列 */
.mainrig .ul_list {
  clear: both;
  margin-top: 30px;
}
ul {
  list-style-type: none;
}
.mainrig .ul_list li {
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  position: relative;
  float: right;
  /* bottom: 550px;
  right: 108px; */
}
.mainrig .ul_list a {
  color: black;
  text-decoration: none;
}
.ul_list img {
  display: inline-block;
  float: left;
  margin-right: 30px;
  width: 120px;
  height: 90px;
}
.ul_list p {
  font-family: '微软雅黑';
  font-size: 18px;
  color: #292929;
  line-height: 30px;
  width: 210px;
  float: right;
  text-align: center;
  bottom: 112px;
  position: relative;
}
.clear {
  clear: both;
  font-size: 1px;
  line-height: 1px;
  height: 1px;
  overflow: hidden;
}
/* 设置页心css */
.w {
  width: 1350px;
  margin: 0 auto;
  /* 如果有版心位于中间位置的，可以设置margin */
}
/* 背景图设置 */
#building_chengdu {
  background: url('https://img.tukuppt.com/ad_preview/00/05/71/5c98de77dc9e8.jpg!/fw/980');
  width: 100%; /*大小设置为100%*/
  height: 100%; /*大小设置为100%*/
  position: fixed;
  background-size: 100% 100%;
}
.bottom_dyw407 {
  width: 900px;
  margin-top: 40px;
  float: left;
  position: relative;
  top: 50px;
  left: 80px;
}
/* 大家都在看 */
/* 最外层css */
.bottom {
  background: url('http://p4.img.cctvpic.com/photoAlbum/templet/common/DEPA1467795228701387/dyw407_tuijian.jpg')
    no-repeat left bottom;
  position: relative;
}
.bottom_dyw407 h3 {
  font-size: 24px;
  font-family: '微软雅黑';
  color: rgb(41, 41, 41);
  font-weight: 500;
  padding-bottom: 14px;
}
.bottom_dyw407 .bottom_list {
}
.bottom_dyw407 .bottom_list ul {
  height: 150px;
  padding-top: 30px;
  margin-top: 0px !important;
  position: relative;
  right: 38px;
  bottom: 30px;
}
.bottom_dyw407 .bottom_list ul li {
  width: 120px;
  float: left;
  margin-right: 49px;
  display: inline-block;
}
.bottom_dyw407 .bottom_list ul li img {
  display: block;
  width: 120px;
  height: 90px;
  margin-bottom: 12px;
}
.bottom_dyw407 .bottom_list ul li p {
  font-family: '微软雅黑';
  font-size: 14px;
  color: #292929;
  line-height: 28px;
}
.bottom_dyw407 .bottom_list ul li p a {
  color: #292929;
}
</style>
