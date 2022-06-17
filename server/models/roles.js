module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {     
      roleId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      role: {
        type: DataTypes.STRING,
      },
    });
    Roles.associate = models => {
      Roles.hasMany(models.userRoles, {
        foreignKey: 'roleId'
      });
    }
    return Roles;
  };