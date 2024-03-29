const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 1 - LFD home ordering

router.post('/lfd-home-ordering/v1/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v1/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v1/different-test')
  }

})

router.post('/lfd-home-ordering/v1/action11/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v1/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v1/daily-contact-testing')
  }

})

// router.post('/lfd-home-ordering/v1/action10/country', function (req, res) {
//     let country = req.session.data['country']
//     if (country == "England" ) {
//       res.redirect('/lfd-home-ordering/v1/coronavirus-account')
//     } else if (country == "Scotland" ) {
//       res.redirect('/lfd-home-ordering/v1/scottish-isles')
//     } else {
//       res.redirect('/lfd-home-ordering/v1/country-test-unavailable')
//     }

// })

router.post('/lfd-home-ordering/v1/action10/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes") {
    res.redirect('/lfd-home-ordering/v1/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v1/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v1/action10/scottish-isles', function(req, res) {
  let scottishIsles = req.session.data['scottish-isles']
  if (!scottishIsles) {
    res.redirect('/lfd-home-ordering/v1/scottish-isles-error')
  } else if (scottishIsles == "Yes") {
    res.redirect('/lfd-home-ordering/v1/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v1/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v1/action10/workplace-testing', function(req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No") {
    res.redirect('/lfd-home-ordering/v1/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v1/collect-your-tests')
  }

})

router.post('/lfd-home-ordering/v1/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v1/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v1/name')
  }

})

router.post('/lfd-home-ordering/v1/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v1/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v1/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v1/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v1/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v1/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v1/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v1/name')
  }

})

router.post('/lfd-home-ordering/v1/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v1/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v1/mobile-number')
  }

})

router.post('/lfd-home-ordering/v1/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v1/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v1/notified-how')
  }

})

router.post('/lfd-home-ordering/v1/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v1/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v1/name')
  }

})

router.post('/lfd-home-ordering/v1/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v1/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v1/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v1/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v1/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v1/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v1/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v1/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v1/trust')
  }

})

router.post('/lfd-home-ordering/v1/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v1/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v1/confirm-email-address')
  }

})

// Version 2 - LFD home ordering

router.post('/lfd-home-ordering/v2/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v2/country')
  } else {
    res.redirect('/lfd-home-ordering/v2/different-test')
  }

})

router.post('/lfd-home-ordering/v2/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v2/contact-with-positive')
  } else {
    res.redirect('/lfd-home-ordering/v2/country-test-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v2/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v2/notified-how')
  }

})

router.post('/lfd-home-ordering/v2/action10/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "No") {
    res.redirect('/lfd-home-ordering/v2/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v2/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/workplace-testing', function(req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No") {
    res.redirect('/lfd-home-ordering/v2/name')
  } else {
    res.redirect('/lfd-home-ordering/v2/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v2/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v2/mobile-number')
  }

})

router.post('/lfd-home-ordering/v2/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v2/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v2/notified-how')
  }

})

router.post('/lfd-home-ordering/v2/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v2/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v2/name')
  }

})

router.post('/lfd-home-ordering/v2/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v2/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v2/confirm-email-address')
  }

})


// Version 3 - LFD home ordering

router.post('/lfd-home-ordering/v3/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v3/country')
  } else {
    res.redirect('/lfd-home-ordering/v3/different-test')
  }

})

router.post('/lfd-home-ordering/v3/action11/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v3/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v3/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v3/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v3/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v3/country-test-unavailable')
  }

})

router.post('/lfd-home-ordering/v3/action10/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes") {
    res.redirect('/lfd-home-ordering/v3/test-choice')
  } else {
    res.redirect('/lfd-home-ordering/v3/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v3/action10/test-choice', function(req, res) {
  let testChoice = req.session.data['test-choice']
  if (testChoice == "Get a one off test at a community test site") {
    res.redirect('/pre-registration/v3/')
  } else if (testChoice == "Collect tests to take home") {
    res.redirect('/lfd-collection-registration/v3/nhs-account')
  } else {
    res.redirect('/lfd-home-ordering/v3/coronavirus-account')
  }

})

router.post('/lfd-home-ordering/v3/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v3/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v3/name')
  }

})

