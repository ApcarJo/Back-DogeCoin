
const bcrypt = require("bcrypt");
const User = require("../models/user.js");


class Trader {
    constructor() {

    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async createTransaction(data) {
        let tr = await User.findByIdAndUpdate(
            { _id: data.user_id },
            { $push: { transactions: data } });
            return tr;
    }

    async findById(id) {
        return User.findOne(
            { _id: id }
        )
    }

    async findReceived(id) {
        return User.findOne(
            { _id: id, isSent: false }
        )
    }

    async findSent(id) {
        return User.find(
            { _id: id, isSent: true }
        )
    }

    async findByEmail(email) {
        return User.findOne(
            { email: email }
        )
    }


    async findAllUsers() {
        return User.find();
    }
}

let transactionsController = new Trader();
module.exports = transactionsController;