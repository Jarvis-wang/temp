const express = require('express')
const api = express.Router()

// Specify the handler for each required combination of URI and HTTP verb

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET t1
api.get('/', (req, res) => {
  console.log(`Handling GET ${req}`)
  res.render('index.ejs')
})


module.exports = api
