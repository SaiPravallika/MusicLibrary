module.exports = (app) => {
    const playlist = require('../controllers/playlist.controller.js');

    app.get('/playlist', playlist.findAll);

    app.get('/playlist/user/:userId', playlist.findUserPlaylists);

    app.get('/playlist/:playlistId', playlist.findOne);

    app.post('/playlist', playlist.create);

    app.put('/playlist', playlist.update);

    app.put('/playlist/song', playlist.addSongs);

    app.get('/playlist/userown/:userId', playlist.findUserOwnedPlaylists);

    app.delete('/playlist/:playlistid/song/:songid', playlist.removeSongs);

    app.delete('/playlist/:playlistId', playlist.delete);
}