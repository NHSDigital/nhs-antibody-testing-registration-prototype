const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

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
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v1/check-your-answers')
    } else {
      res.redirect('/litereg-accounts/v1/country')
    }

  })

    // Version 1 - Lite Registration Accounts - Do you have symptoms route

    router.post('/litereg-accounts/v1/action9/when-did-symptoms-start', function (req, res) {
      let emailAddress = req.session.data['email-address']
      if (emailAddress == "user@testing.co.uk") {
        res.redirect('/litereg-accounts/v1/check-your-answers')
      } else {
        res.redirect('/litereg-accounts/v1/country')
      }

    })

  // router.post('/litereg-accounts/v1/action9/do-you-have-symptoms', function (req, res) {
  //   let emailAddress = req.session.data['email-address']
  //   let password = req.session.data['password']
  //   if (emailAddress == "user@testing.co.uk") {
  //     res.redirect('/litereg-accounts/v1/check-your-answers')
  //   } else if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
  //     res.redirect('/litereg-accounts/v1/email-address')
  //   } else {
  //     res.redirect('/litereg-accounts/v1/email-address-account')
  //   }

  // })

  // Version 1 - Lite Registration Accounts - First line of address and postcode route

  //   router.post('/litereg-accounts/v1/action9/address', function (req, res) {
  //   let emailAddress = req.session.data['email-address']
  //   let password = req.session.data['password']
  //   if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
  //     res.redirect('/litereg-accounts/v1/email-address')
  //   } else {
  //     res.redirect('/litereg-accounts/v1/email-address-account')
  //   }

  // })

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

  // Version 1 - Lite Registration Accounts - Country route

  // router.post('/litereg-accounts/v1/action9/country', function (req, res) {
  //   let country = req.session.data['country']
  //   if (country == "Northern Ireland"){
  //     res.redirect('/litereg-accounts/v1/address')
  //   } else {
  //     res.redirect('/litereg-accounts/v1/postcode')
  //   }

  // })

  // Version 1 - Lite Registration lateral flow with Accounts - NHS number known route

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

  // Version 2 - Lite Registration Accounts - Reapeat testing route
  // router.post('/litereg-accounts/v2/action9/repeat-testing', function (req, res) {
  //   let emailAddress = req.session.data['email-address']
  //   if (emailAddress == "user@testing.co.uk") {
  //     res.redirect('/litereg-accounts/v2/do-you-have-symptoms')
  //   } else {
  //     res.redirect('/litereg-accounts/v2/name')
  //   }
  // })

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
        res.redirect('/litereg-accounts/v2/vaccine')
      }
  
    })

  // router.post('/litereg-accounts/v2/action9/do-you-have-symptoms', function (req, res) {
  //   let emailAddress = req.session.data['email-address']
  //   let password = req.session.data['password']
  //   if (emailAddress == "user@testing.co.uk") {
  //     res.redirect('/litereg-accounts/v2/check-your-answers')
  //   } else if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
  //     res.redirect('/litereg-accounts/v2/email-address')
  //   } else {
  //     res.redirect('/litereg-accounts/v2/email-address-account')
  //   }

  // })

  // Version 2 - Lite Registration Accounts - First line of address and postcode route

    router.post('/litereg-accounts/v2/action9/address', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
      res.redirect('/litereg-accounts/v2/email-address')
    } else {
      res.redirect('/litereg-accounts/v2/email-address-account')
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

  // Version 2 - Lite Registration Accounts - Country route

  // router.post('/litereg-accounts/v2/action9/country', function (req, res) {
  //   let country = req.session.data['country']
  //   if (country == "Northern Ireland"){
  //     res.redirect('/litereg-accounts/v2/address')
  //   } else {
  //     res.redirect('/litereg-accounts/v2/postcode')
  //   }

  // })

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
      res.redirect('/litereg-accounts/v2/test-place')
    }
  })

  // Version 2 - Lite Registration Accounts - test place route
  router.post('/litereg-accounts/v2/action9/test-place', function (req, res) {
    let testPlace = req.session.data['test-place']
    if (testPlace == "At home" || testPlace == "In quarantine after international travel at home or an accommodation of your choice" || testPlace == "In quarantine after international travel at home or an accommodation of their choice") {
      res.redirect('/litereg-accounts/v2/royal-mail-barcode')
    } else {
      res.redirect('/litereg-accounts/v2/site-id')
    }
  })

  // Version 2 - Lite Registration Accounts - site confirmation route
  router.post('/litereg-accounts/v2/action9/site-confirmation', function (req, res) {
    let confirmSite = req.session.data['confirm-site']
    if (confirmSite == "Yes") {
      res.redirect('/litereg-accounts/v2/daily-contact-testing')
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
  
  // Version 10 - LDF self report accounts - check mobile route
  router.post('/share-result-lateral-flow/v9-1/action9/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/check-mobile-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-1/user-account/agreement')
  }
  })

// Version 9-2 - LDF self report accounts - Who's taking the test route

router.post('/share-result-lateral-flow/v9-2/action9/whos-taking-the-test', function (req, res) {
  let person = req.session.data['whos-taking-the-test']
  if (person == "myself") {
    res.redirect('/share-result-lateral-flow/v9-2/coronavirus-account')
  } else {
    res.redirect('/share-result-lateral-flow/v9-2/home-org-use')
  }
})

// Version 9-1 - LDF self report accounts - Create password route

router.post('/share-result-lateral-flow/v9-2/action9/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/share-result-lateral-flow/v9-2/user-account/create-password-error')
  } else {
    res.redirect('/share-result-lateral-flow/v9-2/user-account/check-email')
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
router.post('/share-result-lateral-flow/v10/action9/check-mobile', function (req, res) {
let securityCode = req.session.data['security-code']
if (securityCode == "") {
  res.redirect('/share-result-lateral-flow/v10/user-account/check-mobile-error')
} else {
  res.redirect('/share-result-lateral-flow/v10/user-account/agreement')
}
})

// Version 10 - LDF self report accounts  - Ethnic group route
router.post('/share-result-lateral-flow/v10/action7/ethnic-group', function (req, res) {
let ethnicGroup = req.session.data['ethnic-group']

if (ethnicGroup == "Asian or Asian British"){
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/ethnic-background-asian')
} else if (ethnicGroup == "Black, African, Black British or Caribbean") {
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/ethnic-background-black')
} else if (ethnicGroup == "Mixed or multiple ethnic groups") {
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/ethnic-background-mixed')
} else if (ethnicGroup == "White") {
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/ethnic-background-white')
} else if (ethnicGroup == "Another ethnic group") {
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/ethnic-background-another')
} else {
  res.redirect('/share-result-lateral-flow/v10/user-account/edit-personal-details/currently-in-work')
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

// Version 11 - LDF self report accounts  - Ethnic group route
router.post('/share-result-lateral-flow/v11/action7/ethnic-group', function (req, res) {
let ethnicGroup = req.session.data['ethnic-group']

if (ethnicGroup == "Asian or Asian British"){
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/ethnic-background-asian')
} else if (ethnicGroup == "Black, African, Black British or Caribbean") {
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/ethnic-background-black')
} else if (ethnicGroup == "Mixed or multiple ethnic groups") {
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/ethnic-background-mixed')
} else if (ethnicGroup == "White") {
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/ethnic-background-white')
} else if (ethnicGroup == "Another ethnic group") {
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/ethnic-background-another')
} else {
  res.redirect('/share-result-lateral-flow/v11/user-account/edit-personal-details/currently-in-work')
}

})

module.exports = router
