const db = require('../dbs/db')
const Sequelize = db.sequelize
const message = Sequelize.import('../module/message.js')

class messageController {
  static async addMessage (obj) {
    return await message.create({
      id: Number(Math.random().toString().substr(3,18)),
      messageName: obj.messageName,
      messageEmail: obj.messageEmail,
      messageContent: obj.messageContent,
      messageStatus: 1,
      isDel: 0,
      status: 0,
      createTime: new Date().toLocaleString(),
      updateTime: new Date().toLocaleString()
    })
  }
}

module.exports = messageController