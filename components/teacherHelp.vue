<template>
  <!-- 教师端操作指南 -->
  <div class="teacherHelp">
    <v-dialog
      v-model="dialog"
      max-width="1200px"
    >
      <template v-slot:activator="{ on }">
        <v-btn class="btns" small color="#409eff" style="color:#fff;border-radius:5px;margin-right:10px" v-on="on">
          教师操作指南<v-icon right>mdi-arrow-right-drop-circle-outline</v-icon>
        </v-btn>
      </template>

      <!-- 内容 -->
      <v-card class="teacherContent">
        <div class="teacherContentTitle">
          <span>{{ model.title }}</span>
          <v-btn icon @click="dialog = false" color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="teacherContentVideo" style="color:#fff">
          <div class="left-content" style="width: 800px; height:500px;">
            <video v-if="showVideo" style="width: 100%; height: 450px;" controls>
              <source :src="model.videoUrl" type="video/mp4">
            </video>
            <div style="margin-top:10px">
              <span style="margin:0 0 0 15px">播放量：{{ model.clickNum }}次</span>
            </div>
          </div>

          <div class="right-list ml-6" style="width: 400px;">
            <div style="margin:10px 0px;font-size:20px">选集（{{ list.length }}）</div>
            <div class="video-list" style="height:450px; overflow-y: scroll">
              <div
                class="item-content"
                v-for="(item, i) in list"
                :key="i"
                @click="choicevideo(item)"
              >
                <div class="content-image">
                  <img src="https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/addfc0f44e144ad6917a0c9c375f01ef.png">
                  <!-- 时长 -->
                  <div class="time">{{ item.duration }}</div>
                </div>
                <div class="content-text">
                  <div class="top" :style="{color:item.id === model.id?'#409eff':''}">{{ item.title }}</div>
                  <div class="bottom">
                    {{ item.clickNum }}播放
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      showVideo: true,
      model: {},
      list: [
        {
          id: 1,
          title: '如何组卷?',
          imgUrl: '',
          videoUrl: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/movie/%E7%BB%84%E5%8D%B7.mp4',
          duration: '02:42',
          clickNum: 180
        },
        {
          id: 2,
          title: '如何派卷?',
          imgUrl: '',
          videoUrl: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/movie/%E6%B4%BE%E5%8D%B7.mp4',
          duration: '00:42',
          clickNum: 150
        },
        {
          id: 3,
          title: '如何查看统计?',
          imgUrl: '',
          videoUrl: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/movie/%E6%89%93%E5%8D%B0.mp4',
          duration: '00:36',
          clickNum: 206
        },
        {
          id: 4,
          title: '如何打印?',
          imgUrl: '',
          videoUrl: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/movie/%E6%9F%A5%E7%9C%8B%E7%BB%9F%E8%AE%A1.mp4',
          duration: '01:12',
          clickNum: 290
        },
        {
          id: 5,
          title: '如何管理个人信息?',
          imgUrl: '',
          videoUrl: 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com/movie/%E7%AE%A1%E7%90%86%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF.mp4',
          duration: '00:41',
          clickNum: 98
        }
      ]
    }
  },
  created () {
    this.model = this.list[0]
  },
  methods: {
    choicevideo (item) {
      this.showVideo = false
      this.model = item
      setTimeout(() => {
        this.showVideo = true
      }, 200);
    }
  }
}
</script>

<style lang="less" scoped>
.teacherContent {
  padding:20px;

  .teacherContentTitle {
    display: flex;
    justify-content: space-between;
    font-size:25px;
    margin-bottom:10px
  }

  .teacherContentVideo {
    display: flex;
    background: #616161;

    .left-content {
      margin-right:20px
    }
  }
}

.item-content {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  .content-image {
    width: 35%;
    position: relative;
    img {
      width: 100%;
      height: 80px;
      border-radius: 4px;
    }
    .time {
      position: absolute;
      bottom: 10px;
      right: 4px;
      width: 50px;
      height: 16px;
      background: #333;
      opacity: 0.9;
      font-size: 12px;
      border-radius: 10px;
      color: #fff;
      text-align: center;
      line-height: 16px;
    }
  }
  .content-text {
    margin-left: 20px;
    position: relative;
    .bottom {
      position: absolute;
      bottom: 5px;
      font-size: 14px;
      color: #BDBDBD;
      display: flex;
      width: 110px;
    }
  }
}
</style>