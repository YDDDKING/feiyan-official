<template>
  <v-card style="padding:40px 60px">
    <!-- 提示框 -->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :multi-line="true"
      :color="color"
      top
    >
      {{ text }}
    </v-snackbar>

    <!-- 标题 -->
    <div class="contactMsgTitle">
      联系我们
    </div>
      
    <!-- 详细内容 -->
    <div class="contactMsgDetail">
      <v-form ref="lxform" v-model="valid">
        <!-- 姓名 -->
        <div>
          <span class="contactMsgBranch">姓名</span>
          <input type="text" class="contactMsgInput" placeholder="请输入"   v-model="realName"/>
          <div style="position:relative">
            <span style="position:absolute;right:56px;top:-28px;color:#C0C4CC;  font-size:14px">{{realName.length}}/10</span>
          </div>
        </div>

        <!-- 称谓 -->
        <div style="margin-top:30px">
          <span class="contactMsgBranch">称谓</span>
          <!-- <input type="text" class="contactMsgInput" placeholder="先生"  v-model="nickName"/> -->
          <select class="contactMsgSelect" v-model="nickName">
            <option value ="先生">先生</option>
            <option value ="女士">女士</option>
          </select>
          <div style="position:relative">
            <img src="../assets/icon_unfold.png" style="position:absolute;right:56px; top:-28px;width:22px"/>
          </div>
        </div>

        <!-- 邮箱 -->
        <div style="margin-top:30px"> 
          <span class="contactMsgBranch">邮箱</span>
          <input type="text" class="contactMsgInput" placeholder="请输入" v-model="email"/>
        </div>

        <!-- 留言 -->
        <div style="margin-top:30px;display:flex;">
          <span class="contactMsgBranch">留言</span>
          <textarea class="contactMsgTextarea" placeholder="请输入" v-model="userMsg"/>
          <div style="position:relative">
            <span style="position:absolute;right:9px;bottom:7px;color:#C0C4CC;  font-size:14px">{{ userMsg.length }}/500</span>
          </div>
        </div>
      </v-form>
    </div>

    <!-- 按钮 -->
    <div class="contactMsgBtns">
      <v-btn outlined @click="closeDialog" style="padding:0 35px;margin-right:20px">取消</v-btn>
      <v-btn @click="sumbitMsg" depressed color='#409EFF' style="color:#fff;padding:0 35px">提交</v-btn>
    </div>
  </v-card>
</template>

<script>
import http from '../plugins/axios'
// import http from 'axios'
export default {
  data () {
    return {
      realName: '',
      nickName: '先生',
      email: '',
      userMsg: '',
      sumbitMsgBtn: false,
      valid: true,

      snackbar: false,
      text: '',
      timeout: 2000,
      color:'orange'
    }
  },
  methods: {
    // 点击取消按钮事件
    closeDialog () {
      this.$emit('closeDialog')
    },
    
    // 提交信息事件
    sumbitMsg () {
      if (this.realName.length > 10 || !this.realName.length) {
        this.text = '请输入0~10位的姓名'
        this.snackbar = true
        return
      }

      // 邮箱限制
      const emailTest = /.+@.+\..+/.test(this.email)

      if (!this.email.length || !emailTest) {
        this.text = '请输入正确的邮箱'
        this.snackbar = true
        return
      }

      // if(this.messageEmail.length === 0 && this.realName.length === 0) {
      //   this.text = '信息不能为空'
      //   this.snackbar = true
      // }
      
      let sex = 1
      if (this.nickName === 1) {
        sex = 1
      } else {
        sex = 0
      }

      let model = {
        messageName: this.realName,
        sex: sex,
        messageEmail: this.email,
        messageContent: this.userMsg
      }
      
      http.post('/api-generator/website/message', model).then(res => {
        if (!res.data.respCode) {
          this.realName = ''
          this.email = ''
          this.userMsg = ''

          this.$emit('submitMsg')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.contactMsgTitle {
  color:#1F1F21;
  font-weight: 600;
  font-size:18px;
  font-family: '黑体';
}

.contactMsgDetail {
  margin:30px 0px 50px 85px;

  .contactMsgBranch {
  // font-size: 14px;
  margin-right:10px;
  color:#1F1F21
  }

  .contactMsgSelect {
    outline:1px solid #DCDFE6;
    width:320px;
    height: 36px;
    padding: 0 10px;
  }

  .contactMsgInput {
    outline:1px solid #DCDFE6;
    width:320px;
    height: 36px;
    padding:10px;
  }
  .contactMsgTextarea {
    width:320px;
    height:120px;
    outline:1px solid #DCDFE6;
    resize:none;
    padding:10px;
    margin-left:5px
  }
}

.contactMsgBtns {
  display:flex;
  justify-content: center;
}
</style>