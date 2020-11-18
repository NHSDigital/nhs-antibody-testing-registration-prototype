const express = require('express')
const router = express.Router()

// v0 routes

router.post('/organisational/unified-testing/v0/choose-org', function (req, res) {
  let answer = req.body.cuChooseOrg;

  if (answer == 'UON') {
    res.redirect('/organisational/unified-testing/v0/uon-number')
    } else if (answer == 'Company') {
      res.redirect('/organisational/unified-testing/v0/company-number')
    } else if (answer == 'Other') {
      res.redirect('/organisational/unified-testing/v0/nhs-org-id')
    } else {
    res.redirect('/organisational/unified-testing/v0/choose-org?error=empty')
    }
});

router.post('/organisational/unified-testing/v0/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/unified-testing/v0/single/country')
    } else if (answer) {
      res.redirect('/organisational/unified-testing/v0/single/ethnic-desc')
    } else {
    res.redirect('/organisational/unified-testing/v0/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/unified-testing/v0/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/unified-testing/v0/single/nhsnumber')
    } else {
    res.redirect('/organisational/unified-testing/v0/single/check')
    }
});

module.exports = router
