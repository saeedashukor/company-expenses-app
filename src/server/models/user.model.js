const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      email: {
          type: DataTypes.STRING
    },
      password: {
        type: DataTypes.STRING
    },
      first_name: {
        type: DataTypes.STRING
    },
      last_name: {
        type: DataTypes.STRING
    },
      role: {
          type: DataTypes.ENUM("Admin","Auditor","Employee","Manager","User"),
          defaultValue: "User"
      },
      department: {
          type: DataTypes.ENUM("IT","Marketing","HR","Operations","Finance")
      },
      createdAt: {
        timestamps: true,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      updatedAt: false,
    });
    
    return User;
  };
