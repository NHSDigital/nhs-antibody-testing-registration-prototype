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

  // Single registration - Account page

  router.post('/_csplayground/singleregistration/v1/action/account-page', function (req, res) {
    let subject = req.session.data['account-page']
    if (subject == "Sign in or create an account"){
      res.redirect('/_csplayground/singleregistration/v1/user-account/login-email')
    } else {
      res.redirect('/_csplayground/singleregistration/v1/enter-barcode')
    }

  })


  // Single registration - Test kit barcode

  router.post('/_csplayground/singleregistration/v1/action/enter-barcode', function (req, res) {
    let uniqueBarcode = req.session.data['kit-barcode-reference-1']
    if (uniqueBarcode == "12345678") {
      res.redirect('/_csplayground/singleregistration/v1/why-taking-test')
    } else {
      res.redirect('xx')
    }
  })


  // Single Registration - Login email route
  router.post('/_csplayground/singleregistration/v1/action/login-email', function (req, res) {
    let loginEmail = req.session.data['email-address']
    if (loginEmail == "user@testing.co.uk"){
      res.redirect('/_csplayground/singleregistration/v1/user-account/enter-password')
    } else {
      res.redirect('/_csplayground/singleregistration/v1/user-account/create-password')
    }

  })

// Single registration - Enter password

  router.post('/_csplayground/singleregistration/v1/action/enter-password', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress == "user@testing.co.uk") {
     res.redirect('/_csplayground/singleregistration/v1/enter-barcode')
    }

  })

  // Single registration - Why taking test?

  router.post('/_csplayground/singleregistration/v1/action/why-taking-test', function (req, res) {
    let subject = req.session.data['why-taking-test']
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if ((subject == "My test was delivered in the post") && (emailAddress == "user@testing.co.uk")) {
      res.redirect('/_csplayground/singleregistration/v1/test-date')
    }
    else if ((subject == "I am having a test before a hospital procedure") && (emailAddress == "user@testing.co.uk")) {
      res.redirect('XX')
    }
    else if ((subject == "I am at a test site taking a test") && (emailAddress == "user@testing.co.uk")) {
      res.redirect('XX')
    }
    else {
      res.redirect('/_csplayground/singleregistration/v1/enter-order-id')
    }

  })


  // Single registration - test time and date

  router.post('/_csplayground/singleregistration/v1/action/test-date', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/_csplayground/singleregistration/v1/royal-mail-barcode')
    }

  })


  // Single registration - Order ID

  router.post('/_csplayground/singleregistration/v1/action/enter-order-id', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/_csplayground/singleregistration/v1/confirmation')
    }

  })


  // Single registration - check your answers

  router.post('/_csplayground/singleregistration/v1/action/check-your-answers', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/_csplayground/singleregistration/v1/confirmation')
    }

  })

  module.exports = router
