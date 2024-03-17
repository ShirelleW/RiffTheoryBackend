import { Router } from "express" ;
import { getScalesByTonic } from '../controllers/index.js'
// Scales, type: major/minor/etc, root: root note
// req.params: { "type": major/minor/etc, "root": rootno te }
const router = Router(); 

router.get("/tonic/:tonic", getScalesByTonic);
// router.get("/name/:name", getScaleByName)

// router.get("/filterbynotes", getScalesByNotesInScale);

export default router