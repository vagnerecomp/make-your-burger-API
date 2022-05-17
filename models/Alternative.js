const mongoose = require("mongoose");
const Alternative = mongoose.model('Alternative', {
    type: String
});

module.exports = Alternative;