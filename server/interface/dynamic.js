const router = require('koa-router')()
const axios = require('axios')
const dynamicController = require('../controller/dynamicController')

router.get('/getDynamicList', async (ctx) => {
  let model = {
    page: ctx.request.query.page,
    limit: ctx.request.query.limit
  }
  const data = await dynamicController.getDynamic(model)
  ctx.body = {
    respCode: 0,
    respMsg: '',
    datas: data.rows,
    page: Math.ceil(data.count / model.limit)
  }
})

module.exports = router
