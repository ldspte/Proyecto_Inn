const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Table', {
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
        definition: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {sequelize, timestamps: false});
}