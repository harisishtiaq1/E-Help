const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const { profileUpload } = require('../../../utils/upload')
const router = express.Router();


router.route('/register').post(controller.register);
router.route("/verify-email").get(controller.verify);
router.route("/login").post(controller.login)
router.route("/contact").post(controller.contact)
router.route('/question').post(controller.question)
module.exports = router;