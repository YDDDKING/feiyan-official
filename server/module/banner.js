module.exports = function(sequelize,DataTypes){
  return sequelize.define(
      'fy_website_banner', // banner表
      {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
          },
          bannerName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'banner_name'
          },
          bannerType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'banner_type'
          },
          bannerAlt: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'banner_alt'
          },
          bannerUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'banner_url'
          },
          jumpUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jump_url'
          },
          jumpType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'jump_type'
          },
          linkType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'link_type'
          },
          isDel: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
  );
}