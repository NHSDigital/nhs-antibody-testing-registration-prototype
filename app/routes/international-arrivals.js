const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// International Arrivals Version One - Ethnic group
router.post('/international-arrivals/v1/action4/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/international-arrivals/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v1/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v1/nhs-number-known')
  }

})

// International Arrivals Version One - NHS Number Known
router.post('/international-arrivals/v1/action4/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes") {
    res.redirect('/international-arrivals/v1/nhs-number')
  } else {
    res.redirect('/international-arrivals/v1/registered-with-GP')
  }
})

// International Arrivals Version One - Regisered With GP
router.post('/international-arrivals/v1/action4/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v1/address')
  } else {
    res.redirect('/international-arrivals/v1/gender')
  }
})

// International Arrivals Version One - Vaccine
router.post('/international-arrivals/v1/action4/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v1/ethnic-group')
  } else {
    res.redirect('/international-arrivals/v1/vaccine-date')
  }
})

// International Arrivals Version One - Travel Details Same Person 1
router.post('/international-arrivals/v1/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v1/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v1/name-person-1')
  }
})

// International Arrivals Version One - Ethnic Group Person 1
router.post('/international-arrivals/v1/action4/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British") {
    res.redirect('/international-arrivals/v1/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v1/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v1/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v1/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v1/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v1/nhs-number-known-person-1')
  }
})

// International Arrivals Version One - NHS Number Known Person 1
router.post('/international-arrivals/v1/action4/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes") {
    res.redirect('/international-arrivals/v1/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v1/registered-with-GP-person-1')
  }
})

// International Arrivals Version One - Registered With GP Person 1
router.post('/international-arrivals/v1/action4/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v1/address-person-1')
  } else {
    res.redirect('/international-arrivals/v1/gender-person-1')
  }
})

// International Arrivals Version One - Vaccine Person 1
router.post('/international-arrivals/v1/action4/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v1/ethnic-group-person-1')
  } else {
    res.redirect('/international-arrivals/v1/vaccine-date-person-1')
  }
})


// VERSION TWO

// International Arrivals Version Two - Travel Package Exempt
router.post("/international-arrivals/v2/action3/travel-package-exempt", function (req, res) {
  let travelPackageExempt = req.session.data["travel-package-exempt"]
  if (travelPackageExempt == "Yes, I need a replacement test kit") {
    res.redirect("/international-arrivals/v2/search-results")
  } else {
    res.redirect("/international-arrivals/v2/name")
  }
})

// International Arrivals Version Two - Date of birth
router.post("/international-arrivals/v2/action3/date-of-birth", function (req, res) {
  let travelPackageExempt = req.session.data["travel-package-exempt"]
  if (travelPackageExempt == "Yes, I'm eligible for a hardship arrangement") {
    res.redirect("/international-arrivals/v2/hardship-arrangement")
  } else {
    res.redirect("/international-arrivals/v2/passport-number")
  }
})

// International Arrivals Version Two - Ethnic group
router.post('/international-arrivals/v2/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/international-arrivals/v2/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v2/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v2/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v2/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v2/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v2/nhs-number-known')
  }

})

// International Arrivals Version Two - NHS Number Known
router.post('/international-arrivals/v2/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes") {
    res.redirect('/international-arrivals/v2/nhs-number')
  } else {
    res.redirect('/international-arrivals/v2/registered-with-GP')
  }
})

// International Arrivals Version Two - Regisered With GP
router.post('/international-arrivals/v2/action3/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v2/address')
  } else {
    res.redirect('/international-arrivals/v2/gender')
  }
})

// International Arrivals Version Two - Vaccine
router.post('/international-arrivals/v2/action3/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v2/ethnic-group')
  } else {
    res.redirect('/international-arrivals/v2/vaccine-date')
  }
})

// International Arrivals Version Two - Travel Details Same Person 1
router.post('/international-arrivals/v2/action3/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v2/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v2/name-person-1')
  }
})

// International Arrivals Version Two - Ethnic Group Person 1
router.post('/international-arrivals/v2/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British") {
    res.redirect('/international-arrivals/v2/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v2/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v2/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v2/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v2/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v2/nhs-number-known-person-1')
  }
})

// International Arrivals Version Two - NHS Number Known Person 1
router.post('/international-arrivals/v2/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes") {
    res.redirect('/international-arrivals/v2/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v2/registered-with-GP-person-1')
  }
})

// International Arrivals Version Two - Registered With GP Person 1
router.post('/international-arrivals/v2/action3/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v2/address-person-1')
  } else {
    res.redirect('/international-arrivals/v2/gender-person-1')
  }
})

// International Arrivals Version Two - Vaccine Person 1
router.post('/international-arrivals/v2/action3/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v2/ethnic-group-person-1')
  } else {
    res.redirect('/international-arrivals/v2/vaccine-date-person-1')
  }
})

