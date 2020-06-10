const router = require('koa-router')()
const bannerController = require('../controller/bannerController')

const webpush = require('web-push');
/**
 * VAPID值
 * 这里可以替换为你业务中实际的值
 */
const vapidKeys = {
    publicKey: 'BOydgg75szBTwVbLw7JkpRPQWyj4Rik_PP108KtcVFZqquqT2SlStrmMDMk8zEJPP2CEdi8yzAuZm-U0W_3Mvtg',
    privateKey: '4BDn9uqVI89HVBusNOcJY9lmxsrcR34MidO7KAy1074'
};

// 设置web-push的VAPID值
webpush.setVapidDetails(
    'mailto:alienzhou16@163.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/f8IrEzsuzcA:APA91bEdRxenhdBwPX7KIhpgDGef9ozxriORGbgHSjzdY7vjm7gHOF0E1m3xXN0hq42KsZyr2YHdLSh2ahzn9ji1Bf6zvn7MO1RQaTr3NS8B88OiqXt_UhJRG5QtZLy95NU6dfKNpIkC',
  keys: {
    auth: 'OV9LhLl-5WMrEBsnM4vEYA',
    p256dh: 'BJqK94QkvJ1muhuuHEecT2d0iIURkmDKp02JMZAqHhHx6Nmc0QR74b0JYFR7PWRTGtDJ-6AfdsYgoMI7JjzD8BA'
  }
};

function pushMessage() {
  webpush.setVapidDetails(
    'mailto:alienzhou16@163.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
  webpush.sendNotification(pushSubscription, '消息测试成功');
  // webpush.sendNotification(subscription, data, options).then(data => {
  //     console.log('push service的相应数据:', JSON.stringify(data));
  //     return;
  // }).catch(err => {
  //     // 判断状态码，440和410表示失效
  //     if (err.statusCode === 410 || err.statusCode === 404) {
  //         return util.remove(subscription);
  //     }
  //     else {
  //         console.log(subscription);
  //         console.log(err);
  //     }
  // })
}

router.get('/getBannerList', async (ctx) => {
  pushMessage()
  const data = await bannerController.getBanner(ctx.request.query.bannerType || 1)
  // 加上图片地址前缀
  data.forEach((element) => {
    element.bannerUrl = 'https://feiyan-img.oss-cn-shenzhen.aliyuncs.com' + element.bannerUrl
  })
  ctx.body = {
    respCode: 0,
    respMsg: '',
    datas: data
  }
})

// Public Key:
// BOydgg75szBTwVbLw7JkpRPQWyj4Rik_PP108KtcVFZqquqT2SlStrmMDMk8zEJPP2CEdi8yzAuZm-U0W_3Mvtg

// Private Key:
// 4BDn9uqVI89HVBusNOcJY9lmxsrcR34MidO7KAy1074

module.exports = router;
