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

router.post('/lfd-home-ordering/v1/action10/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "No" ) {
      res.redirect('/lfd-home-ordering/v1/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v1/different-test')
    }

})

router.post('/lfd-home-ordering/v1/action11/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
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

router.post('/lfd-home-ordering/v1/action10/work-from-home', function (req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes" ) {
    res.redirect('/lfd-home-ordering/v1/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v1/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v1/action10/scottish-isles', function (req, res) {
    let scottishIsles = req.session.data['scottish-isles']
    if (!scottishIsles ) {
      res.redirect('/lfd-home-ordering/v1/scottish-isles-error')
    } else if (scottishIsles == "Yes" ) {
      res.redirect('/lfd-home-ordering/v1/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v1/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v1/action10/workplace-testing', function (req, res) {
    let workplaceTesting = req.session.data['workplace-testing']
    if (workplaceTesting == "No" ) {
      res.redirect('/lfd-home-ordering/v1/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v1/collect-your-tests')
    }

})

router.post('/lfd-home-ordering/v1/action10/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v1/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v1/name')
  }

})

router.post('/lfd-home-ordering/v1/user-account/action10/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v1/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v1/action10/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v1/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v1/action10/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v1/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v1/user-account/action10/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v1/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v1/name')
  }

})

router.post('/lfd-home-ordering/v1/action10/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/lfd-home-ordering/v1/call-us')
    } else {
        res.redirect('/lfd-home-ordering/v1/mobile-number')
    }

})

router.post('/lfd-home-ordering/v1/action10/contact-with-positive', function (req, res) {
    let contactWithPositive = req.session.data['contact-with-positive']
    if (contactWithPositive == "No" ) {
        res.redirect('/lfd-home-ordering/v1/dct-unavailable')
    } else {
        res.redirect('/lfd-home-ordering/v1/notified-how')
    }

})

router.post('/lfd-home-ordering/v1/action10/dct-opt-in', function (req, res) {
    let dctOptIn = req.session.data['dct-opt-in']
    if (dctOptIn == "No" ) {
        res.redirect('/lfd-home-ordering/v1/self-isolate')
    } else {
        res.redirect('/lfd-home-ordering/v1/name')
    }

})

router.post('/lfd-home-ordering/v1/action10/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
        res.redirect('/lfd-home-ordering/v1/nhs-testing-programme')
    } else {
        res.redirect('/lfd-home-ordering/v1/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v1/action10/nhs-testing-programme', function (req, res) {
    let programme = req.session.data['nhs-testing-programme']
    if (programme == "Yes" ) {
        res.redirect('/lfd-home-ordering/v1/work-area')
    } else {
        res.redirect('/lfd-home-ordering/v1/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v1/action10/work-area', function (req, res) {
    let workArea = req.session.data['work-area']
    if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other" ) {
        res.redirect('/lfd-home-ordering/v1/work-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v1/trust')
    }

})

router.post('/lfd-home-ordering/v1/action10/home-address-question', function (req, res) {
    let deliveryAddressSame = req.session.data['delivery-address-same']
    if (deliveryAddressSame == "No" ) {
        res.redirect('/lfd-home-ordering/v1/order-home-test-kit/delivery-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v1/order-home-test-kit/confirm-email-address')
    }

})

// Version 2 - LFD home ordering

router.post('/lfd-home-ordering/v2/action10/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No" ) {
    res.redirect('/lfd-home-ordering/v2/country')
  } else {
    res.redirect('/lfd-home-ordering/v2/different-test')
  }

})

router.post('/lfd-home-ordering/v2/action10/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "England" ) {
    res.redirect('/lfd-home-ordering/v2/contact-with-positive')
  } else {
    res.redirect('/lfd-home-ordering/v2/country-test-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
    res.redirect('/lfd-home-ordering/v2/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v2/notified-how')
  }

})

router.post('/lfd-home-ordering/v2/action10/work-from-home', function (req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "No" ) {
    res.redirect('/lfd-home-ordering/v2/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v2/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/workplace-testing', function (req, res) {
  let workplaceTesting = req.session.data['workplace-testing']
  if (workplaceTesting == "No" ) {
    res.redirect('/lfd-home-ordering/v2/name')
  } else {
    res.redirect('/lfd-home-ordering/v2/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v2/action10/email-address', function (req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No" ) {
      res.redirect('/lfd-home-ordering/v2/call-us')
  } else {
      res.redirect('/lfd-home-ordering/v2/mobile-number')
  }

})

router.post('/lfd-home-ordering/v2/action10/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
      res.redirect('/lfd-home-ordering/v2/dct-unavailable')
  } else {
      res.redirect('/lfd-home-ordering/v2/notified-how')
  }

})

router.post('/lfd-home-ordering/v2/action10/dct-opt-in', function (req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No" ) {
      res.redirect('/lfd-home-ordering/v2/self-isolate')
  } else {
      res.redirect('/lfd-home-ordering/v2/name')
  }

})

router.post('/lfd-home-ordering/v2/action10/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No" ) {
      res.redirect('/lfd-home-ordering/v2/order-home-test-kit/delivery-postcode')
  } else {
      res.redirect('/lfd-home-ordering/v2/order-home-test-kit/confirm-email-address')
  }

})


