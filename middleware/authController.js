const jwt = require('jsonwebtoken');
const User = require('../model/userModel')



const auth = async (req, res, next) => {
    let token = req.headers.authorization;
    try {
        const authUser = jwt.verify(token, process.env.SECRET);
        const user = await User.findUserById(authUser.userid)
        req.user = user;
        next()
    } catch (error) {
        console.error(error);
        res.json({
            Status: 'Failed!',
            message:"Please Login!"
        })
    }
}

module.exports = auth;