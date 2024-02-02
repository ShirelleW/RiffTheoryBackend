const sequelize = require("../db");
const Scale = require("../models/Scale");

exports.getScalesByRootNote = async (req, res) => {
    try {
        const { rootNote }  = req.params;
        const scalesByRootNote = await Scale.findAll({
            where: {rootNote: rootNote}
        });

        if(!scalesByRootNote) {
            res.status(400).json({
                success: false,
                message: 'No scales found!',
            });
        } else {
            res.status(200).json({
                scalesByRootNote,
                success: true,
                message: 'All scales returned'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: `ERROR: ${error.message}`
        });
    }
}