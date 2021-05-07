const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}


// VERSION 1

router.post('/lamp-test-return/v1/action1/confirm-location', function (req, res) {
  let confirmLocation = req.session.data['confirm-location']
  if (confirmLocation == "Yes") {
    res.redirect('/lamp-test-return/v1/provide-barcode')
  } else {
    res.redirect('/lamp-test-return/v1/location-code')
  }

})


module.exports = router