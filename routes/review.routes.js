module.exports = (app) => {
    const review = require('../controllers/review.controller.js');

    app.get('/review/:songId', review.findBySongId);

    app.post('/review', review.create);
}