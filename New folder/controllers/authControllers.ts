const User = require('../models/userModel');
const httpStatusText = require('../utils/httpStatusText');
const asyncWrapper = require('../middlewares/asyncWrapper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const login = asyncWrapper(
    async(req, res, next) => {
        const {userName, password} = req.body;

        if(!userName || !password){
            const error = new AppError('All fields are required', 401, httpStatusText.ERROR);
            return next(error);
        }

        const user = await User.findOne({userName});

        if(!user){
            const error = new AppError('something is wrong', 401, httpStatusText.ERROR);
            return next(error);
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword){
            const error = new AppError('something is wrong', 401, httpStatusText.ERROR);
            return next(error);
        }

        if(user && matchPassword){
            const token = await jwt.sign({userName, id:user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'});
            user.token = token;
            res.status(200).json({status: httpStatusText.SUCCESS, data: {token}});
        }
    }
)

module.exports = {
    login,
}