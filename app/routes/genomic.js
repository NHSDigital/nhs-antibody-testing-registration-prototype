const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}



// Genomic variance - route 1

router.post('/genomic-variants/action3/1-have-you-travelled-overseas', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine')
  } else {
    res.redirect('/genomic-variants/1-which-countries-travelled-to')
  }

})



// Genomic variance - route 2

router.post('/genomic-variants/action3/2-have-you-travelled-overseas-multi-answer', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']

  if (OverseasTravel == "No"){
    res.redirect('/antigen/v4/global-registration/check-your-answers')
  } else {
    res.redirect('/genomic-variants/2-which-countries-travelled-to-multi')
  }

})

module.exports = router
