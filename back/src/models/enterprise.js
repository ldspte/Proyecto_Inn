const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Enterprise', {
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
        sentence: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sales: {
            type: DataTypes.STRING,
        },
        utility: {
            type: DataTypes.STRING
        }, 
        shareholder_pressure: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
                max: 100
            }
        },
        shareholder_why: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        president_pressure: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
                max: 100
            }
        },
        president_why: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        customer_pressure: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
                max: 100
            }
        },
        customer_why: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        competence_pressure: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
                max: 100
            }
        },
        competence_why: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        environment_pressure: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0,
                max: 100
            }
        },
        environment_why: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {sequelize, timestamps: false});
}