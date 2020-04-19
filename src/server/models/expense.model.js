const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("expense", {
      expense_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
        field: 'expense_id'
      },
      id: {
        type: DataTypes.STRING,
        allowNull:false

      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      purpose: {
        type: DataTypes.STRING,
        allowNull:false
      },
      amount: {
          type: DataTypes.DECIMAL(5,2),
          allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
          type: DataTypes.ENUM("Accommodation","Transport","Travel","Meals/Entertainment"),
          allowNull: false
      },
      status: {
          type: DataTypes.ENUM("Ongoing","Accepted","Denied","Flagged","Flagged - Accepted","Flagged - Denied","Unsuccessful","Successful"),
          allowNull: true,
          defaultValue: 'Ongoing'
      },
      image: {
          //type: DataTypes.BLOB,
          type: DataTypes.STRING,
          allowNull: false
      },
      createdAt: {
        timestamps: true,
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      updatedAt: false
    });
    return Expense;

    };

