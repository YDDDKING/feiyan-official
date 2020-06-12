<template>
  <div style="display:flex;flex-direction:column;align-items:center">
    <!-- 顶部背景图和图片 -->
    <div style="width:100%;height:550px">
      <div class="bigBg">
        <div class="banner-1">
        <!-- <img src="../assets/pic1.jpg" width="1200px" style="position:absolute;bottom:-159px;border-radius:15px">
         -->
         <banner :bannerList="bannerList"/>
        </div>
      </div>
    </div>

    <!-- 动态列表部分 -->
    <div style="width:1200px">
      <!-- 列表标题 -->
      <div style="border-bottom:1px solid rgb(64, 158, 255, 0.3);padding-bottom:50px;margin-bottom:70px">
        <img src="../assets/msgList.png" width="264px">
      </div>

      <!-- 列表内容 -->
      <div class="listContent" v-for="(item,index) in dtList" :key="index" @click="jumpLink(item)">
        <div style="display:flex;position:relative;width:1100px;">
          <img src="../assets/smallPics.png" style="margin-right:25px;z-index:10">
          <!-- <img src="item.dynamicImgUrl" style="margin-right:25px;z-index:10;"> -->
          <!-- 阴影 -->
          <div style="position:absolute;left:6px;top:13px;width:214px;height:86px;background:#ebf5ff;border-radius:5px">
          </div>
          <div style="display:flex;justify-content:space-around;flex-direction:column;">
            <div>
              <span class="listTitle">{{item.dynamicTitle}}</span>
              <span :class="item.dynamicType == 1? 'listTipsNew':'listTips'">
                {{ item.dynamicType == 1?'新闻':'公告' }}
              </span>
            </div>
            <div class="listSmallTitle">{{item.dynamicContent}}</div>
          </div>
        </div>

        <div class="listTime">{{ cutTime(item.dynamicTime) }}</div>
      </div>

      <div class="pagination">
        <v-pagination
          color='#1867c0'
         :length="page"
         v-model="curPage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../plugins/axios'
import banner from '../components/banner'
export default {
  data () {
    return {
      dtList: [],
      curPage: 1,
      limit: 5,
      page: 0,
      bannerList: [],
    }
  },
  components: {
    banner
  },
  created () {
    this.getDynamicList()
  },
  async asyncData({ $axios }) {
    const res = await http.get('/getBannerList', {params:{bannerType:2}})
    let bannerList = res.data.datas
    // console.log(res)
    return { bannerList }
  },
  watch: {
    curPage (newVal, oldVal) {
      this.getDynamicList()
    }
  },
  methods: {
    async getDynamicList () {
      let model = {
        page: this.curPage,
        limit: this.limit
      }
      const res = await http.get('/getDynamicList', {params:model})
      console.log(res)
      this.dtList = res.data.datas
      this.page = res.data.page
    },
    cutTime (time) {
      let str = ''
      str = time.slice(0, 10)
      return str
    },
    jumpLink (item) {
      window.open(item.dynamicUrl)
    }
  }
}
</script>

.<style lang="less" scoped>
.bigBg {
  height:500px;
  width:100%;
  display:flex;
  justify-content:center;
  position:relative;
  background:url('../assets/background.png');
}
.listTitle {
  color:#242424;
  font-size:20px;
  font-family:'黑体';
  font-weight: 600;
}
.listSmallTitle {
  color:#999;
  font-size:14px
}
.listTips {
  margin-left:15px;
  font-size:14px;
  padding:1px 10px;
  color:#85D0A2;
  border:1px solid #85D0A2;
  border-radius:5px
}
.listTipsNew {
  margin-left:15px;
  font-size:14px;
  padding:1px 10px;
  color:#CBCBCB;
  border:1px solid #CBCBCB;
  border-radius:5px
}
.listTime {
  display:flex;
  align-items:flex-end;
  color:#CBCBCB;
  font-size:14px;
}
.pagination {
  margin-bottom:50px
}
.banner-1 {
  height: 560px;
  // background-color: #f3f3f3;
  width: 100%;
  display: flex;
  justify-content: center;
}
.listContent {
  display:flex;
  justify-content:space-between;
  margin-bottom:80px;
}
.listContent:hover {
  cursor: pointer;
}
</style>