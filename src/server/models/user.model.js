const { Sequelize, Model, DataTypes } = require('sequelize');
const { Expense } = require('../models/expense.model');

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
    User.hasMany(Expense, { foreignKey: 'id' })
    return User;
  };
/*

CREATE TABLE IF NOT EXISTS `users` (
  `id` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `role` ENUM('Admin','Auditor','Manager','Employee','User') DEFAULT 'User',
  `department` ENUM('Marketing','IT','HR','Finance','Operations') NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`)
) ENGINE=INNODB CHARACTER SET latin1 COLLATE latin1_bin;

*/