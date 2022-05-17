const mongoose = require("mongoose");
const Bread = mongoose.model('Bread', {
    type: String
});

module.exports = Bread;