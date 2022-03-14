const handphone = require("./lb/sshp");
const desktop = require("./lib/ssweb");
const author = require("./package.json").author || {};
const type = {
handphone,
desktop
};
const author = author || {
name: 'Caliph Dev.',
email: 'admin@caliph.my.id
};

module.exports = { author, ...type }