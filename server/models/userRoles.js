module.exports = (sequelize, DataTypes) => {
    const userRoles = sequelize.define("userRoles", {     
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true        
      },
      roleId: {
        type: DataTypes.INTEGER
      },
    });
    userRoles.associate = (models) => {
        userRoles.hasMany(models.userMasters, {
          foreignKey: 'userId'
        })
      }
      userRoles.associate = (models) => {
        userRoles.hasMany(models.Roles, {
          foreignKey: 'roleId'
        })
      }
    return userRoles;
  };