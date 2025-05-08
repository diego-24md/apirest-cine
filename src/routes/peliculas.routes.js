import { Router } from "express";
import { createPeliculas, deletePeliculas, getPeliculas, updatePeliculas } from "../controllers/peliculas.controller";

const router = Router()

//APIREST = Verbos
router.get('/peliculas', (req, res) =>  getPeliculas)
router.get('/peliculas/:id', getPeliculasById )

router.post('/peliculas', (req, res) => createPeliculas)

router.put('/peliculas', (req, res) => updatePeliculas)

router.delete('/peliculas', (req, res) => deletePeliculas)

export default router