// VERSION THREE

// International Arrivals Version Three - Red route travel
router.post("/international-arrivals/v3/action3/red-country-travel", function (req, res) {
  let redCountryTravel = req.session.data["red-country-travel"]
  let destinationCountry = req.session.data["final-destination"]
  if (redCountryTravel == "Yes" && destinationCountry !== "England") {
    res.redirect("/international-arrivals/v3/service-unavailable")
  } else if (!redCountryTravel) {
    res.redirect("/international-arrivals/v3/red-country-travel-error")
  } else {
    res.redirect("/international-arrivals/v3/travel-package-exempt")
  }
})

// International Arrivals Version Three - Travel Package Exempt
router.post("/international-arrivals/v3/action3/travel-package-exempt", function (req, res) {
  let travelPackageExempt = req.session.data["travel-package-exempt"]
  if (travelPackageExempt == "Yes, I need a replacement test kit") {
    res.redirect("/international-arrivals/v3/search-results")
  } else {
    res.redirect("/international-arrivals/v3/name")
  }
})

// International Arrivals Version Three - Point of entry
router.post("/international-arrivals/v3/action3/point-of-entry", function (req, res) {
  let redCountryTravel = req.session.data["red-country-travel"]
  if (redCountryTravel == "Yes") {
    res.redirect("/international-arrivals/v3/mobile-phone-number")
  } else {
    res.redirect("/international-arrivals/v3/travel-route")
  }
})

// International Arrivals Version Three - Date of birth
router.post("/international-arrivals/v3/action3/date-of-birth", function (req, res) {
  let travelPackageExempt = req.session.data["travel-package-exempt"]
  if (travelPackageExempt == "Yes, I'm eligible for a hardship arrangement") {
    res.redirect("/international-arrivals/v3/hardship-arrangement")
  } else {
    res.redirect("/international-arrivals/v3/passport-number")
  }
})

// International Arrivals Version Three - Ethnic group
router.post('/international-arrivals/v3/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/international-arrivals/v3/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v3/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v3/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v3/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v3/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v3/nhs-number-known')
  }

})

// International Arrivals Version Three - NHS Number Known
router.post('/international-arrivals/v3/action4/nhs-number-known', function (req, res) {
  let nhsNumber = req.session.data['nhs-number']
  if (!nhsNumber) {
    res.redirect('/international-arrivals/v3/nhs-number-known-error')
  } else {
    res.redirect('/international-arrivals/v3/registered-with-GP')
  }
})

// International Arrivals Version Three - Regisered With GP
router.post('/international-arrivals/v3/action3/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v3/address')
  } else {
    res.redirect('/international-arrivals/v3/gender')
  }
})

// International Arrivals Version Three - Vaccine
router.post('/international-arrivals/v3/action3/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v3/ethnic-group')
  } else {
    res.redirect('/international-arrivals/v3/vaccine-date')
  }
})

// International Arrivals Version Three - Travel Details Same Person 1
router.post('/international-arrivals/v3/action3/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v3/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v3/red-country-travel-person-1')
  }
})

// International Arrivals Version Three - Red route travel Person 1
router.post("/international-arrivals/v3/action3/red-country-travel-person-1", function (req, res) {
  let redCountryTravel = req.session.data["red-country-travel"]
  let redCountryTravelPerson = req.session.data["red-country-travel-person-1"]
  if (redCountryTravel == "Yes" && redCountryTravelPerson !== "Yes" || redCountryTravel == "No" && redCountryTravelPerson !== "No") {
    res.redirect("/international-arrivals/v3/cannot-add-person")
  } else if (!redCountryTravelPerson) {
    res.redirect("/international-arrivals/v3/red-country-travel-person-1-error")
  } else {
    res.redirect("/international-arrivals/v3/name-person-1")
  }
})

// International Arrivals Version Three - Passport Number Person 1
router.post("/international-arrivals/v3/action3/passport-number-person-1", function (req, res) {
  let redCountryTravelPerson = req.session.data["red-country-travel-person-1"]
  if (redCountryTravelPerson == "Yes") {
    res.redirect("/international-arrivals/v3/mobile-number-person-1")
  } else {
    res.redirect("/international-arrivals/v3/travel-route-same-person-1")
  }
})

// International Arrivals Version Three - Ethnic Group Person 1
router.post('/international-arrivals/v3/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British") {
    res.redirect('/international-arrivals/v3/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v3/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v3/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v3/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v3/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v3/nhs-number-known-person-1')
  }
})

// International Arrivals Version Three - NHS Number Known Person 1
router.post('/international-arrivals/v3/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes") {
    res.redirect('/international-arrivals/v3/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v3/registered-with-GP-person-1')
  }
})

