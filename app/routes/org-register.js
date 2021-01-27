const express = require('express')
const router = express.Router()

// v0 routes

router.post('/organisational/register/v0/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v0/nhsnumber')
    } else {
    res.redirect('/organisational/register/v0/check')
    }
});

// v1 routes

router.post('/organisational/register/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v1/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v1/single/staff')
    } else {
    res.redirect('/organisational/register/v1/how?error=empty')
    }
});

router.post('/organisational/register/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v1/single/testkit')
    }
});


// v2 routes

router.post('/organisational/register/v2/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v2/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/register/v2/how?error=empty')
    }
});

router.post('/organisational/register/v2/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v2/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v2/single/have-coronavirus')
    }
});

router.post('/organisational/register/v2/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v2/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v2/single/testkit')
    }
});

router.post('/organisational/register/v2/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v2/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/country')
  } else {
    res.redirect('/organisational/register/v2/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v2/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v2/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v2/single/ethnic-group?error=empty')
    }
});


// v3 routes

router.post('/organisational/register/v3/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v3/how')
    }
});

router.post('/organisational/register/v3/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v3/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v3/single/info')
    } else {
    res.redirect('/organisational/register/v3/how?error=empty')
    }
});

router.post('/organisational/register/v3/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v3/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v3/single/email')
    }
});

router.post('/organisational/register/v3/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v3/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v3/single/dob')
    }
});

router.post('/organisational/register/v3/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v3/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/country')
  } else {
    res.redirect('/organisational/register/v3/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v3/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v3/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v3/single/ethnic-group?error=empty')
    }
});

// v4 routes

router.post('/organisational/register/v4/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v4/how')
    }
});

router.post('/organisational/register/v4/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v4/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v4/single/info')
    } else {
    res.redirect('/organisational/register/v4/how?error=empty')
    }
});

router.post('/organisational/register/v4/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v4/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v4/single/email')
    }
});

router.post('/organisational/register/v4/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v4/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v4/single/dob')
    }
});

router.post('/organisational/register/v4/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v4/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/country')
  } else {
    res.redirect('/organisational/register/v4/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v4/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v4/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v4/single/ethnic-group?error=empty')
    }
});


// v5 routes


router.post('/organisational/register/v5/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v5/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v5/how?error=empty')
    }
});

router.post('/organisational/register/v5/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v5/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v5/single/have-coronavirus')
    }
});

router.post('/organisational/register/v5/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v5/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v5/single/7-day')
    }
});

router.post('/organisational/register/v5/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v5/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/country')
  } else {
    res.redirect('/organisational/register/v5/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v5/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v5/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v5/single/ethnic-group?error=empty')
    }
});





// v6 routes


router.post('/organisational/register/v6/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v6/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v6/how?error=empty')
    }
});

router.post('/organisational/register/v6/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v6/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v6/single/have-coronavirus')
    }
});

router.post('/organisational/register/v6/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v6/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v6/single/7-day')
    }
});

router.post('/organisational/register/v6/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v6/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/country')
  } else {
    res.redirect('/organisational/register/v6/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v6/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v6/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v6/single/ethnic-group?error=empty')
    }
});









// Antibody Care home routes

router.post('/organisational/antibody/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/antibody/v1/bulk/type')
    } else if (answer == 'single') {
      res.redirect('/organisational/antibody/v1/single/type')
    } else {
    res.redirect('/organisational/antibody/v1/how?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/single/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/antibody/v1/single/type')
    }
});

router.post('/organisational/antibody/v1/bulk/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/bulk/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/bulk/staff')
    } else {
    res.redirect('/organisational/antibody/v1/bulk/type')
    }
});

router.post('/organisational/antibody/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/antibody/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/antibody/v1/single/testkit')
    }
});

router.post('/organisational/antibody/v1/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuHaveCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/symptoms-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/condition')
    }
});

router.post('/organisational/antibody/v1/single/questions/index', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/when-symptoms')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/tested-positive')
    }
});

router.post('/organisational/antibody/v1/single/questions/condition', function (req, res) {
  let answer = req.body.cuCondition;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/condition-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/index')
    }
});

router.post('/organisational/antibody/v1/single/questions/tested-positive', function (req, res) {
  let answer = req.body.cuTestedBefore;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/swab-test')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/lived-with')
    }
});

router.post('/organisational/antibody/v1/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else {
    res.redirect('/organisational/antibody/v1/single/occupation/index?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/antibody/v1/single/ethnic-desc')
    } else {
    res.redirect('/organisational/antibody/v1/single/ethnic-group?error=empty')
    }
});











// enhanced routes

router.post('/organisational/register/enhanced/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/enhanced/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/enhanced/single/staff')
    } else {
    res.redirect('/organisational/register/enhanced/how?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/contact')
    } else if (answer) {
      res.redirect('/organisational/register/enhanced/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/enhanced/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/enhanced/single/have-coronavirus')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else {
    res.redirect('/organisational/register/enhanced/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/enhanced/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/enhanced/single/testkit')
    }
});

router.post('/organisational/register/enhanced/single/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == 'no') {
      res.redirect('/organisational/register/enhanced/single/testkit')
    } else {
    res.redirect('/organisational/register/enhanced/single/have-vaccine?error=empty')
    }
});

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/request-method', function (req, res) {
  let answer = req.body.cuRequestMethod;

  if (answer == 'upload') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/upload-file')
    } else if (answer == 'manual') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/date-of-procedure')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/request-method?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms', function (req, res) {
  let answer = req.body.cuSymptomatic;

  if (answer == 'Yes') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms-start')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine?error=empty')
    }
});

router.post('/organisational/outer-return-box/option1/option1', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option1/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option1/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option1/option1?error=empty')
    }
})

router.post('/organisational/outer-return-box/option2/option2', function (req, res) {
  let answer = req.body.outerreturnbox2;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option2/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option2/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option2/option2?error=empty')
    }
})


module.exports = router
