const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 1 - Lite Registration lateral flow with Accounts- Mobile number route

router.post('/lite-registration-lateral-flow-accounts/v1/action9/landline-number', function (req, res) {
    let mobileNumber = req.session.data['mobile-number']
    let emailAddress = req.session.data['email']
    if (mobileNumber == "No" && emailAddress == "No" ) {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/call-us')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/nhs-number-known')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Who's taking the test route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/coronavirus-account')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/enter-barcode')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Test date route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/test-date', function (req, res) {
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/do-you-have-symptoms')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/name')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Do you have symptoms route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/do-you-have-symptoms', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "Yes") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/when-did-symptoms-start')
    } else if (emailAddress == "user@testing.co.uk") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/country')
    }

  })

    // Version 1 - Lite Registration lateral flow with Accounts - Do you have symptoms route

    router.post('/lite-registration-lateral-flow-accounts/v1/action9/when-did-symptoms-start', function (req, res) {
      let emailAddress = req.session.data['email-address']
      if (emailAddress == "user@testing.co.uk") {
        res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
      } else {
        res.redirect('/lite-registration-lateral-flow-accounts/v1/country')
      }

    })

  // router.post('/lite-registration-lateral-flow-accounts/v1/action9/do-you-have-symptoms', function (req, res) {
  //   let emailAddress = req.session.data['email-address']
  //   let password = req.session.data['password']
  //   if (emailAddress == "user@testing.co.uk") {
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
  //   } else if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address')
  //   } else {
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address-account')
  //   }

  // })

  // Version 1 - Lite Registration lateral flow with Accounts - First line of address and postcode route

    router.post('/lite-registration-lateral-flow-accounts/v1/action9/address', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress != "user@testing.co.uk" && password == " " || emailAddress != "user@testing.co.uk" && password == undefined) {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address-account')
    }

  })

  // Version 3 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v3/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v3/address')
    }

  })

  // Version 4 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v4/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v4/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v4/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v4/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v4/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v4/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v4/address')
    }

  })

  // Version 5 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v5/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v5/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v5/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v5/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v5/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v5/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v5/address')
    }

  })

  // Version 6 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v6/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v6/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v6/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v6/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v6/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v6/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v6/address')
    }

  })

  // Version 6.1 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v6-1/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v6-1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v6-1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v6-1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v6-1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v6-1/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v6-1/address')
    }

  })

  // Version 7 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v7/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v7/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v7/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v7/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v7/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v7/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v7/address')
    }

  })

  // Version 8 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v8/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v8/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v8/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v8/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v8/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v8/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v8/address')
    }

  })

  // Version 8.2 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v8-2/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v8-2/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v8-2/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v8-2/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v8-2/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v8-2/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v8-2/address')
    }

  })

  // Version 8.3 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v8-3/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v8-3/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v8-3/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v8-3/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v8-3/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v8-3/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v8-3/address')
    }

  })

  // Version 8.4 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v8-4/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v8-4/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v8-4/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v8-4/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v8-4/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v8-4/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v8-4/address')
    }

  })

  // Version 8.5 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v8-5/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v8-5/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v8-5/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v8-5/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v8-5/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v8-5/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v8-5/address')
    }

  })

  // Version 9 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v9/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v9/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v9/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v9/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v9/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v9/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v9/address')
    }

  })

  // Version 9.1 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v9-1/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v9-1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v9-1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v9-1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v9-1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v9-1/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v9-1/address')
    }

  })

  // Version 9.2 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v9-2/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v9-2/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v9-2/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v9-2/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v9-2/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v9-2/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v9-2/address')
    }

  })

  // Version 9.3 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v9-3/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v9-3/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v9-3/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v9-3/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v9-3/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v9-3/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v9-3/address')
    }

  })

  // Version 9.4 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v9-4/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v9-4/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v9-4/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v9-4/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v9-4/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v9-4/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v9-4/address')
    }

  })

  // Version 10 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v10/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v10/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v10/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v10/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v10/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v10/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v10/address')
    }

  })

  // Version 11 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v11/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v11/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v11/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v11/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v11/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v11/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v11/address')
    }

  })

  // Version 12 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v12/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v12/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v12/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v12/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v12/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v12/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v12/occupation')
    }

  })

  // Version 13 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v13/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v13/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v13/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v13/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v13/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v13/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v13/occupation')
    }

  })

  // Version 15 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v15/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v15/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v15/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v15/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v15/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v15/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v15/address')
    }

  })

  // Version 16 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v16/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v16/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v16/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v16/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v16/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v16/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v16/address')
    }

  })

  // Version 16-1 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v16-1/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v16-1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v16-1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v16-1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v16-1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v16-1/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v16-1/address')
    }

  })

    // Version 17 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v17/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v17/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v17/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v17/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v17/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v17/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v17/postcode-lookup')
      }

    })


    // Version 17.1 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v17-1/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v17-1/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v17-1/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v17-1/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v17-1/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v17-1/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v17-1/postcode-lookup')
      }

    })

    // Version 18 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v18/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v18/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v18/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v18/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v18/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v18/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v18/occupation')
      }

    })

    // Version 18.1 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v18-1/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v18-1/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v18-1/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v18-1/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v18-1/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v18-1/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v18-1/postcode-lookup')
      }

    })

    // Version 19 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v19/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v19/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v19/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v19/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v19/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v19/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v19/postcode-lookup')
      }

    })

    // Version 19.1 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v19-1/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v19-1/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v19-1/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v19-1/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v19-1/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v19-1/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v19-1/postcode-lookup')
      }

    })

    // Version 19.2 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v19-2/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v19-2/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v19-2/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v19-2/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v19-2/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v19-2/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v19-2/postcode-lookup')
      }

    })

    // Version 19.3 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v19-3/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v19-3/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v19-3/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v19-3/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v19-3/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v19-3/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v19-3/postcode-lookup')
      }

    })

    // Version 19.4 - LFD Results sharing - Ethnic group route
    router.post('/share-result-lateral-flow/v19-4/action6/ethnic-group', function (req, res) {
      let ethnicGroup = req.session.data['ethnic-group']

      if (ethnicGroup == "Asian or Asian British"){
        res.redirect('/share-result-lateral-flow/v19-4/ethnic-background-asian')
      } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
        res.redirect('/share-result-lateral-flow/v19-4/ethnic-background-black')
      } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
        res.redirect('/share-result-lateral-flow/v19-4/ethnic-background-mixed')
      } else if (ethnicGroup == "White") {
        res.redirect('/share-result-lateral-flow/v19-4/ethnic-background-white')
      } else if (ethnicGroup == "Another ethnic group") {
        res.redirect('/share-result-lateral-flow/v19-4/ethnic-background-another')
      } else {
        res.redirect('/share-result-lateral-flow/v19-4/postcode-lookup')
      }

    })

        // Version 20 - LFD Results sharing - Ethnic group route
        router.post('/share-result-lateral-flow/v20/action6/ethnic-group', function (req, res) {
          let ethnicGroup = req.session.data['ethnic-group']
    
          if (ethnicGroup == "Asian or Asian British"){
            res.redirect('/share-result-lateral-flow/v20/ethnic-background-asian')
          } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
            res.redirect('/share-result-lateral-flow/v20/ethnic-background-black')
          } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
            res.redirect('/share-result-lateral-flow/v20/ethnic-background-mixed')
          } else if (ethnicGroup == "White") {
            res.redirect('/share-result-lateral-flow/v20/ethnic-background-white')
          } else if (ethnicGroup == "Another ethnic group") {
            res.redirect('/share-result-lateral-flow/v20/ethnic-background-another')
          } else {
            res.redirect('/share-result-lateral-flow/v20/postcode-lookup')
          }
    
        })




  // Version 1 - Lite Registration lateral flow with Accounts - Ethnic group route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-another')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/currently-in-work')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Ethnic group route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-another')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/currently-in-work')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/currently-in-work', function (req, res) {
    let inWork = req.session.data['currently-in-work']
    if (inWork == "Yes - they travel to a workplace" || inWork == "Yes - I travel to a workplace"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/industry')
    } else if (inWork == "Yes - they go to nursery, school, college or university" || inWork == "Yes - I go to nursery, school, college or university"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/study-grade')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/do-you-have-symptoms')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Country route

  // router.post('/lite-registration-lateral-flow-accounts/v1/action9/country', function (req, res) {
  //   let country = req.session.data['country']
  //   if (country == "Northern Ireland"){
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/address')
  //   } else {
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/postcode')
  //   }

  // })

  // Version 1 - Lite Registration lateral flow with Accounts - NHS number known route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/nhs-number-known', function (req, res) {
    let nhsNumberKnown = req.session.data['nhs-number-known']
    if (nhsNumberKnown == "Yes"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/nhs-number')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Login email route
  router.post('/lite-registration-lateral-flow-accounts/v1/user-account/action9/login-email', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == "user@testing.co.uk"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/enter-password')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/create-password')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Home page testing route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/home-page', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == 'user@testing.co.uk'){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/test-place')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address-account')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Create password route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/create-password-error')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/check-email')
    }
  })

  // Version 1 - Lite Registration lateral flow with Accounts - check mobile route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/check-mobile-error')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/agreement')
    }
  })

module.exports = router
