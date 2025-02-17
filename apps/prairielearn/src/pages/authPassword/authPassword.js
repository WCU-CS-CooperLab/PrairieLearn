var express = require('express');
var router = express.Router();

const { generateSignedToken } = require('@prairielearn/signed-token');
const { config } = require('../../lib/config');

router.get('/', function (req, res) {
  res.locals.passwordInvalid = 'pl_assessmentpw' in req.cookies;
  res.render(__filename.replace(/\.js$/, '.ejs'), res.locals);
});

router.post('/', function (req, res) {
  var redirectUrl = req.cookies.pl_pw_origUrl ?? '/';
  var maxAge = 1000 * 60 * 60 * 12; // 12 hours

  var pwCookie = generateSignedToken({ password: req.body.password, maxAge }, config.secretKey);
  res.cookie('pl_assessmentpw', pwCookie, { maxAge, httpOnly: true, secure: true });
  res.clearCookie('pl_pw_origUrl');
  return res.redirect(redirectUrl);
});
module.exports = router;
