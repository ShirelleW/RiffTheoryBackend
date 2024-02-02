const express = require('express');
const router = express.Router();

// Scales, type: major/minor/etc, root: root note
// req.params: { "type": major/minor/etc, "root": rootnote }

const {
    getScalesByRootNote,
    // getScalesByType,
    // getScalesByName,
    // getScalesByRootAndType,
    // getScalesByNotesInScale
} = require("../controllers/index");

// router.get("/scales/:type", getScalesByType);
// router.get("/scales/:name", getScalesByName);
router.get("/scales/:rootNote", getScalesByRootNote)
// router.get("/scales/:type/:rootnote", getScalesByRootAndType);
// router.get("/scales/:notesinscale", getScalesByNotesInScale);

module.exports = router;