const db = require('../dbs/db')
const Sequelize = db.sequelize
const dynamic = Sequelize.import('../module/dynamic.js')

class dynamicController {
  static async getDynamic(obj) {
    let offset = (obj.page - 1) * obj.limit
    return await dynamic.findAndCountAll({
      limit: parseInt(obj.limit),
      offset,
      'order': [
        ['dynamic_time', 'DESC']
      ],
      where: {
        isDel: 0,
        status: 0
      }
    })
  }
}

module.exports = dynamicController