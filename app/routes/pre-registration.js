const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/pre-registration/v1/action12/test-when', function (req, res) {
    let test = req.session.data['test-when']
    if (test == "Yes" ) {
      res.redirect('/pre-registration/v1/whos-taking-the-test')
    } else {
      res.redirect('/pre-registration/v1/not-24-hours')
    }

})

module.exports = router