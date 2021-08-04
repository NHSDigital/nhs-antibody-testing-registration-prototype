const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/international-arrivals/v1/action1/travel-route', function (req, res) {
    let travelRoute = req.session.data['travel-route']
    if (travelRoute == "red") {
      res.redirect('/international-arrivals/v1/red-package-exit')
    } else {
      res.redirect('/international-arrivals/v1/personal-details')
    }
})

router.post('/international-arrivals/v1/action2/contact-details-same-person-1', function (req, res) {
  let contactDetailsSame = req.session.data['contact-details-same-person-1']
  if (contactDetailsSame == "Yes") {
    res.redirect('/international-arrivals/v1/check-your-answers-person-1')
  } else {
    res.redirect('/international-arrivals/v1/contact-details-person-1')
  }
})

router.post('/international-arrivals/v1/action3/travel-route-same-person-1', function (req, res) {
  let travelRouteSame = req.session.data['travel-route-same-person-1']
  if (travelRouteSame == "No") {
    res.redirect('/international-arrivals/v1/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v1/travel-details-same-person-1')
  }
})

router.post('/international-arrivals/v1/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v1/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v1/contact-details-same-person-1')
  }
})


router.post('/international-arrivals/v2/action1/travel-route', function (req, res) {
    let travelRoute = req.session.data['travel-route']
    if (travelRoute == "red") {
      res.redirect('/international-arrivals/v2/red-package-exit')
    } else {
      res.redirect('/international-arrivals/v2/personal-details')
    }
})

router.post('/international-arrivals/v2/action2/contact-details-same-person-1', function (req, res) {
  let contactDetailsSame = req.session.data['contact-details-same-person-1']
  if (contactDetailsSame == "Yes") {
    res.redirect('/international-arrivals/v2/check-your-answers-person-1')
  } else {
    res.redirect('/international-arrivals/v2/contact-details-person-1')
  }
})

router.post('/international-arrivals/v2/action3/travel-route-same-person-1', function (req, res) {
  let travelRouteSame = req.session.data['travel-route-same-person-1']
  if (travelRouteSame == "No") {
    res.redirect('/international-arrivals/v2/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v2/travel-details-same-person-1')
  }
})

router.post('/international-arrivals/v2/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v2/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v2/contact-details-same-person-1')
  }
})
module.exports = router
