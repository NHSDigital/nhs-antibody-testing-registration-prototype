const express = require('express')
const router = express.Router()

router.post('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-or-1by1-v1', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-upload-v1')
  } else if (answer == '1by1') {
      res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/1by1-procedure-date-v1')
    } else {
    res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-or-1by1-v1-e1')
    }
});

router.post('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-or-1by1-v1-e1', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-upload-v1')
  } else if (answer == '1by1') {
      res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/1by1-procedure-date-v1')
    } else {
    res.redirect('/OBT/elective-care/e2e-prototypes/patient-testing-portal/bulk-or-1by1-v1-e1')
    }
});

router.post('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-or-1by1-v1', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-upload-v1')
  } else if (answer == '1by1') {
      res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/1by1-procedure-date-v1')
    } else {
    res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-or-1by1-v1-e1')
    }
});

router.post('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-or-1by1-v1-e1', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-upload-v1')
  } else if (answer == '1by1') {
      res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/1by1-procedure-date-v1')
    } else {
    res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-or-1by1-v1-e1')
    }
});


module.exports = router
