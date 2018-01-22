const render = require('../formats/formats');

module.exports = (req, res) => {
    const data = {
        message: 'That\'s your name as from now, your AMEBO is on a different level -',
        from: req.params.from,
        to: (`Amebo ${req.params.to}`),
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