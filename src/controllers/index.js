const sequelize = require("../db");
const Scale = require("../models/Scale");

// Make reuaseable function for handling get req
exports.getScalesByTonic = async (req, res) => {
    const { tonic } = req.params;
    try {
        const scaleReq = await Scale.findAll({
            where: { tonic: tonic }
        });

        if (!scaleReq) {
            res.status(400).json({
                success: false,
                message: 'No scales found!',
            });
        } else {
            res.status(200).json({
                scaleReq,
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