router.post('/lfd-home-ordering/v3/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v3/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v3/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v3/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v3/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v3/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v3/action10/name', function(req, res) {
  let loginEmail = req.session.data['email-address']
  let nhsAccount = req.session.data['coronavirus-account']

  if (loginEmail !== "user@testing.co.uk" && nhsAccount == "Yes") {
    res.redirect('/lfd-home-ordering/v3/date-of-birth')
  } else {
    res.redirect('/lfd-home-ordering/v3/email-address')
  }

})

router.post('/lfd-home-ordering/v3/action/check-your-answers', function(req, res) {
  let testChoice = req.session.data['test-choice']
  if (testChoice == "I want to collect tests") {
    res.redirect('/lfd-home-ordering/v3/confirmation')
  } else {
    res.redirect('/lfd-home-ordering/v3/')
  }
})

router.post('/lfd-home-ordering/v3/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v3/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v3/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v3/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v3/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v3/name')
  }

})

router.post('/lfd-home-ordering/v3/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v3/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v3/mobile-number')
  }

})

router.post('/lfd-home-ordering/v3/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v3/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v3/notified-how')
  }

})

router.post('/lfd-home-ordering/v3/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v3/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v3/name')
  }

})

router.post('/lfd-home-ordering/v3/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v3/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v3/confirm-email-address')
  }

})


// Version 4 - LFD home ordering - testing version OUT rampdown research - single question

router.post('/lfd-home-ordering/v4/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v4/eligible')
  } else {
    res.redirect('/lfd-home-ordering/v4/different-test')
  }

})

router.post('/lfd-home-ordering/v4/eligible', function(req, res) {
  let symptoms = req.session.data['eligible']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v4/lft-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v4/coronavirus-account')
  }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v4/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v4/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v4/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes") {
    res.redirect('/lfd-home-ordering/v4/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v4/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v4/scottish-isles', function(req, res) {
  let scottishIsles = req.session.data['scottish-isles']
  if (!scottishIsles) {
    res.redirect('/lfd-home-ordering/v4/scottish-isles-error')
  } else if (scottishIsles == "Yes") {
    res.redirect('/lfd-home-ordering/v4/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v4/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v4/workplace-testing', function(req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No") {
    res.redirect('/lfd-home-ordering/v4/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v4/collect-your-tests')
  }

})

router.post('/lfd-home-ordering/v4/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v4/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v4/name')
  }

})

router.post('/lfd-home-ordering/v4/user-account/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v4/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v4/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v4/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v4/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v4/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v4/user-account/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v4/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v4/name')
  }

})

router.post('/lfd-home-ordering/v4/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v4/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v4/mobile-number')
  }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v4/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v4/notified-how')
  }

})

router.post('/lfd-home-ordering/v4/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v4/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v4/name')
  }

})

router.post('/lfd-home-ordering/v4/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v4/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v4/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v4/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v4/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v4/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v4/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v4/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v4/trust')
  }

})

router.post('/lfd-home-ordering/v4/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v4/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v4/confirm-email-address')
  }

})

// Version 5 - LFD home ordering - testing version OUT rampdown research - multiple questions

router.post('/lfd-home-ordering/v5/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v5/eligible-nhs')
  } else {
    res.redirect('/lfd-home-ordering/v5/different-test')
  }

})

