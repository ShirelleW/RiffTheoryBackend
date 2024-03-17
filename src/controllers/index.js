import prisma from "../../server.js";
import { chromatic_notes_flat, chromatic_notes } from "../util/index.js";

// make an export function that translate sharps to flats and vice versa for searching
export const getScalesByTonic = async (req, res) => {
    const { tonic } = req.params; 
    
    // index === true indicates that the note param passed in is either sharp or flat
    const index = tonic.includes("#")
                    ? chromatic_notes.indexOf(tonic) 
                    : tonic.includes('b')
                    ? chromatic_notes_flat.indexOf(tonic)
                    : null
    console.log(index)
    try {
            const scales =  index ? await prisma.scales.findMany({
                where: {
                    tonic: {
                        in: [chromatic_notes[index], chromatic_notes_flat[index]]
                    }
                }
            }) :
                    await prisma.scales.findMany({
                        where: {
                            tonic: tonic
                        }
                    })

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
