const router = require('koa-router')()
const axios = require('axios')
const messageController = require('../controller/messageController')

router.post('/addMessage', async (ctx) => {
  console.log(ctx.request)
  const data = await messageController.addMessage(ctx.request.body)
  ctx.body = {
    respCode: 0,
    respMsg: '',
    datas: data,
  }
})

module.exports = router;


