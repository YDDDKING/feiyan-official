const db = require('../dbs/db')
const Sequelize = db.sequelize
const banner = Sequelize.import('../module/banner.js')

class bannerController {
  static async getBanner(bannerType) {
    return await banner.findAll({
      where: {
        bannerType: bannerType,
        isDel: 0,
        status: 0
      }
    })
  }
}

module.exports = bannerController