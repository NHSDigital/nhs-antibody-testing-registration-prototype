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

// Version 1 - Lite Registration Accounts- Mobile number route

router.post('/litereg-accounts/v1/action9/landline-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  let emailAddress = req.session.data['email']
  if (mobileNumber == "No" && emailAddress == "No" ) {
    res.redirect('/litereg-accounts/v1/call-us')
  } else {
    res.redirect('/litereg-accounts/v1/nhs-number-known')
  }

})

// Version 1 - Lite Registration Accounts - Who's taking the test route

router.post('/litereg-accounts/v1/action9/whos-taking-the-test', function (req, res) {
  let person = req.session.data['whos-taking-the-test']
  if (person == "myself") {
    res.redirect('/litereg-accounts/v1/coronavirus-account')
  } else {
    res.redirect('/litereg-accounts/v1/enter-barcode')
  }

})

router.post('/litereg-accounts/v1/action9/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/litereg-accounts/v1/user-account/login-email')
  } else {
    res.redirect('/litereg-accounts/v1/enter-barcode')
  }

})

// Version 1 - Lite Registration Accounts - enter barcode route

router.post('/litereg-accounts/v1/action9/enter-barcode', function (req, res) {
  let uniqueBarcode = req.session.data['kit-barcode-reference-1']
  if (uniqueBarcode == "LAMP") {
    res.redirect('/litereg-accounts/v1/which-university')
  } else {
    res.redirect('/litereg-accounts/v1/overseas-travel')
  }
})

// router.post('/litereg-accounts/v1/action9/enter-barcode', function (req, res) {
//   let uniqueBarcode = req.session.data['kit-barcode-reference-1']
//   if (uniqueBarcode == "LHE00000501") {
//     res.redirect('/litereg-accounts/v1/site-id')
//   } else if (uniqueBarcode == "COE00000501") {
//     res.redirect('/litereg-accounts/v1/royal-mail-barcode')
//   } else {
//     res.redirect('/litereg-accounts/v1/quarantine-question')
//   }
// })

// Version 1 - Lite Registration Accounts - Test date route

router.post('/litereg-accounts/v1/action9/test-date', function (req, res) {
  let emailAddress = req.session.data['email-address']
  if (emailAddress == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v1/do-you-have-symptoms')
  } else {
    res.redirect('/litereg-accounts/v1/name')
  }

})

// Version 1 - Lite Registration Accounts - Do you have symptoms route

router.post('/litereg-accounts/v1/action9/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes") {
    res.redirect('/litereg-accounts/v1/when-did-symptoms-start')
  } else {
    res.redirect('/litereg-accounts/v1/previous-infection')
  }

})

  // Version 2 - Lite Registration Accounts - Overseas travel route

  // router.post('/litereg-accounts/v1/action9/enter-barcode', function (req, res) {
  //   let uniqueBarcode = req.session.data['kit-barcode-reference-1']
  //   if (uniqueBarcode == "LHE00000501") {
  //     res.redirect('/litereg-accounts/v1/site-id')
  //   } else if (uniqueBarcode == "COE00000501") {
  //     res.redirect('/litereg-accounts/v1/royal-mail-barcode')
  //   } else {
  //     res.redirect('/litereg-accounts/v1/test-place')
  //   }
  // })

  router.post('/litereg-accounts/v1/action9/overseas-travel', function (req, res) {
    let overseasTravel = req.session.data['have-you-travelled-overseas']
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (overseasTravel == "Yes") {
      res.redirect('/litereg-accounts/v1/travel-route')
    } else if (uniqueBarcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v1/site-id')
    } else if (uniqueBarcode == "COE00000501") {
      res.redirect('/litereg-accounts/v1/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v1/test-place')
    }

  })

  router.post('/litereg-accounts/v1/action9/travelled-to', function (req, res) {
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (uniqueBarcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v1/site-id')
    } else if (uniqueBarcode == "COE00000501") {
      res.redirect('/litereg-accounts/v1/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v1/test-place')
    }

  })

// Version 2 - Lite Registration Accounts - First line of address and postcode route

  router.post('/litereg-accounts/v1/action9/address', function (req, res) {
  let emailAddress = req.session.data['email-address']
  let password = req.session.data['password']
  if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
    res.redirect('/litereg-accounts/v1/email-address')
  } else {
    res.redirect('/litereg-accounts/v1/email-address-account')
  }

})

// Version 1 - Lite Registration Accounts - Ethnic group route
router.post('/litereg-accounts/v1/action9/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/litereg-accounts/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/litereg-accounts/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/litereg-accounts/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/litereg-accounts/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/litereg-accounts/v1/ethnic-background-another')
  } else {
    res.redirect('/litereg-accounts/v1/currently-in-work')
  }

})

// Version 1 - Lite Registration Accounts - Currently in work route

router.post('/litereg-accounts/v1/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace" || inWork == "Yes - I travel to a workplace"){
    res.redirect('/litereg-accounts/v1/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university" || inWork == "Yes - I go to nursery, school, college or university"){
    res.redirect('/litereg-accounts/v1/study-grade')
  } else {
    res.redirect('/litereg-accounts/v1/do-you-have-symptoms')
  }

})

// Version 1 - Lite Registration Accounts - NHS number known route

router.post('/litereg-accounts/v1/action9/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/litereg-accounts/v1/nhs-number')
  } else {
    res.redirect('/litereg-accounts/v1/check-your-answers')
  }

})

// Version 1 - Lite Registration Accounts - Login email route
router.post('/litereg-accounts/v1/user-account/action9/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/litereg-accounts/v1/user-account/enter-password')
  } else {
    res.redirect('/litereg-accounts/v1/user-account/create-password')
  }

})