router.post('/lfd-home-ordering/v5/eligible-nhs', function(req, res) {
  let symptoms = req.session.data['eligible-nhs']
  if (symptoms == "Yes") {
    res.redirect('/lfd-home-ordering/v5/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v5/eligible-care')
  }

})
router.post('/lfd-home-ordering/v5/eligible-care', function(req, res) {
  let symptoms = req.session.data['eligible-care']
  if (symptoms == "Yes") {
    res.redirect('/lfd-home-ordering/v5/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v5/eligible-prison-border')
  }

})
router.post('/lfd-home-ordering/v5/eligible-prison-border', function(req, res) {
  let symptoms = req.session.data['eligible-prison-border']
  if (symptoms == "Yes") {
    res.redirect('/lfd-home-ordering/v5/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v5/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v5/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v5/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v5/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes") {
    res.redirect('/lfd-home-ordering/v5/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v5/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v5/scottish-isles', function(req, res) {
  let scottishIsles = req.session.data['scottish-isles']
  if (!scottishIsles) {
    res.redirect('/lfd-home-ordering/v5/scottish-isles-error')
  } else if (scottishIsles == "Yes") {
    res.redirect('/lfd-home-ordering/v5/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v5/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v5/workplace-testing', function(req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No") {
    res.redirect('/lfd-home-ordering/v5/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v5/collect-your-tests')
  }

})

router.post('/lfd-home-ordering/v5/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v5/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v5/name')
  }

})

router.post('/lfd-home-ordering/v5/user-account/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v5/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v5/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v5/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v5/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v5/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v5/user-account/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v5/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v5/name')
  }

})

router.post('/lfd-home-ordering/v5/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v5/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v5/mobile-number')
  }

})

router.post('/lfd-home-ordering/v5/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v5/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v5/notified-how')
  }

})

router.post('/lfd-home-ordering/v5/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v5/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v5/name')
  }

})

router.post('/lfd-home-ordering/v5/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v5/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v5/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v5/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v5/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v5/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v5/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v5/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v5/trust')
  }

})

router.post('/lfd-home-ordering/v5/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v5/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v5/confirm-email-address')
  }

})

// Version 7

router.post('/lfd-home-ordering/v7/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v7/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v7/different-test')
  }

})

router.post('/lfd-home-ordering/v7/action11/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v7/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v7/daily-contact-testing')
  }

})

// router.post('/lfd-home-ordering/v7action10/country', function (req, res) {
//     let country = req.session.data['country']
//     if (country == "England" ) {
//       res.redirect('/lfd-home-ordering/v7coronavirus-account')
//     } else if (country == "Scotland" ) {
//       res.redirect('/lfd-home-ordering/v7scottish-isles')
//     } else {
//       res.redirect('/lfd-home-ordering/v7country-test-unavailable')
//     }

// })

router.post('/lfd-home-ordering/v7/action10/work-from-home', function(req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes") {
    res.redirect('/lfd-home-ordering/v7/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v7/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v7/action10/scottish-isles', function(req, res) {
  let scottishIsles = req.session.data['scottish-isles']
  if (!scottishIsles) {
    res.redirect('/lfd-home-ordering/v7/scottish-isles-error')
  } else if (scottishIsles == "Yes") {
    res.redirect('/lfd-home-ordering/v7/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v7/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v7/action10/workplace-testing', function(req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No") {
    res.redirect('/lfd-home-ordering/v7/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v7/collect-your-tests')
  }

})

router.post('/lfd-home-ordering/v7/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v7/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v7/name')
  }

})

router.post('/lfd-home-ordering/v7/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v7/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v7/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v7/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v7/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v7/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v7/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v7/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v7/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v7/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v7/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v7/name')
  }

})

router.post('/lfd-home-ordering/v7/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v7/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v7/mobile-number')
  }

})

router.post('/lfd-home-ordering/v7/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v7/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v7/notified-how')
  }

})

router.post('/lfd-home-ordering/v7action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v7self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v7name')
  }

})

router.post('/lfd-home-ordering/v7/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v7/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v7/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v7/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v7/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v7/check-your-answers')
  }

})

router.post('/lfd-home-ordering/v7/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v7/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v7/trust')
  }

})

