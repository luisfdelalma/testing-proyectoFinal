import { Router } from "express"
import passport from "passport"

const router = Router()

// IMPORTACIONES (RUTAS) NUEVAS
import { changePassG, changePassP, chat, current, forPassG, forPassP, loginG, loginP, newPassConf, registerG, registerP, roleChangeG, roleChangeP } from "../controllers/usersController.js"
import { authorization, passportCall } from "../middlewares/utils.js"

// VERSION NUEVA
router.get("/register", registerG)

router.post("/register", registerP)

router.get("/login", loginG)

router.post("/login", loginP)

router.get("/current", passportCall("jwt"), authorization("admin"), current)

router.get("/chat", passportCall("jwt"), authorization("user"), chat)

router.get("/forgotpassword", forPassG)

router.post("/forgotpassword", forPassP)

router.get("/forgotpassword-NewPass/:token", changePassG)

router.post("/forgotpassword-NewPass", changePassP)

router.get("/newPassConfirmation", newPassConf)

router.get("/premium/:uid", roleChangeG)

router.post("/premium/:uid", roleChangeP)

export default router