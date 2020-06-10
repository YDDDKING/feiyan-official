<template>
  <div>
    <div style="background:#00376f;display:flex;justify-content:center">
      <div style="width:1200px;height:220px;display:flex;align-items:center;justify-content:space-between">
        <!-- 左边文字部分 -->
        <div style="color:#fff;font-size:14px">
          <div>
            电话：{{ message.phone }}
          </div>
          <div style="margin-top:10px">
            邮箱：{{ message.email }}
          </div>
          <div style="margin-top:10px">
            地址：{{ message.address }}
          </div>
        </div>
        <!-- 中间二维码部分 -->
        <div style="display:flex;justify-content:space-between">
          <div style="margin-right:30px">
            <img src="../assets/飞燕数学服务号.jpg" width="100px">
            <div style="color:#fff;text-align:center">服务号</div>
          </div>
          <div>
            <img src="@/assets/weChatCode.png" width="100px">
            <div style="color:#fff;text-align:center">订阅号</div>
          </div>
        </div>
        <!-- 邮编版权部分 -->
        <div style="color:#fff;font-size:14px">
          <div>转载本站内容请注明来源</div>
          <div style="margin-top:10px">
            <span style="text-decoration:underline;cursor:pointer" @click="go(3)">服务条款</span><span style="margin:0 5px">|</span><span style="text-decoration:underline;cursor:pointer" @click="go(4)">版权声明</span>
          </div>
        </div>
      </div>
    </div>

    <div style="width:100%;height:50px;background:#003163;color:rgba(255,255,255,0.3);text-align:center;line-height:50px;font-size:14px">
      <span @click="go(1)" style="cursor:pointer">粤公网安备 44011102002666号</span>
      <span @click="go(2)" style="cursor:pointer;margin-left:10px">粤ICP备 19081965号-1</span>
       
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {
        phone: '020-31924824',
        address: '广东省广州市白云区黄石西路599号元邦大厦606',
        email: 'feiyanmath@feiyanmath.com'
      }
    }
  },
  methods: {
    go (state) {
      if (state === 1) {
        window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011102002666')
      } else if (state === 2) {
        window.open('http://www.beian.miit.gov.cn/')
      } else if (state === 3) {
        // window.open('http://www.feiyanmath.com/tos')
        this.$router.push({ name: 'tos' })
      } else if (state === 4) {
        // window.open('http://www.feiyanmath.com/cn')
        this.$router.push({ name: 'cn' })
      }
    }
  }
}
</script>

<style>

</style>