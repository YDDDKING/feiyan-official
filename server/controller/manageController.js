const { sequelize } = require('../dbs/db')
const manage = sequelize.import('../module/manage.js')

class manageController {
  static async getManage(id) {
    return await manage.findAll({
      raw: true,
      where: {
        id,
        isDel: 0,
        status: 0
      }
    })
  }
}

module.exports = manageController