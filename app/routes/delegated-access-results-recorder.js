const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 1 - Daily Contact Testing - do you have symptoms route

router.post('/delegated-access-results-recorder/v1/action13/home-page', function (req, res) {
    let action1 = req.session.data['operative-action-1']
    let action2 = req.session.data['operative-action-2']
    if (action1 !== undefined && action2 == undefined || action1 !== undefined && action2 == "" || action1 !== "" && action2 == "" || action1 !== "" && action2 == undefined) {
      res.redirect('/delegated-access-results-recorder/v1/test-pass-qr')
    } else {
      res.redirect('/delegated-access-results-recorder/v1/test-kit-qr')
    }

})

module.exports = router