// Version 1 - Lite Registration Accounts - Home page testing route
router.post('/litereg-accounts/v1/action9/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == 'user@testing.co.uk'){
    res.redirect('/litereg-accounts/v1/test-place')
  } else {
    res.redirect('/litereg-accounts/v1/email-address-account')
  }

})

// Version 1 - Lite Registration Accounts - Create password route
router.post('/litereg-accounts/v1/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/litereg-accounts/v1/user-account/create-password-error')
  } else {
    res.redirect('/litereg-accounts/v1/user-account/check-email')
  }
})

// Version 1 - Lite Registration Accounts - check mobile route
router.post('/litereg-accounts/v1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/litereg-accounts/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/litereg-accounts/v1/user-account/agreement')
  }
})

// Version 1 - Lite Registration Accounts - test place route
router.post('/litereg-accounts/v1/action5/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  let quarantine = req.session.data['quarantine']
  if (testPlace == "At a test site or government quarantine hotel" && quarantine == "Yes") {
    res.redirect('/litereg-accounts/v1/trace-id')
  } else if (testPlace == "At a test site or government quarantine hotel" && quarantine == "No") {
    res.redirect('/litereg-accounts/v1/site-id')
  } else {
    res.redirect('/litereg-accounts/v1/royal-mail-barcode')
  }
})

// Version 1 - Lite Registration Accounts - site confirmation route
router.post('/litereg-accounts/v1/action9/site-confirmation', function (req, res) {
  let confirmSite = req.session.data['confirm-site']
  let barcode = req.session.data['kit-barcode-reference-1']
  if (confirmSite == "Yes" && barcode == "LHE00000501") {
    res.redirect('/litereg-accounts/v1/daily-contact-testing')
  } else if (confirmSite == "Yes" && barcode !== "LHE00000501") {
    res.redirect('/litereg-accounts/v1/test-date')
  } else {
    res.redirect('/litereg-accounts/v1/site-id')
  }
})

// Version 1 - Lite Registration Accounts - vaccine route
router.post('/litereg-accounts/v1/action7/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  let loginEmail = req.session.data['email-address']
  if (vaccine == "No" && loginEmail == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v1/check-your-answers')
  } else if (vaccine == "No" && loginEmail != "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v1/country')
  } else {
    res.redirect('/litereg-accounts/v1/vaccine-date')
  }
})

 // Version 1 - Lite Registration Accounts - vaccine date route
 router.post('/litereg-accounts/v1/action7/vaccine-date', function (req, res) {
  let loginEmail = req.session.data['email-address']
  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v1/check-your-answers')
  } else {
    res.redirect('/litereg-accounts/v1/country')
  }
})


// VERSION 2

// Version 2 - Lite Registration Accounts- Mobile number route

