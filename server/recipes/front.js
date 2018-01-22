const render = require('../formats/formats');

module.exports = (req, res) => {
    const data = {
        message: 'Face your front you nosy fuck -',
        from: req.params.from,
        to: req.params.to,
    };

    res.format({
        'text/html': () => {
            render.html(res, data);
        },

        'text/plain': () => {
            render.text(res, data);
        },

        'application/json': () => {
            render.json(res, data);
        },
    });
};
