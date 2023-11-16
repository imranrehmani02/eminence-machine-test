const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/users.model');
const { generateToken } = require('../core/generateToken');

exports.userRegistration = async (req, res) => {
    try {
        const errors = validationResult(req);
        const reqBody = req.body;
        if (!errors.isEmpty()) {
            res.status(400).json({
                "success": false,
                "message": "Validation failed",
                "data": ""
            })
        }

        const hashedPassword = bcrypt.hashSync(reqBody.password, 10);
        const requestData = {
            username: reqBody.username,
            password: hashedPassword
        }
        let userResponse = await User.create(requestData);

        res.status(200).json({
            "success": true,
            "message": "User registered successfully",
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Internal server error",
        })
    }
};


exports.userLogin = async (req, res) => {
    try {
        const errors = validationResult(req);
        const reqBody = req.body;
        if (!errors.isEmpty()) {
            res.status(400).json({
                "success": false,
                "message": "Validation failed",
                "data": ""
            })
        }

        const userData = await User.findOne({ username: reqBody.username });

        //check password match or not
        const isMatch = bcrypt.compareSync(reqBody.password, userData.password);

        if (isMatch) {
            //password matched

            // Token generation
            let token = generateToken(reqBody.username);
            res.status(200).json({
                "success": true,
                "message": "User loggedin successfully",
                "data": {
                    "username": reqBody.username,
                    "token": token
                }
            })
        }
        else {
            res.status(500).json({
                "success": false,
                "message": "Wrong credentials",
            })
        }
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Internal server error",
        })
    }
};
