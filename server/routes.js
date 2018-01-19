
module.exports = (app) => {
    app.get('/face/:from', (req, res) => {
        require('./recipes/front')(req, res);
    });
};
