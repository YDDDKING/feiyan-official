<template>
  <div style="display:flex;justify-content:center;">
    <div style="width:1200px;height:80px;display:flex;align-items:center;justify-content:space-between">
      <div style="height:35px">
        <nuxt-link to="/">
          <img height="100%" src="@/assets/logo-new.svg" class="logo-img" alt="" />
        </nuxt-link>
      </div>

      <div style="display:flex;justify-content:space-between" class="headerTopTab">
        <v-tabs color='#409eff' depressed v-model="tab" center-active active-class="selected">

          <v-tabs-slider
            style="width:20px;border-radius:20px"
            color="#409eff"
          ></v-tabs-slider>

          <v-tab>
            <nuxt-link to="/" class="headerTab">首页</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/dynamic" class="headerTab">动态</nuxt-link>
          </v-tab>

          
          <v-menu offset-y close-on-content-click open-on-hover>
            <template v-slot:activator="{ on }">
              <v-tab v-on="on" style="color:#000"><nuxt-link to="/familyUse" class="headerTab">产品介绍</nuxt-link></v-tab>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title style="cursor:pointer"><nuxt-link to="/familyUse" class="headerTab">家庭应用</nuxt-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title style="cursor:pointer"><nuxt-link to="/schoolUse" class="headerTab">校园应用</nuxt-link></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
         
          <v-tab>
            <nuxt-link to="/helpCenter" class="headerTab">帮助中心</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/contactUs" class="headerTab">联系我们</nuxt-link>
          </v-tab>
        </v-tabs>
        <!-- <div
          style="cursor: pointer;"
          class="d-flex align-center subtitle-2"
          v-for="(item, i) in tabList"
          :key="i"
        >
          <span>{{item.name}}</span>
        </div> -->

        <div style="width:30%;display:flex;align-items:center">
            <v-btn
              small
              color='#409eff'
              rounded
              style="color:#fff;margin:0 10px 0;box-shadow: 0px 5px 10px 2px rgba(64, 158, 255, 0.3);"
              @click="openRK(1)"
            >
              教师入口
            </v-btn>
          <v-btn
            small
            color='#7bca63'
            rounded
            style="box-shadow:0px 5px 10px 2px rgba(123, 202, 99, 0.3);color:#fff"
            @click="openRK(2)"
          >
            学生入口
          </v-btn>
        </div>
      </div>
    </div>
    <!-- 温馨提示弹窗 -->
    <v-dialog
      v-model="tipsDialog"
      width="700px"
    >
      <v-card elevation="0">
        <v-card-title class="d-flex justify-space-between">
          <div>&nbsp;</div>
          <div>温馨提示</div>
          <div>
            <v-btn icon @click="tipsDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          您当前的浏览器版本暂不支持教师/学生客户端，请前往帮助中心下载最新版谷歌或火狐浏览器
          <v-stepper v-model="st" class="mt-2">
            <v-stepper-header>
              <v-stepper-step editable step="1">
                前往帮助中心
              </v-stepper-step>
              <v-stepper-step editable step="2">
                选择要下载的浏览器
              </v-stepper-step>
              <v-stepper-step editable step="3">
                使用新的浏览器
              </v-stepper-step>
            </v-stepper-header>
            <v-divider/>
            <v-stepper-items>
              <v-stepper-content :key="'1'" :step="'1'">
                <img src="@/assets/温馨提示图片x3/帮助01.svg" width="100%"/>
              </v-stepper-content>
              <v-stepper-content :key="'2'" :step="'2'">
                <img src="@/assets/温馨提示图片x3/帮助02.svg" width="100%"/>
              </v-stepper-content>
              <v-stepper-content :key="'3'" :step="'3'">
                <img src="@/assets/温馨提示图片x3/帮助03.svg" width="100%"/>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <nuxt-link to="/helpCenter"><v-btn color="#409eff" @click="tipsDialog = false" style="color:#fff;text-decoration:none">前往帮助中心</v-btn></nuxt-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  data () {
    return {
      items: ['家庭应用', '校园应用'],
      tab: 0,
      tipsDialog: false,
      st: "1",
      showPro: false
    }
  },
  methods: {
    onEnter (e) {
      console.log(e)
      this.showPro = true
    },
    // goDownload () {
    //   console.log('22222222222')
    //   if (this.$route.name === '/helpCenter') {
    //     this.tipsDialog = false
    //   } else {
    //     console.log('111111111111')
    //     this.$router.push({name: '/helpCenter'})
    //     this.tipsDialog = false
    //   }
    // },
    openRK (status) {
      // console.log(this.IEVersion())
      if (this.IEVersion() === -1) {
        if (status === 1) {
          window.open('https://mt.feiyanmath.com')
        } else {
          window.open('https://ms.feiyanmath.com')
        }
      } else {
        this.tipsDialog = true
      }
    },
    IEVersion () {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
      var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
      if(isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          if(fIEVersion == 7) {
            return 7;
          } else if(fIEVersion == 8) {
            return 8;
          } else if(fIEVersion == 9) {
            return 9;
          } else if(fIEVersion == 10) {
            return 10;
          } else {
            return 6;//IE版本<=7
          }
          } else if(isEdge) {
            return 'edge';//edge
          } else if(isIE11) {
            return 11; //IE11
          }else{
            return -1;//不是ie浏览器
      }
    }
  },
  watch: {
    $route: {
      deep: true,
      handler (val) {
        switch (val.fullPath) {
          case '/':
            this.tab = 0
            break

          case '/dynamic':
            this.tab = 1
            break

          case '/familyUse':
            this.tab = 2
            break

          case '/schoolUse':
            this.tab = 2
            break

          case '/helpCenter':
            this.tab = 3
            break

          case '/contactUs':
            this.tab = 4
            break
        }
      },
      immediate: true
    }
  },
}
</script>

<style lang="less" scoped>
.headerTab{
  text-decoration:none;
  color:black;
  height:100%;
  width:100%;
  line-height:48px
}

.selected {
  a,span {
    color:#1181ef
  }
}

.headerTeacher:hover {
  box-shadow: 0px 10px 10px 10px rgba(64, 158, 255, 0.3);
}
</style>



<style lang="sass" scoped>
.headerTopTab ::v-deep .v-tabs .v-item-group .v-slide-group__wrapper .v-slide-group__content .v-tabs-slider-wrapper
  display: flex
  justify-content: center

#app ::v-deep .v-menu__content
  left:793px
</style>