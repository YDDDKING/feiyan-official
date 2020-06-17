<template>
  <div style="display:flex;flex-direction:column;align-items:center">
    <!-- 顶部背景图和图片 -->
    <div style="width:100%;height:720px">
      <div class="bigBg">
        <v-card class="bannerBg">
          <div class="banner-1">
          <!-- <img src="../assets/pic1.jpg" width="1200px" style="position:absolute;bottom:-159px;border-radius:15px">
           -->
           <banner/>
          </div>
        </v-card>
      </div>
    </div>

    <!-- 动态列表部分 -->
    <div style="width:1200px">
      <!-- 列表标题 -->
      <div style="border-bottom:1px solid rgb(64, 158, 255, 0.3);padding-bottom:30px;margin-bottom:50px">
        <img src="../assets/msgList.png" width="264px">
      </div>

      <!-- 列表内容 -->
      <div class="listContent" v-for="(item,index) in dtList" :key="index" @click="jumpLink(item)">
        <div style="display:flex;width:1100px;">
          <!-- <img src="../assets/smallPics.png" style="margin-right:25px;z-index:10;width:210px"> -->
          <div style="width:210px;z-index:2;margin-right:25px;height:95px;position:relative">
            <img :src="item.dynamicImgUrl" style="width:210px;height:100%;" v-if="item.dynamicImgUrl">

            <!-- 阴影 -->
            <div style="position:absolute;left:6px;top:20px;width:214px;height:86px;background:#ebf5ff;border-radius:5px;z-index:-1"></div>
          </div>
          

          <div style="flex:1;display:flex;justify-content:space-around;flex-direction:column;">
            <div>
              <span class="listTitle">{{item.dynamicTitle}}</span>
              <span :class="item.dynamicType == 1? 'listTipsNew':'listTips'">
                {{ item.dynamicType == 1?'新闻':'公告' }}
              </span>
            </div>
            
            <div class="listSmallTitle">{{item.dynamicContent | ellipsis}}</div>
          </div>
        </div>

        <div class="listTime">{{ cutTime(item.dynamicTime) }}</div>
      </div>

      <div class="pagination">
        <div>
          <v-pagination
            color='#409eff'
           :length="page"
           v-model="curPage"
           v-if="page !== 1"
          ></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../plugins/axios'
import banner from '../components/banner'
export default {
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 60) {
        return value.slice(0,60) + '...'
      }
      return value
    }
  },
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
  // async asyncData({ $axios }) {
  //   const res = await http.get('/getBannerList', {params:{bannerType:2}})
  //   let bannerList = res.data.datas
  //   // console.log(res)
  //   return { bannerList }
  // },
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
      const res = await http.get('/api-generator/website/dynamic/list', {params:model})
      this.dtList = res.data.data
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

  .bannerBg {
    border-radius: 20px;
    position: absolute;
    top:159px;
  }
}
.listTitle {
  color:#242424;
  font-size:20px;
  font-family:'黑体';
  font-weight: 600;
}
.listSmallTitle {
  color:#999;
  font-size:14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
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
  padding-bottom: 9px;
}
.pagination {
  margin-bottom:50px;
  display: flex;
  justify-content: flex-end;
}


.banner-1 {
  // background-color: #f3f3f3;
  width: 100%;
  display: flex;
  justify-content: center;
}
.listContent {
  display:flex;
  justify-content:space-between;
  margin-bottom:60px;
}
.listContent:hover {
  cursor: pointer;
}

</style>