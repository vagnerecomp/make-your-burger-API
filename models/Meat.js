const mongoose = require("mongoose");
const Meat = mongoose.model('Meat', {
    type: String
});

module.exports = Meat;