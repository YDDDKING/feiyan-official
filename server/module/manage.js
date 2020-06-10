module.exports = function(sequelize,DataTypes){
  return sequelize.define(
      'fy_website_manage', // banner表
      {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
          },
          manageType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'manage_type'
          },
          manageContent: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'manage_content'
          },
          imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image_url'
          },
          isDel: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'is_del'
          },
          status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'status'
          },
          createTime: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'create_time'
          },
          updateTime: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'update_time'
          },
          createBy: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'create_by'
          },
          updateBy: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'update_by'
          },
      },
      {
          freezeTableName: true,
          timestamps: false
      }
  )
}