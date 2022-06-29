const express = require('express')
const router = express.Router()


// Version 1 - Lite registration - test place route

router.post('/prereg/v1/action6/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  if (testPlace == "home") {
    res.redirect('/prereg/v1/enter-barcode')
  } else {
    res.redirect('/prereg/v1/find-test-site')
  }

})

// Version 1 - Lite Registration - Ethnic group route

router.post('/prereg/v1/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v1/ethnic-background-another')
  } else {
    res.redirect('/prereg/v1/do-you-have-symptoms')
  }

})

// Version 1 - Lite Registration - Country route

router.post('/prereg/v1/action6/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/prereg/v1/address')
  } else {
    res.redirect('/prereg/v1/postcode')
  }

})

// Version 1 - Lite Registration - NHS number known route

router.post('/prereg/v1/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v1/nhs-number')
  } else {
    res.redirect('/prereg/v1/check-your-answers')
  }

})


router.post('/prereg/v1/test/type', function (req, res) {
  let answer = req.session.data['poolTestType']
  if (answer == "Yes"){
    res.redirect('/prereg/v1/test/check-kit')
  } else {
    res.redirect('/prereg/v1/test/how-took')
  }

})

router.post('/prereg/v1/who', function (req, res) {
  let answer = req.session.data['prWho']
  if (answer == "myself"){
    res.redirect('/prereg/v1/login/have-email')
  } else {
    res.redirect('/prereg/v1/how-test-pass-works')
  }

})


router.post('/prereg/v1/questions/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v1/questions/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v1/questions/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v1/questions/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v1/questions/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v1/questions/ethnic-background-another')
  } else {
    res.redirect('/prereg/v1/questions/currently-in-work')
  }

})



// Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

router.post('/prereg/v1/questions/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
    res.redirect('/prereg/v1/questions/industry')
  } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
    res.redirect('/prereg/v1/questions/study-grade')
  } else {
    res.redirect('/prereg/v1/questions/country')
  }

})


router.post('/prereg/v1/questions/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v1/questions/nhs-number')
  } else {
    res.redirect('/prereg/v1/questions/check-your-answers')
  }

})



//  v2 routes
//
//
//
//
//

// Version 1 - Lite registration - test place route

router.post('/prereg/v2/action6/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  if (testPlace == "home") {
    res.redirect('/prereg/v2/enter-barcode')
  } else {
    res.redirect('/prereg/v2/find-test-site')
  }

})

// Version 1 - Lite Registration - Ethnic group route

router.post('/prereg/v2/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v2/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v2/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v2/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v2/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v2/ethnic-background-another')
  } else {
    res.redirect('/prereg/v2/do-you-have-symptoms')
  }

})

// Version 1 - Lite Registration - Country route

router.post('/prereg/v2/action6/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/prereg/v2/address')
  } else {
    res.redirect('/prereg/v2/postcode')
  }

})

// Version 1 - Lite Registration - NHS number known route

router.post('/prereg/v2/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v2/nhs-number')
  } else {
    res.redirect('/prereg/v2/check-your-answers')
  }

})


router.post('/prereg/v2/test/type', function (req, res) {
  let answer = req.session.data['poolTestType']
  if (answer == "Yes"){
    res.redirect('/prereg/v2/test/check-kit')
  } else {
    res.redirect('/prereg/v2/test/how-took')
  }

})

router.post('/prereg/v2/who', function (req, res) {
  let answer = req.session.data['prWho']
  if (answer == "myself"){
    res.redirect('/prereg/v2/login/have-email')
  } else {
    res.redirect('/prereg/v2/how-test-pass-works')
  }

})


router.post('/prereg/v2/questions/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v2/questions/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v2/questions/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v2/questions/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v2/questions/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v2/questions/ethnic-background-another')
  } else {
    res.redirect('/prereg/v2/questions/currently-in-work')
  }

})



// Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

router.post('/prereg/v2/questions/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
    res.redirect('/prereg/v2/questions/industry')
  } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
    res.redirect('/prereg/v2/questions/study-grade')
  } else {
    res.redirect('/prereg/v2/questions/country')
  }

})


router.post('/prereg/v2/questions/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v2/questions/nhs-number')
  } else {
    res.redirect('/prereg/v2/questions/check-your-answers')
  }

})