router.post('/lfd-home-ordering/v7/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v7/delivery-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v7/confirm-email-address')
  }

})

// VERSION 8

router.post('/lfd-home-ordering/v8/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England" || country == "Scotland" || country == "Northern Ireland" || country == "Wales") {
    res.redirect('/lfd-home-ordering/v8/do-you-have-symptoms')
  } else {
    res.redirect('/lfd-home-ordering/v8/error-screens/country')
  }

})

router.post('/lfd-home-ordering/v8/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v8/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v8/different-test')
  }

})

router.post('/lfd-home-ordering/v8/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v8/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v8/mobile-number')
  }

})

router.post('/lfd-home-ordering/v8/action11/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v8/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v8/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v8/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v8/delivery-postcode')
  } else {
    if (country == "England") {
      res.redirect('/lfd-home-ordering/v8/nhs-testing-programme')
    } else {
      res.redirect('/lfd-home-ordering/v8/check-your-answers')
    }
  }

})
router.post('/lfd-home-ordering/v8/action10/delivery-address', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v8/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v8/check-your-answers')
  }
})

router.post('/lfd-home-ordering/v8/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v8/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v8/check-your-answers')
  }
})

router.post('/lfd-home-ordering/v8/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v8/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v8/check-your-answers')
  }
})

// router.post('/lfd-home-ordering/v7action10/country', function (req, res) {
//     let country = req.session.data['country']
//     if (country == "England" ) {
//       res.redirect('/lfd-home-ordering/v7coronavirus-account')
//     } else if (country == "Scotland" ) {
//       res.redirect('/lfd-home-ordering/v7scottish-isles')
//     } else {
//       res.redirect('/lfd-home-ordering/v7country-test-unavailable')
//     }

// })

// router.post('/lfd-home-ordering/v8/action10/work-from-home', function (req, res) {
//   let workFromHome = req.session.data['work-from-home']
//   if (workFromHome == "Yes" ) {
//     res.redirect('/lfd-home-ordering/v8/workplace-testing')
//   } else {
//     res.redirect('/lfd-home-ordering/v8/lft-unavailable')
//   }
//
// })

// router.post('/lfd-home-ordering/v8/action10/scottish-isles', function (req, res) {
//     let scottishIsles = req.session.data['scottish-isles']
//     if (!scottishIsles ) {
//       res.redirect('/lfd-home-ordering/v8/scottish-isles-error')
//     } else if (scottishIsles == "Yes" ) {
//       res.redirect('/lfd-home-ordering/v8/coronavirus-account')
//     } else {
//       res.redirect('/lfd-home-ordering/v8/lft-unavailable')
//     }
//
// })

// router.post('/lfd-home-ordering/v8/action10/workplace-testing', function (req, res) {
//     let workplaceTesting = req.session.data['workplace-testing']
//     if (workplaceTesting == "No" ) {
//       res.redirect('/lfd-home-ordering/v8/coronavirus-account')
//     } else {
//       res.redirect('/lfd-home-ordering/v8/collect-your-tests')
//     }
//
// })

router.post('/lfd-home-ordering/v8/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v8/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v8/name')
  }

})

router.post('/lfd-home-ordering/v8/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v8/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v8/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v8/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v8/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v8/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v8/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v8/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v8/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v8/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v8/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v8/name')
  }

})



router.post('/lfd-home-ordering/v8/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v8/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v8/notified-how')
  }

})

router.post('/lfd-home-ordering/v8/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v8/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v8/name')
  }

})

router.post('/lfd-home-ordering/v8/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v8/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v8/trust')
  }

})


// VERSION 9

router.post('/lfd-home-ordering/v9/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v9/exit-screens/guard-question-england')
  } else {
    res.redirect('/lfd-home-ordering/v9/do-you-have-symptoms')
  }

})