// Version 3 - LFD home ordering

router.post('/lfd-home-ordering/v3/action10/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "No" ) {
    res.redirect('/lfd-home-ordering/v3/country')
  } else {
    res.redirect('/lfd-home-ordering/v3/different-test')
  }

})

router.post('/lfd-home-ordering/v3/action11/contact-with-positive', function (req, res) {
let contactWithPositive = req.session.data['contact-with-positive']
if (contactWithPositive == "No" ) {
  res.redirect('/lfd-home-ordering/v3/work-from-home')
} else {
  res.redirect('/lfd-home-ordering/v3/daily-contact-testing')
}

})

router.post('/lfd-home-ordering/v3/action10/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "England" ) {
    res.redirect('/lfd-home-ordering/v3/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v3/country-test-unavailable')
  }

})

router.post('/lfd-home-ordering/v3/action10/work-from-home', function (req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes" ) {
    res.redirect('/lfd-home-ordering/v3/test-choice')
  } else {
    res.redirect('/lfd-home-ordering/v3/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v3/action10/test-choice', function (req, res) {
  let testChoice = req.session.data['test-choice']
  if (testChoice == "Get a one off test at a community test site" ) {
    res.redirect('/pre-registration/v1/')
  } else if (testChoice == "Collect tests to take home" ) {
    res.redirect('/lfd-collection-registration/v1/nhs-account')
  } else {
    res.redirect('/lfd-home-ordering/v3/coronavirus-account')
  }

})

router.post('/lfd-home-ordering/v3/action10/coronavirus-account', function (req, res) {
let signin = req.session.data['coronavirus-account']
if (signin == "Yes") {
  res.redirect('/lfd-home-ordering/v3/user-account/login-email')
} else {
  res.redirect('/lfd-home-ordering/v3/name')
}

})

router.post('/lfd-home-ordering/v3/user-account/action10/login-email', function (req, res) {
let loginEmail = req.session.data['email-address']

if (loginEmail == "user@testing.co.uk"){
  res.redirect('/lfd-home-ordering/v3/user-account/enter-password')
} else {
  res.redirect('/lfd-home-ordering/v3/user-account/create-password')
}

})

router.post('/lfd-home-ordering/v3/action10/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/lfd-home-ordering/v3/user-account/create-password-error')
} else {
  res.redirect('/lfd-home-ordering/v3/user-account/check-email')
}
})

router.post('/lfd-home-ordering/v3/action10/name', function (req, res) {
  let loginEmail = req.session.data['email-address']
  let nhsAccount = req.session.data['coronavirus-account']

  if (loginEmail !== "user@testing.co.uk" && nhsAccount == "Yes"){
    res.redirect('/lfd-home-ordering/v3/date-of-birth')
  } else {
    res.redirect('/lfd-home-ordering/v3/email-address')
  }

  })

router.post('/lfd-home-ordering/v3/action/check-your-answers', function (req, res) {
  let testChoice = req.session.data['test-choice']
  if (testChoice == "I want to collect tests") {
    res.redirect('/lfd-home-ordering/v3/confirmation')
  } else {
    res.redirect('/lfd-home-ordering/v3/order-home-test-kit/')
  }
  })

router.post('/lfd-home-ordering/v3/action10/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/lfd-home-ordering/v3/user-account/check-mobile-error')
} else {
  res.redirect('/lfd-home-ordering/v3/user-account/agreement')
}
})

router.post('/lfd-home-ordering/v3/user-account/action10/home-page', function (req, res) {
let loginEmail = req.session.data['email-address']

if (loginEmail == "user@testing.co.uk"){
  res.redirect('/lfd-home-ordering/v3/check-your-answers')
} else {
  res.redirect('/lfd-home-ordering/v3/name')
}

})

router.post('/lfd-home-ordering/v3/action10/email-address', function (req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "No" ) {
      res.redirect('/lfd-home-ordering/v3/call-us')
  } else {
      res.redirect('/lfd-home-ordering/v3/mobile-number')
  }

})

router.post('/lfd-home-ordering/v3/action10/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
      res.redirect('/lfd-home-ordering/v3/dct-unavailable')
  } else {
      res.redirect('/lfd-home-ordering/v3/notified-how')
  }

})

