
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    // phone: {
    //     type: Number,
    //     required: true,
    // },
    password: {
        type: String,
        required: true
    },
    // dateOfBirth: {
    //     type: Date,
    //     required: true
    // },
    transactions: {
        type: Array,
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const toJSONConfig = {
    transform: (doc, ret, opt) => {
        delete ret['password']
        return ret
    }
}


userSchema.set('toJSON', toJSONConfig);

const User = mongoose.model("User", userSchema);
module.exports = User;