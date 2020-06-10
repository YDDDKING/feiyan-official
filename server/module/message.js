module.exports = function(sequelize,DataTypes){
  return sequelize.define(
      'fy_website_message', // banner表
      {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          },
          messageName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'message_name'
          },
          messageEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'message_email'
          },
          messageContent: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'message_content'
          },
          messageStatus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'message_status'
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
            allowNull: true,
            field: 'create_by'
          },
          updateBy: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'update_by'
          },
      },
      {
          freezeTableName: true,
          timestamps: false
      }
  );
}