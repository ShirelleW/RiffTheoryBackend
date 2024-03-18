import prisma from "../../server.js";
import { chromatic_notes_flat, chromatic_notes } from "../util/index.js";

export const getScalesByTonic = async (req, res) => {

    try {
        const { tonic } = req.params;

        // index === true indicates that the note param passed in is either sharp or flat
        const index = tonic.includes("#")
            ? chromatic_notes.indexOf(tonic)
            : tonic.includes('b')
                ? chromatic_notes_flat.indexOf(tonic)
                : null
        console.log(index)

        const scales = index ? await prisma.scales.findMany({
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

        if (scales.length === 0) {
            res.status(200).json({
                scales,
                success: true,
                message: 'No scales to return!'
            })
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

export const getScalesByName = async (req, res) => {

    try {
        let { name } = req.params;

        name = name.replace(/\s+/g, " & ");
        
        const scales = await prisma.scales.findMany({
            where: {
                name: {
                    search: name
                }
            }
        })

        if (scales.length === 0) {
            res.status(200).json({
                scales,
                success: true,
                message: 'No scales to return!'
            })
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