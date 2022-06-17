module.exports = (sequelize, DataTypes) => {
    const userMasters = sequelize.define("userMasters", {     
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Email: {
        type: DataTypes.STRING,
      },
      Name: {
        type: DataTypes.STRING,
      },
      DOB: {
        type: DataTypes.DATE,
      },
      DOJ: {
        type: DataTypes.DATE,
      },
      DOR: {
        type: DataTypes.DATE,
      },
      Password: {
        type: DataTypes.STRING,
      },
    });
    userMasters.associate = models => {
        userMasters.hasMany(models.userRoles, {
          foreignKey: 'userId'
        });
      }
    return userMasters;
  };