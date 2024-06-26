import prisma from "../../server.js";
import { chromatic_notes_flat, chromatic_notes } from "../util/index.js";

export const getScalesByName = async (req, res) => {
  try {
    const { name } = req.params;

    const scales = await prisma.scales.findUnique({
      where: {
        name: name,
      },
    });

    if (scales.length === 0) {
      res.status(200).json({
        scales,
        success: false,
        message: "No scales to return!",
      });
    } else {
      res.status(200).json({
        scales,
        success: true,
        message: "All scales returned",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `ERROR: ${error.message}`,
    });
  }
};
export const getScalesByTonic = async (req, res) => {
  try {
    const { tonic } = req.params;

    // index === true indicates that the note param passed in is either sharp or flat
    const index = tonic.includes("#")
      ? chromatic_notes.indexOf(tonic)
      : tonic.includes("b")
      ? chromatic_notes_flat.indexOf(tonic)
      : null;

    const scales = index
      ? await prisma.scales.findMany({
          where: {
            tonic: {
              in: [chromatic_notes[index], chromatic_notes_flat[index]],
            },
          },
        })
      : await prisma.scales.findMany({
          where: {
            tonic: tonic,
          },
        });

    if (scales.length === 0) {
      res.status(200).json({
        scales,
        success: false,
        message: "No scales to return!",
      });
    } else {
      res.status(200).json({
        scales,
        success: true,
        message: "All scales returned",
      });
    }
  } catch (error) {
    error;
    res.status(400).json({
      success: false,
      message: `ERROR: ${error.message}`,
    });
  }
};

export const getScalesByTypeAndTonic = async (req, res) => {
  try {
    let { type, tonic } = req.params;

    // index === true indicates that the note param passed in is either sharp or flat
    const index = tonic.includes("#")
      ? chromatic_notes.indexOf(tonic)
      : tonic.includes("b")
      ? chromatic_notes_flat.indexOf(tonic)
      : null;

    type = type.replace(/\s+/g, " & ");

    const scales = index
      ? await prisma.scales.findMany({
          where: {
            name: {
                search: type,
              },
            tonic: {
              in: [chromatic_notes[index], chromatic_notes_flat[index]],
            },
          },
        })
      : await prisma.scales.findMany({
          where: {
            name: {
                search: type,
              },
            tonic: tonic,
          },
        });

    if (scales.length === 0) {
      res.status(200).json({
        scales,
        success: false,
        message: "No scales to return!",
      });
    } else {
      res.status(200).json({
        scales,
        success: true,
        message: "All scales returned",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `ERROR: ${error.message}`,
    });
  }
};

export const getScalesByNameAndTonic = async (req, res) => {
  try {
    let { name, tonic } = req.params;

    name = name.replace(/\s+/g, " & ");

    // index === true indicates that the note param passed in is either sharp or flat
    const index = tonic.includes("#")
      ? chromatic_notes.indexOf(tonic)
      : tonic.includes("b")
      ? chromatic_notes_flat.indexOf(tonic)
      : null;

    const scales = index
      ? await prisma.scales.findMany({
          where: {
            AND: {
              name: {
                search: name,
              },
              tonic: {
                in: [chromatic_notes[index], chromatic_notes_flat[index]],
              },
            },
          },
        })
      : await prisma.scales.findMany({
          where: {
            AND: {
              name: {
                search: name,
              },
              tonic: tonic,
            },
          },
        });
    if (scales.length === 0) {
      res.status(200).json({
        scales,
        success: false,
        message: "No scales to return!",
      });
    } else {
      res.status(200).json({
        scales,
        success: true,
        message: "All scales returned",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `ERROR: ${error.message}`,
    });
  }
};

export const getByNotesInScale = async (req, res) => {
  try {
    let { notes } = req.params;

    notes = [...notes.split(" ").sort()];

    let query = [];

    for (let i = 0; i < notes.length; i++) {
      query.push({
        notesinscale: {
          contains: notes[i],
        },
      });
    }

    let scales = await prisma.scales.findMany({
      where: {
        AND: query,
      },
      take: 20,
    });

    const filteredScales = scales.filter((obj) => {
      const objNotes = obj.notesinscale.split(",");
      const filter = notes.every((note) => objNotes.indexOf(note) > -1);

      return filter;
    });

    if (filteredScales.length === 0) {
      res.status(200).json({
        success: false,
        message: "No scales to return!",
      });
    } else {
      res.status(200).json({
        filteredScales,
        success: true,
        message: "All scales returned",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `ERROR: ${error.message}`,
    });
  }
};
