const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/bulk-order-home-kits/v1/action1/login', function (req, res) {
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk" ) {
      res.redirect('/bulk-order-home-kits/v1/manage-organisation/')
    } else {
      res.redirect('/bulk-order-home-kits/v1/order-kits/')
    }

})

module.exports = router