// International Arrivals Version Three - Registered With GP Person 1
router.post('/international-arrivals/v3/action3/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v3/address-person-1')
  } else {
    res.redirect('/international-arrivals/v3/gender-person-1')
  }
})

// International Arrivals Version Three - Vaccine Person 1
router.post('/international-arrivals/v3/action3/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v3/ethnic-group-person-1')
  } else {
    res.redirect('/international-arrivals/v3/vaccine-date-person-1')
  }
})


// VERSION FOUR


// International Arrivals Version Four - Red route not England
router.post('/international-arrivals/v4/action4/name', function (req, res) {
  let finalDestination = req.session.data['final-destination']
  let redCountryTravel = req.session.data['red-country-travel']

  if (finalDestination == "England") {
    res.redirect('/international-arrivals/v4/name')
  } else if (redCountryTravel == "Yes") {
    res.redirect('/international-arrivals/v4/service-unavailable')
  } else {
    res.redirect('/international-arrivals/v4/name')
  }
})

// International Arrivals Version Four - Red route skip travel package
router.post('/international-arrivals/v4/action4/travel-route', function (req, res) {
  let redCountryTravel = req.session.data['red-country-travel']

  if (redCountryTravel == "Yes") {
    res.redirect('/international-arrivals/v4/mobile-number')
  } else {
    res.redirect('/international-arrivals/v4/travel-route')
  }
})

// International Arrivals Version Four - Travel Package Exempt
router.post('/international-arrivals/v4/action4/travel-package-exempt', function (req, res) {
  let travelPackageExempt = req.session.data['travel-package-exempt']
  if (travelPackageExempt == "Yes, I need a replacement test kit") {
    res.redirect('/international-arrivals/v4/travel-package-provider')
  } else if (travelPackageExempt == 'Yes, I am in financial hardship') {
    res.redirect('/international-arrivals/v4/tbc')
  } else {
    res.redirect('/international-arrivals/v4/name')
  }
})

// International Arrivals Version Four - Ethnic group
router.post('/international-arrivals/v4/action4/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/international-arrivals/v4/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v4/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v4/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals/v4/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals/v4/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals/v4/nhs-number-known')
  }

})

// International Arrivals Version Four - NHS Number Known
router.post('/international-arrivals/v4/action4/nhs-number-known', function (req, res) {
  let nhsNumber = req.session.data['nhs-number']
  if (!nhsNumber) {
    res.redirect('/international-arrivals/v4/nhs-number-known-error')
  } else {
    res.redirect('/international-arrivals/v4/registered-with-GP')
  }
})

// International Arrivals Version Four - Regisered With GP
router.post('/international-arrivals/v4/action4/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v4/address')
  } else {
    res.redirect('/international-arrivals/v4/gender')
  }
})

// International Arrivals Version Four - Vaccine
router.post('/international-arrivals/v4/action4/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v4/ethnic-group')
  } else {
    res.redirect('/international-arrivals/v4/vaccine-date')
  }
})

// International Arrivals Version Four - Travel Details Same Person 1
router.post('/international-arrivals/v4/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals/v4/cannot-add-person')
  } else {
    res.redirect('/international-arrivals/v4/red-country-travel-person-1')
  }
})

// International Arrivals Version Four - Red route travel
router.post("/international-arrivals/v4/action4/red-country-travel-person-1", function (req, res) {
  let redCountryTravel = req.session.data["red-country-travel"]
  let redCountryTravelPerson = req.session.data["red-country-travel-person-1"]
  if (redCountryTravel == "Yes" && redCountryTravelPerson !== "Yes" || redCountryTravel == "No" && redCountryTravelPerson !== "No") {
    res.redirect("/international-arrivals/v4/cannot-add-person")
  } else {
    res.redirect("/international-arrivals/v4/name-person-1")
  }
})

// International Arrivals Version Four - Ethnic Group Person 1
router.post('/international-arrivals/v4/action4/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British") {
    res.redirect('/international-arrivals/v4/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals/v4/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals/v4/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals/v4/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals/v4/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals/v4/nhs-number-known-person-1')
  }
})

// International Arrivals Version Four - NHS Number Known Person 1
router.post('/international-arrivals/v4/action4/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes") {
    res.redirect('/international-arrivals/v4/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals/v4/registered-with-GP-person-1')
  }
})

// International Arrivals Version Four - Registered With GP Person 1
router.post('/international-arrivals/v4/action4/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes") {
    res.redirect('/international-arrivals/v4/address-person-1')
  } else {
    res.redirect('/international-arrivals/v4/gender-person-1')
  }
})

// International Arrivals Version Four - Vaccine Person 1
router.post('/international-arrivals/v4/action4/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No") {
    res.redirect('/international-arrivals/v4/ethnic-group-person-1')
  } else {
    res.redirect('/international-arrivals/v4/vaccine-date-person-1')
  }
})

module.exports = router
