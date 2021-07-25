const { response } = require('express');
const User = require('../model/userModel');
const utils = require('../utils/utils')

exports.signUp = async (req, res) => {
    const body = req.body;
    let user = { firstName, lastName, email, password } = body;
    const confirmPassword = body.confirmPassword
    if (await utils.emailExist(email)) {
        const correctPassword = utils.getCorrectPassword(password,confirmPassword)
        if (correctPassword) {
            password = await utils.hashPassword(correctPassword)
            user.password = password;
            const response = await User.addUser(user)
            res.status(201).json({
                message: 'User Account Creation Successful!',
                
            })
         }
        else {
            res.status(406).json({
            status: 'failed!',
            message: 'Password Mismatch'
            })
    }
    }
    else {
        res.status(406).json({
            status: 'failed!',
            message: 'Email Already exist'
            })
        
    }

}
exports.login= async (req, res) => {
    let { email, password } = req.body;
    const user = await User.getUser(email);
    if (!user) {
        res.status(404).json({
            status: ' Login failed!',
            message: `User with ${email} not found! Please signup`
            })
    }
    else {
        if (await utils.isCorrectPassword(password, user.password)) {
            const token = await utils.genUserToken(user._id)
            res.status(200).json({
                id:user._id,
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                token:token
            })
        } else {
            res.status(406).json({
            status: 'failed!',
            message: 'Password Mismatch'
            })
        }
    }
}
exports.updateDetails = async (req, res) => {
    const id = req.params.id
    let user
    let data = req.body;
    if (data.password !== undefined) {
        data.password = await utils.hashPassword(data.password)
        user = await User.updateUser(id,data)
    }
    else {
        user = await User.updateUser(id,data)
    }
    res.status(200).json({
        message:'User details Updated Successfully!'
    })
}
