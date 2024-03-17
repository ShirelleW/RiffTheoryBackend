import prisma from "../../server.js";

const getScaleByName = async (req, res) => {
    try {
        const scales = await prisma.scales.findMany()

        if (!scales) {
            res.status(400).json({
                success: false,
                message: 'No scales found!',
            });
        } else {
            res.status(200).json({
                scales,
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


export default getScaleByName