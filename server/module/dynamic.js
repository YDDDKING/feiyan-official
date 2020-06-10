module.exports = function(sequelize,DataTypes){
  return sequelize.define(
      'fy_website_dynamic', // banner表
      {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
          },
          dynamicType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'dynamic_type'
          },
          dynamicTime: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'dynamic_time'
          },
          dynamicTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'dynamic_title'
          },
          dynamicContent: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'dynamic_content'
          },
          dynamicUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'dynamic_url'
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