router.post('/litereg-accounts/v2/action9/landline-number', function (req, res) {
    let mobileNumber = req.session.data['mobile-number']
    let emailAddress = req.session.data['email']
    if (mobileNumber == "No" && emailAddress == "No" ) {
      res.redirect('/litereg-accounts/v2/call-us')
    } else {
      res.redirect('/litereg-accounts/v2/nhs-number-known')
    }

  })

  // Version 2 - Lite Registration Accounts - Who's taking the test route

  router.post('/litereg-accounts/v2/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/litereg-accounts/v2/coronavirus-account')
    } else {
      res.redirect('/litereg-accounts/v2/enter-barcode')
    }

  })

  router.post('/litereg-accounts/v2/action9/coronavirus-account', function (req, res) {
    let signin = req.session.data['coronavirus-account']
    if (signin == "Yes") {
      res.redirect('/litereg-accounts/v2/user-account/login-email')
    } else {
      res.redirect('/litereg-accounts/v2/enter-barcode')
    }

  })

  // Version 2 - Lite Registration Accounts - Test date route

  router.post('/litereg-accounts/v2/action9/test-date', function (req, res) {
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v2/do-you-have-symptoms')
    } else {
      res.redirect('/litereg-accounts/v2/name')
    }

  })

  // Version 2 - Lite Registration Accounts - Do you have symptoms route

  router.post('/litereg-accounts/v2/action9/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "Yes") {
      res.redirect('/litereg-accounts/v2/when-did-symptoms-start')
    } else {
      res.redirect('/litereg-accounts/v2/overseas-travel')
    }

  })

    // Version 2 - Lite Registration Accounts - Overseas travel route

    router.post('/litereg-accounts/v2/action9/overseas-travel', function (req, res) {
      let overseasTravel = req.session.data['have-you-travelled-overseas']
      if (overseasTravel == "Yes") {
        res.redirect('/litereg-accounts/v2/country-visited')
      } else {
        res.redirect('/litereg-accounts/v2/previous-infection')
      }

    })

  // Version 2 - Lite Registration Accounts - First line of address and postcode route

  router.post('/litereg-accounts/v2/action9/address', function (req, res) {
    let address = req.session.data['address']
    let postcode = req.session.data['home-postcode']
    if (!address|| !postcode) {
      res.redirect('/litereg-accounts/v2/address-error')
    } else {
      res.redirect('/litereg-accounts/v2/email-address')
    }

  })

  // Version 2 - Lite Registration Accounts - Ethnic group route
  router.post('/litereg-accounts/v2/action9/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/litereg-accounts/v2/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/litereg-accounts/v2/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/litereg-accounts/v2/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/litereg-accounts/v2/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/litereg-accounts/v2/ethnic-background-another')
    } else {
      res.redirect('/litereg-accounts/v2/currently-in-work')
    }

  })

  // Version 2 - Lite Registration Accounts - Currently in work route

  router.post('/litereg-accounts/v2/action9/currently-in-work', function (req, res) {
    let inWork = req.session.data['currently-in-work']
    if (inWork == "Yes - they travel to a workplace" || inWork == "Yes - I travel to a workplace"){
      res.redirect('/litereg-accounts/v2/industry')
    } else if (inWork == "Yes - they go to nursery, school, college or university" || inWork == "Yes - I go to nursery, school, college or university"){
      res.redirect('/litereg-accounts/v2/study-grade')
    } else {
      res.redirect('/litereg-accounts/v2/do-you-have-symptoms')
    }

  })

  // Version 2 - Lite Registration Accounts - NHS number known route

  router.post('/litereg-accounts/v2/action9/nhs-number-known', function (req, res) {
    let nhsNumberKnown = req.session.data['nhs-number-known']
    if (nhsNumberKnown == "Yes"){
      res.redirect('/litereg-accounts/v2/nhs-number')
    } else {
      res.redirect('/litereg-accounts/v2/check-your-answers')
    }

  })

  // Version 2 - Lite Registration Accounts - Login email route
  router.post('/litereg-accounts/v2/user-account/action9/login-email', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == "user@testing.co.uk"){
      res.redirect('/litereg-accounts/v2/user-account/enter-password')
    } else {
      res.redirect('/litereg-accounts/v2/user-account/create-password')
    }

  })

  // Version 2 - Lite Registration Accounts - Home page testing route
  router.post('/litereg-accounts/v2/action9/home-page', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == 'user@testing.co.uk'){
      res.redirect('/litereg-accounts/v2/test-place')
    } else {
      res.redirect('/litereg-accounts/v2/email-address-account')
    }

  })

  // Version 2 - Lite Registration Accounts - Create password route
  router.post('/litereg-accounts/v2/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/litereg-accounts/v2/user-account/create-password-error')
    } else {
      res.redirect('/litereg-accounts/v2/user-account/check-email')
    }
  })

  // Version 2 - Lite Registration Accounts - check mobile route
  router.post('/litereg-accounts/v2/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/litereg-accounts/v2/user-account/check-mobile-error')
    } else {
      res.redirect('/litereg-accounts/v2/user-account/agreement')
    }
  })

  // Version 2 - Lite Registration Accounts - unique test kit barcode route
  router.post('/litereg-accounts/v2/action9/enter-barcode', function (req, res) {
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (uniqueBarcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v2/site-id')
    } else if (uniqueBarcode == "COE00000501") {
      res.redirect('/litereg-accounts/v2/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v2/quarantine-question')
    }
  })

  // Version 2 - Lite Registration Accounts - test place route
  router.post('/litereg-accounts/v2/action9/test-place', function (req, res) {
    let testPlace = req.session.data['test-place']
    let quarantine = req.session.data['quarantine']
    if (testPlace == "At a test site or government quarantine hotel" && quarantine == "Yes") {
      res.redirect('/litereg-accounts/v2/trace-id')
    } else if (testPlace == "At a test site or government quarantine hotel" && quarantine == "No") {
      res.redirect('/litereg-accounts/v2/site-id')
    } else {
      res.redirect('/litereg-accounts/v2/royal-mail-barcode')
    }
  })

  // Version 2 - Lite Registration Accounts - daily contact testing route
  router.post('/litereg-accounts/v2/action9/daily-contact-testing', function (req, res) {
    let dailyContactTesting = req.session.data['daily-contact-testing']
    if (dailyContactTesting == "Yes") {
      res.redirect('/litereg-accounts/v2/reminders')
    } else {
      res.redirect('/litereg-accounts/v2/test-date')
    }
  })

  // Version 2 - Lite Registration Accounts - site confirmation route
  router.post('/litereg-accounts/v2/action9/site-confirmation', function (req, res) {
    let confirmSite = req.session.data['confirm-site']
    let barcode = req.session.data['kit-barcode-reference-1']
    if (confirmSite == "Yes" && barcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v2/daily-contact-testing')
    } else if (confirmSite == "Yes" && barcode !== "LHE00000501") {
      res.redirect('/litereg-accounts/v2/test-date')
    } else {
      res.redirect('/litereg-accounts/v2/site-id')
    }
  })

  // Version 2 - Lite Registration Accounts - vaccine route
  router.post('/litereg-accounts/v2/action7/vaccine', function (req, res) {
    let vaccine = req.session.data['vaccine']
    let loginEmail = req.session.data['email-address']
    if (vaccine == "No" && loginEmail == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v2/check-your-answers')
    } else if (vaccine == "No" && loginEmail != "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v2/country')
    } else {
      res.redirect('/litereg-accounts/v2/vaccine-date')
    }
  })

   // Version 2 - Lite Registration Accounts - vaccine date route
   router.post('/litereg-accounts/v2/action7/vaccine-date', function (req, res) {
    let loginEmail = req.session.data['email-address']
    if (loginEmail == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v2/check-your-answers')
    } else {
      res.redirect('/litereg-accounts/v2/country')
    }
  })




// VERSION 3

// Version 3 - Lite Registration Accounts- Mobile number route

router.post('/litereg-accounts/v3/action9/landline-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  let emailAddress = req.session.data['email']
  if (mobileNumber == "No" && emailAddress == "No" ) {
    res.redirect('/litereg-accounts/v3/call-us')
  } else {
    res.redirect('/litereg-accounts/v3/nhs-number-known')
  }

})

// Version 3 - Lite Registration Accounts - Who's taking the test route

router.post('/litereg-accounts/v3/action9/whos-taking-the-test', function (req, res) {
  let person = req.session.data['whos-taking-the-test']
  if (person == "myself") {
    res.redirect('/litereg-accounts/v3/coronavirus-account')
  } else {
    res.redirect('/litereg-accounts/v3/enter-barcode')
  }

})

router.post('/litereg-accounts/v3/action9/coronavirus-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/litereg-accounts/v3/user-account/login-email')
  } else {
    res.redirect('/litereg-accounts/v3/enter-barcode')
  }

})

// Version 1 - Lite Registration Accounts - enter barcode route