router.post('/lfd-home-ordering/v9/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No") {
    res.redirect('/lfd-home-ordering/v9/coronavirus-account')
  } else {
    res.redirect('/lfd-home-ordering/v9/different-test')
  }

})

router.post('/lfd-home-ordering/v9/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/lfd-home-ordering/v9/call-us')
  } else {
    res.redirect('/lfd-home-ordering/v9/mobile-number')
  }

})

router.post('/lfd-home-ordering/v9/action11/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v9/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v9/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v9/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/lfd-home-ordering/v9/delivery-postcode')
  } else {
    if (country == "England") {
      res.redirect('/lfd-home-ordering/v9/nhs-testing-programme')
    } else {
      res.redirect('/lfd-home-ordering/v9/check-your-answers')
    }
  }

})
router.post('/lfd-home-ordering/v9/action10/delivery-address', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v9/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v9/check-your-answers')
  }
})

router.post('/lfd-home-ordering/v9/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/lfd-home-ordering/v9/work-area')
  } else {
    res.redirect('/lfd-home-ordering/v9/check-your-answers')
  }
})

router.post('/lfd-home-ordering/v9/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/lfd-home-ordering/v9/nhs-testing-programme')
  } else {
    res.redirect('/lfd-home-ordering/v9/check-your-answers')
  }
})

// router.post('/lfd-home-ordering/v7action10/country', function (req, res) {
//     let country = req.session.data['country']
//     if (country == "England" ) {
//       res.redirect('/lfd-home-ordering/v7coronavirus-account')
//     } else if (country == "Scotland" ) {
//       res.redirect('/lfd-home-ordering/v7scottish-isles')
//     } else {
//       res.redirect('/lfd-home-ordering/v7country-test-unavailable')
//     }

// })

// router.post('/lfd-home-ordering/v8/action10/work-from-home', function (req, res) {
//   let workFromHome = req.session.data['work-from-home']
//   if (workFromHome == "Yes" ) {
//     res.redirect('/lfd-home-ordering/v8/workplace-testing')
//   } else {
//     res.redirect('/lfd-home-ordering/v8/lft-unavailable')
//   }
//
// })

// router.post('/lfd-home-ordering/v8/action10/scottish-isles', function (req, res) {
//     let scottishIsles = req.session.data['scottish-isles']
//     if (!scottishIsles ) {
//       res.redirect('/lfd-home-ordering/v8/scottish-isles-error')
//     } else if (scottishIsles == "Yes" ) {
//       res.redirect('/lfd-home-ordering/v8/coronavirus-account')
//     } else {
//       res.redirect('/lfd-home-ordering/v8/lft-unavailable')
//     }
//
// })

// router.post('/lfd-home-ordering/v8/action10/workplace-testing', function (req, res) {
//     let workplaceTesting = req.session.data['workplace-testing']
//     if (workplaceTesting == "No" ) {
//       res.redirect('/lfd-home-ordering/v8/coronavirus-account')
//     } else {
//       res.redirect('/lfd-home-ordering/v8/collect-your-tests')
//     }
//
// })

router.post('/lfd-home-ordering/v9/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v9/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v9/name')
  }

})

router.post('/lfd-home-ordering/v9/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v9/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v9/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v9/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v9/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v9/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v9/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v9/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v9/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v9/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/lfd-home-ordering/v9/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v9/name')
  }

})



router.post('/lfd-home-ordering/v9/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/lfd-home-ordering/v9/dct-unavailable')
  } else {
    res.redirect('/lfd-home-ordering/v9/notified-how')
  }

})

router.post('/lfd-home-ordering/v9/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/lfd-home-ordering/v9/self-isolate')
  } else {
    res.redirect('/lfd-home-ordering/v9/name')
  }

})

router.post('/lfd-home-ordering/v9/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/lfd-home-ordering/v9/work-postcode')
  } else {
    res.redirect('/lfd-home-ordering/v9/trust')
  }

})

