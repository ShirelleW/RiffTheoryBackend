const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Scale = sequelize.define("Scale", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rootNote: {
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
    intervalFormula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stepFormula: {
        type: DataTypes.STRING,
        allowNull: true
    },
    scaleEquivalents: {
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