router.post('/prereg/v2/login/have-email', function (req, res) {
  let answer = req.session.data['haveEmail']
  if (answer == "yes"){
    res.redirect('/prereg/v2/login/have-mobile')
  } else {
    res.redirect('/prereg/v2/how-test-pass-works')
  }

})

router.post('/prereg/v2/login/have-mobile', function (req, res) {
  let answer = req.session.data['haveMobile']
  if (answer == "yes"){
    res.redirect('/prereg/v2/login/will-use-phone')
  } else {
    res.redirect('/prereg/v2/how-test-pass-works')
  }

})

router.post('/prereg/v2/login/will-use-phone', function (req, res) {
  let answer = req.session.data['bringMobile']
  if (answer == "yes"){
    res.redirect('/prereg/v2/user-account/login-email')
  } else {
    res.redirect('/prereg/v2/how-test-pass-works')
  }

})



router.post('/prereg/v2/account/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v2/account/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v2/account/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v2/account/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v2/account/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v2/account/ethnic-background-another')
  } else {
    res.redirect('/prereg/v2/account/currently-in-work')
  }

})



// Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

router.post('/prereg/v2/account/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
    res.redirect('/prereg/v2/account/industry')
  } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
    res.redirect('/prereg/v2/account/study-grade')
  } else {
    res.redirect('/prereg/v2/account/country')
  }

})


router.post('/prereg/v2/account/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v2/account/nhs-number')
  } else {
    res.redirect('/prereg/v2/account/check-your-answers')
  }

})


router.post('/prereg/v3/which', function (req, res) {
  let answer = req.session.data['which']
  if (answer == "login"){
    res.redirect('/prereg/v3/login/email-address')
  } else {
    res.redirect('/prereg/v3/testpass/index')
  }

})

router.post('/prereg/v3/:folder/share-results', function (req, res) {
  let answer = req.session.data['shareResults']
  let folder = req.params.folder;

  if (answer == "Yes"){
    res.redirect('/prereg/v3/' + folder + '/check-your-answers')
  } else {
    res.redirect('/prereg/v3/' + folder + '/test-site')
  }

})

router.post('/prereg/v4/who', function (req, res) {
  let answer = req.session.data['whos-taking-the-test']
  if (answer == "myself"){
    res.redirect('/prereg/v4/login')
  } else {
    res.redirect('/prereg/v4/have-testpass')
  }

})

router.post('/prereg/v4/which', function (req, res) {
  let answer = req.session.data['which']
  if (answer == "login"){
    res.redirect('/prereg/v4/login/email-address')
  } else {
    res.redirect('/prereg/v4/testpass/name')
  }

})

router.post('/prereg/v4/have-testpass', function (req, res) {
  let answer = req.session.data['haveTestpass']
  if (answer == "yes"){
    res.redirect('/prereg/v4/testpass/index')
  } else {
    res.redirect('/prereg/v4/create-testpass/enter-barcode')
  }

})

router.post('/prereg/v4/:folder/share-results', function (req, res) {
  let answer = req.session.data['shareResults']
  let folder = req.params.folder;

  if (answer == "Yes"){
    res.redirect('/prereg/v4/' + folder + '/check-your-answers')
  } else {
    res.redirect('/prereg/v4/' + folder + '/test-site')
  }

})


router.post('/prereg/v4/create-testpass/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/prereg/v4/create-testpass/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/prereg/v4/create-testpass/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/prereg/v4/create-testpass/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/prereg/v4/create-testpass/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/prereg/v4/create-testpass/ethnic-background-another')
  } else {
    res.redirect('/prereg/v4/create-testpass/currently-in-work')
  }

})

// Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

router.post('/prereg/v4/create-testpass/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
    res.redirect('/prereg/v4/create-testpass/industry')
  } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
    res.redirect('/prereg/v4/create-testpass/study-grade')
  } else {
    res.redirect('/prereg/v4/create-testpass/do-you-have-symptoms')
  }

})


router.post('/prereg/v4/create-testpass/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/prereg/v4/create-testpass/nhs-number')
  } else {
    res.redirect('/prereg/v4/create-testpass/want-testpass')
  }

})


module.exports = router
