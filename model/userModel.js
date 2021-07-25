const mongoose = require('../utils/database')


const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cars: {type:mongoose.Schema.Types.ObjectId,ref:'Cars'},
});

const Users = mongoose.model('Users', userSchema)


exports.addUser = async (user) => {
    let response
    try {
         response = await Users.create({...user})
    }
    catch(error) {
        console.log(error);
    }
    return response;
}
exports.updateUser = async (id,update) => {
    let response
    try {
        response = Users.findByIdAndUpdate(id,{...update})
    } catch (error) {
        log(error)
    }
    return response
}
exports.getUser = async(email) => {
    let user;
    try {
        user =await Users.findOne({email})
    }
    catch (error) {
        
    }
    return user;
}
exports.findUserById = async (id) => {
    let user;
    try {
        user = await Users.findById(id)
    } catch (error) {
        console.error(error);
    }
    return user
}