router.post('/lfd-home-ordering/v3/action10/dct-opt-in', function (req, res) {
  let dctOptIn = req.session.data['dct-opt-in']
  if (dctOptIn == "No" ) {
      res.redirect('/lfd-home-ordering/v3/self-isolate')
  } else {
      res.redirect('/lfd-home-ordering/v3/name')
  }

})

router.post('/lfd-home-ordering/v3/action10/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No" ) {
      res.redirect('/lfd-home-ordering/v3/order-home-test-kit/delivery-postcode')
  } else {
      res.redirect('/lfd-home-ordering/v3/order-home-test-kit/confirm-email-address')
  }

})


// Version 4 - LFD home ordering - testing version OUT rampdown research - single question

router.post('/lfd-home-ordering/v4/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "No" ) {
      res.redirect('/lfd-home-ordering/v4/eligible')
    } else {
      res.redirect('/lfd-home-ordering/v4/different-test')
    }

})

router.post('/lfd-home-ordering/v4/eligible', function (req, res) {
    let symptoms = req.session.data['eligible']
    if (symptoms == "No" ) {
      res.redirect('/lfd-home-ordering/v4/lft-unavailable')
    } else {
      res.redirect('/lfd-home-ordering/v4/coronavirus-account')
    }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
    res.redirect('/lfd-home-ordering/v4/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v4/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v4/work-from-home', function (req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes" ) {
    res.redirect('/lfd-home-ordering/v4/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v4/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v4/scottish-isles', function (req, res) {
    let scottishIsles = req.session.data['scottish-isles']
    if (!scottishIsles ) {
      res.redirect('/lfd-home-ordering/v4/scottish-isles-error')
    } else if (scottishIsles == "Yes" ) {
      res.redirect('/lfd-home-ordering/v4/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v4/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v4/workplace-testing', function (req, res) {
    let workplaceTesting = req.session.data['workplace-testing']
    if (workplaceTesting == "No" ) {
      res.redirect('/lfd-home-ordering/v4/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v4/collect-your-tests')
    }

})

router.post('/lfd-home-ordering/v4/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v4/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v4/name')
  }

})

router.post('/lfd-home-ordering/v4/user-account/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v4/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v4/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v4/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v4/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v4/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v4/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v4/user-account/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v4/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v4/name')
  }

})

router.post('/lfd-home-ordering/v4/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/lfd-home-ordering/v4/call-us')
    } else {
        res.redirect('/lfd-home-ordering/v4/mobile-number')
    }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function (req, res) {
    let contactWithPositive = req.session.data['contact-with-positive']
    if (contactWithPositive == "No" ) {
        res.redirect('/lfd-home-ordering/v4/dct-unavailable')
    } else {
        res.redirect('/lfd-home-ordering/v4/notified-how')
    }

})

router.post('/lfd-home-ordering/v4/dct-opt-in', function (req, res) {
    let dctOptIn = req.session.data['dct-opt-in']
    if (dctOptIn == "No" ) {
        res.redirect('/lfd-home-ordering/v4/self-isolate')
    } else {
        res.redirect('/lfd-home-ordering/v4/name')
    }

})

