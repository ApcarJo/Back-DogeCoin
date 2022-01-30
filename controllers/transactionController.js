
const bcrypt = require("bcrypt");
const Transaction = require("../models/transaction.js");

class Exchange {
    constructor() {

    }

    async createTransaction(transaction){
        return Transaction.create(transaction);
    }

    async findAllTransactions() {
        return Transaction.find();
    }

    async findReceived() {
        return Transaction.find({user_id: id, "transaction.isSent": false})
    }

    async findSent() {
        return Transaction.find({user_id: id, "transaction.isSent": true})
    }

    async findById(id){
        return Transaction.find({user_id: id})
    }

    // async findByDate(date, userId) {
    //     const userTransactions = await transactions.find(
    //         {date: date},
    //         {idUser: userId});

    //     let transactionsArray = [];

    //     for(let i in userTransactions){
    //         const object = await transactions.findById(userTransactions[0]._id);
    //         transactionsArray.push(object);
    //     }
    //     return transactionsArray;
    // }

}

let transactionController = new Exchange();
module.exports = transactionController;