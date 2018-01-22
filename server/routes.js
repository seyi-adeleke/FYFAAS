
module.exports = (app) => {
    app.get('/face/:from/:to', (req, res) => {
        require('./recipes/front')(req, res);
    });

    app.get('/amebo/:from/:to', (req, res) => {
        require('./recipes/amebo')(req, res);
    });
};
