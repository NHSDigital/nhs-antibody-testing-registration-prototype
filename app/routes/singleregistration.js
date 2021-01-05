const express = require('express')
const router = express.Router()


  // Single registration - Who is test for?

  router.post('/_csplayground/singleregistration/v1/action/who-is-test-for', function (req, res) {
    let subject = req.session.data['who-is-test-for']
    if (subject == "Myself"){
      res.redirect('/_csplayground/singleregistration/v1/coronavirus-account')
    } else {
      res.redirect('/_csplayground/singleregistration/v1/enter-barcode')
    }

  })


  // Single registration - Test kit barcode

  router.post('/_csplayground/singleregistration/v1/action/enter-barcode', function (req, res) {
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (uniqueBarcode == "PCR") {
      res.redirect('/_csplayground/singleregistration/v1/why-taking-test')
    } else {
      res.redirect('xx')
    }
  })








  module.exports = router
