const mongoose = require("mongoose");
const Status = mongoose.model('Status', {
    type: String
});

module.exports = Status;