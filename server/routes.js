
module.exports = (app) => {
    app.get('/face/:from/:to', (req, res) => {
        require('./recipes/front')(req, res);
    });
};
