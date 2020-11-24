const User = require('../models/user.model.js');
// const googleUtil = require('../google-util.js');
// var mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const saltRounds = 10000;
// const keylength = 512;
// const alg = 'sha512';

// const secret = process.env.JWT_KEY; 
// if (typeof secret === 'undefined') { 
// 	console.log("Please set secret as environment variable. E.g. JWT_KEY=\"Open Sesame\" node index");
// 	process.exit(1);
// }

// exports.getGoogleUrl = (req, res) => {
//     console.log("googleUtil " + googleUtil);
//     var googleUrl = googleUtil.urlGoogle();
//     res.status(200).send({"url" : googleUrl});
// }

// exports.createuserViaGoogle = async (req, res) => {
//     var userDetails;
//     if(req.query.code) {
//         userDetails = await googleUtil.getGoogleAccountFromCode(req.query.code);
//         User.findOne({
//             username: userDetails.email
//           }).then(data => {
//             console.log(data);
//             if(data){
//                 console.log("userDetails -> " + JSON.stringify(userDetails));
//                 //res.status(200).send({"statusCode":200,"token" : userDetails.tokens.id_token});
//                 res.redirect("http://localhost:4200/user/landing");
//             }
//             else {
//                 var userObj = {
//                     "username" : userDetails.email,
//                     "accountType": "activated",
//                     "emailVerified": false,
//                     "userType": "ordinary",
//                     "signUpMethod": "email"
//                 };
//                 const user = new User(userObj);
//                 console.log(user);
//                 user.save()
//                 .then(data => {
//                     let token = jwt.sign(userObj, secret);
//                     //res.status(200).send({"statusCode":200,"result":data, "token" : token});
//                     console.log("userDetails -> " + JSON.stringify(userDetails));
//                     res.redirect("http://localhost:4200/user/landing",{
//                         token : token
//                     });
//                 }).catch(err => {
//                     res.status(500).send({
//                     msg: err.message || "Some error occurred while creating the user."
//                 });
//             });
//             }
//         }).catch(err => {
//             res.status(500).send({
//                 msg: err.message || "Some error occurred while creating the user."
//             });
//         });


//         //res.status(200).send({"userDetails" : userDetails});
//     };
// }

exports.register = (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(data => {
        console.log(data);
        if (data)
            res.status(200).send({ "statusCode": 200, "msg": "Username already exists" });
        else {
            // let salt = crypto.randomBytes(16).toString('hex');
            // let hash = crypto.pbkdf2Sync(req.body.password, salt, saltRounds, keylength, alg).toString('hex');
            // var userObj = {
            //     "username" : req.body.username,
            //     "password" : hash,
            //     "salt" : salt,
            //     "accountType": "activated",
            //     "emailVerified": false,
            //     "userType": "ordinary",
            //     "signUpMethod": "general"
            // };
            var userObj = {
                "username": req.body.username,
                "password": req.body.password,
                "salt": req.body.email,
                "accountType": "activated",
                "emailVerified": true,
                "userType": "user",
                "signUpMethod": "general"
            };
            const user = new User(userObj);
            console.log(user);
            user.save()
                .then(data => {
                    // let token = jwt.sign(userObj, secret);
                    res.status(200).send({ "statusCode": 200, "result": data });
                }).catch(err => {
                    res.status(500).send({
                        msg: err.message || "Some error occurred while creating the user."
                    });
                });
        }
    }).catch(err => {
        res.status(500).send({
            msg: err.message || "Some error occurred while creating the user."
        });
    });
};

exports.login = (req, res) => {
    // console.log("request-> " + JSON.stringify(req.body));
    User.findOne({
        username: req.body.username
    }).then(data => {
        console.log(data);
        if (!data)
            res.status(200).send({ "statusCode": 400, "msg": "Username does not exists" });
        else {
            res.status(200).send({ "statusCode": 200, "msg": "Login is successful" });
            // const hash = crypto.pbkdf2Sync(req.body.password, data.salt, saltRounds, keylength, alg).toString('hex');
            // if (hash === data.password) { 
            //     console.log("data->" + data);
            //     let payload = {
            //         "username" : data.username,
            //         "accountType": data.accountType,
            //         "emailVerified": data.emailVerified,
            //         "userType": data.userType,
            //         "signUpMethod": data.signUpMethod
            //     }; 
            //     let token = jwt.sign(payload, secret);	
            //     console.log('token: ' + token);
            //     res.status(200).send({"statusCode": 200,"msg" : "Login is successful", "token" : token});						
            // }
            // else {
            //     res.status(200).send({"statusCode": 401,"msg" : "Access denied for " + data.username + ". Check your username/password. "});
            //     console.log('Hashes don\'t match');
            // }
        }
    }).catch(err => {
        console.log("error occurred-> " + err);
        res.status(500).send({
            msg: err.message || "Some error occurred while creating the user."
        });
    });
};