const express = require("express")
const router = express.Router()
// esto crear un objeto especial de rutas que nos permite almacenarlas y enviaras a nuestra app.
const Movie = require("../models/Movie.model.js")

router.get('/', (req, res, next) => {
  res.status(304).render("home.hbs")
})

router.get('/about', (req, res, next) => {
  // console.log(process.env.PALABRA_SECRETA)
  res.render("about.hbs")
})

router.get('/movies', (req, res, next) => {

  // buscar todas la pelis y pasarlas a la vista
  Movie.find() // busca todo
  .then((response) => {
    
    // console.log(response)

    res.render("movies.hbs", {
      allMovies: response
    })

  })
  .catch((err) => {
    next(err)
    // next tenia dos funcionalidades
    // 1. si lo invocamos sin argumentos,  significa: salta a la siguiente ruta
    // 2. si lo invocamos con algun argumento, significa: ve al gestor de error de tipo 500
  })
})

module.exports = router