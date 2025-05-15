//Ecmascript Modules
//import express from 'express'
//import peliculasRoutes from './routes/peliculas.routes.js'

//const app = express()
//app.use(express)

import express from 'express'
import { getPeliculas } from './controllers/peliculas.controller.js'

const app = express()

// Para aceptar JSON
app.use(express.json())

// Ruta raíz para evitar "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Cine')
})

// Definir ruta directo aquí usando el controlador
app.get('/api/peliculas', getPeliculas)

export default app