router.post('/litereg-accounts/v3/action9/enter-barcode', function (req, res) {
  let uniqueBarcode = req.session.data['kit-barcode-reference-1']
  if (uniqueBarcode == "LAMP") {
    res.redirect('/litereg-accounts/v3/which-university')
  } else {
    res.redirect('/litereg-accounts/v3/overseas-travel')
  }
})

// router.post('/litereg-accounts/v3/action9/enter-barcode', function (req, res) {
//   let uniqueBarcode = req.session.data['kit-barcode-reference-1']
//   if (uniqueBarcode == "LHE00000501") {
//     res.redirect('/litereg-accounts/v3/site-id')
//   } else if (uniqueBarcode == "COE00000501") {
//     res.redirect('/litereg-accounts/v3/royal-mail-barcode')
//   } else {
//     res.redirect('/litereg-accounts/v3/quarantine-question')
//   }
// })

// Version 3 - Lite Registration Accounts - Test date route

router.post('/litereg-accounts/v3/action9/test-date', function (req, res) {
  let emailAddress = req.session.data['email-address']
  if (emailAddress == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v3/do-you-have-symptoms')
  } else {
    res.redirect('/litereg-accounts/v3/name')
  }

})

// Version 3 - Lite Registration Accounts - Do you have symptoms route

router.post('/litereg-accounts/v3/action9/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes") {
    res.redirect('/litereg-accounts/v3/when-did-symptoms-start')
  } else {
    res.redirect('/litereg-accounts/v3/previous-infection')
  }

})

  // Version 2 - Lite Registration Accounts - Overseas travel route

  // router.post('/litereg-accounts/v3/action9/enter-barcode', function (req, res) {
  //   let uniqueBarcode = req.session.data['kit-barcode-reference-1']
  //   if (uniqueBarcode == "LHE00000501") {
  //     res.redirect('/litereg-accounts/v3/site-id')
  //   } else if (uniqueBarcode == "COE00000501") {
  //     res.redirect('/litereg-accounts/v3/royal-mail-barcode')
  //   } else {
  //     res.redirect('/litereg-accounts/v3/test-place')
  //   }
  // })

  router.post('/litereg-accounts/v3/action9/overseas-travel', function (req, res) {
    let overseasTravel = req.session.data['have-you-travelled-overseas']
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (overseasTravel == "Yes") {
      res.redirect('/litereg-accounts/v3/travel-route')
    } else if (uniqueBarcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v3/site-id')
    } else if (uniqueBarcode == "COE00000501") {
      res.redirect('/litereg-accounts/v3/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v3/test-place')
    }

  })

  router.post('/litereg-accounts/v3/action9/travelled-to', function (req, res) {
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (uniqueBarcode == "LHE00000501") {
      res.redirect('/litereg-accounts/v3/site-id')
    } else if (uniqueBarcode == "COE00000501") {
      res.redirect('/litereg-accounts/v3/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v3/test-place')
    }

  })

// Version 3 - Lite Registration Accounts - First line of address and postcode route

  router.post('/litereg-accounts/v3/action9/address', function (req, res) {
  let emailAddress = req.session.data['email-address']
  let password = req.session.data['password']
  if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
    res.redirect('/litereg-accounts/v3/email-address')
  } else {
    res.redirect('/litereg-accounts/v3/email-address-account')
  }

})

// Version 3 - Lite Registration Accounts - Ethnic group route
router.post('/litereg-accounts/v3/action9/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/litereg-accounts/v3/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/litereg-accounts/v3/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/litereg-accounts/v3/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/litereg-accounts/v3/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/litereg-accounts/v3/ethnic-background-another')
  } else {
    res.redirect('/litereg-accounts/v3/currently-in-work')
  }

})

// Version 3 - Lite Registration Accounts - Currently in work route

router.post('/litereg-accounts/v3/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace" || inWork == "Yes - I travel to a workplace"){
    res.redirect('/litereg-accounts/v3/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university" || inWork == "Yes - I go to nursery, school, college or university"){
    res.redirect('/litereg-accounts/v3/study-grade')
  } else {
    res.redirect('/litereg-accounts/v3/do-you-have-symptoms')
  }

})

// Version 3 - Lite Registration Accounts - GP address same route

router.post('/litereg-accounts/v3/action/gp-address-same', function (req, res) {
  let gpAdressSame = req.session.data['gp-address-same']
  if (gpAdressSame == "No"){
    res.redirect('/litereg-accounts/v3/address')
  } else {
    res.redirect('/litereg-accounts/v3/email-address')
  }
})

// Version 3 - Lite Registration Accounts - NHS number known route

router.post('/litereg-accounts/v3/action9/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/litereg-accounts/v3/nhs-number')
  } else {
    res.redirect('/litereg-accounts/v3/fingerprick-test')
  }

})

// Version 3 - Lite Registration Accounts - Login email route
router.post('/litereg-accounts/v3/user-account/action9/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/litereg-accounts/v3/user-account/enter-password')
  } else {
    res.redirect('/litereg-accounts/v3/user-account/create-password')
  }

})

// Version 3 - Lite Registration Accounts - Home page testing route
router.post('/litereg-accounts/v3/action9/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == 'user@testing.co.uk'){
    res.redirect('/litereg-accounts/v3/test-place')
  } else {
    res.redirect('/litereg-accounts/v3/email-address-account')
  }

})

// Version 3 - Lite Registration Accounts - Create password route
router.post('/litereg-accounts/v3/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/litereg-accounts/v3/user-account/create-password-error')
  } else {
    res.redirect('/litereg-accounts/v3/user-account/check-email')
  }
})

// Version 3 - Lite Registration Accounts - check mobile route
router.post('/litereg-accounts/v3/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/litereg-accounts/v3/user-account/check-mobile-error')
  } else {
    res.redirect('/litereg-accounts/v3/user-account/agreement')
  }
})

