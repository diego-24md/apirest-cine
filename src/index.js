//Ecmascript Modules
import express from 'express'
import peliculasRouter from './routes/peliculas.routes.js'
//import {pool} from './db.js'

const app = express()

app.use(express.json())
app.use('/api/', peliculasRoutes) //Rutas películas

//Control sobre rutas inexistentes
app.use((req, res, next) => {
  res.status(404).json({
    
  })
})

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000")
})
