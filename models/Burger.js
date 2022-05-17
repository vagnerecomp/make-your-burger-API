const mongoose = require("mongoose");
const Burger = mongoose.model('Burger', {
    name: String,
    meat: String,
    bread: String,
    status: String,
    alternatives: []
});

module.exports = Burger;