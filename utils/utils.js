const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')

exports.getCorrectPassword = function (password, confirmPassword) {
    return password === confirmPassword ? password : null;
}

exports.hashPassword = async (password) => {
    let hashedPassword;
   try {
        hashedPassword = await bcrypt.hash(password, 12)
   } catch (error) {
       console.error(error);
   }
    return hashedPassword
}
exports.emailExist = async (email) => {
    let found
    try {
         found = userModel.getUser(email)
    } catch (error) {
        console.error(error);
    }
    return found?true:false
}
exports.isCorrectPassword = async (password, orignalPassword) => {
    let response;
    try {
         response = await bcrypt.compare(password,orignalPassword)
    }
    catch (error) {
        console.error(error);
    }
    return response;

}
 exports.genUserToken = async (userid) => {
     const token = await jwt.sign({userid}, process.env.SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})
     return token
 }