// VERSION DEV
router.post('/IBT/lfd-home-order/feature-design/SAID-468/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468/guard-question-england')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468/do-you-have-symptoms')
  }

})
// VERSION DEV
router.post('/IBT/lfd-home-order/feature-design/SAID-468-2/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468-2/guard-question-england')
  } else if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468-2/guard-question-scotland')
  } else if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468-2/guard-question-wales')
  } else if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468-2/guard-question-northern-ireland')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-468-2/do-you-have-symptoms')
  }

})



// VERSION LIVE

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England" || country == "Scotland" || country == "Northern Ireland" || country == "Wales") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/do-you-have-symptoms')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/error-screens/country')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/scotland-gate')
  }
  if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/guard-question-northern-ireland')
  }
  if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/guard-question-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/no-more-tests-available-v5')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/test-reason-category', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  if (work == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || work == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/coronavirus-account')
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/healthcare-provider-name')
  } else if (work == "You work in the adult social care sector") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/adult-social-care-role')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/qualifying-condition')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/qualifying-condition', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/exit-screens/not-eligible-v2')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/e2e-prototypes/live/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/name')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/name')
  }

})



router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/notified-how')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/name')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/live/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/live/trust')
  }

})




// VERSION FRICTION //

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England" || country == "Scotland" || country == "Northern Ireland" || country == "Wales") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/do-you-have-symptoms')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/error-screens/country')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/scotland-gate')
  }
  if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/ni-gate')
  }
  if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/guard-question-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/no-more-tests-available-v5')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/test-reason-category', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  if (work == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || work == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/coronavirus-account')
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/healthcare-provider-name')
  } else if (work == "You work in the adult social care sector") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/adult-social-care-role')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/qualifying-condition')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/qualifying-condition', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/exit-screens/not-eligible-v2')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/name')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/name')
  }

})



router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/notified-how')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/name')
  }

})

router.post('/IBT/lfd-home-order/e2e-prototypes/friction/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/e2e-prototypes/friction/trust')
  }

})

// VERSION DA ELIGIBILITY //

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England" || country == "Scotland" || country == "Northern Ireland" || country == "Wales") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/do-you-have-symptoms')
    // res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/do-you-have-symptoms-v2')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/error-screens/country')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/no-more-tests-available-scotland')
  }
  if (country == "Northern Ireland") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/no-more-tests-available-ni')
    }
  }
  if (country == "Wales") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/no-more-tests-available-wales')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/no-more-tests-available-england')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-category-england', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-v2')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-category-scotland', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You have a health condition which means you're eligible for antiviral or antibody treatments for coronavirus (COVID-19)") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/qualifying-condition-scotland')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-scotland')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-category-wales', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "A doctor or specialist said you're eligible for antiviral or antibody treatments for coronavirus (COVID-19)") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/qualifying-condition-wales')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-category-ni', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You may be eligible for COVID-19 treatments and you need to order lateral flow tests in case you become symptomatic") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/qualifying-condition-ni')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-ni')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  if (work == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || work == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/healthcare-provider-name')
  } else if (work == "You work in the adult social care sector") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/adult-social-care-role')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/qualifying-condition-england')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/qualifying-condition-england', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/qualifying-condition-scotland', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-scotland')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/qualifying-condition-wales', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-wales')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/qualifying-condition-ni', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/exit-screens/not-eligible-ni')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/feature-design/SAID-478/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/name')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/name')
  }

})



router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/notified-how')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/name')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-478/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/trust')
  }

})


