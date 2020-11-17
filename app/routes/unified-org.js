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

module.exports = router