// Version 3 - Lite Registration Accounts - test place route
router.post('/litereg-accounts/v3/action5/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  let quarantine = req.session.data['quarantine']
  if (testPlace == "At a test site or government quarantine hotel" && quarantine == "Yes") {
    res.redirect('/litereg-accounts/v3/trace-id')
  } else if (testPlace == "At a test site or government quarantine hotel" && quarantine == "No") {
    res.redirect('/litereg-accounts/v3/site-id')
  } else {
    res.redirect('/litereg-accounts/v3/royal-mail-barcode')
  }
})

// Version 3 - Lite Registration Accounts - site confirmation route
router.post('/litereg-accounts/v3/action9/site-confirmation', function (req, res) {
  let confirmSite = req.session.data['confirm-site']
  let barcode = req.session.data['kit-barcode-reference-1']
  if (confirmSite == "Yes" && barcode == "LHE00000501") {
    res.redirect('/litereg-accounts/v3/daily-contact-testing')
  } else if (confirmSite == "Yes" && barcode !== "LHE00000501") {
    res.redirect('/litereg-accounts/v3/test-date')
  } else {
    res.redirect('/litereg-accounts/v3/site-id')
  }
})

// Version 3 - Lite Registration Accounts - vaccine route
router.post('/litereg-accounts/v3/action7/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  let loginEmail = req.session.data['email-address']
  if (vaccine == "No" && loginEmail == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v3/fingerprick-test')
  } else if (vaccine == "No" && loginEmail != "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v3/country')
  } else {
    res.redirect('/litereg-accounts/v3/vaccine-date')
  }
})

 // Version 3 - Lite Registration Accounts - vaccine date route
 router.post('/litereg-accounts/v3/action7/vaccine-date', function (req, res) {
  let loginEmail = req.session.data['email-address']
  if (loginEmail == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v3/check-your-answers')
  } else {
    res.redirect('/litereg-accounts/v3/country')
  }
})






// Version 8.2 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v8-2/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v8-2/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v8-2/home-org-use')
    }
  })

  // Version 8.2 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v8-2/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/check-email')
  }
})

  // Version 8.2 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v8-2/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/agreement')
  }
})

// Version 8.2 - LDF self report accounts  - Ethnic group route
router.post('/share-result-lateral-flow/v8-2/action7/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/ethnic-background-another')
  } else {
    res.redirect('/share-result-lateral-flow/v8-2/user-account/edit-personal-details/currently-in-work')
  }

})


// Version 8.3 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v8-3/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v8-3/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v8-3/home-org-use')
    }
  })

  // Version 8.3 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v8-3/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/check-email')
  }
})

  // Version 8.3 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v8-3/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/agreement')
  }
})

// Version 8.3 - LDF self report accounts  - Ethnic group route
router.post('/share-result-lateral-flow/v8-3/action7/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/ethnic-background-another')
  } else {
    res.redirect('/share-result-lateral-flow/v8-3/user-account/edit-personal-details/currently-in-work')
  }

})


// Version 9-1 - LDF self report accounts - Who's taking the test route

router.post('/share-result-lateral-flow/v9-1/action9/whos-taking-the-test', function (req, res) {
  let person = req.session.data['whos-taking-the-test']
  if (person == "myself") {
    res.redirect('/share-result-lateral-flow/v9-1/coronavirus-account')
  } else {
    res.redirect('/share-result-lateral-flow/v9-1/home-org-use')
  }
})

// Version 9-1 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v9-1/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/check-email')
  }
  })

  // Version 9-1 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v9-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/agreement')
  }
})


  // Version 9-3 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v9-3/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v9-3/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v9-3/home-org-use')
    }
  })

  // Version 9-3 - LDF self report accounts - Create password route

  router.post('/share-result-lateral-flow/v9-3/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/share-result-lateral-flow/v9-3/user-account/create-password-error')
    } else {
      res.redirect('/share-result-lateral-flow/v9-3/user-account/check-email')
    }
    })

    // Version 9-3 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v9-3/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/share-result-lateral-flow/v9-3/user-account/check-mobile-error')
    } else {
      res.redirect('/share-result-lateral-flow/v9-3/user-account/agreement')
    }
  })

  // Version 9-4 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v9-4/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v9-4/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v9-4/name')
    }
  })

  // Version 9-4 - LDF self report accounts - Create password route

  router.post('/share-result-lateral-flow/v9-4/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/share-result-lateral-flow/v9-4/user-account/create-password-error')
    } else {
      res.redirect('/share-result-lateral-flow/v9-4/user-account/check-email')
    }
    })

    // Version 9-4 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v9-4/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/share-result-lateral-flow/v9-4/user-account/check-mobile-error')
    } else {
      res.redirect('/share-result-lateral-flow/v9-4/user-account/agreement')
    }
  })


  // Version 10 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v9-2/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v9-2/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-2/user-account/agreement')
  }
  })

// Version 10 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v10/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v10/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v10/home-org-use')
    }
  })

// Version 10 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v10/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v10/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v10/user-account/check-email')
}
})


  // Version 10 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v9-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/agreement')
  }
  })




// Version 11 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v11/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v11/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v11/home-org-use')
    }
  })

// Version 11 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v11/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v11/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v11/user-account/check-email')
}
})

// Version 11 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v11/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v11/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v11/user-account/agreement')
}
})



// Version 12 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v12/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v12/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v12/home-org-use')
    }
  })

// Version 12 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v12/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v12/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v12/user-account/check-email')
}
})

// Version 12 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v12/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v12/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v12/user-account/agreement')
}
})

// Version 13 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v13/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v13/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v13/home-org-use')
    }
  })

// Version 13 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v13/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v13/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v13/user-account/check-email')
}
})

// Version 13 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v13/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v13/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v13/user-account/agreement')
}
})

