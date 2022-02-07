const path = require('path');

const homepageGet = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../../public/index.html`));
};

module.exports = {
    homepageGet
}