// Asymptomatic Testing Pause // ----------

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/do-you-have-symptoms-england')
  } else if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/scotland-gate')
  } else if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/ni-gate')
  } else if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/guard-question-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/error-screens/country')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/do-you-have-symptoms-england', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/no-more-tests-available-england')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/test-reason-category-england', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-v2')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  let symptoms = req.session.data['do-you-have-symptoms']
  if (work == "You work for the NHS") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/more-why-test-nhs-ihp')
    }
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/healthcare-provider-name')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/more-why-test-nhs-ihp')
    }
  } else if (work == "You work in the adult social care sector") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/adult-social-care-role')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/more-why-test-asc')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/more-why-test-nhs-ihp', function(req, res) {
  let work = req.session.data['test-reason-work']
  let reason = req.session.data['test-reason-work-asymptomatic']
  if (reason == "Return to work" || reason == "You're extremely clinically vulnerable" || reason == "You work with extremely clinically vulnerable") {
    if (work == "You work for the NHS") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
    } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/healthcare-provider-name')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-test-pause')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-test-pause')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/more-why-test-asc', function(req, res) {
  let work = req.session.data['test-reason-work']
  let reason = req.session.data['test-reason-work-asymptomatic']
  if (reason == "Return to work" || reason == "Pack at home") {
    if (work == "You work in the adult social care sector") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/adult-social-care-role')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-test-pause')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-test-pause')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  let symptoms = req.session.data['do-you-have-symptoms']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/qualifying-condition-england')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/qualifying-condition-england', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/qualifying-condition-scotland', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-scotland')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/qualifying-condition-wales', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-wales')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/qualifying-condition-ni', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-ni')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/feature-design/SAID-479/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/name')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/name')
  }

})



router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/notified-how')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/name')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/trust')
  }

})

// Asymptomatic Testing Pause - updated content for testing // ----------

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/do-you-have-symptoms-england')
  } else if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/scotland-gate')
  } else if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/ni-gate')
  } else if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/guard-question-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/error-screens/country')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/do-you-have-symptoms-england', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/no-more-tests-available-england')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/test-reason-category-england', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-v2')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  let symptoms = req.session.data['do-you-have-symptoms']
  if (work == "You work for the NHS") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/more-why-test-nhs-ihp')
    }
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/healthcare-provider-name')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/more-why-test-nhs-ihp')
    }
  } else if (work == "You work in the adult social care sector") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/adult-social-care-role')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/more-why-test-asc')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/more-why-test-nhs-ihp', function(req, res) {
  let work = req.session.data['test-reason-work']
  let reason = req.session.data['test-reason-work-asymptomatic']
  if (reason == "Return to work" || reason == "You're extremely clinically vulnerable" || reason == "You work with extremely clinically vulnerable") {
    if (work == "You work for the NHS") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/coronavirus-account')
    } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/healthcare-provider-name')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-test-pause')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-test-pause')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/more-why-test-asc', function(req, res) {
  let work = req.session.data['test-reason-work']
  let reason = req.session.data['test-reason-work-asymptomatic']
  if (reason == "Return to work" || reason == "Pack at home") {
    if (work == "You work in the adult social care sector") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/adult-social-care-role')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-test-pause')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-test-pause')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  let symptoms = req.session.data['do-you-have-symptoms']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/qualifying-condition-england')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/qualifying-condition-england', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/qualifying-condition-scotland', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-scotland')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479/action10/qualifying-condition-wales', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/exit-screens/not-eligible-wales')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/qualifying-condition-ni', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/exit-screens/not-eligible-ni')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/feature-design/SAID-479/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-479/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/name')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/name')
  }

})



router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/notified-how')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/name')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-479a/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-479a/trust')
  }

})


