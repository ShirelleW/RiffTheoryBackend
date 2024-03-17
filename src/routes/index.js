import { Router } from "express" ;
import getScaleByName from '../controllers/index.js'
// Scales, type: major/minor/etc, root: root note
// req.params: { "type": major/minor/etc, "root": rootno te }
const router = Router(); 

router.get("/name", getScaleByName);

// router.get("/filterbynotes", getScalesByNotesInScale);

export default router