// Version 15 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v15/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v15/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v15/home-org-use')
    }
  })

// Version 15 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v15/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v15/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v15/user-account/check-email')
}
})

// Version 15 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v15/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v15/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v15/user-account/agreement')
}
})

// Version 16 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v16/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v16/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v16/home-org-use')
    }
  })

// Version 16 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v16/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v16/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v16/user-account/check-email')
}
})

// Version 16 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v16/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v16/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v16/user-account/agreement')
}
})


// Version 16-1 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v16-1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v16-1/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v16-1/home-org-use')
    }
  })

// Version 16-1 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v16-1/action9/create-password', function (req, res) {
let password = req.session.data['password']
let confirmPassword = req.session.data['confirm-password']
if (password == "" || confirmPassword == "") {
  res.redirect('/share-result-lateral-flow/v16-1/user-account/create-password-error')
} else {
  res.redirect('/share-result-lateral-flow/v16-1/user-account/check-email')
}
})

// Version 16-1 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/16-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/16-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/16-1/user-account/agreement')
  }
})

  // Version 17 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v17/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v17/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v17/country')
    }
  })

  // Version 17 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v17/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v17/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v17/user-account/check-email')
  }
  })

// Version 17 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v17/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v17/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v17/user-account/agreement')
  }
  })


  // Version 17.1 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v17-1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v17-1/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v17-1/country')
    }
  })

  // Version 17.1 - LDF self report accounts - Create password route

  router.post('/share-result-lateral-flow/v17-1/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v17-1/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v17-1/user-account/check-email')
  }
  })

  // Version 17.1 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v17-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v17-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v17-1/user-account/agreement')
  }
  })


  // Version 18 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v18/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v18/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v18/home-org-use')
    }
  })

  // Version 18 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v18/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v18/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v18/user-account/check-email')
  }
  })

// Version 18 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v18/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v18/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v18/user-account/agreement')
  }
  })

  // Version 18.1 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v18-1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v18-1/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v18-1/home-org-use')
    }
  })

  // Version 18.1 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v18-1/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v18-1/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v18-1/user-account/check-email')
  }
  })

// Version 18.1 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v18-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v18-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v18-1/user-account/agreement')
  }
  })


  // Version 19 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v19/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v19/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v19/home-org-use')
    }
  })

  // Version 19 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v19/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v19/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19/user-account/check-email')
  }
  })

// Version 19 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v19/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v19/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19/user-account/agreement')
  }
  })


  // Version 19.1 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v19-1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v19-1/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v19-1/home-org-use')
    }
  })

  // Version 19.1 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v19-1/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v19-1/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19-1/user-account/check-email')
  }
  })

// Version 19.1 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v19-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v19-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19-1/user-account/agreement')
  }
  })

  // Version 19.2 - LDF self report accounts - Who's taking the test route

  router.post('/share-result-lateral-flow/v19-2/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/share-result-lateral-flow/v19-2/coronavirus-account')
    } else {
      res.redirect('/share-result-lateral-flow/v19-2/home-org-use')
    }
  })

  // Version 19.2 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v19-2/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v19-2/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19-2/user-account/check-email')
  }
  })

