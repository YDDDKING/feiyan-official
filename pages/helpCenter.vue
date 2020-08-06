<template>
  <div class="helpCenterBg">
    <div class="helpCenterContent">
      <!-- 上部分文字内容 -->
      <div class="helpCenterContentTop">
        <div class="helpCenterContentTopOne">浏览器下载</div>
        <div class="helpCenterContentTopTwo">为优化用户体验，推荐使用以下浏览器</div>
      </div>

      <!-- 中间浏览器下载部分 -->
      <div class="helpCenterContentMiddle">
        <a href="../download/ChromeSetup.exe" download="Chrome.exe">
          <div class="helpCenterContentMiddleGoogle">
            <img src="../assets/google.png" width="42px"/>
            <div style="margin:0 10px">谷歌浏览器</div>
            <img src="../assets/downloadIcon.png" width="24px" height="21px"/>
          </div>
        </a>

        <a href="../download/Firefox-latest.exe" download="Firefox.exe">
          <div class="helpCenterContentMiddleFire">
            <img src="../assets/firefox.png" width="42px"/>
            <div style="margin:0 10px">火狐浏览器</div>
            <img src="../assets/downloadIcon.png" width="24px" height="21px"/>
          </div>
        </a>
      </div>

      <!-- 操作指南播放 -->
      <div class="helpCenterContentBottom">
        <div class="helpCenterContentBottomTitle">操作指南下载</div>
        <div class="helpCenterContentBottomBtn">
          <teacherHelp/>

          <div>
            <v-btn small color="#7bca63" style="color:#fff;border-radius:5px" :disabled="true" @click="openHelp">
              学生操作指南<v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teacherHelp from '../components/teacherHelp'
export default {
  components: {
    teacherHelp
  },
  methods: {
    openHelp () {
      window.open('https://student.feiyanmath.com/html/beginPage.html')
    }
  }
}
</script>

<style lang="less" scoped>
.helpCenterBg {
  width: 100%;
  height:698px;
  background-color: #409eff;
  display:flex;
  justify-content: center;

  .helpCenterContent {
    width:790px;
    height: 100%;
    background: url('../assets/downloadBg.png');
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 0 0 182px;

    // 上部分文字内容
    .helpCenterContentTop {
      color:#fff;
      margin-bottom:20px;

      .helpCenterContentTopOne {
        font-size: 28px;
        font-weight: 600;
        font-family: '黑体';
        margin-bottom:10px;
        margin-right:20px
      }

      .helpCenterContentTopTwo {
        font-size: 17px;
      }
    }

    // 中间浏览器下载部分
    .helpCenterContentMiddle {
      display: flex;
      margin-bottom: 70px;

      a {
        text-decoration: none;
        color: #000;
      }

      .helpCenterContentMiddleGoogle {
        width: 200px;
        background: #fff;
        display: flex;
        align-items: center;
        padding:10px;
        border-radius: 5px;
        margin-right:25px;
      }

      .helpCenterContentMiddleGoogle:hover {
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.1);
        cursor: pointer;
      }

      .helpCenterContentMiddleFire {
        width: 200px;
        background: #fff;
        display: flex;
        align-items: center;
        padding:10px;
        border-radius: 5px;
      }

      .helpCenterContentMiddleFire:hover {
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.1);
        cursor: pointer;
      }
    }

    // 操作指南播放
    .helpCenterContentBottom {
      background: url('../assets/child.png');
      background-size: 100% 100%;
      width: 426px;
      height: 154px;
      position: relative;

      .helpCenterContentBottomTitle {
        color:#212121;
        font-size: 28px;
        font-weight: 600;
        font-family: '黑体';

        position: absolute;
        top:34px;
        left:127px;
      }

      .helpCenterContentBottomBtn {
        display: flex;
        position: absolute;
        top:91px;
        left:128px;
      }
    }
  }
}
</style>