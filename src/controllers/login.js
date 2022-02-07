const path = require('path');

const loginGet = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../../public/html/es/login.html`));
};

module.exports = {
    loginGet
};