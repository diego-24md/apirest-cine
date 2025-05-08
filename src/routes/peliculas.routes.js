import { Router } from "express";
import { createPeliculas, deletePeliculas, getPeliculas, updatePeliculas } from "../controllers/peliculas.controller.js";

const router = Router()

//APIREST = Verbos
router.get('/peliculas', getPeliculas)
router.get('/peliculas/:id', getPeliculasById )

router.post('/peliculas', createPeliculas)

router.put('/peliculas', updatePeliculas)

router.delete('/peliculas', deletePeliculas)

export default router