// VERSION Symptoms, gate and friction pages content update //

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/country', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/do-you-have-symptoms-england')
  } else if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/scotland-gate')
  } else if (country == "Northern Ireland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/ni-gate')
  } else if (country == "Wales") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/guard-question-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/error-screens/country')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/do-you-have-symptoms', function(req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let country = req.session.data['country']
  if (country == "Scotland") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/no-more-tests-available-scotland')
  }
  if (country == "Northern Ireland") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/no-more-tests-available-ni')
    }
  }
  if (country == "Wales") {
    if (symptoms == "Yes") {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
    } else {
      res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/no-more-tests-available-wales')
    }
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/no-more-tests-available-england')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-category-england', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You been asked to take a test by a doctor or healthcare professional, or you have an eligible health condition") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/test-reason-health')
  } else if (category == "You been asked to take a test for your job") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/test-reason-work')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-v2')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-category-scotland', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You have a health condition which means you're eligible for antiviral or antibody treatments for coronavirus (COVID-19)") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/qualifying-condition-scotland')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-scotland')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-category-wales', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "A doctor or specialist said you're eligible for antiviral or antibody treatments for coronavirus (COVID-19)") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/qualifying-condition-wales')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-wales')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  }
})
router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-category-ni', function(req, res) {
  let category = req.session.data['test-reason-category']
  if (category == "You may be eligible for COVID-19 treatments and you need to order lateral flow tests in case you become symptomatic") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/qualifying-condition-ni')
  } else if (category == "Another reason") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-ni')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-work', function(req, res) {
  let work = req.session.data['test-reason-work']
  if (work == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || work == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  } else if (work == "You work for an NHS-commissioned independent healthcare provider in a patient-facing role looking after NHS patients") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/healthcare-provider-name')
  } else if (work == "You work in the adult social care sector") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/adult-social-care-role')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/test-reason-health', function(req, res) {
  let health = req.session.data['test-reason-health']
  if (health == "You've been told by the NHS that you're eligible for COVID-19 treatments") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/qualifying-condition-england')
  } else if (health == "Your doctor or healthcare professional has told you to get a test because you're being admitted into hospital for a procedure") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/hospital-name')
  } else if (health == "You've spoken to your GP or healthcare professional recently and they asked you to get a test") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/date-asked-to-test')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/qualifying-condition-england', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-v2')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/qualifying-condition-scotland', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-scotland')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/qualifying-condition-wales', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-wales')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/qualifying-condition-ni', function(req, res) {
  let qualify = req.session.data['qualifying-condition']
  if (qualify == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/coronavirus-account')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/exit-screens/not-eligible-ni')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/email-address', function(req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/call-us')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/mobile-number')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/date-of-birth', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/check-your-answers')
  }
})

// router.post('/IBT/lfd-home-order/feature-design/SAID-480/action11/contact-with-positive', function(req, res) {
//   let contactWithPositive = req.session.data['contact-with-positive']
//   if (contactWithPositive == "No") {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/work-from-home')
//   } else {
//     res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/daily-contact-testing')
//   }
// })

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/home-address-question', function(req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  let country = req.session.data['country']
  if (deliveryAddressSame == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/delivery-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/confirm-email-address')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/nhs-testing-programme', function(req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/nhs-staff-member', function(req, res) {
  let nhsstaff = req.session.data['test-reason-work']
  if (nhsstaff == "You work for the NHS in a patient-facing role, and you're taking part in the NHS staff testing programme" || nhsstaff == "You work for the NHS and have COVID-19 symptoms") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/work-area')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/check-your-answers')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/enter-password', function(req, res) {
  let country = req.session.data['country']
  if (country == "England") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/nhs-testing-programme')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/check-your-answers')
  }
})


router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/coronavirus-account', function(req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/login-email')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/name')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/user-account/action10/login-email', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/enter-password')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/create-password')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/create-password', function(req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/create-password-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/check-email')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/check-mobile', function(req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/check-mobile-error')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/user-account/agreement')
  }
})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/user-account/action10/home-page', function(req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/check-your-answers')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/name')
  }

})



router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/contact-with-positive', function(req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/dct-unavailable')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/notified-how')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/dct-opt-in', function(req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/self-isolate')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/name')
  }

})

router.post('/IBT/lfd-home-order/feature-design/SAID-480/action10/work-area', function(req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other") {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-480/work-postcode')
  } else {
    res.redirect('/IBT/lfd-home-order/feature-design/SAID-478/trust')
  }

})

module.exports = router