// Version 19.2 - LDF self report accounts - check mobile route
router.post('/share-result-lateral-flow/v19-2/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v19-2/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v19-2/user-account/agreement')
  }
  })


  // Version 19.3 - LDF self report accounts - Who's taking the test route

    router.post('/share-result-lateral-flow/v19-3/action9/whos-taking-the-test', function (req, res) {
      let person = req.session.data['whos-taking-the-test']
      if (person == "myself") {
        res.redirect('/share-result-lateral-flow/v19-3/coronavirus-account')
      } else {
        res.redirect('/share-result-lateral-flow/v19-3/home-org-use')
      }
    })

    // Version 19.3 - LDF self report accounts - Create password route

  router.post('/share-result-lateral-flow/v19-3/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/share-result-lateral-flow/v19-3/user-account/create-password-error')
    } else {
      res.redirect('/share-result-lateral-flow/v19-3/user-account/check-email')
    }
    })

  // Version 19.3 - LDF self report accounts - check mobile route

  router.post('/share-result-lateral-flow/v19-3/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/share-result-lateral-flow/v19-3/user-account/check-mobile-error')
    } else {
      res.redirect('/share-result-lateral-flow/v19-3/user-account/agreement')
    }
    })

    // Version 19.4 - LDF self report accounts - Who's taking the test route

      router.post('/share-result-lateral-flow/v19-4/action9/whos-taking-the-test', function (req, res) {
        let person = req.session.data['whos-taking-the-test']
        if (person == "myself") {
          res.redirect('/share-result-lateral-flow/v19-4/coronavirus-account')
        } else {
          res.redirect('/share-result-lateral-flow/v19-4/home-org-use')
        }
      })

      // Version 19.4 - LDF self report accounts - Create password route

    router.post('/share-result-lateral-flow/v19-4/action9/create-password', function (req, res) {
      let password = req.session.data['password']
      let confirmPassword = req.session.data['confirm-password']
      if (password == "" || confirmPassword == "") {
        res.redirect('/share-result-lateral-flow/v19-4/user-account/create-password-error')
      } else {
        res.redirect('/share-result-lateral-flow/v19-4/user-account/check-email')
      }
      })

    // Version 19.4 - LDF self report accounts - check mobile route

    router.post('/share-result-lateral-flow/v19-4/action9/check-mobile', function (req, res) {
      let securityCode = req.session.data['security-code']
      if (securityCode == "") {
        res.redirect('/share-result-lateral-flow/v19-4/user-account/check-mobile-error')
      } else {
        res.redirect('/share-result-lateral-flow/v19-4/user-account/agreement')
      }
      })


      // Version 19.5 - LDF self report accounts - Who's taking the test route

        router.post('/share-result-lateral-flow/v19-5/action9/whos-taking-the-test', function (req, res) {
          let person = req.session.data['whos-taking-the-test']
          if (person == "myself") {
            res.redirect('/share-result-lateral-flow/v19-5/coronavirus-account')
          } else {
            res.redirect('/share-result-lateral-flow/v19-5/home-org-use')
          }
        })

        // Version 19.5 - LDF self report accounts - Create password route

      router.post('/share-result-lateral-flow/v19-5/action9/create-password', function (req, res) {
        let password = req.session.data['password']
        let confirmPassword = req.session.data['confirm-password']
        if (password == "" || confirmPassword == "") {
          res.redirect('/share-result-lateral-flow/v19-5/user-account/create-password-error')
        } else {
          res.redirect('/share-result-lateral-flow/v19-5/user-account/check-email')
        }
        })

      // Version 19.5 - LDF self report accounts - check mobile route

      router.post('/share-result-lateral-flow/v19-5/action9/check-mobile', function (req, res) {
        let securityCode = req.session.data['security-code']
        if (securityCode == "") {
          res.redirect('/share-result-lateral-flow/v19-5/user-account/check-mobile-error')
        } else {
          res.redirect('/share-result-lateral-flow/v19-5/user-account/agreement')
        }
        })

        // Version 19.6 - LDF self report accounts - Who's taking the test route

          router.post('/share-result-lateral-flow/v19-6/action9/whos-taking-the-test', function (req, res) {
            let person = req.session.data['whos-taking-the-test']
            if (person == "myself") {
              res.redirect('/share-result-lateral-flow/v19-6/coronavirus-account')
            } else {
              res.redirect('/share-result-lateral-flow/v19-6/home-org-use')
            }
          })

          // Version 19.6 - LDF self report accounts - Create password route

        router.post('/share-result-lateral-flow/v19-6/action9/create-password', function (req, res) {
          let password = req.session.data['password']
          let confirmPassword = req.session.data['confirm-password']
          if (password == "" || confirmPassword == "") {
            res.redirect('/share-result-lateral-flow/v19-6/user-account/create-password-error')
          } else {
            res.redirect('/share-result-lateral-flow/v19-6/user-account/check-email')
          }
          })

        // Version 19.6 - LDF self report accounts - check mobile route

        router.post('/share-result-lateral-flow/v19-6/action9/check-mobile', function (req, res) {
          let securityCode = req.session.data['security-code']
          if (securityCode == "") {
            res.redirect('/share-result-lateral-flow/v19-6/user-account/check-mobile-error')
          } else {
            res.redirect('/share-result-lateral-flow/v19-6/user-account/agreement')
          }
          })

          // Version 19.7 - LDF self report accounts - Who's taking the test route

            router.post('/share-result-lateral-flow/v19-7/action9/whos-taking-the-test', function (req, res) {
              let person = req.session.data['whos-taking-the-test']
              if (person == "myself") {
                res.redirect('/share-result-lateral-flow/v19-7/coronavirus-account')
              } else {
                res.redirect('/share-result-lateral-flow/v19-7/home-org-use')
              }
            })

            // Version 19.7 - LDF self report accounts - Create password route

          router.post('/share-result-lateral-flow/v19-7/action9/create-password', function (req, res) {
            let password = req.session.data['password']
            let confirmPassword = req.session.data['confirm-password']
            if (password == "" || confirmPassword == "") {
              res.redirect('/share-result-lateral-flow/v19-7/user-account/create-password-error')
            } else {
              res.redirect('/share-result-lateral-flow/v19-7/user-account/check-email')
            }
            })

          // Version 19.7 - LDF self report accounts - check mobile route

          router.post('/share-result-lateral-flow/v19-7/action9/check-mobile', function (req, res) {
            let securityCode = req.session.data['security-code']
            if (securityCode == "") {
              res.redirect('/share-result-lateral-flow/v19-7/user-account/check-mobile-error')
            } else {
              res.redirect('/share-result-lateral-flow/v19-7/user-account/agreement')
            }
            })


            // Version 19.8 - LDF self report accounts - Who's taking the test route

              router.post('/share-result-lateral-flow/v19-8/action9/whos-taking-the-test', function (req, res) {
                let person = req.session.data['whos-taking-the-test']
                if (person == "myself") {
                  res.redirect('/share-result-lateral-flow/v19-8/coronavirus-account')
                } else {
                  res.redirect('/share-result-lateral-flow/v19-8/home-org-use')
                }
              })

              // Version 19.8 - LDF self report accounts - Create password route

            router.post('/share-result-lateral-flow/v19-8/action9/create-password', function (req, res) {
              let password = req.session.data['password']
              let confirmPassword = req.session.data['confirm-password']
              if (password == "" || confirmPassword == "") {
                res.redirect('/share-result-lateral-flow/v19-8/user-account/create-password-error')
              } else {
                res.redirect('/share-result-lateral-flow/v19-8/user-account/check-email')
              }
              })

            // Version 19.8 - LDF self report accounts - check mobile route

            router.post('/share-result-lateral-flow/v19-8/action9/check-mobile', function (req, res) {
              let securityCode = req.session.data['security-code']
              if (securityCode == "") {
                res.redirect('/share-result-lateral-flow/v19-8/user-account/check-mobile-error')
              } else {
                res.redirect('/share-result-lateral-flow/v19-8/user-account/agreement')
              }
              })


              // Version 19.9 - LDF self report accounts - Who's taking the test route

                router.post('/share-result-lateral-flow/v19-9/action9/whos-taking-the-test', function (req, res) {
                  let person = req.session.data['whos-taking-the-test']
                  if (person == "myself") {
                    res.redirect('/share-result-lateral-flow/v19-9/coronavirus-account')
                  } else {
                    res.redirect('/share-result-lateral-flow/v19-9/test-for-work')
                  }
                })

                // Version 19.9 - LDF self report accounts - Create password route

              router.post('/share-result-lateral-flow/v19-9/action9/create-password', function (req, res) {
                let password = req.session.data['password']
                let confirmPassword = req.session.data['confirm-password']
                if (password == "" || confirmPassword == "") {
                  res.redirect('/share-result-lateral-flow/v19-9/user-account/create-password-error')
                } else {
                  res.redirect('/share-result-lateral-flow/v19-9/user-account/check-email')
                }
                })

              // Version 19.9 - LDF self report accounts - check mobile route

              router.post('/share-result-lateral-flow/v19-9/action9/check-mobile', function (req, res) {
                let securityCode = req.session.data['security-code']
                if (securityCode == "") {
                  res.redirect('/share-result-lateral-flow/v19-9/user-account/check-mobile-error')
                } else {
                  res.redirect('/share-result-lateral-flow/v19-9/user-account/agreement')
                }
                })


          // Version 20 - LDF self report accounts - Who's taking the test route

          router.post('/share-result-lateral-flow/v20/action9/whos-taking-the-test', function (req, res) {
            let person = req.session.data['whos-taking-the-test']
            if (person == "myself") {
              res.redirect('/share-result-lateral-flow/v20/home-org-use')
            } else {
              res.redirect('/share-result-lateral-flow/v20/home-org-use')
            }
          })

          // Version 21 - LDF self report accounts - Who's taking the test route

          router.post('/share-result-lateral-flow/v21/action9/whos-taking-the-test', function (req, res) {
            let person = req.session.data['whos-taking-the-test']
            if (person == "myself") {
              res.redirect('/share-result-lateral-flow/v21/coronavirus-account')
            } else {
              res.redirect('/share-result-lateral-flow/v21/country')
            }
          })

          // Version 21 - LDF self report accounts - Create password route

          router.post('/share-result-lateral-flow/v21/action9/create-password', function (req, res) {
          let password = req.session.data['password']
          let confirmPassword = req.session.data['confirm-password']
          if (password == "" || confirmPassword == "") {
            res.redirect('/share-result-lateral-flow/v21/user-account/create-password-error')
          } else {
            res.redirect('/share-result-lateral-flow/v21/user-account/check-email')
          }
          })

          // Version 21 - LDF self report accounts - check mobile route
          router.post('/share-result-lateral-flow/v21/action9/check-mobile', function (req, res) {
          let securityCode = req.session.data['security-code']
          if (securityCode == "") {
            res.redirect('/share-result-lateral-flow/v21/user-account/check-mobile-error')
          } else {
            res.redirect('/share-result-lateral-flow/v21/user-account/agreement')
          }
          })

          // Version 22 - LDF self report accounts - Create password route

          router.post('/share-result-lateral-flow/v22/action9/create-password', function (req, res) {
          let password = req.session.data['password']
          let confirmPassword = req.session.data['confirm-password']
          if (password == "" || confirmPassword == "") {
            res.redirect('/share-result-lateral-flow/v22/user-account/create-password-error')
          } else {
            res.redirect('/share-result-lateral-flow/v22/user-account/check-email')
          }
          })

          // Version 22 - LDF self report accounts - check mobile route
          router.post('/share-result-lateral-flow/v22/action9/check-mobile', function (req, res) {
          let securityCode = req.session.data['security-code']
          if (securityCode == "") {
            res.redirect('/share-result-lateral-flow/v22/user-account/check-mobile-error')
          } else {
            res.redirect('/share-result-lateral-flow/v22/user-account/agreement')
          }
          })

          // Version 23 - LDF self report accounts - Create password route

          router.post('/share-result-lateral-flow/v23/action9/create-password', function (req, res) {
          let password = req.session.data['password']
          let confirmPassword = req.session.data['confirm-password']
          if (password == "" || confirmPassword == "") {
            res.redirect('/share-result-lateral-flow/v23/user-account/create-password-error')
          } else {
            res.redirect('/share-result-lateral-flow/v23/user-account/check-email')
          }
          })

          // Version 23 - LDF self report accounts - check mobile route
          router.post('/share-result-lateral-flow/v23/action9/check-mobile', function (req, res) {
          let securityCode = req.session.data['security-code']
          if (securityCode == "") {
            res.redirect('/share-result-lateral-flow/v23/user-account/check-mobile-error')
          } else {
            res.redirect('/share-result-lateral-flow/v23/user-account/agreement')
          }
          })

          // Version 24 - LDF self report accounts - Who's taking the test route

          router.post('/share-result-lateral-flow/v24/action9/whos-taking-the-test', function (req, res) {
            let person = req.session.data['whos-taking-the-test']
            if (person == "myself") {
              res.redirect('/share-result-lateral-flow/v24/coronavirus-account')
            } else {
              res.redirect('/share-result-lateral-flow/v24/country')
            }
          })

          // Version 24 - LDF self report accounts - Create password route

          router.post('/share-result-lateral-flow/v24/action9/create-password', function (req, res) {
          let password = req.session.data['password']
          let confirmPassword = req.session.data['confirm-password']
          if (password == "" || confirmPassword == "") {
            res.redirect('/share-result-lateral-flow/v24/user-account/create-password-error')
          } else {
            res.redirect('/share-result-lateral-flow/v24/user-account/check-email')
          }
          })

          // Version 24 - LDF self report accounts - check mobile route
          router.post('/share-result-lateral-flow/v24/action9/check-mobile', function (req, res) {
          let securityCode = req.session.data['security-code']
          if (securityCode == "") {
            res.redirect('/share-result-lateral-flow/v24/user-account/check-mobile-error')
          } else {
            res.redirect('/share-result-lateral-flow/v24/user-account/agreement')
          }
          })


module.exports = router
