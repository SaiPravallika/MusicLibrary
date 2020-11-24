const User = require('../models/user.model.js');
var mongoose = require('mongoose');

exports.findOne = (req, res) => {
    User.findOne({
        _id: mongoose.Types.ObjectId(req.params.userId)
    }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the User"
        });
    });
};

exports.findOneByuserName = (req, res) => {
    User.findOne({ "username": req.params.userName }).
    then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the User"
        });
    });
};

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// exports.grantPrivilege = (req, res) => {
//     User.updateOne({_id : mongoose.Types.ObjectId(req.params.userId)}, {$set : {"userType" : "sitemanager"}})
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the playlist"
//         });
//     });
// }

// exports.useractivation = (req, res) => {
//     User.updateOne({_id : mongoose.Types.ObjectId(req.params.userId)}, {$set : {"accountType" : req.params.flag}})
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the playlist"
//         });
//     });
// }