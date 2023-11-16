const router = require('express').Router();
const { check } = require('express-validator');
const bodyParser = require('body-parser');
const userController = require('../controller/users.controller');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/register',
    [
        check('username').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape()
    ],
    userController.userRegistration);


router.post('/login',
    [
        check('username').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape()
    ],
    userController.userLogin);

module.exports = router;
