
const bcrypt = require("bcrypt");
const User = require("../models/user.js");


class Trader {
    constructor() {

    }

    async createUser(user) {
        user.password = await bcrypt.hash( user.password, 10 );
        return User.create(user);
    }

    async createTransaction(data) {
    return User.findByIdAndUpdate( 
        { _id: data.user_id },
        {$push: { transactions: data }});
    }

    async findById(id){
        return User.findOne(
            {_id: id}
        )
    }

    async findReceived(id){
        return User.findOne(
            {_id: id, isSent: false}
        )
    }

    async findSent(id){
        return User.find(
            {_id: id, isSent: true}
        )
    }

    async findByEmail(email){
        return User.findOne(
            {email: email}
        )
    }
    

    async findAllUsers() {
        return User.find();
    }

//     async modifyAppointment(data) {

//         const clinicId = data.clinic;

//         const clinicInfo = await Clinic.findById(clinicId);

//         let clinic1 = {
//             idClinica: clinicId,
//             name : clinicInfo.name,
//             phone : clinicInfo.phone,
//             email : clinicInfo.email,
//             city : clinicInfo.city,
//         }

//         return Appointment.findByIdAndUpdate( { _id: data.id },
//             {
//                 clinic: clinic1,
//                 date: data.date,
//                 isActive: data.isActive

//             }, {new:true,omitUndefined:true}
//         )
//     }

//     async removeAppointment(data) {

//         const clinicId = data.clinic;
//         const appointmentId = data.id;

//         const deleteAppointment = await Appointment.findByIdAndRemove( { _id: appointmentId } );

//         const clinicApp = await Clinic.findByIdAndUpdate({_id: clinicId},
//         { $pull : {appointmentArray: appointmentId} });

//         return deleteAppointment;
//  }
}

let transactionsController = new Trader();
module.exports = transactionsController;