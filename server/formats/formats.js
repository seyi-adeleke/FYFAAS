const ejs = require('ejs');


const html = (res, data) => {
    res.send(ejs.render('<p>Dear, <%=to;%></p>' +
        '<p><%=message;%></p>' +
        '<em><%=from;%></em>', { from: data.from, message: data.message, to: data.to }));
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
