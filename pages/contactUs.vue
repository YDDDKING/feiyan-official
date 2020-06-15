<template>
  <div class='contactBg'>
    <!-- 提示框 -->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :multi-line="true"
      :color="color"
      style="position:fixed;top:-1000px"
    >
      {{ text }}
    </v-snackbar>


    <div class="contactCenter">
      <!-- 左边地图部分 -->
      <div class="contactLeft">
        <div class="contactMap">
          <baidu-map style="height:346px;width:612px" ak="qe0TkeKulWIs0yc7rM69N7UX5zivQK06" :center="{lng: 113.266244, lat: 23.210388}" :zoom="15" :scroll-wheel-zoom="true">
            <bm-marker :position="{lng: 113.266244, lat: 23.210388}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
              <!-- <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
                <div>地址：广州市白云区黄石西路599号</div>
                <div>元邦大厦606室</div>
                <div>邮箱：feiyanmath@feiyanmath.com</div>
              </bm-info-window> -->
            </bm-marker>
          </baidu-map>
        </div>
      </div>

      <!-- 右边内容部分 -->
      <div class="contactRight">
        <div><img src="../assets/icon／location.png"/></div>
        <div class="contactName">广州市凤腾阁科技有限公司</div>
        <div class="contactMsg">
          <div style="margin-bottom:10px">电话：020-31924824</div>
          <div style="margin-bottom:10px">邮箱：feiyanmath@feiyanmath.com</div>
          <div>地址：广州市白云区黄石西路599号元邦大厦606</div>
        </div>
        <div>
          <v-btn outlined color="#409EFF" class="contactBtn" @click='openContact'>联系我们</v-btn>
        </div>
      </div>
      
      <v-dialog v-model="dialog" persistent max-width="620">
        <contactPeopleMsg v-if="dialog" @closeDialog='closeDialog()' @submitMsg='submitMsg'/>
      </v-dialog>
    </div>

    
  </div>
</template>

<script>

import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import contactPeopleMsg from '../components/contactMsg'
export default {
  components: {
    BaiduMap,
    contactPeopleMsg
  },
  data () {
    return {
      center: {lng: 113.266244, lat: 23.210388 },
      zoom: 3,  //缩放级别
      show: false,  //显示标签
      dialog: false,

      snackbar: false,
      text: '',
      timeout: 2000,
      color:'success'
    }
  },
  methods: {
    // infoWindowClose () {
    //   this.show = false
    // },
    // infoWindowOpen () {
    //   this.show = true
    // }
    openContact () {
      this.dialog = !this.dialog
    },
    closeDialog () {
      this.dialog = false
    },
    submitMsg () {
      this.snackbar = true
      this.color = 'green'
      this.text = '提交成功'

      this.dialog = false
    }
  }
}
</script>

<style lang="less" scoped>
.contactBg {
  height: 698px;
  background-color: #f5faff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;

  .contactCenter {
    width:1200px;
    display:flex;
    justify-content: space-around;

    .contactLeft {
      background-color: #fff;
      padding:15px;
      border-radius: 20px;
    }

    .contactRight {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-right:100px;
      .contactName {
        color:#242424;
        font-size:28px;
        font-weight: 600;
        font-family: '黑体';
        margin:25px 0 20px;
      }

      .contactMsg {
        color:#999999;
        font-size:17px;
        margin-bottom:30px
      }

      .contactBtn {
        padding:0px 25px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
  