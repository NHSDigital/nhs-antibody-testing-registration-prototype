const express = require('express')
const router = express.Router()


router.post('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-or-individual-v1', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/bulk-upload-v1')
  } else if (answer == '1by1') {
      res.redirect('/OBT/elective-care/feature-design/TTOLDT-486_lft_ordering/1by1-procedure-date-v1')
    } else {
    res.redirect('/OBT/registration/e2e-prototypes/lft-pcr-with-results-live/start-pages/how?error=empty')
    }
});


module.exports = router
