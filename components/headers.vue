<template>
  <div style="display:flex;justify-content:center">
    <div style="width:1200px;height:80px;display:flex;align-items:center;justify-content:space-between">
      <div style="height:35px">
        <nuxt-link to="/">
          <img height="100%" src="@/assets/logo-new.svg" class="logo-img" alt="" />
        </nuxt-link>
      </div>

      <div style="display:flex;justify-content:space-between">
        <v-tabs color='#409eff' depressed>
          <v-tab>
            <nuxt-link to="/" style="text-decoration:none;color:black">首页</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/dynamic" style="text-decoration:none;color:black">动态</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/product" style="text-decoration:none;color:black">产品介绍</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/helpCenter" style="text-decoration:none;color:black">帮助中心</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/contactUs" style="text-decoration:none;color:black">联系我们</nuxt-link>
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
            style="color:#fff;margin:0 10px 0"
          >
            教师入口
          </v-btn>
          <v-btn
            small
            color='#7bca63'
            rounded
            style="color:#fff"
          >
            学生入口
          </v-btn>
        </div>
      </div>
    </div>
    <!-- 温馨提示弹窗 -->
    <!-- <v-dialog
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
                <img src="@/assets/step1.png" width="100%"/>
              </v-stepper-content>
              <v-stepper-content :key="'2'" :step="'2'">
                <img src="@/assets/step2.png" width="100%"/>
              </v-stepper-content>
              <v-stepper-content :key="'3'" :step="'3'">
                <img src="@/assets/step3.png" width="100%"/>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="goDownload">前往帮助中心</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>