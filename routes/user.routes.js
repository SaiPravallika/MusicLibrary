module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.get('/user', user.findAll);

    app.get('/user/:userId', user.findOne);

    app.get('/user/userName/:userName', user.findOneByuserName);

    // app.put('/user/privilege/:userId', user.grantPrivilege);

    // app.put('/user/activation/:userId/:flag', user.useractivation);
}