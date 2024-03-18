import { Router } from "express" ;
import { getScalesByTonic, getScalesByType, getScalesByNameAndTonic,
            getByNotesInScale, getScalesByName } from '../controllers/index.js'
// Scales, type: major/minor/etc, root: root note
// req.params: { "type": major/minor/etc, "root": rootno te }
const router = Router(); 

router.get("/tonic/:tonic", getScalesByTonic);
router.get("/name/:name", getScalesByName)
router.get("/type/:type", getScalesByType);
router.get("/tonicandname/:tonic/:name", getScalesByNameAndTonic)
router.get("/filterbynotes/:notes", getByNotesInScale)
// router.get("/filterbynotes", getScalesByNotesInScale);

export default router