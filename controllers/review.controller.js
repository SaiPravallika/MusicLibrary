const Review = require('../models/review.model.js');

exports.findBySongId = (req, res) => {
    Review.find({ "songId": req.params.songId }).sort({ createdAt: -1 })
        .then(reviews => {
            res.send(reviews);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reviews"
            });
        });
};

exports.create = (req, res) => {
    var reviewObj = {
        "userId": req.body.userId,
        "createdDate": new Date(),
        "value": req.body.value,
        "visibility": req.body.visibility,
        "songId": req.body.songId,
        "rating": req.body.rating
    };
    const review = new Review(reviewObj);
    review.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};
