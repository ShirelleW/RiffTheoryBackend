const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Scale = sequelize.define("Scale", {
    scaleID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tonic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Ordered by integer notation [["Ab", 1], ["Bb", 2]]
    notesInScale: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    scaleType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    degreeFormula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stepFormula: {
        type: DataTypes.STRING,
        allowNull: true
    },
    scaleRelatives: {
        type: DataTypes.STRING,
        allowNull: true
    },
    chordalHarmonization: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
}

)

module.exports = Scale;