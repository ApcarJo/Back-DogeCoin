
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({

    address: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    date: { 
        type: Date, 
        required: true 
    },

    user_id: {
        type: String,
        required: true
    },

    isSent: {
        type: Boolean,
        required: true
    },

    coin: {
        type: String,
        required: false
    },

});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
