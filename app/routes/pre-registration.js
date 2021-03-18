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

router.post('/pre-registration/v1/action12/whos-taking-the-test', function (req, res) {
  let person = req.session.data['whos-taking-the-test']
  if (person == "myself") {
    res.redirect('/pre-registration/v1/coronavirus-account')
  } else {
    res.redirect('/pre-registration/v1/blue-card-1')
  }

})

router.post('/pre-registration/v1/action12/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/pre-registration/v1/user-account/login-email')
  } else {
    res.redirect('/pre-registration/v1/blue-card-1')
  }

})

router.post('/pre-registration/v1/user-account/action12/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/pre-registration/v1/user-account/enter-password')
  } else {
    res.redirect('/pre-registration/v1/user-account/create-password')
  }

})

router.post('/pre-registration/v1/action12/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/pre-registration/v1/user-account/create-password-error')
  } else {
    res.redirect('/pre-registration/v1/user-account/check-email')
  }
})

router.post('/pre-registration/v1/action12/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/pre-registration/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/pre-registration/v1/user-account/agreement')
  }
})

router.post('/pre-registration/v1/action12/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/pre-registration/v1/nhs-number')
  } else {
    res.redirect('/pre-registration/v1/ethnic-group')
  }

})

router.post('/pre-registration/v1/action12/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/pre-registration/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pre-registration/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pre-registration/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/pre-registration/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pre-registration/v1/ethnic-background-another')
  } else {
    res.redirect('/pre-registration/v1/currently-in-work')
  }

})

router.post('/pre-registration/v1/action12/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "work"){
    res.redirect('/pre-registration/v1/industry')
  } else if (inWork == "study"){
    res.redirect('/pre-registration/v1/study-grade')
  } else {
    res.redirect('/pre-registration/v1/blue-card-2')
  }

})

router.post('/pre-registration/v1/action12/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes") {
    res.redirect('/pre-registration/v1/symptoms-exit')
  } else {
    res.redirect('/pre-registration/v1/previous-infection')
  }

})

router.post('/pre-registration/v1/action12/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/pre-registration/v1/have-you-travelled-overseas')
  } else {
    res.redirect('/pre-registration/v1/vaccine-date')
  }
})

router.post('/pre-registration/v1/action12/have-you-travelled-overseas', function (req, res) {
  let overseasTravel = req.session.data['have-you-travelled-overseas']
  if (overseasTravel == "Yes") {
    res.redirect('/pre-registration/v1/country-visited')
  } else {
    res.redirect('/pre-registration/v1/daily-contact-testing')
  }

})

// VERSION 2

router.post('/pre-registration/v2/action12/test-when', function (req, res) {
  let test = req.session.data['test-when']
  if (test == "Yes" ) {
    res.redirect('/pre-registration/v2/whos-taking-the-test')
  } else {
    res.redirect('/pre-registration/v2/not-24-hours')
  }

})

router.post('/pre-registration/v2/action12/whos-taking-the-test', function (req, res) {
let person = req.session.data['whos-taking-the-test']
if (person == "myself") {
  res.redirect('/pre-registration/v2/coronavirus-account')
} else {
  res.redirect('/pre-registration/v2/blue-card-1')
}

})

router.post('/pre-registration/v2/action12/coronavirus-account', function (req, res) {
let signin = req.session.data['coronavirus-account']
if (signin == "Yes") {
  res.redirect('/pre-registration/v2/user-account/login-email')
} else {
  res.redirect('/pre-registration/v2/blue-card-1')
}

})

router.post('/pre-registration/v2/user-account/action12/login-email', function (req, res) {
let loginEmail = req.session.data['email-address']

if (loginEmail == "user@testing.co.uk"){
  res.redirect('/pre-registration/v2/user-account/enter-password')
} else {
  res.redirect('/pre-registration/v2/user-account/create-password')
}

})

router.post('/pre-registration/v2/action12/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/pre-registration/v2/user-account/create-password-error')
} else {
  res.redirect('/pre-registration/v2/user-account/check-email')
}
})

router.post('/pre-registration/v2/action12/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/pre-registration/v2/user-account/check-mobile-error')
} else {
  res.redirect('/pre-registration/v2/user-account/agreement')
}
})

router.post('/pre-registration/v2/action12/nhs-number-known', function (req, res) {
let nhsNumberKnown = req.session.data['nhs-number-known']
if (nhsNumberKnown == "Yes"){
  res.redirect('/pre-registration/v2/nhs-number')
} else {
  res.redirect('/pre-registration/v2/ethnic-group')
}

})

router.post('/pre-registration/v2/action12/ethnic-group', function (req, res) {
let ethnicGroup = req.session.data['ethnic-group']

if (ethnicGroup == "Asian or Asian British"){
  res.redirect('/pre-registration/v2/ethnic-background-asian')
} else if (ethnicGroup == "Black, African, Black British or Caribbean") {
  res.redirect('/pre-registration/v2/ethnic-background-black')
} else if (ethnicGroup == "Mixed or multiple ethnic groups") {
  res.redirect('/pre-registration/v2/ethnic-background-mixed')
} else if (ethnicGroup == "White") {
  res.redirect('/pre-registration/v2/ethnic-background-white')
} else if (ethnicGroup == "Another ethnic group") {
  res.redirect('/pre-registration/v2/ethnic-background-another')
} else {
  res.redirect('/pre-registration/v2/currently-in-work')
}

})

router.post('/pre-registration/v2/action12/currently-in-work', function (req, res) {
let inWork = req.session.data['currently-in-work']
if (inWork == "work"){
  res.redirect('/pre-registration/v2/industry')
} else if (inWork == "study"){
  res.redirect('/pre-registration/v2/study-grade')
} else {
  res.redirect('/pre-registration/v2/blue-card-2')
}

})

router.post('/pre-registration/v2/action12/do-you-have-symptoms', function (req, res) {
let symptoms = req.session.data['do-you-have-symptoms']
if (symptoms == "Yes") {
  res.redirect('/pre-registration/v2/symptoms-exit')
} else {
  res.redirect('/pre-registration/v2/previous-infection')
}

})

router.post('/pre-registration/v2/action12/vaccine', function (req, res) {
let vaccine = req.session.data['vaccine']
if (vaccine == "No") {
  res.redirect('/pre-registration/v2/have-you-travelled-overseas')
} else {
  res.redirect('/pre-registration/v2/vaccine-date')
}
})

router.post('/pre-registration/v2/action12/have-you-travelled-overseas', function (req, res) {
let overseasTravel = req.session.data['have-you-travelled-overseas']
if (overseasTravel == "Yes") {
  res.redirect('/pre-registration/v2/country-visited')
} else {
  res.redirect('/pre-registration/v2/daily-contact-testing')
}

})

module.exports = router