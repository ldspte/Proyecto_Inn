const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Idea', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    documents: {
      type: DataTypes.STRING,
      allowNull: true
    },
    requirement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    market: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tools: {
        type: DataTypes.STRING,
        allowNull: false
    },
    proceeds: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Keywords: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coins: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }

  },
  {sequelize, timestamps: false});
};