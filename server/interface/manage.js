const router = require('koa-router')()
const manageController = require('../controller/manageController')

router.get('/getContent', async (ctx) => {
  let data = await manageController.getManage(ctx.request.query.id)
  // 加上图片地址前缀
  data.map(element => {
    element.picturePath = 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com'+element.imageUrl
    return element
    // console.log(element);
  })
  ctx.body = {
    respCode: 0,
    respMsg: '',
    datas: data
  }
})

module.exports = router;


