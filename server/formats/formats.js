const ejs = require('ejs');


const html = (res, data) => {
    res.send(ejs.render('<p><%=message;%></p>' +
        '<em><%=name;%></em>', { name: data.from, message: data.message }));
};


const json = (res, data) => {
    res.status(200).json({
        message: data.message,
        from: data.from,
        to: data.to,
    });
};

const text = (res, data) => {
    res.status(200).send(`${data.message} ${data.from}`);
};

module.exports = {
    html,
    json,
    text,
};