router.post('/lfd-home-ordering/v4/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
        res.redirect('/lfd-home-ordering/v4/nhs-testing-programme')
    } else {
        res.redirect('/lfd-home-ordering/v4/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v4/nhs-testing-programme', function (req, res) {
    let programme = req.session.data['nhs-testing-programme']
    if (programme == "Yes" ) {
        res.redirect('/lfd-home-ordering/v4/work-area')
    } else {
        res.redirect('/lfd-home-ordering/v4/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v4/work-area', function (req, res) {
    let workArea = req.session.data['work-area']
    if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other" ) {
        res.redirect('/lfd-home-ordering/v4/work-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v4/trust')
    }

})

router.post('/lfd-home-ordering/v4/home-address-question', function (req, res) {
    let deliveryAddressSame = req.session.data['delivery-address-same']
    if (deliveryAddressSame == "No" ) {
        res.redirect('/lfd-home-ordering/v4/order-home-test-kit/delivery-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v4/order-home-test-kit/confirm-email-address')
    }

})

// Version 5 - LFD home ordering - testing version OUT rampdown research - multiple questions

router.post('/lfd-home-ordering/v5/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "No" ) {
      res.redirect('/lfd-home-ordering/v5/eligible-nhs')
    } else {
      res.redirect('/lfd-home-ordering/v5/different-test')
    }

})

router.post('/lfd-home-ordering/v5/eligible-nhs', function (req, res) {
    let symptoms = req.session.data['eligible-nhs']
    if (symptoms == "Yes" ) {
      res.redirect('/lfd-home-ordering/v5/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v5/eligible-care')
    }

})
router.post('/lfd-home-ordering/v5/eligible-care', function (req, res) {
    let symptoms = req.session.data['eligible-care']
    if (symptoms == "Yes" ) {
      res.redirect('/lfd-home-ordering/v5/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v5/eligible-prison-border')
    }

})
router.post('/lfd-home-ordering/v5/eligible-prison-border', function (req, res) {
    let symptoms = req.session.data['eligible-prison-border']
    if (symptoms == "Yes" ) {
      res.redirect('/lfd-home-ordering/v5/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v5/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v4/contact-with-positive', function (req, res) {
  let contactWithPositive = req.session.data['contact-with-positive']
  if (contactWithPositive == "No" ) {
    res.redirect('/lfd-home-ordering/v5/work-from-home')
  } else {
    res.redirect('/lfd-home-ordering/v5/daily-contact-testing')
  }

})

router.post('/lfd-home-ordering/v5/work-from-home', function (req, res) {
  let workFromHome = req.session.data['work-from-home']
  if (workFromHome == "Yes" ) {
    res.redirect('/lfd-home-ordering/v5/workplace-testing')
  } else {
    res.redirect('/lfd-home-ordering/v5/lft-unavailable')
  }

})

router.post('/lfd-home-ordering/v5/scottish-isles', function (req, res) {
    let scottishIsles = req.session.data['scottish-isles']
    if (!scottishIsles ) {
      res.redirect('/lfd-home-ordering/v5/scottish-isles-error')
    } else if (scottishIsles == "Yes" ) {
      res.redirect('/lfd-home-ordering/v5/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v5/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v5/workplace-testing', function (req, res) {
    let workplaceTesting = req.session.data['workplace-testing']
    if (workplaceTesting == "No" ) {
      res.redirect('/lfd-home-ordering/v5/coronavirus-account')
    } else {
      res.redirect('/lfd-home-ordering/v5/collect-your-tests')
    }

})

router.post('/lfd-home-ordering/v5/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-home-ordering/v5/user-account/login-email')
  } else {
    res.redirect('/lfd-home-ordering/v5/name')
  }

})

router.post('/lfd-home-ordering/v5/user-account/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v5/user-account/enter-password')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/create-password')
  }

})

router.post('/lfd-home-ordering/v5/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/lfd-home-ordering/v5/user-account/create-password-error')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/check-email')
  }
})

router.post('/lfd-home-ordering/v5/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-home-ordering/v5/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-home-ordering/v5/user-account/agreement')
  }
})

router.post('/lfd-home-ordering/v5/user-account/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-home-ordering/v5/check-your-answers')
  } else {
    res.redirect('/lfd-home-ordering/v5/name')
  }

})

router.post('/lfd-home-ordering/v5/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/lfd-home-ordering/v5/call-us')
    } else {
        res.redirect('/lfd-home-ordering/v5/mobile-number')
    }

})

router.post('/lfd-home-ordering/v5/contact-with-positive', function (req, res) {
    let contactWithPositive = req.session.data['contact-with-positive']
    if (contactWithPositive == "No" ) {
        res.redirect('/lfd-home-ordering/v5/dct-unavailable')
    } else {
        res.redirect('/lfd-home-ordering/v5/notified-how')
    }

})

router.post('/lfd-home-ordering/v5/dct-opt-in', function (req, res) {
    let dctOptIn = req.session.data['dct-opt-in']
    if (dctOptIn == "No" ) {
        res.redirect('/lfd-home-ordering/v5/self-isolate')
    } else {
        res.redirect('/lfd-home-ordering/v5/name')
    }

})

router.post('/lfd-home-ordering/v5/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
        res.redirect('/lfd-home-ordering/v5/nhs-testing-programme')
    } else {
        res.redirect('/lfd-home-ordering/v5/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v5/nhs-testing-programme', function (req, res) {
    let programme = req.session.data['nhs-testing-programme']
    if (programme == "Yes" ) {
        res.redirect('/lfd-home-ordering/v5/work-area')
    } else {
        res.redirect('/lfd-home-ordering/v5/check-your-answers')
    }

})

router.post('/lfd-home-ordering/v5/work-area', function (req, res) {
    let workArea = req.session.data['work-area']
    if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other" ) {
        res.redirect('/lfd-home-ordering/v5/work-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v5/trust')
    }

})

router.post('/lfd-home-ordering/v5/home-address-question', function (req, res) {
    let deliveryAddressSame = req.session.data['delivery-address-same']
    if (deliveryAddressSame == "No" ) {
        res.redirect('/lfd-home-ordering/v5/order-home-test-kit/delivery-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v5/order-home-test-kit/confirm-email-address')
    }

})


module.exports = router
